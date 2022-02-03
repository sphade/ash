import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar, SelectField } from '../../../Reuseable';
import { Table } from 'antd';
import { columns } from '../../../table/patients';
import { useDispatch, useSelector } from 'react-redux';
import { patientsSelector } from '../../../redux/reducers/dashboard/patients';
import { getPatients } from '../../../redux/sagas/dashboard/patients';
import Skeleton from 'react-loading-skeleton';

const Patients = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPatients());
  }, [dispatch]);
  const { patients, patientsLoading } = useSelector(patientsSelector);

  return (
    <Fragment>
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
            <div className='group'>
              <SelectField
                placeholder='Filter'
                data={[
                  { value: 'Premium', name: 'Premium' },
                  { value: 'Standard', name: 'Standard' },
                  { value: 'Unlimited', name: 'Unlimited' },
                ]}
              />
            </div>
            <Searchbar />
          </>
        )}
      </Heading>
      {patientsLoading ? (
        <>
          <Skeleton width={'100%'} height={500} />
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
