/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import bg from '../../../assets/images/background/login.jpg';
import { InputField, Button } from '../../../Reuseable';
import { isEmail } from '../../../helpers/formValidator';
import { AuthLayout } from '../../../layout';
import { CancelButton } from '../../../layout/AuthLayout';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../../redux/sagas/auth/login';
import {
  registerSelector,
  clearState,
} from '../../../redux/reducers/auth/register';

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem('token');
  React.useEffect(() => {
    dispatch(clearState());
  }, []);
  // Variables & States
  const { authenticating, authenticated, errors, isError } =
    useSelector(registerSelector);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  // Functions
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    const { email, password } = user;
    if (isEmail(email) && password) {
      dispatch(loginUser(user));
    }
  };

  if (authenticated && token !== null) {
    console.log(token);
    history.push('/dashboard');
  }

  return (
    <AuthLayout
      bgImage={bg}
      content={
        <>
          <a href='https://www.ashbiomedical.com/'>
            <CancelButton />
          </a>
          <form onSubmit={handleSubmit}>
            <h3>Register Admin</h3>
            <h4>
              Welcome,
              <br /> Add an admin?
            </h4>
            <div className='input_field_wrapper'>
              <h6 className='label'>First Name</h6>
              <InputField
                fieldname='firstName'
                onTextChange={handleChange}
                value={user.firstName}
                placeholder='First Name'
              />
              {submitted && !user.firstName && (
                <p className='error-msg'>Firstname field cannot be blank</p>
              )}
            </div>
            <div className='input_field_wrapper'>
              <h6 className='label'>Last Name</h6>
              <InputField
                fieldname='lastName'
                onTextChange={handleChange}
                value={user.lastName}
                placeholder='Last Name'
              />
              {submitted && !user.lastName && (
                <p className='error-msg'>lastname field cannot be blank</p>
              )}
            </div>
            <div className='input_field_wrapper'>
              <h6 className='label'>Email Address</h6>
              <InputField
                fieldname='email'
                onTextChange={handleChange}
                value={user.email}
                placeholder='Email'
              />
              {submitted && !user.email && (
                <p className='error-msg'>Email field cannot be blank</p>
              )}
              {submitted && user.email && !isEmail(user.email) && (
                <p className='error-msg'>Invalid email address</p>
              )}
            </div>
            <div className='input_field_wrapper'>
              <h6 className='label'>Password</h6>
              <InputField
                fieldname='password'
                onTextChange={handleChange}
                inputType='password'
                placeholder='Password'
              />
              {submitted && !user.password && (
                <p className='error-msg'>Password field cannot be blank</p>
              )}
              {isError &&
                errors &&
                errors.map((item, index) => {
                  return (
                    <p key={index} className='error-msg'>
                      {item.Credentials || item.email || item.message || item}
                    </p>
                  );
                })}
            </div>
            <Button loading={authenticating} primary full text='REGISTER' />
          </form>
        </>
      }
    />
  );
};

export default Index;
