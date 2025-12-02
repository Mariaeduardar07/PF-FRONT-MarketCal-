"use client";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import styles from "./PostsChart.module.css";

export default function PostsChart({ data, isOverview }) {
  const chartData = data || [
    { date: "Seg", posts: 12 },
    { date: "Ter", posts: 19 },
    { date: "Qua", posts: 15 },
    { date: "Qui", posts: 25 },
    { date: "Sex", posts: 22 },
    { date: "Sab", posts: 18 },
    { date: "Dom", posts: 14 },
  ];

  // Estilo para dentro do Overview Card (fundo verde)
  if (isOverview) {
    return (
      <div className={styles.chartContainer}>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorPostsOverview" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="rgba(255,255,255,0.4)" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="rgba(255,255,255,0.1)" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis 
              dataKey="date" 
              stroke="rgba(255,255,255,0.7)"
              tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
            />
            <YAxis 
              stroke="rgba(255,255,255,0.7)"
              tick={{ fill: 'rgba(255,255,255,0.8)', fontSize: 12 }}
              axisLine={{ stroke: 'rgba(255,255,255,0.3)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#ffffff",
                border: "none",
                borderRadius: "12px",
                color: "#1f2937",
                boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
              }}
              labelStyle={{ color: "#47c4ac", fontWeight: 600 }}
            />
            <Area
              type="monotone"
              dataKey="posts"
              stroke="#ffffff"
              strokeWidth={3}
              fill="url(#colorPostsOverview)"
              name="Postagens"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }

  // Estilo padrão (fundo branco)
  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.title}>Postagens por Dia</h2>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={chartData}>
          <defs>
            <linearGradient id="colorPosts" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#84e7d2" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#84e7d2" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
          <YAxis 
            stroke="#6b7280"
            tick={{ fill: '#6b7280', fontSize: 12 }}
          />
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
          <Area
            type="monotone"
            dataKey="posts"
            stroke="#47c4ac"
            strokeWidth={3}
            fill="url(#colorPosts)"
            name="Postagens"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}