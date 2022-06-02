import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { BackButton } from '../../../layout/AuthLayout';
import { Button, OTPInputField } from '../../../Reuseable';
import fpIcon1 from '../../../assets/images/background/fpImage2.svg';
import { useHistory } from 'react-router';
import { inputFocus } from '../../../helpers/numberValidator';
import Countdown from 'react-countdown';
import {
  // clearState,
  forgotPasswordSelector,
} from '../../../redux/reducers/auth/forgotPassword';
import {
  // getResetCode,
  verifyResetCode,
} from '../../../redux/sagas/auth/forgotPassword';
import { useSelector, useDispatch } from 'react-redux';

const Step2 = () => {
  // State Variables
  const { loading, isResetCode, errors, isError } = useSelector(
    forgotPasswordSelector
  );
  const dispatch = useDispatch();
  const history = useHistory();
  const [invalidOTP, setInvalidOTP] = useState(false);
  // const [expired, setExpired] = useState(+new Date());
  const [otp, setOtp] = useState({
    value1: '',
    value2: '',
    value3: '',
    value4: '',
  });
  const { value1, value2, value3, value4 } = otp;
  let OtpCode = value1 + value2 + value3 + value4;
  // Functions
  const renderer = ({ minutes, seconds, completed }) => {
    if (completed)
      return (
        <p className='expired'>
          OTP has expired! <br />{' '}
          <span>Click the resend button to get a new OTP Code. </span>
        </p>
      );
    return (
      <p>
        {minutes}:{seconds}s
      </p>
    );
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp((otp) => ({ ...otp, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (OtpCode.length < 4 || 0) {
      setInvalidOTP(true);
    } else {
      setInvalidOTP(false);
      dispatch(verifyResetCode(OtpCode));
      // await new Promise((res) => setTimeout(res, 3000));
      // history.push("/forgot-password/step-3");
    }
  };

  if (isResetCode) {
    history.push('/forgot-password/step-3');
    // <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <BackButton onClick={() => history.goBack()} />
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: 'center', alignItems: 'center' }}
      >
        <img className='img' src={fpIcon1} alt='' />
        <h3>Insert Your Code</h3>
        <h4>
        Kindly enter the 4-digit code  <br /> sent to your email address.
        </h4>
        {invalidOTP && (
          <p className='error-msg'>Invalid OTP! OTP code must be 4 digits.</p>
        )}
        <CodeWrapper>
          <div className='code_wrapper'>
            <OTPInputField
              fieldname='value1'
              tabIndexValue='1'
              valueName={otp.value1}
              onTextChange={handleChange}
              onChangeKeyUp={(e) => inputFocus(e)}
            />
            <OTPInputField
              fieldname='value2'
              tabIndexValue='2'
              valueName={otp.value2}
              onTextChange={handleChange}
              onChangeKeyUp={(e) => inputFocus(e)}
            />
            <OTPInputField
              fieldname='value3'
              tabIndexValue='3'
              valueName={otp.value3}
              onTextChange={handleChange}
              onChangeKeyUp={(e) => inputFocus(e)}
            />
            <OTPInputField
              fieldname='value4'
              tabIndexValue='4'
              valueName={otp.value4}
              onTextChange={handleChange}
              onChangeKeyUp={(e) => inputFocus(e)}
            />
          </div>
          <Countdown date={Date.now() + 300000} renderer={renderer} />
          {
            isError &&
            errors &&
            errors.map((error, index) => {
              const { user, email, message, server } = error;
              return (
                <p key={index} style={{ textAlign: 'center' }} className='error-msg'>
                  {user || email || message || server || 'Invalid Token'}
                </p>
              );
            })
          }
        </CodeWrapper>
        <ButtonWrapper>
          <Button
            loading={loading}
            primary
            text='NEXT'
            disabled={OtpCode.length === 4 ? false : true}
          />
          <Button type='button' secondary text='RESEND CODE' />
        </ButtonWrapper>
      </form>
    </Fragment>
  );
};

export default Step2;

const CodeWrapper = styled.div`
  width: 80%;
  p {
    margin-top: 1em;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 23px;
    text-align: right;
    letter-spacing: 0.2em;
    color: #999999;
  }
  .expired {
    margin-top: 1em;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.2em;
    color: #e20b8c;

    span {
      color: #333333;
      font-size: 0.9rem !important;
      letter-spacing: 0;
    }
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-item: center;
  }
`;

const ButtonWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  column-gap: 1em;
`;
