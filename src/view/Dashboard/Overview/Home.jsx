import React, { useState } from "react";
import { message, Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { OverviewCard, UserMonitorCard } from "../../../components/Overview";
import { columns } from "../../../table/overview";
import { columns as consultationsColumns } from "../../../table/consultations";
import { Searchbar, SelectField } from "../../../Reuseable";
import // getAppointmentCount,
// getDoctorCount,
// getPatientCount,
// getTotalRevenue,
// getUsers,
// getReferrals,
"../../../redux/sagas/dashboard/overview";
import Skeleton from "react-loading-skeleton";
import {
  overviewSelector,
  toggleActiveTab,
  toggleShowModal,
} from "../../../redux/reducers/dashboard/overview";
import {
  PatientIcon,
  DoctorIcon,
  DollarIcon,
  ConsultationIcon,
} from "../../../assets/images/icons/overview";
import { CardBg1, CardBg2 } from "../../../assets/images/background";
import { UserMonitorModal } from "./Modals";
import Slider from "react-slick";
import { useQuery } from "react-query";
import {
  getAppointmentCount,
  getAppointmentData,
} from "../../../api/appointmentApi";
import {
  getMonthDate,
  getTodayDate,
  getWeekDate,
  getYearDate,
} from "../../../utils/dates";
import { getUser } from "../../../api/userApi";
import { getDoctorCount } from "../../../api/doctorApi";
import { getPatientCount } from "../../../api/patientApi";
import { getRevenue } from "../../../api/transactionApi";

const Home = () => {
  const [filterDate, setFilterDate] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { isLoading: usersLoading, data: users } = useQuery("users", getUser, {
    staleTime: 5000,
  });
  const {
    isLoading: appointmentLoading,

    data: appointments,
  } = useQuery(
    ["appointments", search, page, filterDate],
    () =>
      getAppointmentData({
        search: search,
        page: page,
        filterDate: filterDate,
      }),
    {
      onError: (err) => {
        message.error(
          err.message === "Network Error"
            ? "it looks like you are offline, check your internet and try again"
            : err.message
        );
      },
    }
  );

  const { isLoading: doctorCountLoading, data: doctorCount } = useQuery(
    "doctorCount",
    getDoctorCount
  );
  const { isLoading: patientCountLoading, data: patientCount } = useQuery(
    "patientCount",
    getPatientCount
  );
  const { isLoading: appointmentCountLoading, data: appointmentCount } =
    useQuery("appointmentCount", getAppointmentCount);
  const { data: revenue } = useQuery("revenue", getRevenue);

  const dispatch = useDispatch();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const loggedInUser = JSON.parse(sessionStorage.getItem("user"));
  const isSuperAdmin = loggedInUser.isSuper;
  React.useEffect(() => {
    // dispatch(getAppointmentCount());
    // dispatch(getDoctorCount());
    // dispatch(getPatientCount());
    // if (isSuperAdmin) {
    //   dispatch(getTotalRevenue());
    // }
    // dispatch(getUsers());
    // dispatch(getReferrals());
  }, [dispatch, isSuperAdmin]);

  const {
    // doctorCountLoading,
    // patientCountLoading,
    // appointmentCountLoading,
    // doctorCount,
    // patientCount,
    // appointmentCount,
    // appointments,
    // revenue,
    // usersLoading,
    // users,
    referralsLoading,
    referrals,
    activeTab,
    showUserModal,
  } = useSelector(overviewSelector);

  const loading =
    doctorCountLoading && patientCountLoading && appointmentCountLoading;

  return (
    <Container>
      <UserMonitorModal
        show={showUserModal}
        handleClose={() => dispatch(toggleShowModal())}
      />

      <h1>Dashboard</h1>

      <CardWrapper isSuperAdmin={isSuperAdmin}>
        {loading ? (
          <>
            <Skeleton height={150} />
            <Skeleton height={150} />
            <Skeleton height={150} />
            {isSuperAdmin ? <Skeleton height={150} /> : ""}
          </>
        ) : (
          <>
            <OverviewCard
              text="Total Patients"
              value={patientCount || 0}
              image={PatientIcon}
              bg={CardBg1}
              link="/dashboard/patients"
            />
            <OverviewCard
              text="Total Doctors"
              value={doctorCount || 0}
              image={DoctorIcon}
              bg={CardBg2}
              link="/dashboard/doctors"
            />
            <OverviewCard
              text="Total Consultations"
              value={appointmentCount || 0}
              image={ConsultationIcon}
              bg={CardBg1}
              link="/dashboard/consultations"
            />
            {isSuperAdmin ? (
              <OverviewCard
                text="Total Revenue"
                value={revenue || 0}
                image={DollarIcon}
                bg={CardBg2}
                link="/dashboard/revenue"
              />
            ) : (
              ""
            )}
          </>
        )}
      </CardWrapper>
      <Header>
        {usersLoading ? (
          <>
            <Skeleton height={40} width={150} />
            <Skeleton height={40} width={150} />
          </>
        ) : (
          <>
            <h1>User Monitor</h1>
            <LinkR to="/dashboard/user-monitor">View All</LinkR>
          </>
        )}
      </Header>
      {usersLoading ? (
        <MonitorCardWrapper>
          <Skeleton width={340} height={240} />
          <Skeleton width={340} height={240} />
          <Skeleton width={340} height={240} />
          <Skeleton width={340} height={240} />
        </MonitorCardWrapper>
      ) : (
        <Slider {...settings}>
          {users?.users.map((item, index) => {
            return <UserMonitorCard key={index} {...item} />;
          })}
        </Slider>
      )}
      <div className="tab-group">
        {["Consultations", "Referral"].map((item, index) => {
          return (
            <Tab
              key={index}
              className={activeTab === item ? "active" : ""}
              onClick={() => dispatch(toggleActiveTab(item))}
            >
              {item}
            </Tab>
          );
        })}
      </div>

      {activeTab === "Referral" && (
        <>
          <Header>
            <div className="group">
              {referralsLoading ? (
                <>
                  <Skeleton width={180} height={40} />
                  <Skeleton width={250} height={40} />
                </>
              ) : (
                <>
                  <SelectField
                    placeholder="Filter"
                    data={[
                      { value: getWeekDate, name: "This Week" },
                      { value: "last week", name: "Last Week" },
                      { value: getMonthDate, name: "One Month" },
                    ]}
                    setPage={setPage}
                  />
                  <Searchbar />
                </>
              )}
            </div>
          </Header>
          <TableWrapper>
            {referralsLoading ? (
              <Skeleton width={"100%"} height={330} />
            ) : (
              <Table dataSource={referrals} columns={columns} />
            )}
          </TableWrapper>
        </>
      )}
      {activeTab === "Consultations" && (
        <>
          <Header>
            <div className="group">
              <>
              
                <SelectField
                  placeholder="Filter by Dates"
                  data={[
                    { value:  getTodayDate , name: "Today" },
                    { value: getWeekDate , name: "Last 7 Days" },
                    { value: getMonthDate, name: "One Month" },
                    { value: getYearDate, name: "One Year" },
                  ]}
                  setUserType={setFilterDate}
                  setPage={setPage}
                />
                <Searchbar setSearch={setSearch} />
              </>
            </div>
          </Header>
          <TableWrapper>
            <Table
              loading={appointmentLoading}
              dataSource={appointments?.consultations}
              columns={consultationsColumns}
              pagination={{
                pageSize: 10,
                current: page,
                showSizeChanger: false,

                total: appointments?.count,
                onChange: (page) => {
                  setPage(page);
                },
              }}
            />
          </TableWrapper>
        </>
      )}
    </Container>
  );
};

export default Home;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 24px 0 16px;

  .group {
    display: flex;
    column-gap: 1rem;
    align-items: center;
  }
`;

export const LinkR = styled(Link)`
  text-decoration: none;
  color: #455afe;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.0225em;
  text-transform: uppercase;
`;

export const CardWrapper = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: ${({ isSuperAdmin }) =>
    isSuperAdmin ? "1fr 1fr 1fr 1fr" : "1fr 1fr 1fr"};
  gap: 1.5rem;
`;

export const MonitorCardWrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: auto;

  // ::-webkit-scrollbar {
  //   width: 0; /* Remove scrollbar space */
  //   background: transparent;
  // }
`;

export const TableWrapper = styled.div`
  width: 100%;
  overflow-x: hidden !important;
  // height: 200px;
  // background:green;
  // margin: 0;
  // padding:0;
  margin-top: 1.5rem;
`;

export const Tab = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 0.0015em;
  color: #999999;
  cursor: pointer;

  :hover {
    opacity: 0.7;
  }
`;

const Container = styled.div`
  .active {
    color: #e20b8c;
  }

  .tab-group {
    display: flex;
    gap: 2rem;
    margin: 44px 0 20px;
  }
`;
