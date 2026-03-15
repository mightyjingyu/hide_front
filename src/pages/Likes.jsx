import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockCards } from '../data/mock'

const mockLikedByMe = mockCards.slice(0, 2)
const mockLikedMe = mockCards.slice(1, 3)

export default function Likes() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('liked') // 'liked' | 'likedMe'

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary mt-1">좋아요</h1>
        <div className="flex gap-2 mt-4 border-b-2 border-primary/20">
          <button
            type="button"
            onClick={() => setTab('liked')}
            className={`pb-2 px-2 text-sm font-medium ${tab === 'liked' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            내가 좋아요 한 사람
          </button>
          <button
            type="button"
            onClick={() => setTab('likedMe')}
            className={`pb-2 px-2 text-sm font-medium ${tab === 'likedMe' ? 'text-primary border-b-2 border-primary' : 'text-gray-500'}`}
          >
            나를 좋아요 한 사람
          </button>
        </div>
      </header>
      <div className="p-4 grid grid-cols-2 gap-3">
        {(tab === 'liked' ? mockLikedByMe : mockLikedMe).map((user) => (
          <button
            key={user.id}
            type="button"
            onClick={() => navigate(`/profile/${user.id}`)}
            className="rounded-card overflow-hidden bg-surface aspect-[3/4] flex flex-col items-center justify-center shadow-card"
          >
            <span className="text-5xl mb-2">👤</span>
            <span className="font-medium text-primary">{user.nickname}, {user.age}</span>
            <span className="text-xs text-gray-500">{user.region ?? user.distance}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
