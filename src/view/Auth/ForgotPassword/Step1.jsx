import React, { Fragment, useState } from 'react';
import { BackButton } from '../../../layout/AuthLayout';
import { InputField, Button } from '../../../Reuseable';
import fpIcon from '../../../assets/images/background/fpImage.svg';
import { useHistory } from 'react-router-dom';
import { isEmail } from '../../../helpers/formValidator';
import {
  clearState,
  forgotPasswordSelector,
} from '../../../redux/reducers/auth/forgotPassword';
import { getResetCode } from '../../../redux/sagas/auth/forgotPassword';
import { useSelector, useDispatch } from 'react-redux';

const Step1 = () => {
  const { loading, isAdminEmail, errors, isError } = useSelector(
    forgotPasswordSelector
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (isEmail(user.email)) {
      dispatch(getResetCode(user));
    }
  };
  const timeout = async () => {
    await new Promise((res) => setTimeout(res, 3000));
  };
  if (isAdminEmail) {
    timeout();
    history.push('/forgot-password/step-2');
    dispatch(clearState());
  }
  return (
    <Fragment>
      <BackButton onClick={() => history.goBack()} />
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: 'center', alignItems: 'center' }}
      >
        <img className='img' src={fpIcon} alt='' />
        <h3>Forgot Your Password</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        </h4>
        <div style={{ width: '100%' }}>
          <InputField
            fieldname='email'
            onTextChange={handleChange}
            placeholder='Email'
            value={user.email}
          />
          {isAdminEmail && (
            <p className='success'>
              A 4-digit verification code has been sent to your email!
            </p>
          )}
          {isError &&
            errors &&
            errors.map((error, index) => {
              const { user, email, message, server } = error;
              return (
                <p key={index} className='error-msg'>
                  {user || email || message || server}
                </p>
              );
            })}
          {submitted && !user.email && (
            <p className='error-msg'>Email field cannot be blank!</p>
          )}
          {submitted && user.email && !isEmail(user.email) && (
            <p className='error-msg'>Invalid Email Address!</p>
          )}
          <br />
          <Button loading={loading} full primary text='SEND' />
        </div>
      </form>
    </Fragment>
  );
};

export default Step1;
