import React, { Fragment, useState } from "react";
import { Header as Title } from "../Overview/Revenue";
import { Header as Heading, TableWrapper } from "../Overview/Home";
import { Searchbar, SelectField } from "../../../Reuseable";
import { DisableAccountModal } from "./Modals";
import { Table } from "antd";
import {
  columns,
  // dataSource
} from "../../../table/user_management";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/sagas/dashboard/overview";
import Skeleton from "react-loading-skeleton";
import {
  overviewSelector,
  // toggleShowModal,
} from "../../../redux/reducers/dashboard/overview";
import { useQuery } from "react-query";
import { getUsersData } from "../../../api/userApi";

const Home = () => {
  // variables

  const [page, setPage] = useState("1");
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  // data fetching with react Query
  const {
    isLoading: usersLoading,
    data: users,
    isError,
    error,
  } = useQuery(
    ["users", page, userType, search],
    () => getUsersData(page, userType, search),
    {
      staleTime: 5000,
    }
  );

  const dispatch = useDispatch();
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      // console.log(
      //   `selectedRowKeys: ${selectedRowKeys}`,
      //   'selectedRows: ',
      //   selectedRows
      // );
    },
    onSelect: (record, selected, selectedRows) => {
      // console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      // console.log(selected, selectedRows, changeRows);
    },
  };

  // React.useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  const { showUserModal } = useSelector(overviewSelector);
  const [checkStrictly, setCheckStrictly] = React.useState(false);

  return (
    <Fragment>
      <DisableAccountModal show={showUserModal} />
      <Title>
        <h6>User Management</h6>
      </Title>
      <Heading>
        <>
          <SelectField
            placeholder="Filter"
            data={[
              { value: "", name: "Filter" },
              { value: "doctor", name: "Doctor" },
              { value: "patient", name: "Patient" },
            ]}
            setUserType={setUserType}
          />
          <Searchbar setSearch={setSearch} />
        </>
      </Heading>
      <TableWrapper>
        {isError ? (
          <div style={{ color: "red", fontSize: "30px" }}>{error.message}</div>
        ) : (
          <Table
            loading={usersLoading}
            dataSource={users}
            rowSelection={{ ...rowSelection }}
            columns={columns}
          />
        )}
      </TableWrapper>
    </Fragment>
  );
};

export default Home;
