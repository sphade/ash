import React, { Fragment } from 'react';
import { Header as Title } from '../Overview/Revenue';
import { Header as Heading, TableWrapper } from '../Overview/Home';
import { Searchbar } from '../../../Reuseable';
import { Table } from 'antd';
import { columns, dataSource } from '../../../table/user_management';

const Home = () => {
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };
  // const [checkStrictly, setCheckStrictly] = React.useState(false);
  return (
    <Fragment>
      <Title>
        <h6>User Management</h6>
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
            <option selected>Filter</option>
            <option value='Doctors'>Doctors</option>
            <option value='Patients'>Patients</option>
          </select>
        </div>
        <Searchbar />
      </Heading>
      <TableWrapper>
        <Table
          dataSource={dataSource}
          rowSelection={{ ...rowSelection }}
          columns={columns}
        />
      </TableWrapper>
    </Fragment>
  );
};

export default Home;
