import React, { Fragment } from "react";
import { useHistory } from "react-router-dom";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import { Header as Title } from "./Revenue";
import { Header as Heading, TableWrapper } from "./Home";
import { Searchbar } from "../../../Reuseable";
import { Table } from "antd";
import { columns, dataSource } from "../../../mock_store/consultations";

const Consultations = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Title>
        <BackArrow onClick={() => history.goBack()} />
        <h6>Total Consultations</h6>
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
            <option selected>Filter</option>
            <option value="Completed">Completed</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Scheduled">Scheduled</option>
            <option value="Cancelled">Cancelled</option>
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

export default Consultations;
