import { useNavigate } from 'react-router-dom'
import { mockUser } from '../data/mock'

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-surface/30">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3">
        <h1 className="text-lg font-semibold text-primary">HIDE</h1>
      </header>
      <div className="p-4 max-w-md mx-auto">
        <div className="rounded-card overflow-hidden bg-white shadow-card border-2 border-primary/10">
          <div className="aspect-[3/4] bg-[#f5f0eb] flex items-center justify-center relative overflow-hidden">
            {mockUser.avatarUrl ? (
              <img src={mockUser.avatarUrl} alt="" className="w-full h-full object-cover object-top" />
            ) : (
              <span className="text-8xl">👤</span>
            )}
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-primary">{mockUser.nickname}, {mockUser.age}</h2>
            <p className="text-sm text-gray-600 mt-1 flex items-center gap-1">
              💬 {mockUser.intro}
            </p>
            <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">📍 {mockUser.region}</p>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {mockUser.interests.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-surface rounded-full text-xs text-primary">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        <nav className="mt-6 rounded-card bg-white shadow-card overflow-hidden">
          <button
            type="button"
            onClick={() => navigate('/profile/edit')}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface/50 border-b border-primary/10"
          >
            <span className="text-primary">프로필 수정</span>
            <span className="text-gray-400">›</span>
          </button>
          <button
            type="button"
            onClick={() => navigate('/support')}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface/50"
          >
            <span className="text-primary">고객지원</span>
            <span className="text-gray-400">›</span>
          </button>
        </nav>
      </div>
    </div>
  )
}
