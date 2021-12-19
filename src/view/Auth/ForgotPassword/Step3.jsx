import React, { Fragment, useState } from "react";
import { BackButton } from "../../../layout/AuthLayout";
import { InputField, Button } from "../../../Reuseable";
import fpIcon2 from "../../../assets/images/background/resetPassword.svg";
import { useHistory } from "react-router";

const Step3 = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 3000));
    history.push("/login");
  };
  return (
    <Fragment>
      <BackButton onClick={() => history.goBack()} />
      <form style={{ textAlign: "center", alignItems: "center" }}>
        <img className="img" src={fpIcon2} alt="" />
        <h3>Reset Your Password</h3>
        <h4>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        </h4>
        <div className="group">
          <InputField inputType="password" placeholder="New Password" />
          <InputField inputType="password" placeholder="Confirm Password" />
        </div>
        <Button
          full
          primary
          loading={loading}
          text="Proceed To Login"
          onClick={handleSubmit}
        />
      </form>
    </Fragment>
  );
};

export default Step3;
