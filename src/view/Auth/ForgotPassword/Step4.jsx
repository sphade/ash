import React, { Fragment, useState } from 'react';
import { Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { CancelButton } from '../../../layout/AuthLayout';
import { InputField, Button } from '../../../Reuseable';
import { isEmail } from '../../../helpers/formValidator';

const Step4 = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();

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
      setLoading(true);
      sessionStorage.setItem('isAuthorised', true);
      await new Promise((res) => setTimeout(res, 3000));
      history.push('/');
    }
  };

  return (
    <Fragment>
      <a href='https://www.ashbiomedical.com/'>
        <CancelButton />
      </a>
      <form onSubmit={handleSubmit}>
        <h3>Welcome Back</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        </h4>
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
        </div>
        <div className='others_wrapper'>
          <Checkbox style={{ cursor: 'pointer' }}>
            &nbsp;&nbsp;&nbsp;Remember me
          </Checkbox>
          <Link
            to='/forgot-password/step-1'
            style={{ textDecoration: 'none', color: '#333333' }}
          >
            forgot password?
          </Link>
        </div>
        <Button loading={loading} primary full text='LOGIN' />
      </form>
    </Fragment>
  );
};

export default Step4;
