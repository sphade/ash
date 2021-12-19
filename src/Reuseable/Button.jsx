import React from "react";
import styled, { css } from "styled-components";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";

const Button = ({
  text,
  loading,
  onClick,
  full,
  primary,
  secondary,
  info,
  outline,
  light,
  type = "submit",
  disabled = false,
}) => {
  const antIcon = (
    <Loading3QuartersOutlined style={{ fontSize: 24, color: "#fff" }} spin />
  );
  return (
    <Container
      type={type ? type : ""}
      full={full ? full : undefined}
      primary={primary}
      info={info ? info : undefined}
      secondary={secondary ? secondary : undefined}
      outline={outline ? outline : undefined}
      light={light ? light : undefined}
      onClick={onClick}
      disabled={disabled ? disabled : loading ? true : false}
    >
      {loading ? <Spin indicator={antIcon} /> : text}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  width: ${({ full }) => (full ? "100%" : "50%")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  height: 2.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  color: #fff;
  border: none;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  ${(props) => css`
    ${props.primary &&
    css`
      background: #e20b8c;
    `}
    ${props.light &&
    css`
      background: #f4f4f4;
      color: #999999;

      :hover {
        color: #000000;
      }
    `}
    ${props.secondary &&
    css`
      background: #999999;
      color: #ffffff;
    `}
    ${props.info &&
    css`
      background: #455afe;
      color: #ffffff;
    `}
    ${props.outline &&
    css`
      border: 1px solid #455afe !important;
      background: transparent;
      color: #455afe;

      :hover {
        color:#fff;
        border: none !important;
        background: #455afe !important;
      }
    `}
  `}

  :focus {
    outline: none;
  }
  :hover {
    opacity: 0.8;
  }
`;
