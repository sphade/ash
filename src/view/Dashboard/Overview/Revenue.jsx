import React, { Fragment } from 'react';
import styled from 'styled-components';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import arrow_up from '../../../assets/images/icons/arrow-up.svg';
import arrow_down from '../../../assets/images/icons/arrow-down.svg';
import { transactions } from '../../../table/overview';
import { TransactionCard } from '../../../components/Overview';
import { useHistory } from 'react-router-dom';
import Chart from '../../../components/Overview/Chart';

const Revenue = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Header>
        <BackArrow onClick={() => history.goBack()} />
        <h6>Total Revenue</h6>
      </Header>
      <Statistics>
        <h1>₦23,234,000</h1>
        <div className='group'>
          <div className='up'>
            <h5>₦10,234,000</h5>
            <img src={arrow_up} alt='' />
          </div>
          <div className='down'>
            <h5>₦10,234,000</h5>
            <img src={arrow_down} alt='' />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est magna{' '}
          <br />
          nullam venenatis, commodo.
        </p>
      </Statistics>
      <ChartWrapper>
        <header>
          <h5 className='fw-bold'>Deals</h5>
          <h6>Show</h6>
        </header>
        <div className='chart'>
          <Chart />
        </div>
      </ChartWrapper>
      <TransactionWrapper>
        <header>
          <h5>Transaction History</h5>
          <select
            style={{ height: '3rem', width: '150px', borderRadius: '10px' }}
            class='form-select'
          >
            <option selected>Filter By Date</option>
            <option value='today'>Today</option>
            <option value='one_week'>Last 7 Days</option>
            <option value='one_month'>One Month</option>
            <option value='one_year'>One Year</option>
          </select>
        </header>
        {transactions.map((items, index) => {
          const { type, description, date, amount } = items;
          return (
            <TransactionCard
              type={type}
              id={index}
              date={date}
              description={description}
              amount={amount}
            />
          );
        })}
      </TransactionWrapper>
    </Fragment>
  );
};

export default Revenue;

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.5em;
  margin-bottom: 4em;

  h6 {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
    color: #666666;
    opacity: 0.8;
  }
`;

const Statistics = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.2rem;
  margin-bottom: em;

  h1 {
    font-weight: 500;
    font-size: 2.5em;
    color: #333333;
  }

  h5 {
    font-weight: bold;
    font-size: 1.2em;
    color: #666666;
    margin-right: 0.4rem;
  }

  .group {
    display: flex;
    column-gap: 2.5rem;
    margin-bottom: 1rem;
    .up,
    .down {
      display: flex;
      align-items: center;

      img {
        width: 1rem;
        height: 1rem;
        margin: 0;
      }
    }
  }

  p {
    // margin: 1rem 0;
  }
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 450px;
  margin: 1.5rem 0;
  border-radius: 7px;
  background: #fff;

  header {
    padding: 1rem;
    border-bottom: 0.5px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .chart {
    padding: 3rem;
  }
`;

const TransactionWrapper = styled.div`
  margin: 1.5rem 0;
  width: 100%;
  height: 80%;
  background: #fff;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #666666;
  }
`;
