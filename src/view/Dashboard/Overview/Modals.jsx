import React from 'react';
import styled from 'styled-components';
import { Modal, Collapse } from 'antd';
import { ReactComponent as Close } from '../../../assets/images/icons/cancel.svg';
import usmAvatar from '../../../assets/images/icons/usm_avatar.png';
import star from '../../../assets/images/icons/star.svg';
import starOutline from '../../../assets/images/icons/star-outline.svg';

const { Panel } = Collapse;

export const UserMonitorModal = (props) => {
  const selectedUser = JSON.parse(sessionStorage.getItem('requestMonitorUser'));
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
          <div className='header_info'>
            <img src={usmAvatar} alt='' />
            <div className='group'>
              <h2>
                {selectedUser.firstName || null} {selectedUser.lastName || null}
              </h2>
              <h4 style={{ textTransform: 'capitalize' }}>
                {selectedUser.role}
              </h4>
            </div>
          </div>
          <div className='content'>
            <div className='group'>
              <h4>Phone Number</h4>
              <h5>{selectedUser.phoneNumber}</h5>
            </div>
            <div className='group'>
              <h4>Email</h4>
              <h5>{selectedUser.email}</h5>
            </div>
            <div className='group'>
              <h4>Sign Up Date</h4>
              <h5>18th Oct. 2021</h5>
            </div>
            <div className='group'>
              <h4>Time</h4>
              <h5>15:24:35</h5>
            </div>
            <div className='group'>
              <h4>Location</h4>
              <h5>Lagos, NG</h5>
            </div>
            <div className='group'>
              <h4>Activity Status</h4>
              <h5 className='active'>Active</h5>
            </div>
          </div>
        </Container>
      )}
    </Modal>
  );
};

export const PatientInfoModal = ({ show, handleClose }) => {
  return (
    <Modal
      visible={show}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={handleClose} />
      <Container subscription='Premium'>
        <div className='header_info'>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h2>Amos Johnson</h2>
            <h4>Patient</h4>
          </div>
        </div>
        <div className='content'>
          <div className='group'>
            <h4>Phone Number</h4>
            <h5>+234 812 345 6789</h5>
          </div>
          <div className='group'>
            <h4>Email</h4>
            <h5>amosjohnson@gmail.com</h5>
          </div>
          <div className='group'>
            <h4>Sign Up Date</h4>
            <h5>18th Oct. 2021</h5>
          </div>
          <div className='group'>
            <h4>Visits</h4>
            <h5>235</h5>
          </div>
          <div className='group'>
            <h4>Subscription</h4>
            <h5 className='subscription'>Premium</h5>
          </div>
          <div className='group'>
            <h4>Requests</h4>
            <h5>31</h5>
          </div>
        </div>
        <hr style={{ height: '0.1px', margin: '1.5em 0' }} />
        <Collapse
          bordered={false}
          defaultActiveKey={['1']}
          className='site-collapse-custom-collapse'
          expandIconPosition={'right'}
        >
          <CustomPanel
            header='PRELIMINARY FORM'
            key='1'
            className='site-collapse-custom-panel'
          >
            <div className='content'>
              <h5>Fullname</h5>
              <p>Omole John</p>
            </div>
            <div className='content'>
              <h5>Date Of Birth</h5>
              <p>19/10/2020</p>
            </div>
            <div className='content'>
              <h5>Sex</h5>
              <p>Male</p>
            </div>
            <div className='content'>
              <h5>Height</h5>
              <p>6.10m</p>
            </div>
            <div className='content'>
              <h5>Allergies</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                nulla adipiscing placerat auctor eu quisque.
              </p>
            </div>
          </CustomPanel>
          <CustomPanel
            header='CONSULTATION'
            extra='20/12/2020'
            key='2'
            className='site-collapse-custom-panel'
          >
            <div className='content'>
              <h5>Fullname</h5>
              <p>Omole John</p>
            </div>
            <div className='content'>
              <h5>Date Of Birth</h5>
              <p>19/10/2020</p>
            </div>
            <div className='content'>
              <h5>Sex</h5>
              <p>Male</p>
            </div>
            <div className='content'>
              <h5>Height</h5>
              <p>6.10m</p>
            </div>
            <div className='content'>
              <h5>Allergies</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                nulla adipiscing placerat auctor eu quisque.
              </p>
            </div>
          </CustomPanel>
          <CustomPanel
            header='CONSULTATION'
            extra='20/12/2020'
            key='3'
            className='site-collapse-custom-panel'
          >
            <div className='content'>
              <h5>Fullname</h5>
              <p>Omole John</p>
            </div>
            <div className='content'>
              <h5>Date Of Birth</h5>
              <p>19/10/2020</p>
            </div>
            <div className='content'>
              <h5>Sex</h5>
              <p>Male</p>
            </div>
            <div className='content'>
              <h5>Height</h5>
              <p>6.10m</p>
            </div>
            <div className='content'>
              <h5>Allergies</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A,
                nulla adipiscing placerat auctor eu quisque.
              </p>
            </div>
          </CustomPanel>
        </Collapse>
        ,
      </Container>
    </Modal>
  );
};

export const DoctorInfoModal = ({ show, handleClose }) => {
  return (
    <Modal
      visible={show}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={handleClose} />
      <Container subscription='Premium'>
        <div className='header_info'>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h2>Dr Amos Johnson</h2>
            <h4>Doctor</h4>
          </div>
        </div>
        <div className='content'>
          <div className='group'>
            <h4>Phone Number</h4>
            <h5>+234 812 345 6789</h5>
          </div>
          <div className='group'>
            <h4>Email</h4>
            <h5>amosjohnson@gmail.com</h5>
          </div>
          <div className='group'>
            <h4>Sign Up Date</h4>
            <h5>18th Oct. 2021</h5>
          </div>
          <div className='group'>
            <h4>Consultations</h4>
            <h5>28</h5>
          </div>
          <div className='group'>
            <h4>Rating</h4>
            {/* <h5 className="subscription">Premium</h5> */}
          </div>
          <div className='group'>
            <h4>Availability</h4>
            <h5>Fri. September 10th, 2021 15:00 - 15:45</h5>
          </div>
          <div className='group'>
            <h4>Verification Status</h4>
            <h5>Fri. September 10th, 2021 15:00 - 15:45</h5>
          </div>
        </div>
        <hr style={{ height: '0.1px', margin: '1.5em 0' }} />
        <h4>Patient Review</h4>
        <PatientReview>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h5>Jenna Ikri</h5>
            <div className='rating-group'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={starOutline} alt='' />
              <img src={starOutline} alt='' />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              ultrices cursus ac scelerisque varius eget. Augue egestas ac, mi
              non ullamcorper aliquet. Congue condimentum morbi amet, lorem
              ornare.
            </p>
          </div>
        </PatientReview>
        <PatientReview>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h5>Jenna Ikri</h5>
            <div className='rating-group'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={starOutline} alt='' />
              <img src={starOutline} alt='' />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              ultrices cursus ac scelerisque varius eget. Augue egestas ac, mi
              non ullamcorper aliquet. Congue condimentum morbi amet, lorem
              ornare.
            </p>
          </div>
        </PatientReview>
        <PatientReview>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h5>Jenna Ikri</h5>
            <div className='rating-group'>
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={star} alt='' />
              <img src={starOutline} alt='' />
              <img src={starOutline} alt='' />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet
              ultrices cursus ac scelerisque varius eget. Augue egestas ac, mi
              non ullamcorper aliquet. Congue condimentum morbi amet, lorem
              ornare.
            </p>
          </div>
        </PatientReview>
      </Container>
    </Modal>
  );
};

export const ConsultationInfoModal = ({ show, handleClose }) => {
  return (
    <Modal
      visible={show}
      width={585}
      footer={null}
      closable={false}
      centered={true}
    >
      <CloseButton onClick={handleClose} />
      <Container subscription='Premium'>
        <div className='header_info'>
          <img src={usmAvatar} alt='' />
          <div className='group'>
            <h2>Amos Johnson</h2>
            <h4>Patient</h4>
          </div>
        </div>
        <div className='content'>
          <div className='group'>
            <h4>Phone Number</h4>
            <h5>+234 812 345 6789</h5>
          </div>
          <div className='group'>
            <h4>Email</h4>
            <h5>amosjohnson@gmail.com</h5>
          </div>
          <div className='group'>
            <h4>Date</h4>
            <h5>18th Oct. 2021</h5>
          </div>
          <div className='group'>
            <h4>Time</h4>
            <h5>15:24:35</h5>
          </div>
          <div className='group'>
            <h4>Doctor Type</h4>
            <h5>Dermatologist</h5>
          </div>
          <div className='group'>
            <h4>Amount</h4>
            <h5>#25,000</h5>
          </div>
          <div className='group'>
            <h4>Status</h4>
            <h5 className='subscription'>Completed</h5>
          </div>
        </div>
        <hr style={{ height: '0.1px', margin: '1.5em 0' }} />
        <h4>Patient Review</h4>
        <div className='content'>
          <div className='group'>
            <h4>Doctor's Name</h4>
            <div className='info-group'>
              <img src={usmAvatar} alt='' />
              <h5>Dr Amos Doe</h5>
            </div>
          </div>
          <div className='group'>
            <h4>Duration</h4>
            <h5>45mins</h5>
          </div>
          <div className='group'>
            <h4>Diagnosis</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla
              adipiscing placerat auctor eu quisque.
            </h5>
          </div>
          <div className='group'>
            <h4>Doctor's Comment</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla
              adipiscing placerat auctor eu quisque.
            </h5>
          </div>
          <div className='group'>
            <h4>Prescription</h4>
            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, nulla
              adipiscing placerat auctor eu quisque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. A, nulla adipiscing placerat auctor
              eu quisque.
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
      text-align: left;
      letter-spacing: 0.004em;
      color: ${(props) =>
        props.subscription === 'Premium'
          ? '#E20B8C !important'
          : props.subscription === 'Standard'
          ? '#455AFE !important'
          : props.subscription === 'Unlimited'
          ? '#19B729 !important'
          : ''};
    }
    .group {
      display: flex;
      font-style: normal;
      font-weight: bold;
      letter-spacing: 0.0015em;
      font-size: 1rem;
      margin: 0.75em 0 0.75rem;

      .info-group {
        display: flex;
        align-items: center;

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
      h5 {
        flex: 1;
        margin: 0;
        padding: 0;
        color: #666666;
        font-size: 1rem;
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

const CustomPanel = styled(Panel)`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.001em;
  // border: none !important;
  color: #666666 !important;

  .ant-collapse-header {
    color: #e20b8c !important;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header,
  .ant-collapse-extra {
    float: none;
    margin-right: 12em;
    color: #666666 !important;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header,
  .ant-collapse-arrow svg {
    color: #666666 !important;
  }

  .content {
    display: flex;
    gap: 2rem;
    margin-bottom: 0.5em;

    p {
      margin: 0;
      padding: 0;
      flex: 1;
      color: #999999;
      font-size: 14px;
    }

    h5 {
      flex: 0.5;
      color: #000;
      font-size: 14px;
    }
  }
`;

const PatientReview = styled.div`
  display: flex;
  gap: 2em;
  align-items: flex-start;
  width: 100%;
  margin: 1em 0;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .group {
    border-bottom: 1px solid #666;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    .rating-group {
      display: flex;
      gap: 0.5em;
      img {
        width: 14px;
        height: 14px;
      }
    }
    h5 {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;
      color: #666666;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #666666;
    }
  }
`;
