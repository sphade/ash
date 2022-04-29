/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import { Checkbox, message } from "antd";
import { Link } from "react-router-dom";
import bg from "../../../assets/images/background/login.jpg";
import { InputField, Button } from "../../../Reuseable";
import { isEmail } from "../../../helpers/formValidator";
import { AuthLayout } from "../../../layout";
import { CancelButton } from "../../../layout/AuthLayout";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/sagas/auth/login";
import { loginSelector, clearState } from "../../../redux/reducers/auth/login";
import { useMutation } from "react-query";
import { loginIn } from "../../../api/adminApi";

const Index = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const token = sessionStorage.getItem("token");
  React.useEffect(() => {
    dispatch(clearState());
  }, []);
  // Variables & States
  // const { authenticating, authenticated, errors, isError } =
  //   useSelector(loginSelector);
  const [submitted, setSubmitted] = useState(false);
  const [user, setUser] = useState({
    email: "abfatahi.iaf@gmail.com",
    password: "Forloop70!",
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
      // dispatch(loginUser(user));
      mutate(user, {
        onSuccess: (data) => {
          sessionStorage.setItem("token", data.data.token);
          sessionStorage.setItem("tab", "Overview");
          sessionStorage.setItem("user", JSON.stringify(data.data.user));
        },
      });
    }
  };
  const { mutate, isLoading, isError, error } = useMutation(
    (user) => loginIn(user),
    {
      onSuccess: (data) => {
        message.success("you have successfully LogedIn");
      },
      onError: (err) => {
        message.error(err.message);
      },
    }
  );
  if (token !== null) {
    history.push("/dashboard");
  }

  return (
    <AuthLayout
      bgImage={bg}
      content={
        <>
          <a href="https://www.ashbiomedical.com/">
            <CancelButton />
          </a>
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <h4>
              Welcome, <br /> how are you feeling today?
            </h4>
            <div className="input_field_wrapper">
              <h6 className="label">Email Address</h6>
              <InputField
                fieldname="email"
                onTextChange={handleChange}
                value={user.email}
                placeholder="Email"
              />
              {submitted && !user.email && (
                <p className="error-msg">Email field cannot be blank</p>
              )}
              {submitted && user.email && !isEmail(user.email) && (
                <p className="error-msg">Invalid email address</p>
              )}
            </div>
            <div className="input_field_wrapper">
              <h6 className="label">Password</h6>
              <InputField
                fieldname="password"
                onTextChange={handleChange}
                inputType="password"
                placeholder="Password"
              />
              {submitted && !user.password && (
                <p className="error-msg">Password field cannot be blank</p>
              )}
              {isError && (
                <p className="error-msg">
                  {error.message ===
                  ("Request failed with status code 401" ||
                    "Request failed with status code 400")
                    ? "password or Email is incorrect, check it and try again"
                    : error.message === "Network Error"
                    ? "there was an error establishing a connection, please try again"
                    : error.message}
                </p>
              )}
            </div>
            <div className="others_wrapper">
              <Checkbox style={{ cursor: "pointer" }}>
                &nbsp;&nbsp;&nbsp;Remember me
              </Checkbox>
              <Link
                to="/forgot-password/step-1"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                forgot password?
              </Link>
            </div>
            <Button loading={isLoading} primary full text="LOGIN" />
          </form>
        </>
      }
    />
  );
};

export default Index;
