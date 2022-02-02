import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    date: '1 Sep',
    credit: 520,
    debit: 580,
    amount: 2000,
  },
  {
    date: '8 Sep',
    credit: 680,
    debit: 730,
    amount: 2210,
  },
  {
    date: '16 Sep',
    credit: 1289,
    debit: 1190,
    amount: 2290,
  },
  {
    date: '30 Sep',
    credit: 750,
    debit: 715,
    amount: 2000,
  },
  {
    date: '1 Oct',
    credit: 980,
    debit: 998,
    amount: 2181,
  },
  {
    date: '8 Oct',
    credit: 3300,
    debit: 2009,
    amount: 2500,
  },
  {
    date: '16 Oct',
    credit: 400,
    debit: 410,
    amount: 2500,
  },
  {
    date: '30 Oct',
    credit: 676,
    debit: 600,
    amount: 2500,
  },
];

export default function Chart() {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#FA0E9B' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#FA0E9B' stopOpacity={0} />
            </linearGradient>
            <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor='#455AFE' stopOpacity={0.8} />
              <stop offset='95%' stopColor='#455AFE' stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='date' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Area
            type='monotone'
            dataKey='credit'
            stroke='#FA0E9B'
            fillOpacity={1}
            fill='url(#colorUv)'
          />
          <Area
            type='monotone'
            dataKey='debit'
            stroke='#455AFE'
            fillOpacity={1}
            fill='url(#colorPv)'
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
