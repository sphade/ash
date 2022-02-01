import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { promotions } from '../../../table/promotion';
import emptyIcon from '../../../assets/images/icons/empty-image.png';
import { Button } from '../../../Reuseable';
import { PromotionCard } from '../../../components/Overview';
import { TableWrapper } from '../Overview/Home';
import { Table } from 'antd';
import { columns, dataSource } from '../../../table/promotion';
import { CreatePromotionModal } from './Modals';

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <CreatePromotionModal show={show} handleClose={() => setShow(false)} />
      {promotions.length === 0 ? (
        <>
          <Title>
            <h6>Promotions</h6>
          </Title>
          <EmptyPromotion>
            <img src={emptyIcon} alt='' />
            <h4>No Promotion Created Yet</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            </p>
            <div className='btn-wrapper'>
              <Button
                full
                info
                text='CREATE PROMOTION'
                onClick={() => setShow(true)}
              />
            </div>
          </EmptyPromotion>
        </>
      ) : (
        <Container>
          <Title>
            <h6>Promotions</h6>
            <div className='btn-wrapper'>
              <Button
                full
                outline
                text='CREATE PROMOTION'
                onClick={() => setShow(true)}
              />
            </div>
          </Title>
          <PromotionCardWrapper>
            {promotions.map((item) => {
              const { id, code, start_date, end_date, description, usage } =
                item;
              return (
                <PromotionCard
                  id={id}
                  code={code}
                  start_date={start_date}
                  end_date={end_date}
                  description={description}
                  usage={usage}
                />
              );
            })}
          </PromotionCardWrapper>
          <h6 className='title'>Other Promotions</h6>
          <TableWrapper>
            <Table dataSource={dataSource} columns={columns} />
          </TableWrapper>
        </Container>
      )}
    </Fragment>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .title {
    margin: 1.5em 0 0;
    padding: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
    color: #666666;
    opacity: 0.8;
  }
`;

const EmptyPromotion = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  .btn-wrapper {
    width: 25%;
  }
  img {
    width: 100px;
    height: 100px;
  }

  h4 {
    color: #666666;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    text-align: center;
  }

  p,
  h4 {
    margin: 0;
    padding: 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 2.5em;
  margin-bottom: 4em;

  h6 {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: bold;
    font-size: 1.4em;
    color: #666666;
    opacity: 0.8;
  }

  .btn-wrapper {
    width: 20%;
  }
`;

export const PromotionCardWrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  padding-bottom: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;

  // ::-webkit-scrollbar {
  //   width: 0;  /* Remove scrollbar space */
  //   background: transparent;
`;
