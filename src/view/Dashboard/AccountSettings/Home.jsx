import React, { Fragment } from 'react';
import { Header as Title } from '../Overview/Revenue';
import styled from 'styled-components';
import { InputField, Button } from '../../../Reuseable';
import { manageSelector } from '../../../redux/reducers/auth/manage';
import { useDispatch, useSelector } from 'react-redux';
import { changeAdminPassword } from '../../../redux/sagas/auth/manage';
import { rem } from 'polished';

const Home = () => {
  const dispatch = useDispatch();
  const {
    changePasswordLoading,
    changePasswordSuccess,
    changePasswordError,
    changePasswordErrors,
  } = useSelector(manageSelector);
  const [show, setShow] = React.useState({
    change_password: false,
  });
  const [passcode, setPasscode] = React.useState({
    oldPassword: '',
    newPassword: '',
    submitted: false,
  });

  const { newPassword, oldPassword, submitted } = passcode;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasscode((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasscode((user) => ({ ...user, submitted: true }));
    if (newPassword && oldPassword) {
      dispatch(changeAdminPassword(passcode));
    }
  };
  
  return (
    <Fragment>
      <Title>
        <h6>Account Settings</h6>
      </Title>
      <Container>
        <TabsWrapper>
          <Tabs
            onClick={() =>
              setShow((prevState) => ({
                ...prevState,
                change_password: !show.change_password,
              }))
            }
          >
            Change Password
          </Tabs>
        </TabsWrapper>
        <ContentWrapper>
          {show.change_password && (
            <Form onSubmit={handleSubmit}>
              <p>Change Password</p>
              <div className='group'>
                <div className='input_field_wrapper'>
                  <h6 className='label'>Old Password</h6>
                  <InputField
                    onTextChange={handleChange}
                    value={passcode.oldPassword}
                    inputType='password'
                    placeholder='Enter Old Password'
                    fieldname='oldPassword'
                  />
                  {submitted && !passcode.oldPassword && (
                    <p className='error-msg'>Field is requied</p>
                  )}
                </div>
                <div className='input_field_wrapper'>
                  <p>New Password</p>
                  <InputField
                    onTextChange={handleChange}
                    value={passcode.newPassword}
                    inputType='password'
                    placeholder='Enter New Password'
                    fieldname='newPassword'
                  />
                  {submitted && !passcode.newPassword && (
                    <p className='error-msg'>Field is requied</p>
                  )}
                </div>
              </div>
              {changePasswordError &&
                changePasswordErrors &&
                changePasswordErrors.map((item) => {
                  return (
                    <p className='error-msg'>
                      {item.Credentials || item.email || item.message || item}
                    </p>
                  );
                })}
              {changePasswordSuccess && (
                <>
                  <p className='success'>Password updated successfully!</p>
                  <br />
                </>
              )}
              <Button
                loading={changePasswordLoading}
                full='quarter'
                info
                text='Create Password'
              />
            </Form>
          )}
        </ContentWrapper>
      </Container>
    </Fragment>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  column-gap: 0.5rem;

  p.error-msg {
    text-align: left !important;
    margin: 0 !important;
    padding: 0 !important;
    // margin-top: 0.5em;
    font-size: ${rem('13px')};
    letter-spacing: ${rem('0.13px')};
    color: #ff5e5e;
    opacity: 1;
  }

  p.success {
    text-align: left !important;
    margin: 0px;
    padding: 0;
    // margin-top: 0.5em;
    font-size: ${rem('13px')};
    font-weight: bold;
    letter-spacing: ${rem('0.13px')};
    color: green;
    opacity: 1;
  }
`;
const TabsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 5;
  // flex-direction: column;
`;

const Tabs = styled.div`
  height: 50px;
  border-left: 5px solid #455afe;
  background: #fff;
  display: flex;
  padding: 0 2rem;
  align-items: center;
  font-weight: 600;
  cursor: pointer;
`;

const Form = styled.form`
  width: 600px;
  //   height: 366px;
  padding: 2rem;
  background: #fff;
  //   align-items: center;

  p {
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #666666;
  }

  .group {
    display: flex;
    column-gap: 1rem;
    margin: 1.5em 0 1em;

    .input_field_wrapper {
      .label {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: #666666;
        margin-bottom: 0.3em;
      }
    }
  }
`;
