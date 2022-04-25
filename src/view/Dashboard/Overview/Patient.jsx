import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import { Header as Title } from "./Revenue";
import { Header as Heading, TableWrapper } from "./Home";
import { Searchbar, SelectField } from "../../../Reuseable";
import { Space, Table, Dropdown, Menu } from "antd";
// import { columns } from '../../../table/patients';
import { useDispatch, useSelector } from "react-redux";
import {
  handleToggleModal,
  patientsSelector,
} from "../../../redux/reducers/dashboard/patients";
import { getPatients } from "../../../redux/sagas/dashboard/patients";
import Skeleton from "react-loading-skeleton";
import { PatientInfoModal } from "./Modals";
import { MoreButton } from "../../../table/patients";
import { useQuery } from "react-query";
import { getPatientData, getPlans } from "../../../api/patientApi";

const Patients = () => {
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);
  // const { patients, patientsLoading } = useSelector(patientsSelector);
  const {
    data: patients,
    isLoading: patientsLoading,
    isError: patientHasError,
    error,
  } = useQuery(["patients", userType, search, page], () =>
    getPatientData(userType, search, page)
  );
  const { data: plans, isLoading: plansLoading } = useQuery("plans", getPlans);

  // getPatientData(userType, search, page)
  const menu = (data) => (
    <Menu>
      <Menu.Item
        onClick={() => {
          sessionStorage.setItem("selectedPatient", JSON.stringify(data));
          dispatch(handleToggleModal());
        }}
      >
        View
      </Menu.Item>
    </Menu>
  );

  const columns = [
    {
      title: "S/N",
      render: (item, record, index) => index + 1,
    },
    {
      title: "NAME",
      dataIndex: "firstName",
      key: "firstName",
      render: (text, row) => (
        <Space>
          {text}
          {row.lastName}
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
      title: "SIGN UP DATE",
      dataIndex: "profile",
      key: "profile",
      render: (text) => (
        <Space>
          {text.createdAt
            ? new Date(text.createdAt).toLocaleDateString()
            : "--------"}
        </Space>
      ),
    },
    {
      title: "VISITs",
      dataIndex: "loginCount",
      key: "loginCount",
      render: (text) => <Space>{text ? text : "--------"}</Space>,
    },
    {
      title: "SUBSCRIPTION",
      dataIndex: "plan",
      key: "plan",
      render: (text) => (
        <Space
          style={{
            width: "90px",
            fontSize: 13,
            padding: "0.5em 1em",
            margin: "0.5em",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            textTransform: "capitalize",
            borderRadius: "5px",
            color:
              text === "Premium"
                ? "#FA0E9B"
                : text === "Standard"
                ? "#19B729"
                : text === "Unlimited"
                ? "#455AFE"
                : "",
            background:
              text === "Premium"
                ? "rgba(250, 14, 155, 0.05)"
                : text === "Standard"
                ? "rgba(25, 183, 41, 0.1)"
                : text === "Unlimited"
                ? "rgba(69, 90, 254, 0.05)"
                : "",
          }}
        >
          {text ? text : "-------"}
        </Space>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (item, record) => (
        <Space>
          <Dropdown overlay={menu(record)}>
            <MoreButton />
          </Dropdown>
        </Space>
      ),
    },
  ];
  return (
    <Fragment>
      <PatientInfoModal />
      <Title>
        <>
          <BackArrow onClick={() => history.goBack()} />
          <h6>Total Patients</h6>
        </>
      </Title>
      <Heading>
        <>
          <div className="group">
            {plans && (
              <SelectField
                placeholder="Filter Plan"
                data={plans.map(({ id, name }) => ({ value: id, name: name }))}
                setUserType={setUserType}
                setPage={setPage}
                full={true}
              />
            )}
          </div>
          <Searchbar setSearch={setSearch} />
        </>
      </Heading>

      <TableWrapper>
        {patientHasError ? (
          <div style={{ color: "red", fontSize: "30px" }}>{error.message}</div>
        ) : (
          <Table
            loading={patientsLoading}
            dataSource={patients?.patients}
            columns={columns}
            pagination={{
              total: patients?.count,
              current: page,
              showSizeChanger: false,

              onChange: (page) => {
                setPage(page);
              },
            }}
          />
        )}
      </TableWrapper>
    </Fragment>
  );
};

export default Patients;
