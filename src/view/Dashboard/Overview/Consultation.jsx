import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { BackArrow } from "../../../layout/DashboardLayout/Content";
import { Header as Title } from "./Revenue";
import { Header as Heading, TableWrapper } from "./Home";
import { Searchbar } from "../../../Reuseable";
import { Space, Table, Dropdown, Menu } from "antd";
import { MoreButton } from "../../../table/consultations";
import { useDispatch, useSelector } from "react-redux";
import { overviewSelector } from "../../../redux/reducers/dashboard/overview";
// import { getAppointmentCount } from "../../../redux/sagas/dashboard/overview";
import Skeleton from "react-loading-skeleton";
import { ConsultationInfoModal } from "./Modals";
import { handleToggleModal } from "../../../redux/reducers/dashboard/consultations";
import {
  getAppointmentFilterData,
  getAppointmentCount,
  getAppointmentData,
} from "../../../api/appointmentApi";
import { useQuery } from "react-query";

const Consultations = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const {
    isLoading: appointmentCountLoading,
    isError: appointmentHasError,
    error,
    data: appointments,
  } = useQuery(["appointmentFilterData", userType, search, page], () =>
    getAppointmentData({ userType: userType, search: search, page: page })
  );
  const { data: appointmentCount } = useQuery(
    ["appointmentCount"],
    getAppointmentCount
  );

  // React.useEffect(() => {
  //   dispatch(getAppointmentCount());
  // }, [dispatch]);

  // const { appointmentCountLoading, appointments } =
  //   useSelector(overviewSelector);

  const menu = (data) => (
    <Menu>
      <Menu.Item
        onClick={() => {
          sessionStorage.setItem("selectedConsultation", JSON.stringify(data));
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
      dataIndex: "patient",
      key: "patient",
      render: (text) => (
        <Space>
          {text && text.firstName}
          {text && text.lastName}
        </Space>
      ),
    },
    {
      title: "DOCTOR",
      dataIndex: "doctor",
      key: "doctor",
      render: (text) => (
        <Space>
          Dr.
          {text && text.firstName}
          {text && text.lastName}
        </Space>
      ),
    },
    {
      title: "DOCTOR TYPE",
      dataIndex: "doctor",
      key: "doctor",
      render: (text) => (
        <Space>
          {text &&
            text.specializations.map((item) => {
              return item.title;
            })}
        </Space>
      ),
    },
    {
      title: "DURATION",
      render: () => <Space>30 minutes</Space>,
    },
    {
      title: "DATE",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text) => <Space>{new Date(text).toLocaleDateString()}</Space>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      key: "status",
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
              text === "completed"
                ? "#19B729"
                : text === "accepted"
                ? "#455AFE"
                : text === "active"
                ? "#FFAD33"
                : text === "cancelled"
                ? "#FF8282"
                : text === "pending"
                ? "#455AFE"
                : text === "failed"
                ? "#FF8282"
                : "",
            background:
              text === "completed"
                ? "rgba(25, 183, 41, 0.1)"
                : text === "active"
                ? "rgba(255, 173, 51, 0.1)"
                : text === "accepted"
                ? "rgba(69, 90, 254, 0.1)"
                : text === "cancelled"
                ? "rgba(255, 130, 130, 0.1)"
                : text === "pending"
                ? "rgba(69, 90, 254, 0.1)"
                : text === "failed"
                ? "rgba(255, 130, 130, 0.1)"
                : "",
          }}
        >
          {text === "accepted"
            ? "Scheduled"
            : text === "active"
            ? "Ongoing"
            : text === "completed"
            ? "Completed"
            : text === "cancelled"
            ? "Cancelled"
            : text}
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
      {<ConsultationInfoModal />}
      <Title>
        <>
          <BackArrow onClick={() => history.goBack()} />
          <h6>Total Consultations</h6>
        </>
      </Title>
      <Heading>
        <>
          <div className="group">
            <select
              style={{
                height: "3rem",
                width: "150px",
                borderRadius: "10px",
                border: "none",
              }}
              className="form-select"
              onChange={(e) => {
                setUserType(e.target.value);
                setPage(1);
              }}
            >
              <option selected value="">
                Filter Role
              </option>
              <option value="completed">Completed</option>
              <option value="accepted">Scheduled</option>
              <option value="pending">pending</option>
              <option value="active">Ongoing</option>
              <option value="failed">failed</option>
              <option value="cancelled">Cancelled</option>
              <option value="rejected">rejected</option>
            </select>
          </div>
          <Searchbar setSearch={setSearch} />
        </>
      </Heading>

      <TableWrapper>
        {appointmentHasError ? (
          <div style={{ color: "red", fontSize: "30px" }}>{error.message}</div>
        ) : (
          <Table
            loading={appointmentCountLoading}
            dataSource={appointments?.consultations}
            columns={columns}
            pagination={{
              pageSize: 10,
              current: page,

              total: appointments?.count,
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

export default Consultations;
