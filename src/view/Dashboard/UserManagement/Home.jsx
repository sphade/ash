import React, { Fragment } from "react";
import { Header as Title } from "../Overview/Revenue";
import { Header as Heading, TableWrapper } from "../Overview/Home";
import { Searchbar } from "../../../Reuseable";
import { Table } from "antd";
import { columns, dataSource } from "../../../mock_store/user_management";

const Home = () => {
  return (
    <Fragment>
      <Title>
        <h6>User Management</h6>
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
            <option value="Doctors">Doctors</option>
            <option value="Patients">Patients</option>
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

export default Home;
