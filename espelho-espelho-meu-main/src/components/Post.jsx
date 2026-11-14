
import { useState } from 'react'
import {
  FiBookmark,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
  FiSend
} from 'react-icons/fi'

function Post({ post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const likes = Number(post.likes) + (liked ? 1 : 0)

  function handleLike() {
    setLiked(!liked)
  }

  function handleSave() {
    setSaved(!saved)
  }

  return (
    <article className="post">

      <header className="post__header">
        <img
          className="post__avatar"
          src={post.avatar}
          alt={`Foto de ${post.user}`}
        />

        <div className="post__user">
          <strong>{post.user}</strong>
          <span>{post.location}</span>
        </div>

        <button
          className="icon-button post__more"
          type="button"
          aria-label="Mais opções"
        >
          <FiMoreHorizontal />
        </button>
      </header>

      <img
        className="post__image"
        src={post.image}
        alt={post.alt}
      />

      <div className="post__content">

        <div className="post__actions">

          <button
            className="icon-button"
            type="button"
            aria-label={liked ? 'Descurtir' : 'Curtir'}
            aria-pressed={liked}
            onClick={handleLike}
          >
            <FiHeart
              color={liked ? '#4b0658' : 'currentColor'}
              fill={liked ? '#310e3f' : 'none'}
            />
          </button>

          <button
            className="icon-button"
            type="button"
            aria-label="Comentar"
          >
            <FiMessageCircle />
          </button>

          <button
            className="icon-button"
            type="button"
            aria-label="Enviar"
          >
            <FiSend />
          </button>

          <button
            className="icon-button"
            type="button"
            aria-label={saved ? 'Remover dos salvos' : 'Salvar'}
            aria-pressed={saved}
            onClick={handleSave}
          >
            <FiBookmark
              fill={saved ? 'currentColor' : 'none'}
            />
          </button>

        </div>

        <p className="post__likes">
          <strong>{likes} curtidas</strong>
        </p>

        <p className="post__caption">
          <strong>{post.user}</strong> {post.caption}
        </p>

      </div>
    </article>
  )
}

export default Post
