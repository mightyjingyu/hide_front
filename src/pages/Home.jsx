import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockCards } from '../data/mock'

export default function Home() {
  const navigate = useNavigate()
  const [cards, setCards] = useState(mockCards)
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = cards[currentIndex]

  const handlePass = () => {
    if (currentIndex >= cards.length - 1) return
    setCurrentIndex((i) => i + 1)
  }

  const handleLike = () => {
    if (currentIndex >= cards.length - 1) return
    setCurrentIndex((i) => i + 1)
  }

  const handleDirectMessage = () => {
    navigate(`/messages/c1`)
  }

  if (!current) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 bg-surface/30">
        <p className="text-gray-500 text-center">오늘의 추천이 없어요. 잠시 후 다시 확인해 주세요!</p>
        <button
          type="button"
          onClick={() => { setCards(mockCards); setCurrentIndex(0); }}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-button text-sm font-medium"
        >
          새로고침
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-surface/30 pb-4">
      <header className="sticky top-0 z-10 bg-white/95 backdrop-blur border-b-2 border-primary px-4 py-3">
        <h1 className="text-lg font-semibold text-primary">HIDE</h1>
      </header>
      <div className="p-4 max-w-md mx-auto">
        <div
          className="rounded-card overflow-hidden bg-white shadow-card border-2 border-primary/10"
          role="button"
          tabIndex={0}
          onClick={() => navigate(`/profile/${current.id}`)}
          onKeyDown={(e) => e.key === 'Enter' && navigate(`/profile/${current.id}`)}
        >
          <div className="aspect-[3/4] bg-[#f5f0eb] flex items-center justify-center relative overflow-hidden">
            {current.avatarUrl ? (
              <img src={current.avatarUrl} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <span className="text-8xl">👤</span>
            )}
            <div className="absolute top-3 right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.08)] border border-black/5 text-right">
              <span className="text-[10px] font-semibold text-primary leading-tight">
                이상형<br />일치도
              </span>
              <span className="text-lg font-semibold text-primary tabular-nums">{current.compatibility}%</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary">{current.nickname}, {current.age}</h2>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              💬 {current.intro}
            </p>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">📍 {current.region ?? current.distance}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {current.interests.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-surface rounded-full text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-6 mt-8 px-2">
          <button
            type="button"
            onClick={handlePass}
            className="flex flex-col items-center gap-1.5 group"
            aria-label="넘기기"
          >
            <span className="w-14 h-14 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center text-primary text-xl font-bold shadow-card group-hover:border-red-400 group-hover:bg-red-50 transition-colors">
              ✕
            </span>
            <span className="text-xs font-medium text-primary">넘기기</span>
          </button>
          <button
            type="button"
            onClick={handleLike}
            className="flex flex-col items-center gap-1.5 group"
            aria-label="좋아요"
          >
            <span className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center text-white text-3xl shadow-card group-hover:bg-emerald-600 transition-colors">
              ♥
            </span>
            <span className="text-xs font-medium text-primary">좋아요</span>
          </button>
          <button
            type="button"
            onClick={handleDirectMessage}
            className="flex flex-col items-center gap-1.5 group"
            aria-label="다이렉트 메시지"
          >
            <span className="w-14 h-14 rounded-full bg-white border-2 border-primary/30 flex items-center justify-center text-primary shadow-card group-hover:border-primary group-hover:bg-surface transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </span>
            <span className="text-xs font-medium text-primary">메시지</span>
          </button>
        </div>
      </div>
    </div>
  )
}
