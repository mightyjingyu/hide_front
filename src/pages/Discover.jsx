import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockOnline, mockLikedMe } from '../data/mock'

export default function Discover() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('online') // 'online' | 'likedMe'
  const list = tab === 'online' ? mockOnline : mockLikedMe

  return (
    <div className="min-h-screen bg-surface/30">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3">
        <h1 className="text-lg font-semibold text-primary">탐색</h1>
        <div className="flex gap-0 mt-3 rounded-button overflow-hidden border-2 border-primary/20">
          <button
            type="button"
            onClick={() => setTab('online')}
            className={`flex-1 py-2.5 text-sm font-medium ${tab === 'online' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            현재 접속
          </button>
          <button
            type="button"
            onClick={() => setTab('likedMe')}
            className={`flex-1 py-2.5 text-sm font-medium ${tab === 'likedMe' ? 'bg-primary text-white' : 'bg-white text-primary'}`}
          >
            나한테 좋아요를 보낸 사람
          </button>
        </div>
      </header>
      <div className="p-4">
        {list.length === 0 ? (
          <p className="text-center text-gray-500 py-12">
            {tab === 'online' ? '현재 접속 중인 사람이 없어요.' : '나한테 좋아요를 보낸 사람이 없어요.'}
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {list.map((user) => (
              <button
                key={user.id}
                type="button"
                onClick={() => navigate(`/profile/${user.id}`)}
                className="rounded-card overflow-hidden bg-white shadow-card border border-primary/20 text-left"
              >
                <div className="aspect-[3/4] bg-gradient-to-b from-emerald-100 to-emerald-50 flex items-center justify-center relative">
                  <span className="text-6xl">👤</span>
                  {tab === 'online' && user.isOnline && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </div>
                <div className="p-3">
                  <p className="font-medium text-primary">{user.nickname}, {user.age}</p>
                  <p className="text-xs text-gray-500">{user.region ?? user.distance} · 궁합 {user.compatibility}%</p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
