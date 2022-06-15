import React, { Fragment, useState } from "react";
import { Header as Title } from "../Overview/Revenue";
import { Header as Heading, TableWrapper } from "../Overview/Home";
import { Searchbar, SelectField } from "../../../Reuseable";
import {
  DisableAccountModal,
  ResetPasswordModal,
  VerifyDoctorModal,
} from "./Modals";
import { message, Table } from "antd";
import {
  columns,

} from "../../../table/user_management";
import { useDispatch, useSelector } from "react-redux";

import {
  overviewSelector,
  toggleShowModal,
  toggleShowResetPasswordModal,
  toggleShowVerifyDoctorModal,
} from "../../../redux/reducers/dashboard/overview";
import { useQuery } from "react-query";
import { getUsersData } from "../../../api/userApi";

const Home = () => {
  // local states

  const [page, setPage] = useState(1);
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  const [doctorsNo, setDoctorsNo] = useState(0);
  const [patientsNo, setPatientsNo] = useState(0);
  // data fetching with react Query
  const { isLoading: usersLoading, data: users } = useQuery(
    ["users", page, userType, search],
    () =>
      getUsersData({
        page: page,
        userType: userType,
        search: search,
        patientsNo: patientsNo,
        doctorsNo: doctorsNo,
      }),
    {
      staleTime: 5000,
      onSuccess: (data) => {
        setPatientsNo(data?.patients);
        setDoctorsNo(data?.doctors);
      },

      onError: () => {
        message.error(
          "unable to Establish a connection , check your Internet connection"
        );
      },
    }
  );

  const dispatch = useDispatch();

  const { showUserModal, showResetPasswordModal, showVerifyDoctorModal } =
    useSelector(overviewSelector);
  const handleClose = () => {
    dispatch(toggleShowModal());
  };
  const handleClosePasswordReset = () => {
    dispatch(toggleShowResetPasswordModal());
  };
  const handleCloseVerifyDoctor = () => {
    dispatch(toggleShowVerifyDoctorModal());
  };
  return (
    <Fragment>
      <DisableAccountModal show={showUserModal} handleClose={handleClose} />
      <ResetPasswordModal
        show={showResetPasswordModal}
        handleClose={handleClosePasswordReset}
      />
      <VerifyDoctorModal
        show={showVerifyDoctorModal}
        handleClose={handleCloseVerifyDoctor}
      />
      <Title>
        <h6>User Management</h6>
      </Title>
      <Heading>
        <>
          <SelectField
            placeholder="Filter Role"
            data={[
              { value: "doctor", name: "Doctor" },
              { value: "patient", name: "Patient" },
            ]}
            setUserType={setUserType}
            setPage={setPage}
          />

          <Searchbar setSearch={setSearch} setPage={setPage} />
        </>
      </Heading>
      <TableWrapper>
        <Table
          loading={usersLoading}
          dataSource={users?.users}
          // rowSelection={{ ...rowSelection }}
          columns={columns}
          pagination={{
            total: users?.count,
            current: page,
            showSizeChanger: false,

            onChange: (page) => {
              setPage(page);
            },
          }}
        />
      </TableWrapper>
    </Fragment>
  );
};

export default Home;
