import React from "react";
import styled from "styled-components";
import { ReactComponent as ViewIcon } from "../../assets/images/icons/monitor_card_back.svg";
import {
  // UserMonitorModal,
  // PatientInfoModal,
  ConsultationInfoModal,
  // DoctorInfoModal
} from "../../view/Dashboard/Overview/Modals";

const Index = ({ id, code, start_date, end_date, description, usage }) => {
  const [show, setShow] = React.useState(false);
  return (
    <Container id={id}>
      <ConsultationInfoModal show={show} handleClose={() => setShow(false)} />
      <div className="row1">
        <h4>{code}</h4>
        <ViewPromotion onClick={() => setShow(true)} />
      </div>
      <div className="box">
        <div className="group">
          <div>
            <p>Start Date</p>
            <h6>{start_date}</h6>
          </div>
          <div>
            <p>End Date</p>
            <h6>{end_date}</h6>
          </div>
        </div>
        <p>Description</p>
        <h6>{description}</h6>
        <p>Usage</p>
        <h6>{usage}</h6>
      </div>
    </Container>
  );
};

export default Index;

const ViewPromotion = styled(ViewIcon)`
  cursor: pointer;
  width: 2.5em;
  height: 2.5em;

  :hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  width: 350px;
  min-width:350px;
  height: 260px;
  background: #ffffff;
  border-radius: 10px;
  padding:1rem 1.5rem;

  .box{
      margin-top:1rem;
    height:180px;
    min-height:112px
    width:100%;
    padding:0.5rem 1.5rem;
    background: #F4F4F4;
    border-radius: 10px;
    line-height: 16px;
    letter-spacing: 0.0025em;
    margin: 0.5em 0;
    font-size: 0.9em;
    
    p{
      margin:0 0 0.3em;
      color: #666666;
      padding:0;
        font-style: normal;
font-weight: normal;
    }

    h6{
      color: #666666;

        font-weight: bold;
        font-size:0.8rem;
    }

    .group {
        display: flex;
        align-items:center;
        justify-content:space-between;

        span{
            font-weight: bold;
            color: #E20B8C;
        }
    }
}

  .row1 {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .group {
      display: flex;
      align-items:center;
      column-gap:1rem;
    }

    h4 {
      font-weight: bold;
      font-size: 1.2rem;
      line-height: 23px;
      letter-spacing: 0.0015em;
      color: #666666;
    }
  }

  
`;
