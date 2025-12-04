"use client";

import { useState, useEffect } from "react";
import styles from "./header.module.css";
import { fetchWithAuth } from "@/config/api";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const loadUserData = async () => {
      try {
        // Pegar nome do usuário do localStorage
        const userStr = localStorage.getItem("user");
        if (userStr) {
          const user = JSON.parse(userStr);
          const name = user.name || user.username;
          if (name) {
            setUserName(name);
          }
        }

        // Buscar a imagem do influencer/conta social
        const response = await fetchWithAuth('/social-accounts');
        if (response.ok) {
          const accounts = await response.json();
          console.log('Contas sociais recebidas:', accounts);
          
          if (Array.isArray(accounts) && accounts.length > 0) {
            // Usar a primeira conta ou buscar pelo nome do usuário
            const userStr2 = localStorage.getItem("user");
            const userName = userStr2 ? JSON.parse(userStr2).name : null;
            
            const account = userName 
              ? accounts.find(acc => acc.name?.toLowerCase().includes(userName.toLowerCase()))
              : accounts[0];
            
            console.log('Conta selecionada:', account);
            
            if (account && account.imageUrl) {
              console.log('✅ Imagem encontrada:', account.imageUrl);
              setUserAvatar(account.imageUrl);
            }
          }
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    loadUserData();
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.leftSection}>
        <h2 className={styles.title}>{userName ? `Olá, ${userName}` : "Olá"}</h2>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search Task"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <div className={styles.headerContent}>
          <button className={styles.filterButton}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
            </svg>
            <span>Category</span>
          </button>

          <button className={styles.filterButton}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
            <span>Sort By: Deadline</span>
          </button>

          <button className={styles.iconButton}>
            <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
          </button>

          <button className={styles.iconButton}>
            {userAvatar ? (
              <img 
                src={userAvatar} 
                alt={userName || 'User'} 
                className={styles.userAvatar}
                onError={(e) => {
                  // Se a imagem falhar ao carregar, mostra o ícone padrão
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
            ) : null}
            <svg 
              className={styles.icon} 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ display: userAvatar ? 'none' : 'block' }}
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="2.5" fill="white" />
              <path d="M12 15c-2 0-3 1-3 2v2h6v-2c0-1-1-2-3-2" fill="white" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
