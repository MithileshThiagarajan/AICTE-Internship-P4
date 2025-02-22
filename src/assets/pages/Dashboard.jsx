import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  { name: "Jan", expenses: 400 },
  { name: "Feb", expenses: 300 },
  { name: "Mar", expenses: 500 },
  { name: "Apr", expenses: 700 },
  { name: "May", expenses: 600 },
];

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold">Monthly Expenses</h3>
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="expenses" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default Dashboard;
