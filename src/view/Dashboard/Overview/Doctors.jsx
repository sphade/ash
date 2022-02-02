import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar } from '../../../Reuseable';
import { Table } from 'antd';
import { columns } from '../../../table/doctors';
import { useDispatch, useSelector } from 'react-redux';
import { doctorsSelector } from '../../../redux/reducers/dashboard/doctors';
import { getDoctors } from '../../../redux/sagas/dashboard/doctors';
import Skeleton from 'react-loading-skeleton';

const Doctors = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getDoctors());
  }, [dispatch]);

  const { doctors, doctorsLoading } = useSelector(doctorsSelector);
  return (
    <Fragment>
      <Title>
        {doctorsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={150} height={40} />
          </>
        ) : (
          <>
            <BackArrow onClick={() => history.goBack()} />
            <h6>Total Doctors</h6>
          </>
        )}
      </Title>
      <Heading>
        {doctorsLoading ? (
          <>
            <Skeleton width={150} height={40} />
            <Skeleton width={350} height={40} />
          </>
        ) : (
          <>
            <div className='group'>
              <select
                style={{
                  height: '3rem',
                  width: '150px',
                  borderRadius: '10px',
                  border: 'none',
                }}
                class='form-select'
              >
                <option selected>Filter Role</option>
                <option value='Verified'>Verified</option>
                <option value='Pending'>Pending</option>
                <option value='Rejected'>Rejected</option>
              </select>
            </div>
            <Searchbar />
          </>
        )}
      </Heading>
      {doctorsLoading ? (
        <>
        <Skeleton width={'100%'} height={500} />
        <br />
        </>
      ) : (
        <TableWrapper>
          <Table dataSource={doctors} columns={columns} />
        </TableWrapper>
      )}
    </Fragment>
  );
};

export default Doctors;
