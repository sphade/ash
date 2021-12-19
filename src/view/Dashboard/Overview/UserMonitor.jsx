import React, { Fragment } from "react";
import { Table } from "antd";
import { useHistory } from "react-router-dom";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import { Header as Title } from "./Revenue";
import { Header as Heading, TableWrapper } from "./Home";
import { Searchbar } from "../../../Reuseable";
import { columns, dataSource } from "../../../mock_store/user_monitor";

const UserMonitor = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Title>
        <BackArrow onClick={() => history.goBack()} />
        <h6>User Monitor</h6>
      </Title>
      <Heading>
        <div className="group">
          <select
            style={{
              height: "3rem",
              width: "150px",
              borderRadius: "10px",
              border: "none",
            }}
            class="form-select"
          >
            <option selected>Filter Role</option>
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
          <select
            style={{
              height: "3rem",
              width: "150px",
              borderRadius: "10px",
              border: "none",
            }}
            class="form-select"
          >
            <option selected>Filter By Date</option>
            <option value="today">Today</option>
            <option value="one_week">Last 7 Days</option>
            <option value="one_month">One Month</option>
            <option value="one_year">One Year</option>
          </select>
        </div>
        <Searchbar />
      </Heading>
      <TableWrapper>
        <Table dataSource={dataSource} columns={columns} />
      </TableWrapper>
    </Fragment>
  );
};

export default UserMonitor;
