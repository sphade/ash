import React from 'react';
import styled from 'styled-components';
import usmAvatar from '../../assets/images/icons/usm_avatar.png';
import star from '../../assets/images/icons/star.svg';
import starOutline from '../../assets/images/icons/star-outline.svg';

const PatientReview = ({ rating}) => {
  return (
    <Container>
      <img src={rating?.rater?.avatar || usmAvatar} alt='' />
      <div className='group'>
        <h5>{rating?.rater?.firstName}{rating?.rater?.lastName}</h5>
        <div className='rating-group'>
          {Array.from({ length: rating.value }, (index) => {
            return <img key={index} src={star} alt='' />;
          })}
          {Array.from({ length: parseInt(5 - rating.value ) }, (index) => {
            return <img key={index} src={starOutline} alt='' />;
          })}
        </div>
        <p>
         {rating?.comment}
        </p>
      </div>
    </Container>
  );
};

export default PatientReview;

const Container = styled.div`
  display: flex;
  gap: 2em;
  align-items: flex-start;
  width: 100%;
  margin: 1em 0;


  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  .group {
    border-bottom: 1px solid #efefef;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    row-gap: 0.5em;
    .rating-group {
      display: flex;
      gap: 0.5em;
      img {
        width: 14px;
        height: 14px;
      }
    }
    h5 {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      letter-spacing: 0.001em;
      color: #666666;
      margin: 0;
      padding: 0;
    }
    p {
      margin: 0;
      padding: 0;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.004em;
      color: #666666;
    }
  }
`;
