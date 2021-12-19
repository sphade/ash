import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1 Sep",
    uv: 520,
    pv: 580,
    amt: 2000,
  },
  {
    name: "8 Sep",
    uv: 680,
    pv: 730,
    amt: 2210,
  },
  {
    name: "16 Sep",
    uv: 1289,
    pv: 1190,
    amt: 2290,
  },
  {
    name: "30 Sep",
    uv: 750,
    pv: 715,
    amt: 2000,
  },
  {
    name: "1 Oct",
    uv: 980,
    pv: 998,
    amt: 2181,
  },
  {
    name: "8 Oct",
    uv: 1300,
    pv: 1009,
    amt: 2500,
  },
  {
    name: "16 Oct",
    uv: 400,
    pv: 410,
    amt: 2500,
  },
  {
    name: "30 Oct",
    uv: 676,
    pv: 600,
    amt: 2500,
  },
];

export default function Chart() {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FA0E9B" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FA0E9B" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#455AFE" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#455AFE" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="uv"
            stroke="#FA0E9B"
            fillOpacity={1}
            fill="url(#colorUv)"
          />
          <Area
            type="monotone"
            dataKey="pv"
            stroke="#455AFE"
            fillOpacity={1}
            fill="url(#colorPv)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
