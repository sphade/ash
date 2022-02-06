import React from 'react';
import styled from 'styled-components';

const Selectfield = (props) => {
  return (
    <Container full={props.full ? props.full : undefined}>
      <div className='group'>
        <select
          defaultValue={props.placeholder}
          onChange={props.onValueChange}
          name={props.name}
          id={props.id}
        >
          {/* <option>{props.placeholder}</option> */}
          {props.data.map((item, index) => {
            return (
              <option key={index} value={item.value || item.uid}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </Container>
  );
};

export default Selectfield;

const Container = styled.div`
  position: relative;
  width: ${({ full }) => (full ? '100%' : '150px')};

  .group {
    display: flex;
    align-items: center;
    position: relative;
    height: 48px;

    label {
      position: absolute;
      top: 10px;
      left: 15px;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 11px;
      text-transform: uppercase;
      color: #172836;

      span {
        color: #f14c18;
        font-size: 12px;
      }
    }

    select {
      width: 100%;
      // background: #f4f4f4;
      padding: 0 16px;
      height: 100%;
      // border: 1px solid #e6e7e8;
      border: 1px solid #e5e5e5;
      box-sizing: border-box;
      border-radius: 5px;

      -webkit-appearance: none;
      appearance: none;

      :focus {
        outline: none;
        border: 1px solid #bdbdbd;
      }
    }
  }

  .group::after {
    content: '▼';
    font-size: 1rem;
    right: 15px;
    position: absolute;

    @media screen and (max-width: 425px) {
      top: 16px;
    }
  }
`;
