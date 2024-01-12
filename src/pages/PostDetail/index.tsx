import { useCallback, useEffect, useState } from 'react'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import ReactMarkdown from 'react-markdown'
import { useParams } from 'react-router-dom'
import remarkGfm from 'remark-gfm'
import { api } from '../../lib/axios'
import {
  NavButton,
  PostDetailCard,
  PostDetailContainer,
  PostDetailContent,
} from './styles'

interface IPostDetail {
  name: string
  description: string
  createdAt: string
  body: string
}

export function PostDetail() {
  const [post, setPost] = useState<IPostDetail>({} as IPostDetail)
  const { id } = useParams()

  const fetchPost = useCallback(async () => {
    const response = await api.get(
      `/repos/vilmarsitiodigital/github-blog/issues/${id}`,
    )
    const { name, description, created_at: createdAt, body } = response.data
    const newPostObj = {
      name,
      description,
      createdAt: formatDistanceToNow(new Date(createdAt), {
        locale: ptBR,
        addSuffix: true,
      }),
      body,
    }
    setPost(newPostObj)
  }, [id])

  useEffect(() => {
    fetchPost()
  }, [fetchPost])

  return (
    <PostDetailContainer>
      <PostDetailCard>
        <header>
          <NavButton to="/" type="button">
            <i className="fa-solid fa-chevron-left"></i>
            Voltar
          </NavButton>
          <a />
        </header>
        <div>
          <h1>{post.name}</h1>
        </div>
        <footer>
          <span>
            <i className="fa-solid fa-calendar"></i>
            {post.createdAt}
          </span>
          <span>
            <i className="fa-solid fa-comment"></i>
            {post.description}
          </span>
        </footer>
      </PostDetailCard>
      <PostDetailContent>
        <div>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </div>
      </PostDetailContent>
    </PostDetailContainer>
  )
}
