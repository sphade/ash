import React from "react";
import styled from "styled-components";
import { FaChevronDown } from "react-icons/fa";

export const PreliminaryAccordion = (props) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Container>
      <div className="header">
        <div className="text">
          <div className="title">PRELIMINARY FORM</div>
        </div>
        <FaChevronDown className="icon" onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <div className="body">
          <div className="text-group">
            <div className="title">Fullname</div>
            <div className="value">{props.fullname || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Date of Birth</div>
            <div className="value">{props.dateOfBirth || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Sex</div>
            <div className="value">{props.sex || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Height</div>
            <div className="value">{props.height || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Weight</div>
            <div className="value">{props.weight || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Marital Status</div>
            <div className="value">{props.maritalStatus || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Genotype</div>
            <div className="value">{props.genotype || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Blood Group</div>
            <div className="value">{props.bloodGroup || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Allergies</div>
            <div className="value">{props.allergies || "------"}</div>
          </div>
          <div className="text-group">
            <div className="title">Pre-existing Conditions</div>
            <div className="value">
              {props.preExistingConditions || "------"}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export const ConsultationAccordion = (props) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Container>
      <div className="header">
        <div className="text">
          <div className="title">Consultations</div>
          <div className="date">
            {new Date(props?.startDate).toLocaleDateString()}
          </div>
        </div>
        <FaChevronDown className="icon" onClick={() => setToggle(!toggle)} />
      </div>
      {toggle && (
        <div className="body">
          <div className="text-group">
            <div className="title">Patient Name</div>
            <div className="value">{props?.patientName}</div>
          </div>
          <div className="text-group">
            <div className="title">Doctor's Name</div>
            <div className="value">{props?.doctor?.firstName}</div>
          </div>
          <div className="text-group">
            <div className="title">Diagnosis</div>
            <div className="value">{props?.note?.diagnosis}</div>
          </div>
          <div className="text-group">
            <div className="title">Doctor's Commmment</div>
            <div className="value">{props?.note?.conclusion}</div>
          </div>
          <div className="text-group">
            <div className="title">Prescription</div>
            <div className="value">
              {props?.prescription.map(({ name, dosage }, index) => (
                <h5 key={index} style={{ fontSize: "14px" }}>
                  <p style={{ fontWeight: "600" }}>
                    <strong>Name</strong> : {name}
                  </p>
                  <p style={{ fontWeight: "600" }}>
                    <strong>Dosage</strong>: {dosage}
                  </p>
                </h5>
              ))}
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  box-sizing: border-box;
  margin-bottom: 20px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 48px;
    padding: 0 20px;
    background: #f4f4f4;

    .text {
      display: flex;
      gap: 1.5rem;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;

      .title {
        color: #e20b8c;
        text-transform: uppercase;
      }

      .date {
        color: #666666;
      }
    }

    .icon {
      cursor: pointer;
      width: 10px;
      height: 10px;
    }
  }

  .body {
    padding: 20px;
    width: 100%;

    .text-group {
      display: flex;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;
      margin-bottom: 15px;

      .title {
        flex: 1;
        color: #999999;
      }

      .value {
        flex: 1;
        color: #333333;
      }
    }
  }
`;
