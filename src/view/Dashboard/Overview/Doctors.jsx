import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';
import { BackArrow } from '../../../layout/DashboardLayout/Content';
import { Header as Title } from './Revenue';
import { Header as Heading, TableWrapper } from './Home';
import { Searchbar } from '../../../Reuseable';
import { Table } from 'antd';
import { columns, dataSource } from '../../../table/doctors';

const Doctors = () => {
  const history = useHistory();
  return (
    <Fragment>
      <Title>
        <BackArrow onClick={() => history.goBack()} />
        <h6>Total Doctors</h6>
      </Title>
      <Heading>
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
      </Heading>
      <TableWrapper>
        <Table dataSource={dataSource} columns={columns} />
      </TableWrapper>
    </Fragment>
  );
};

export default Doctors;
