import React, { Fragment, useState } from "react";
import { Table, Space } from "antd";
import { useHistory } from "react-router-dom";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import { Header as Title } from "./Revenue";
import { Header as Heading, TableWrapper } from "./Home";
import { Searchbar, SelectField } from "../../../Reuseable";
// import { columns } from '../../../table/user_monitor';
import Skeleton from "react-loading-skeleton";
import {
  overviewSelector,
  toggleShowModal,
} from "../../../redux/reducers/dashboard/overview";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/sagas/dashboard/overview";
import { ViewButton } from "../../../table/user_monitor";
import { UserMonitorModal } from "./Modals";
import { getUsersData } from "../../../api/userApi";
import { useQuery } from "react-query";
import { month, today, week, year } from "../../../utils/dates";

const UserMonitor = () => {
  const [page, setPage] = useState("1");
  const [userType, setUserType] = useState("doctor");
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();
  const {
    isLoading: usersLoading,

    data: users,
  } = useQuery(
    ["users", page, userType, search,filterDate],
    () => getUsersData(page, userType, search,filterDate),
    {
      staleTime: 5000,
    }
  );
  // React.useEffect(() => {
  //   dispatch(getUsers());
  // }, [dispatch]);

  const { showUserModal } = useSelector(overviewSelector);

  const handleViewUser = (data) => {
    sessionStorage.setItem("requestMonitorUser", JSON.stringify(data));
    dispatch(toggleShowModal());
  };

  const columns = [
    {
      title: "S/N",
      render: (item, record, index) => index + 1,
    },
    {
      title: "NAME",
      dataIndex: "firstName",
      key: "firstName",
      render: (text, record) => (
        <Space>
          {text}
          {record.lastName}
        </Space>
      ),
    },
    {
      title: "PHONE NUMBER",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "EMAIL ADDRESS",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "SIGNUP DATE",
      dataIndex: "profile",
      key: "profile",
      render: (text) => (
        <Space>
          {text ? new Date(text.createdAt).toLocaleDateString() : "------"}
        </Space>
      ),
    },
    {
      title: "TIME",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <Space>{text ? new Date(text).toLocaleTimeString() : "------"}</Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <ViewButton onClick={() => handleViewUser(record)} />
      ),
    },
  ];
  return (
    <Fragment>
      <UserMonitorModal
        show={showUserModal}
        handleClose={() => dispatch(toggleShowModal())}
      />
      <Title>
        <>
          <BackArrow onClick={() => history.goBack()} />
          <h6>User Monitor</h6>
        </>
      </Title>
      <Heading>
        <>
          <div className="group">
            <SelectField
              placeholder="Filter"
              data={[
                { value: "doctor", name: "Doctor" },
                { value: "patient", name: "Patient" },
              ]}
              setUserType={setUserType}
              
            />
            <SelectField
              placeholder="Filter"
              data={[
                { value: today.toLocaleDateString(), name: "Today" },
                { value: week.toLocaleDateString(), name: "7 days" },
                { value: month.toLocaleDateString(), name: "One Month" },
                { value: year.toLocaleDateString(), name: "One Year" },
              ]}
              setUserType={setFilterDate}

            />
          </div>
          <Searchbar setSearch={setSearch} />
        </>
      </Heading>
      <TableWrapper>
        <Table loading={usersLoading} dataSource={users} columns={columns} />
      </TableWrapper>
    </Fragment>
  );
};

export default UserMonitor;
