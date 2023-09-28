import React, { useEffect, useState } from "react";
import { PureComponent } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
  const [donations, setDonations] = useState([]);
  const [donationPercentage, setDonationPercentage] = useState(0);

  // Read data from local storage on component mount
  useEffect(() => {
    const localDonations = JSON.parse(localStorage.getItem("donation")) || [];
    setDonations(localDonations);
  }, []);
  console.log(donations.length);
  const data = [
    { name: "Group A", value: 12 - donations.length },
    { name: "Group B", value: donations.length },
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const COLORS = ["red", "#00C49F"];

  // Calculate donation percentage
  useEffect(() => {
    const totalDonations = donations.length;
    const totalData = 12; // Assuming a total of 12 data points
    const percentage = (totalDonations / totalData) * 100;
    setDonationPercentage(percentage);
  }, [donations]);
  return (
    <div>
      <div className=" flex justify-center  ">
        {" "}
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-1  md:gap-3 lg:gap-3 ">
        <h2>Your Donation</h2>
        <div className=" flex w-24 bg-[#00C49F] border h-4 rounded "></div>

        <h2>Total Donation</h2>
        <div className=" flex w-24 bg-[#FF444A] border h-4 rounded "></div>
      </div>
    </div>
  );
};
export default Statistics;
