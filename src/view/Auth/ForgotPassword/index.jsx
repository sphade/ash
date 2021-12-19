import React from "react";
import {
  // useRouteMatch,
  Route,
} from "react-router-dom";
import bg from "../../../assets/images/background/forgotPassword.jpg";
import { AuthLayout } from "../../../layout";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Index = () => {
  //   const {
  //     params: { stage },
  //   } = useRouteMatch();
  return (
    <AuthLayout
      bgImage={bg}
      content={
        <>
          <Route path="/forgot-password/step-1">
            <Step1 />
          </Route>
          <Route path="/forgot-password/step-2">
            <Step2 />
          </Route>
          <Route path="/forgot-password/step-3">
            <Step3 />
          </Route>
          <Route path="/forgot-password/step-4">
            <Step4 />
          </Route>
        </>
      }
    />
  );
};

export default Index;
