import { useParams, useNavigate } from 'react-router-dom'
import { mockCards, mockUser } from '../data/mock'

export default function ProfileView() {
  const { userId } = useParams()
  const navigate = useNavigate()
  const user = mockCards.find((c) => c.id === userId) || mockCards[0]

  return (
    <div className="min-h-screen bg-surface/30">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary flex-1">프로필</h1>
      </header>
      <div className="max-w-md mx-auto">
        <div className="rounded-card overflow-hidden bg-white shadow-card border-2 border-primary/10 m-4">
          <div className="aspect-[3/4] bg-[#f5f0eb] flex items-center justify-center relative overflow-hidden">
            {user.avatarUrl ? (
              <img src={user.avatarUrl} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <span className="text-8xl">👤</span>
            )}
            <div className="absolute top-2 right-2 sm:top-3 sm:right-3 flex items-center gap-2 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-white/40 backdrop-blur-md border border-white/60 text-right shadow-[0_4px_24px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]">
              <span className="text-[10px] sm:text-xs font-medium text-primary leading-tight tracking-tight">이상형 부합도</span>
              <span className="text-sm sm:text-base font-bold text-primary tabular-nums">{user.compatibility}%</span>
            </div>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary">{user.nickname}, {user.age}</h2>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">💬 {user.intro}</p>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">📍 {user.region ?? user.distance}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {user.interests.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-surface rounded-full text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
