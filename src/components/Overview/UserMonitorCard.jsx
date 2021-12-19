import React from 'react';
import { Dropdown, Menu } from 'antd';
import styled from 'styled-components';
import user_avatar from '../../assets/images/icons/monitor_avatar.png';
import locationIcon from '../../assets/images/icons/location.svg';
import { ReactComponent as ViewUserIcon } from '../../assets/images/icons/monitor_card_back.svg';
import { UserMonitorModal } from '../../view/Dashboard/Overview/Modals';

const Index = ({ id, name, phone, email, date, time, location }) => {
  const [show, setShow] = React.useState(false);

  const getNewLocation = (string) => {
    let newString = string.split(' ');
    let country = newString.pop();
    let state = newString.pop();
    const newLocation = `${state} ${country}`;
    return newLocation;
  };

  return (
    <Container id={id}>
      <UserMonitorModal show={show} handleClose={() => setShow(false)} />
      <div className='row1'>
        <div className='group'>
          <img src={user_avatar} alt='' />
          <h4>{name}</h4>
        </div>
        <ViewUser onClick={() => setShow(true)} />
      </div>
      <div className='box'>
        <p>{phone}</p>
        <p>{email}</p>
        <p>
          {date} || {time}
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
              {location}
            </Menu>
          }
        >
          <div className='group'>
            <img src={locationIcon} alt='' />
            <span>{getNewLocation(location)}</span>
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
  width: 340px;
  min-width:340px;
  height: 240px;
  background: #ffffff;
  border-radius: 10px;
  padding:1rem 1.5rem;

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
      font-size: 1.2rem;
      line-height: 23px;
      letter-spacing: 0.0015em;
      color: #666666;
    }
  }

  
`;
