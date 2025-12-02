"use client";
import { useState } from "react";
import styles from "./MiniCalendar.module.css";

export default function MiniCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const today = new Date();

  const daysOfWeek = ["D", "S", "T", "Q", "Q", "S", "S"];
  const months = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();

    const days = [];

    // Dias vazios antes do primeiro dia do mês
    for (let i = 0; i < startingDay; i++) {
      days.push({ day: null, isCurrentMonth: false });
    }

    // Dias do mês
    for (let i = 1; i <= daysInMonth; i++) {
      const isToday =
        i === today.getDate() &&
        date.getMonth() === today.getMonth() &&
        date.getFullYear() === today.getFullYear();

      days.push({
        day: i,
        isCurrentMonth: true,
        isToday,
      });
    }

    return days;
  };

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className={styles.calendar}>
      {/* Header do Calendário */}
      <div className={styles.header}>
        <div className={styles.monthYear}>
          <span className={styles.month}>{months[currentDate.getMonth()]}</span>
          <span className={styles.year}>{currentDate.getFullYear()}</span>
        </div>
        <div className={styles.navigation}>
          <button 
            className={styles.navBtn} 
            onClick={goToPreviousMonth}
            aria-label="Mês anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button 
            className={styles.todayBtn} 
            onClick={goToToday}
            aria-label="Ir para hoje"
          >
            Hoje
          </button>
          <button 
            className={styles.navBtn} 
            onClick={goToNextMonth}
            aria-label="Próximo mês"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Dias da Semana */}
      <div className={styles.weekDays}>
        {daysOfWeek.map((day, index) => (
          <div key={index} className={styles.weekDay}>
            {day}
          </div>
        ))}
      </div>

      {/* Grid de Dias */}
      <div className={styles.daysGrid}>
        {days.map((dayObj, index) => (
          <div
            key={index}
            className={`
              ${styles.day}
              ${!dayObj.isCurrentMonth ? styles.dayEmpty : ""}
              ${dayObj.isToday ? styles.dayToday : ""}
            `}
          >
            {dayObj.day && (
              <span className={styles.dayNumber}>{dayObj.day}</span>
            )}
          </div>
        ))}
      </div>

      {/* Footer - Data de Hoje */}
      <div className={styles.footer}>
        <div className={styles.todayInfo}>
          <div className={styles.todayDot}></div>
          <span>
            Hoje: {today.getDate()} de {months[today.getMonth()]}
          </span>
        </div>
      </div>
    </div>
  );
}