
import { useRef } from 'react'
import {
  FiHeart,
  FiHome,
  FiPlusSquare,
  FiSearch,
  FiUser,
  FiChevronLeft,
  FiChevronRight
} from 'react-icons/fi'

import Header from './components/Header'
import Post from './components/Post'
import posts from './data/posts.json'
import './App.css'

function App() {
  const feedRef = useRef(null)

  function navegarCarrossel(direcao) {
    if (!feedRef.current) return

    const primeiroPost = feedRef.current.querySelector('.post')
    const larguraPost = primeiroPost
      ? primeiroPost.getBoundingClientRect().width
      : 700

    feedRef.current.scrollBy({
      left: direcao * (larguraPost + 24),
      behavior: 'smooth'
    })
  }

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="feed-section" aria-label="Publicações">
          <div className="feed-heading">
            <div>
              <span className="feed-eyebrow">Explore</span>
              <h1>Publicações</h1>
              <p>Acompanhe as novidades da sua comunidade.</p>
            </div>

            <div className="carousel-controls">
              <button
                className="carousel-button"
                type="button"
                aria-label="Publicação anterior"
                onClick={() => navegarCarrossel(-1)}
              >
                <FiChevronLeft />
              </button>

              <button
                className="carousel-button"
                type="button"
                aria-label="Próxima publicação"
                onClick={() => navegarCarrossel(1)}
              >
                <FiChevronRight />
              </button>
            </div>
          </div>

          <div className="feed" ref={feedRef}>
            {posts.map((post) => (
              <Post key={post.id} post={post} />
            ))}
          </div>

          <div className="feed-hint">
            <span />
            Deslize para o lado para ver mais publicações
            <span />
          </div>
        </section>
      </main>

      <nav className="mobile-nav" aria-label="Navegação móvel">
        <button type="button" aria-label="Início">
          <FiHome />
        </button>
        <button type="button" aria-label="Pesquisar">
          <FiSearch />
        </button>
        <button type="button" aria-label="Criar publicação">
          <FiPlusSquare />
        </button>
        <button type="button" aria-label="Atividades">
          <FiHeart />
        </button>
        <button type="button" aria-label="Perfil">
          <FiUser />
        </button>
      </nav>
    </div>
  )
}

export default App
