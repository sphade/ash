import React, { Fragment } from 'react';
import { Header as Title } from '../Overview/Revenue';
import { Header as Heading, TableWrapper } from '../Overview/Home';
import { Searchbar, SelectField } from '../../../Reuseable';
import { Table } from 'antd';
import { columns, 
  // dataSource 
} from '../../../table/user_management';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/sagas/dashboard/overview';
import Skeleton from 'react-loading-skeleton';
import {
  overviewSelector,
  // toggleShowModal,
} from '../../../redux/reducers/dashboard/overview';

const Home = () => {
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

  React.useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const { usersLoading, users, 
    // showUserModal
   } = useSelector(overviewSelector);
  // const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <Fragment>
      <Title>
        {usersLoading ? (
          <Skeleton width='120px' height='35px' />
        ) : (
          <h6>User Management</h6>
        )}
      </Title>
      <Heading>
        {usersLoading ? (
          <>
            <Skeleton width='120px' height='35px' />
            <Skeleton width='300px' height='35px' />
          </>
        ) : (
          <>
            <SelectField
              placeholder='Filter'
              data={[
                { value: 'Doctor', name: 'Doctor' },
                { value: 'Patient', name: 'Patient' },
              ]}
            />
            <Searchbar />
          </>
        )}
      </Heading>
      <TableWrapper>
        {usersLoading ? (
          <Skeleton width={'100%'} height={330} />
        ) : (
          <Table
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
