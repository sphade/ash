import React, { Fragment, useState } from "react";
import styled from "styled-components";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import arrow_up from "../../../assets/images/icons/arrow-up.svg";
import arrow_down from "../../../assets/images/icons/arrow-down.svg";
import { TransactionCard } from "../../../components/Overview";
import { useHistory } from "react-router-dom";
import Chart from "../../../components/Overview/Chart";
import { getTotalRevenue } from "../../../redux/sagas/dashboard/overview";
import { getTransactions } from "../../../redux/sagas/dashboard/transactions";
import { useSelector, useDispatch } from "react-redux";
import { overviewSelector } from "../../../redux/reducers/dashboard/overview";
// import { transactionsSelector } from "../../../redux/reducers/dashboard/transactions";
import Skeleton from "react-loading-skeleton";
import {
  getTransactionData,
  getTransactionGraphData,
} from "../../../api/transactionApi";
import { useQuery } from "react-query";
import { Pagination } from "antd";

import {
  getMonthDate,
  getTodayDate,
  getWeekDate,
  getYearDate,
} from "../../../utils/dates";
import { message, Spin } from "antd";
import { SelectField } from "../../../Reuseable";

const Revenue = () => {
  // const [select, setSelect] = React.useState("");
  const [page, setPage] = useState(1);

  const [userType, setUserType] = React.useState("");
  const [chartDate, setChartDate] = React.useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLoading: transactionsLoading,

    data: transactions,
  } = useQuery(
    ["transactionData", userType, page],
    () => getTransactionData(userType, page),
    {
      staleTime: 5000,

      onError: (err) => {
        message.error(
          err.message === "Network Error"
            ? "it looks like you are offline, check your internet connection"
            : err.message
        );
      },
    }
  );

  const {
    isLoading: transactionsGraphLoading,

    data: transactionsGraph,
  } = useQuery(
    ["transactionGraphData", chartDate],
    () => getTransactionGraphData(chartDate),
    {
      staleTime: 5000,
    }
  );
  React.useEffect(() => {
    dispatch(getTotalRevenue());
    dispatch(getTransactions());
  }, [dispatch]);

  const { revenue, revenueLoading } = useSelector(overviewSelector);

  // const { transactions, transactionsLoading } =
  //   useSelector(transactionsSelector);
  return (
    <Fragment>
      <Header>
        {revenueLoading ? (
          <>
            <Skeleton width={120} height={20} />
            <Skeleton width={40} height={20} />
          </>
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>Total Revenue</h6>
          </>
        )}
      </Header>
      <Statistics>
        {revenueLoading ? (
          <Skeleton width={200} height={20} />
        ) : (
          <h1>₦{revenue.total ? revenue.total.toLocaleString() : 0}</h1>
        )}
        <div className="group">
          {revenueLoading ? (
            <>
              <Skeleton width={200} height={20} />
              <Skeleton width={200} height={20} />
            </>
          ) : (
            <>
              <div className="up">
                <h5>₦{revenue.credit ? revenue.credit.toLocaleString() : 0}</h5>
                <img src={arrow_up} alt="" />
              </div>
              <div className="down">
                <h5>₦{revenue.debit ? revenue.debit.toLocaleString() : 0}</h5>
                <img src={arrow_down} alt="" />
              </div>
            </>
          )}
        </div>
        {revenueLoading ? (
          <Skeleton width={400} height={30} />
        ) : (
          <p>Total revenue including income and expenditure</p>
        )}
      </Statistics>
      {transactionsGraphLoading ? (
        <ChartWrapper>
          <header>
            <h5 className="fw-bold">Deals</h5>
            <SelectField
              placeholder="Filter Dates"
              data={[
                { value: getMonthDate, name: "One Month" },
                { value: getYearDate, name: "One Year" },
              ]}
              s
            />
          </header>
          <center
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "90%",
            }}
          >
            <Spin size="large" />
          </center>
        </ChartWrapper>
      ) : (
        <ChartWrapper>
          <header>
            <h5 className="fw-bold">Deals</h5>
            <SelectField
              placeholder="Filter Dates"
              data={[
                { value: getMonthDate, name: "One Month" },
                { value: getYearDate, name: "One Year" },
              ]}
              setUserType={setChartDate}
            />
          </header>
          <div className="chart">
            {transactionsGraph && <Chart data={transactionsGraph} />}
          </div>
        </ChartWrapper>
      )}

      <TransactionWrapper>
        <header>
          <h5>Transaction History</h5>
          <SelectField
            placeholder="Filter Dates"
            data={[
              { value: getTodayDate, name: "Today" },
              { value: getWeekDate, name: "7 days" },
              { value: getMonthDate, name: "One Month" },
              { value: getYearDate, name: "One Year" },
            ]}
            setUserType={setUserType}
            setPage={setPage}
          />
        </header>
        <div className="inner-Container">
          {transactionsLoading ? (
            <center
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Spin size="large" />
            </center>
          ) : !transactions || transactions?.transactions.length === 0 ? (
            <div style={{display:'flex', alignItems:'center', justifyContent: 'center', height:'100%'}}>
              <h1> NO DATA </h1>
            </div>
          ) : (
            transactions?.transactions?.map((item, index) => {
              return (
                <>
                  {" "}
                  <TransactionCard key={index} {...item} />{" "}
                </>
              );
            })
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "right" }}>
          <Pagination
            total={transactions?.count}
            current={page}
            onChange={(page) => {
              setPage(page);
            }}
          />
        </div>
      </TransactionWrapper>
    </Fragment>
  );
};

export default Revenue;

export const Header = styled.div`
  display: flex;
  align-items: center;
  column-gap: 2.5em;
  margin-bottom: 2em;

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
  min-height: 100px;
  background: #fff;
  // overflow-y: scroll;
  padding: 1.5rem 2rem;
  border-radius: 7px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .transactions {
    margin-top: 1.5rem;
    height: 500px;
    width: 100%;
    overflow-y: scroll;
  }

  h5 {
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    color: #666666;
  }
  .inner-Container {
    height: 400px;
    background: #fff;
    overflow-y: scroll;
  }
`;
