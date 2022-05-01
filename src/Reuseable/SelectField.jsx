import { Select } from "antd";
import React from "react";
// import styled from "styled-components";

const Selectfield = (props) => {
  const { Option } = Select;
  return (
    <Select
      onChange={(value) => {
        props?.setUserType(value);
        if (props.setPage) {
          props?.setPage(1);
        }
      }}
      style={{ width: 200 }}
      placeholder={props.placeholder}
      size="large"
      defaultValue={undefined}
      bordered="true"
    >
      <Option value="">All</Option>
      {props.data !== (null || undefined) &&
        props?.data.map((item, index) => {
          return (
            <Option key={index} value={item.value || item.uid}>
              {item.name}
            </Option>
          );
        })}
    </Select>
  );
};

export default Selectfield;

// const Container = styled.div`
//   position: relative;
//   width: ${({ full }) => (full ? "100%" : "150px")};

//   .group {
//     display: flex;
//     align-items: center;
//     position: relative;
//     height: 48px;

//     label {
//       position: absolute;
//       top: 10px;
//       left: 15px;
//       font-style: normal;
//       font-weight: normal;
//       font-size: 10px;
//       line-height: 11px;
//       text-transform: uppercase;
//       color: #172836;

//       span {
//         color: #f14c18;
//         font-size: 12px;
//       }
//     }

//     Select {
//       width: 100%;
//       background: white;
//       padding: 0 16px;
//       height: 100%;
//       // border: 1px solid #e6e7e8;
//       border: 1px solid #e5e5e5;
//       box-sizing: border-box;
//       border-radius: 10px;

//       -webkit-appearance: none;
//       appearance: none;

//       :focus {
//         outline: none;
//         border: 1px solid #bdbdbd;
//       }
//     }
//   }

//   .group::after {
//     content: "▼";
//     font-size: 1rem;
//     right: 15px;
//     position: absolute;

//     @media screen and (max-width: 425px) {
//       top: 16px;
//     }
//   }
// `;
