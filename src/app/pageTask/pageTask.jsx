'use client';

import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import SideHeader from '../../components/sideHeader';
import ProgressCard from '../../components/ProgressCard';
import { fetchInfluencerTasks } from '../../data/mockData';
import styles from './pageTask.module.css';

const PageTask = () => {
  const [tasks, setTasks] = useState({ instagram: [], twitter: [], linkedin: [] });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState('');

  useEffect(() => {
    const loadTasks = async () => {

      try {
        setLoading(true);
        const tasksData = await fetchInfluencerTasks();
        setTasks(tasksData);
      } catch (error) {
        console.error('Erro ao carregar tasks:', error);
      } finally {
        setLoading(false);
      }
    };

    loadTasks();
  }, []);

  const scrollCards = (direction, section) => {
    const container = document.getElementById(`cards-${section}`);
    if (container) {
      const scrollAmount = 300; // pixels para scroll
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleCreateNewPost = (platform) => {
    setSelectedPlatform(platform);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPlatform('');
  };

  const handleSubmitPost = async (postData) => {
    // Aqui seus amigos irão implementar o fetch para a API
    console.log('Dados do post a serem enviados:', postData);
    console.log('Plataforma:', selectedPlatform);
    
    /* Exemplo de como ficará a chamada API:
    try {
      const response = await fetch('URL_DA_API/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Adicionar token de autenticação se necessário
        },
        body: JSON.stringify(postData)
      });
      
      if (response.ok) {
        const result = await response.json();
        alert('Post criado com sucesso!');
        handleCloseModal();
      } else {
        alert('Erro ao criar post');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao criar post');
    }
    */
    
    // Feedback visual temporário
    alert(`Post criado com sucesso para ${selectedPlatform}!\n\nDados:\n${JSON.stringify(postData, null, 2)}`);
    handleCloseModal();
  };

  if (loading) {
    return (
      <>
        <Header />
        <SideHeader />
        <div className={styles.container}>
          <div className={styles.loading}>Carregando tarefas...</div>
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <SideHeader />
      <div className={styles.container}>
        {/* Seção Instagram */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Instagram</h2>
            <div className={styles.sectionControls}>
              <button 
                className={styles.createButton}
                onClick={() => handleCreateNewPost('instagram')}
              >
                + Novo Post
              </button>
              <div className={styles.sectionNavigation}>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('left', 'instagram')}
                >
                  <span>❮</span>
                </button>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('right', 'instagram')}
                >
                  <span>❯</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.cardsGrid} id="cards-instagram">
            {tasks.instagram.map((task) => (
              <ProgressCard
                key={task.id}
                image={task.image}
                title={task.title}
                category={task.category}
                progress={task.progress}
                timeLeft={task.timeLeft}
                daysLeft={task.daysLeft}
                teamMembers={task.teamMembers}
                platform="instagram"
              />
            ))}
          </div>
        </section>

        {/* Seção Twitter */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Twitter</h2>
            <div className={styles.sectionControls}>
              <button 
                className={styles.createButton}
                onClick={() => handleCreateNewPost('twitter')}
              >
                + Novo Post
              </button>
              <div className={styles.sectionNavigation}>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('left', 'twitter')}
                >
                  <span>❮</span>
                </button>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('right', 'twitter')}
                >
                  <span>❯</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.cardsGrid} id="cards-twitter">
            {tasks.twitter.map((task) => (
              <ProgressCard
                key={task.id}
                image={task.image}
                title={task.title}
                category={task.category}
                progress={task.progress}
                timeLeft={task.timeLeft}
                daysLeft={task.daysLeft}
                teamMembers={task.teamMembers}
                platform="twitter"
              />
            ))}
          </div>
        </section>

        {/* Seção LinkedIn */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>LinkedIn</h2>
            <div className={styles.sectionControls}>
              <button 
                className={styles.createButton}
                onClick={() => handleCreateNewPost('linkedin')}
              >
                + Novo Post
              </button>
              <div className={styles.sectionNavigation}>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('left', 'linkedin')}
                >
                  <span>❮</span>
                </button>
                <button 
                  className={styles.navButton}
                  onClick={() => scrollCards('right', 'linkedin')}
                >
                  <span>❯</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className={styles.cardsGrid} id="cards-linkedin">
            {tasks.linkedin.map((task) => (
              <ProgressCard
                key={task.id}
                image={task.image}
                title={task.title}
                category={task.category}
                progress={task.progress}
                timeLeft={task.timeLeft}
                daysLeft={task.daysLeft}
                teamMembers={task.teamMembers}
                platform="linkedin"
              />
            ))}
          </div>
        </section>
      </div>

      {/* Modal para criar novo post */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={handleCloseModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h2>Criar Novo Post - {selectedPlatform.charAt(0).toUpperCase() + selectedPlatform.slice(1)}</h2>
              <button className={styles.closeButton} onClick={handleCloseModal}>
                ✕
              </button>
            </div>
            <CreatePostForm 
              platform={selectedPlatform} 
              onSubmit={handleSubmitPost}
              onCancel={handleCloseModal}
            />
          </div>
        </div>
      )}
    </>
  );
};

// Componente do formulário de criação de post
const CreatePostForm = ({ platform, onSubmit, onCancel }) => {
  const [postData, setPostData] = useState({
    content: '',
    imageUrl: '',
    scheduledAt: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!postData.content.trim()) {
      alert('Por favor, preencha o conteúdo do post.');
      return;
    }
    
    // Pegar o userId do usuário logado (pode vir do localStorage, context, etc)
    const userId = localStorage.getItem('userId') || 1; // fallback para 1 se não tiver
    
    const postPayload = {
      content: postData.content,
      imageUrl: postData.imageUrl || 'https://picsum.photos/1080/1080',
      scheduledAt: postData.scheduledAt,
      userId: parseInt(userId)
    };
    
    onSubmit(postPayload);
  };

  return (
    <form className={styles.postForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="content">Conteúdo do Post*</label>
        <textarea
          id="content"
          name="content"
          value={postData.content}
          onChange={handleInputChange}
          placeholder="Escreva o conteúdo do seu post... Ex: Novo produto lançado! 🚀"
          rows={5}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="imageUrl">URL da Imagem</label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={postData.imageUrl}
          onChange={handleInputChange}
          placeholder="https://exemplo.com/imagem.jpg (opcional)"
        />
        <small style={{ color: '#6b7280', fontSize: '12px', marginTop: '4px', display: 'block' }}>
          Deixe em branco para usar uma imagem padrão
        </small>
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="scheduledAt">Data de Agendamento*</label>
        <input
          type="date"
          id="scheduledAt"
          name="scheduledAt"
          value={postData.scheduledAt}
          onChange={handleInputChange}
          min={new Date().toISOString().split('T')[0]}
          required
        />
      </div>

      <div className={styles.formActions}>
        <button type="button" className={styles.cancelButton} onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit" className={styles.submitButton}>
          Criar Post
        </button>
      </div>
    </form>
  );
};

export default PageTask;
