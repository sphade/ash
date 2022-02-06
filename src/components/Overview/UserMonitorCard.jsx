import React from 'react';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import user_avatar from '../../assets/images/icons/monitor_avatar.png';
import locationIcon from '../../assets/images/icons/location.svg';
import { ReactComponent as ViewUserIcon } from '../../assets/images/icons/monitor_card_back.svg';
import { toggleShowModal } from '../../redux/reducers/dashboard/overview';
import { useDispatch } from 'react-redux';

const Index = (props, { index }) => {
  const dispatch = useDispatch();
  // const getNewLocation = (string) => {
  //   let newString = string.split(' ');
  //   let country = newString.pop();
  //   let state = newString.pop();
  //   const newLocation = `${state} ${country}`;
  //   return newLocation;
  // };
  const handleViewUser = () => {
    sessionStorage.setItem('requestMonitorUser', JSON.stringify(props));
    dispatch(toggleShowModal());
  };
  return (
    <Container key={index}>
      <div className='row1'>
        <div className='group'>
          <img src={user_avatar} alt='' />
          <h4>
            {props.firstName} &nbsp;
            {props.lastName}
          </h4>
        </div>
        <ViewUser onClick={handleViewUser} />
      </div>
      <div className='box'>
        <p>{props.phoneNumber}</p>
        <p>{props.email}</p>
        <p>
          {props.date || '2/1/2022'} || {props.time || '09:30 pm'}
        </p>
        <Dropdown
          arrow
          overlay={
            <Menu
              style={{
                padding: '1rem',
                borderRadius: '10px',
                fontSize: '0.9rem',
                color: '#999999',
              }}
            >
              {props.location}
            </Menu>
          }
        >
          <div className='group'>
            <img src={locationIcon} alt='' />
            <span>Lagos, NG</span>
          </div>
        </Dropdown>
      </div>
    </Container>
  );
};

export default Index;

const ViewUser = styled(ViewUserIcon)`
  cursor: pointer;
  width: 2.5em;
  height: 2.5em;

  :hover {
    opacity: 0.9;
    transform: scale(1.1);
  }
`;

const Container = styled.div`
  // width: 400px;
  // min-width:400px;
  height: 240px;
  background: #ffffff;
  border-radius: 10px;
  padding:1rem 1.5rem;
  margin-right:1rem !important;

  .box{
      margin-top:1rem;
    height:145px;
    min-height:112px
    width:100%;
    padding:0.5rem 1.5rem;
    background: #F4F4F4;
    border-radius: 10px;

    p{
        font-style: normal;
font-weight: normal;
font-size: 1em;
line-height: 16px;
letter-spacing: 0.0025em;
color: #666666;
margin: 0.8em 0;
    }

    .group {
        display: flex;
        align-items:center;
        column-gap:1rem;
        cursor:pointer;

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
      font-size: 1.1rem;
      line-height: 23px;
      letter-spacing: 0.0015em;
      color: #666666;
    }
  }

  
`;
