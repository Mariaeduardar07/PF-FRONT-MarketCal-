"use client";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./PostStatusDistribution.module.css";

export default function PostStatusDistribution({ data }) {
  const chartData = data || [
    { name: "Agendadas", value: 35, color: "#5dd4c0" },
    { name: "Publicadas", value: 45, color: "#47c4ac" },
    { name: "Rascunhos", value: 20, color: "#84e7d2" },
  ];

  const COLORS = chartData.map((item) => item.color);

  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={600}>
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className={styles.chartContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Distribuição de Status</h2>
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={95}
            innerRadius={50}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={3}
          >
            {chartData.map((entry, index) => (
              <Cell 
                key={`cell-${index}`} 
                fill={COLORS[index % COLORS.length]} 
                stroke="none"
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "#ffffff",
              border: "none",
              borderRadius: "12px",
              color: "#1f2937",
              boxShadow: "0 4px 20px rgba(93, 212, 192, 0.2)",
            }}
            labelStyle={{ color: "#47c4ac", fontWeight: 600 }}
          />
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="circle"
            iconSize={10}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}