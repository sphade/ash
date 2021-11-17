import React, { Fragment } from "react";
import { Header as Title } from "../Overview/Revenue";
import styled from "styled-components";
import { InputField, Button } from "../../../Reuseable";

const Home = () => {
  const [show, setShow] = React.useState({
    change_password: false,
  });
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
            <Form>
              <p>Change Password</p>
              <div className="group">
                <div className="input_field_wrapper">
                  <h6 className="label">Old Password</h6>
                  <InputField
                    // inputType="password"
                    placeholder="Enter Old Password"
                  />
                </div>
                <div className="input_field_wrapper">
                  <p>New Password</p>
                  <InputField
                    // inputType="password"
                    placeholder="Enter New Password"
                  />
                </div>
              </div>
              <Button full="quarter" info text="Create Password" />
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
