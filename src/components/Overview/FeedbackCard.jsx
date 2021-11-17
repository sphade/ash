import React from "react";
import styled from "styled-components";

const Index = ({ id, image, name, email, feedback, date }) => {
  return (
    <Container id={id}>
      <img src={image} alt="" />
      <div className="content">
        <h4>{name}</h4>
        <h5>{email}</h5>
        <p>{feedback}</p>
        <span className="date">{date}</span>
        <ReplyBox>
          <input type="text" placeholder="reply here..." />
        </ReplyBox>
      </div>
    </Container>
  );
};

export default Index;

const Container = styled.div`
  padding: 1.5rem 2rem;
  height: 290px;
  width: 100%;
  background: #fff;
  border-radius: 7.5px;
  display: flex;
  gap: 1.5rem;

  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    h4,
    h4,
    p {
      margin: 0;
      padding: 0;
    }

    h4 {
      font-weight: 500;
      font-size: 1.2em;
      line-height: 1.5em;
      letter-spacing: 0.0015em;
      color: #666666;
    }

    h5 {
      font-weight: normal;
      font-size: 1.2em;
      line-height: 1.2em;
      letter-spacing: 0.0025em;
      color: #e20b8c;
    }

    p {
      font-weight: normal;
      font-size: 14px;
      line-height: 1.1em;
      letter-spacing: 0.0025em;
      color: #666666;
    }

    .date {
      text-align: right;
      font-weight: normal;
      font-size: 0.9em;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #999999;
    }
  }
`;

const ReplyBox = styled.div`
  margin-top: 1.5em;
//   height: 80px;
  padding:1rem 2rem;
  width: 100%;
  background: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 6px 8px;
    border: none;
    background: #f4f4f4;
    border-radius: 4px;
    :hover,
    :focus {
      outline: none;
      border: none;
    }
  }
`;
