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
import { getPatientData } from "../../../api/patientApi";

const Patients = () => {
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState("1");

  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);
  // const { patients, patientsLoading } = useSelector(patientsSelector);
  const { data: patients, isLoading: patientsLoading } = useQuery(
    ["patients", userType, search, page],
    () => getPatientData(userType, search, page)
  );
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
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => (
        <Space>{text ? new Date(text).toLocaleDateString() : "--------"}</Space>
      ),
    },
    {
      title: "VISITs",
      dataIndex: "visit",
      key: "visit",
      render: (text) => <Space>{text ? text : "--------"}</Space>,
    },
    {
      title: "SUBSCRIPTION",
      dataIndex: "subscription",
      key: "subscription",
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
        {patientsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </>
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>Total Patients</h6>
          </>
        )}
      </Title>
      <Heading>
        {patientsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={350} height={40} />
          </>
        ) : (
          <>
            <div className="group">
              <SelectField
                placeholder="Filter"
                data={[
                  { value: "premium", name: "Premium" },
                  { value: "standard", name: "Standard" },
                  { value: "unlimited", name: "Unlimited" },
                ]}
                setUserType={setUserType}
                userType={userType}
              />
            </div>
            <Searchbar setSearch={setSearch} />
          </>
        )}
      </Heading>
      {patientsLoading ? (
        <>
          <Skeleton width={"100%"} height={500} />
          <br />
        </>
      ) : (
        <TableWrapper>
          <Table dataSource={patients} columns={columns} />
        </TableWrapper>
      )}
    </Fragment>
  );
};

export default Patients;
