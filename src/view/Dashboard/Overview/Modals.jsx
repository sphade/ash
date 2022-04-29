import React from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { ReactComponent as Close } from "../../../assets/images/icons/cancel.svg";
import dummy_avatar from "../../../assets/images/icons/dummy_avatar.png";
import star from "../../../assets/images/icons/star.svg";
import starOutline from "../../../assets/images/icons/star-outline.svg";
import successIcon from "../../../assets/images/icons/empty-image.png";

import {
  ConsultationAccordion,
  PreliminaryAccordion,
} from "../../../components/Overview/Accordion";
// import { consultationData, patientData } from "../../../table/patients";
import {
  handleToggleModal,
  patientsSelector,
} from "../../../redux/reducers/dashboard/patients";
import { useDispatch, useSelector } from "react-redux";
import { PatientReview } from "../../../components/Overview";
import {
  doctorsSelector,
  handleToggleModal as handleToggleDoctorModal,
} from "../../../redux/reducers/dashboard/doctors";
import {
  consultationsSelector,
  handleToggleModal as handleToggleConsultationModal,
} from "../../../redux/reducers/dashboard/consultations";

export const UserMonitorModal = (props) => {
  const selectedUser = JSON.parse(sessionStorage.getItem("requestMonitorUser"));

  return (
    <Modal
      visible={props.show}
      width={565}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={props.handleClose} />
      {selectedUser && (
        <Container>
          <div className="header_info">
            <img src={selectedUser.avatar || dummy_avatar} alt="" />
            <div className="group">
              <h2>
                {selectedUser.firstName || null} {selectedUser.lastName || null}
              </h2>
              <h4 style={{ textTransform: "capitalize", marginTop: "10px" }}>
                {selectedUser.role}
              </h4>
            </div>
          </div>
          <div className="content">
            <div className="group">
              <h4>Phone Number</h4>
              <h5>{selectedUser.phoneNumber}</h5>
            </div>
            <div className="group">
              <h4>Email</h4>
              <h5>{selectedUser.email}</h5>
            </div>
            <div className="group">
              <h4>Sign Up Date</h4>
              <h5>
                {selectedUser &&
                  new Date(selectedUser.createdAt).toLocaleTimeString()}
              </h5>
            </div>
            <div className="group">
              <h4>Time</h4>
              <h5>
                {selectedUser &&
                  new Date(selectedUser.createdAt).toLocaleDateString()}
              </h5>
            </div>
            <div className="group">
              <h4>Location</h4>
              <h5>{selectedUser && selectedUser.location}</h5>
            </div>
            <div className="group">
              <h4>Activity Status</h4>
              <h5 className="active">
                {selectedUser.active === true ? "active" : "inactive"}
              </h5>
            </div>
          </div>
        </Container>
      )}
    </Modal>
  );
};

export const PatientInfoModal = () => {
  const dispatch = useDispatch();
  const { patientModal } = useSelector(patientsSelector);
  const patient = JSON.parse(sessionStorage.getItem("selectedPatient"));

  const patientData = {
    fullname: patient?.firstName + " " + patient?.lastName,
    dateOfBirth: patient?.profile.dateOfBirth,
    sex: patient?.profile.gender,
    height: patient?.profile.height,
    weight: patient?.profile.weight,
    maritalStatus: patient?.profile.maritalStatus,
    genotype: patient?.profile.genotype,
    bloodGroup: patient?.profile.bloodGroup,
    allergies: patient?.profile.allergies,
    preExistingConditions: patient?.profile.chronicIllnesses,
  };

  // const consultationData = {
  //   date: "25/01/2022",
  //   patientName: "Ooklie Chris",
  //   doctorName: "Dr John Doe",
  //   diagnosis:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.",
  //   comment:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.",
  //   prescription:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla adipiscing placerat auctor eu quisque.",
  // };

  return (
    <Modal
      visible={patientModal}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={() => dispatch(handleToggleModal())} />
      <Container subscription="Premium">
        <div className="header_info">
          <img src={patient?.avatar || dummy_avatar} alt="" />
          <div className="group">
            <h2>
              {patient && patient.firstName}&nbsp;
              {patient && patient.lastName}
            </h2>
            <h4 style={{ marginTop: "10px" }}>Patient</h4>
          </div>
        </div>
        <div className="content">
          <div className="group">
            <h4>Phone Number</h4>
            <h5>{patient && patient.phoneNumber}</h5>
          </div>
          <div className="group">
            <h4>Email</h4>
            <h5>{patient && patient.email}</h5>
          </div>
          <div className="group">
            <h4>Sign Up Date</h4>
            <h5>
              {patient &&
                new Date(patient.profile.createdAt).toLocaleDateString()}
            </h5>
          </div>
          <div className="group">
            <h4>Visits</h4>
            <h5>{patient && patient.loginCount}</h5>
          </div>
          <div className="group">
            <h4>Subscription</h4>
            <h5
              style={{
                color:
                  patient?.plan === "Premium Plan"
                    ? "#FA0E9B"
                    : patient.plan === "Basic Plan"
                    ? "#19B729"
                    : patient.plan === "Premium Family Plan"
                    ? "#455AFE"
                    : patient.plan === "Basic Family Plan"
                    ? "#455AFE"
                    : "",
                background:
                  patient.plan === "Premium Plan"
                    ? "rgba(250, 14, 155, 0.05)"
                    : patient.plan === "Basic Plan"
                    ? "rgba(25, 183, 41, 0.1)"
                    : patient.plan === "Premium Family Plan"
                    ? "rgba(69, 90, 254, 0.05)"
                    : patient.plan === "Basic Family Plan"
                    ? "rgba(69, 90, 254, 0.05)"
                    : "",
              }}
            >
              {patient && patient.plan}
            </h5>
          </div>
          <div className="group">
            <h4>Requests</h4>
            <h5>{patient && patient.appointments.length}</h5>
          </div>
        </div>
        <hr style={{ height: "0.1px", margin: "1.5em 0" }} />
        <PreliminaryAccordion {...patientData} />
        {patient &&
          patient.appointments.map((consultationData, index) => (
            <ConsultationAccordion {...consultationData} key={index} />
          ))}
      </Container>
    </Modal>
  );
};

export const DoctorInfoModal = () => {
  const dispatch = useDispatch();
  const { doctorModal } = useSelector(doctorsSelector);
  const doctor = JSON.parse(sessionStorage.getItem("selectedDoctor"));
  console.log(
    "🚀 ~ file: Modals.jsx ~ line 189 ~ DoctorInfoModal ~ doctor",
    doctor
  );
  return (
    <Modal
      visible={doctorModal}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={() => dispatch(handleToggleDoctorModal())} />
      {doctor ? (
        <Container subscription="Premium">
          <div className="header_info">
            <img src={doctor?.avatar || dummy_avatar} alt="" />
            <div className="group">
              <h2>
                Dr&nbsp;
                {doctor && doctor.firstName}&nbsp;
                {doctor && doctor.lastName}
              </h2>
              <h4 style={{ marginTop: "10px" }}>Doctor</h4>
            </div>
          </div>
          <div className="content">
            <div className="group">
              <h4>Phone Number</h4>
              <h5>{doctor && doctor.phoneNumber}</h5>
            </div>
            <div className="group">
              <h4>Email</h4>
              <h5>{doctor && doctor.email}</h5>
            </div>
            <div className="group">
              <h4>Sign Up Date</h4>
              <h5>
                {doctor && new Date(doctor.createdAt).toLocaleDateString()}
              </h5>
            </div>
            <div className="group">
              <h4>Consultations</h4>
              <h5>{doctor && doctor.appointmentCount}</h5>
            </div>
            <div className="group">
              <h4>Rating</h4>
              <div className="rating-group">
                {Array.from({ length: doctor.avgRating }, (index) => {
                  return <img key={index} src={star} alt="" />;
                })}
                {Array.from(
                  { length: parseInt(5 - doctor.avgRating) },
                  (index) => {
                    return <img key={index} src={starOutline} alt="" />;
                  }
                )}
              </div>
            </div>
            <div className="group">
              <h4>Availability</h4>
              <div>
                {doctor &&
                  doctor.availableDates.map(({ startDate, endDate }, index) => (
                    <div key={index}>
                      <span>{new Date(startDate).toLocaleString()}</span> -{" "}
                      <span>{new Date(endDate).toLocaleTimeString()}</span>
                    </div>
                  ))}
              </div>
            </div>
            <div className="group">
              <h4>Verification Status</h4>
              <h5>
                {doctor && doctor.isVerified === "accepted" ? (
                  <div className="verified">Verified</div>
                ) : doctor.isVerified === "pending" ? (
                  <div className="pending">Pending</div>
                ) : doctor.isVerified === "rejected" ? (
                  <div className="rejected">Rejected</div>
                ) : (
                  ""
                )}
              </h5>
            </div>
          </div>
          <hr style={{ height: "0.1px", margin: "1.5em 0" }} />
          <h4>Patient Review</h4>

          {doctor.ratings.length === 0 ? (
            <center>
              <img src={successIcon} alt="" />
              <p>There are no patient review for this doctor</p>
            </center>
          ) : (
            <>
              {doctor.ratings.map((rating, index) => {
                return <PatientReview key={index} rating={rating} />;
              })}
            </>
          )}
        </Container>
      ) : (
        ""
      )}
    </Modal>
  );
};

export const ConsultationInfoModal = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const { consultationModal } = useSelector(consultationsSelector);
  const consultation = JSON.parse(
    sessionStorage.getItem("selectedConsultation")
  );
  return (
    <Modal
      visible={consultationModal}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={() => dispatch(handleToggleConsultationModal())} />
      <Container subscription="Premium">
        <div className="header_info">
          <img
            src={(consultation && consultation.patient.avatar) || dummy_avatar}
            alt=""
          />
          <div className="group">
            <h2>
              {consultation && (
                <>
                  {consultation.patient.firstName} &nbsp;
                  {consultation.patient.lastName}
                </>
              )}
            </h2>
            <h4 style={{ marginTop: "10px" }}>Patient</h4>
          </div>
        </div>
        <div className="content">
          <div className="group">
            <h4>Phone Number</h4>
            <h5>{consultation && consultation.patient.phoneNumber}</h5>
          </div>
          <div className="group">
            <h4>Email</h4>
            <h5>{consultation && consultation.patient.email}</h5>
          </div>
          <div className="group">
            <h4>Date</h4>
            <h5>
              {consultation &&
                new Date(consultation.createdAt).toLocaleDateString()}
            </h5>
          </div>
          <div className="group">
            <h4>Time</h4>
            <h5>
              {consultation &&
                new Date(consultation.createdAt).toLocaleTimeString()}
            </h5>
          </div>
          <div className="group">
            <h4>Doctor Type</h4>
            <h5>
              {consultation &&
                consultation?.doctor?.specializations.map((item) => {
                  return item.title;
                })}
            </h5>
          </div>

          <div className="group">
            <h4>Status</h4>
            <h5 className="subscription">
              {consultation && consultation.status}
            </h5>
          </div>
        </div>
        <hr style={{ height: "0.1px", margin: "1.5em 0" }} />
        {/* <h4>Patient Review</h4> */}
        <div className="content">
          <div className="group">
            <h4>Doctor's Name</h4>
            <div className="info-group">
              <img
                src={
                  (consultation && consultation?.doctor?.avatar) || dummy_avatar
                }
                alt=""
              />
              <h5>
                {" "}
                {consultation && (
                  <>
                    Dr. &nbsp;
                    {consultation?.doctor?.firstName} &nbsp;
                    {consultation?.doctor?.lastName}
                  </>
                )}
              </h5>
            </div>
          </div>
          <div className="group">
            <h4>Duration</h4>
            <h5>30mins</h5>
          </div>
          <div className="group">
            <h4>Diagnosis</h4>
            <h5>{consultation && consultation?.note?.diagnosis}</h5>
          </div>
          <div className="group">
            <h4>Doctor's Comment</h4>
            <h5>{consultation && consultation?.note?.conclusion}</h5>
          </div>
          <div className="group">
            <h4>Prescription</h4>
            <h5>
              {consultation &&
                consultation?.prescription.map(({ name, dosage }) => (
                  <>
                    <h5>Drug: {name}</h5>
                    <h5>Dosage: {dosage}</h5>
                  </>
                ))}
            </h5>
          </div>
        </div>
      </Container>
    </Modal>
  );
};

const Container = styled.div`
  padding: 3rem 2rem;
  .content {
    .subscription {
      text-transform: capitalize;
      text-align: left;
      letter-spacing: 0.004em;
      color: ${(props) =>
        props.subscription === "Premium"
          ? "#E20B8C !important"
          : props.subscription === "Standard"
          ? "#455AFE !important"
          : props.subscription === "Unlimited"
          ? "#19B729 !important"
          : ""};
    }

    .verified {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 5px 14px;
      background: rgba(25, 183, 41, 0.1);
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #19b729;
    }

    .pending {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 5px 14px;
      background: rgba(255, 173, 51, 0.1);
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #ffad33;
    }

    .rejected {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100px;
      padding: 5px 14px;
      background: rgba(255, 130, 130, 0.1);
      border-radius: 5px;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #ff8282;
    }

    .group {
      display: flex;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.0015em;
      font-size: 1rem;
      margin: 0.75em 0 0.75rem;

      .rating-group {
        display: flex;
        flex: 1;
        gap: 0.5em;
        img {
          width: 14px;
          height: 14px;
        }
      }

      .info-group {
        display: flex;
        align-items: center;
        flex: 1;
        img {
          width: 40px;
          height: 40px;
          margin-right: 1em;
          border-radius: 50%;
        }
      }

      .active {
        color: #455afe;
      }
      h4 {
        font-size: 1rem;
        flex: 0.5;
        margin: 0;
        padding: 0;
        color: #999999;
        margin-right: 2rem;
        text-transform: capitalize;
      }
      h5,
      span {
        flex: 1;
        margin: 0;
        padding: 0;
        color: #666666;
        font-size: 1rem;
        font-weight: 500;
      }
    }
  }
  .header_info {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 900;
    img {
      width: 72px;
      height: 72px;
      border-radius: 7.5px;
    }

    .group {
      margin-left: 2rem;
      h2 {
        margin: 0;
        padding: 0;
        font-size: 25px;
        line-height: 29px;
        color: #666666;
      }

      h4 {
        margin: 0;
        padding: 0;
        font-size: 20px;
        color: #e20b8c;
      }
    }
  }
`;

const CloseButton = styled(Close)`
  width: 24px;
  height: 24px;
  position: absolute;
  right: 2rem;
  top: 2rem;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;

// const PatientReview = styled.div`
//   display: flex;
//   gap: 2em;
//   align-items: flex-start;
//   width: 100%;
//   margin: 1em 0;
//   img {
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//   }

//   .group {
//     border-bottom: 1px solid #666;
//     padding-bottom: 1rem;
//     display: flex;
//     flex-direction: column;
//     row-gap: 0.5em;
//     .rating-group {
//       display: flex;
//       gap: 0.5em;
//       img {
//         width: 14px;
//         height: 14px;
//       }
//     }
//     h5 {
//       font-weight: bold;
//       font-size: 14px;
//       line-height: 16px;
//       letter-spacing: 0.001em;
//       color: #666666;
//       margin: 0;
//       padding: 0;
//     }
//     p {
//       margin: 0;
//       padding: 0;
//       font-size: 12px;
//       line-height: 14px;
//       letter-spacing: 0.004em;
//       color: #666666;
//     }
//   }
// `;
