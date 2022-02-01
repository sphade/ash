import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Header as Title } from '../Overview/Revenue';
import { Header as Heading } from '../Overview/Home';
import { Searchbar } from '../../../Reuseable';
import { feedbacks } from '../../../table/feedbacks';
import { FeedbackCard } from '../../../components/Overview';

const Home = () => {
  return (
    <Fragment>
      <Title>
        <h6>Customer Feedback</h6>
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
            <option selected>Filter Status</option>
          </select>
          <select
            style={{
              height: '3rem',
              width: '150px',
              borderRadius: '10px',
              border: 'none',
            }}
            class='form-select'
          >
            <option selected>Filter By Date</option>
            <option value='today'>Today</option>
            <option value='one_week'>Last 7 Days</option>
            <option value='one_month'>One Month</option>
            <option value='one_year'>One Year</option>
          </select>
        </div>
        <Searchbar />
      </Heading>
      <FeedbacksWrapper>
        {feedbacks.map((item) => {
          const { id, image, name, email, feedback, date } = item;
          return (
            <FeedbackCard
              id={id}
              image={image}
              name={name}
              email={email}
              feedback={feedback}
              date={date}
            />
          );
        })}
      </FeedbacksWrapper>
    </Fragment>
  );
};

export default Home;

const FeedbacksWrapper = styled.div`
  margin-top: 2em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
