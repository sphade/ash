import React from 'react';
import styled from 'styled-components';
import overviewA from '../../assets/images/icons/overviewA.svg';
import overview from '../../assets/images/icons/overview.svg';
import user from '../../assets/images/icons/user.svg';
import userA from '../../assets/images/icons/userA.svg';
import account from '../../assets/images/icons/account.svg';
import accountA from '../../assets/images/icons/accountA.svg';
import promo from '../../assets/images/icons/promo.svg';
import promoA from '../../assets/images/icons/promoA.svg';
import customer from '../../assets/images/icons/customer.svg';
import customerA from '../../assets/images/icons/customerA.svg';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const activeTab = sessionStorage.getItem('tab');
  return (
    <Container>
      {sidebarTabs.map((tab) => {
        const { id, name, icon, iconActive, link } = tab;
        return (
          <SidebarTabs
            key={id}
            onClick={() => {
              sessionStorage.setItem('tab', name);
            }}
            className={activeTab === name ? 'active' : ''}
            to={link}
          >
            <img
              src={activeTab === name ? iconActive : icon}
              alt={name.toUpperCase()}
            />
            <p>{name}</p>
          </SidebarTabs>
        );
      })}
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  top: 80px;
  left: 0;
  height: calc(100vh - 64px);
  width: 250px;
  background: #fff;
  padding: 4rem 1rem 0;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  .active {
    background: #e20b8c !important;

    p {
      color: #fff !important;
    }

    :hover {
      opacity: 0.7;
    }
  }
`;

const SidebarTabs = styled(Link)`
  display: flex;
  align-items: center;
  border-radius: 10px;
  padding: 1em 1em 1em 0.8em;
  cursor: pointer;
  text-decoration: none;

  img {
    width: 2em;
    height: 2em;
    margin-right: 1rem;
  }

  p {
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    line-height: 23px;
    letter-spacing: 0.0015em;
    color: #666666;
    margin: 0;
    padding: 0;
  }

  :hover {
    opacity: 0.7;
    background: #efefef;
  }
`;

const sidebarTabs = [
  {
    id: 1,
    name: 'Overview',
    icon: overview,
    iconActive: overviewA,
    link: '/dashboard',
  },
  {
    id: 2,
    name: 'User Management',
    icon: user,
    iconActive: userA,
    link: '/user-management',
  },
  {
    id: 3,
    name: 'Account Settings',
    icon: account,
    iconActive: accountA,
    link: '/account-settings',
  },
  {
    id: 4,
    name: 'Promotions',
    icon: promo,
    iconActive: promoA,
    link: '/promo',
  },
  {
    id: 5,
    name: 'Customer Feedback',
    icon: customer,
    iconActive: customerA,
    link: '/customer-feedback',
  },
];
