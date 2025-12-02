"use client";
import styles from "./DashboardStats.module.css";
import dashboardStyles from "@/app/dashboard/dashboard.module.css";

export default function DashboardStats({ stats, variant = "default" }) {
  const statsData = [
    {
      icon: "📊",
      value: stats?.totalPosts ?? 0,
      label: "Total",
    },
    {
      icon: "🔗",
      value: stats?.totalAccounts ?? 0,
      label: "Contas",
    },
    {
      icon: "📅",
      value: stats?.scheduledPosts ?? 0,
      label: "Agendadas",
    },
    {
      icon: "✅",
      value: stats?.publishedPosts ?? 0,
      label: "Publicadas",
    },
  ];

  // Variante Overview - Mini cards dentro do card principal
  if (variant === "overview") {
    return (
      <>
        {statsData.map((stat, index) => (
          <div key={index} className={dashboardStyles.miniStatCard}>
            <div className={dashboardStyles.miniStatIcon}>{stat.icon}</div>
            <p className={dashboardStyles.miniStatValue}>{stat.value}</p>
            <p className={dashboardStyles.miniStatLabel}>{stat.label}</p>
          </div>
        ))}
      </>
    );
  }

  // Variante padrão
  return (
    <div className={styles.statsContainer}>
      {statsData.map((stat, index) => (
        <div key={index} className={styles.statCard}>
          <div className={styles.statIcon}>{stat.icon}</div>
          <div className={styles.statInfo}>
            <p className={styles.statValue}>{stat.value}</p>
            <p className={styles.statLabel}>{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}