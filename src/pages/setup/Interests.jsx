import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../../hooks/useOnboarding'
import { interestCategories } from '../../data/mock'

const MAX_SELECTION = 7

export default function Interests() {
  const navigate = useNavigate()
  const { completeOnboarding, completeSetup } = useOnboarding()
  const [selected, setSelected] = useState([])
  const [search, setSearch] = useState('')

  const toggle = (tag) => {
    setSelected((prev) => {
      if (prev.includes(tag)) return prev.filter((t) => t !== tag)
      if (prev.length >= MAX_SELECTION) return prev
      return [...prev, tag]
    })
  }

  const filteredCategories = useMemo(() => {
    if (!search.trim()) return interestCategories
    const q = search.trim().toLowerCase()
    return interestCategories
      .map((cat) => ({
        ...cat,
        tags: cat.tags.filter((t) => t.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.tags.length > 0)
  }, [search])

  const handleComplete = () => {
    localStorage.setItem('hide_onboarding_done', 'true')
    localStorage.setItem('hide_setup_done', 'true')
    completeOnboarding()
    completeSetup()
    window.location.href = '/'
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3 flex items-center justify-between">
        <button type="button" onClick={() => navigate(-1)} className="w-10 h-10 flex items-center justify-center text-primary rounded-full hover:bg-surface" aria-label="닫기">
          ✕
        </button>
        <button type="button" onClick={handleComplete} className="w-10 h-10 flex items-center justify-center text-primary rounded-full hover:bg-surface font-medium" aria-label="완료">
          ✓
        </button>
      </header>
      <div className="flex-1 p-4 max-w-md mx-auto w-full pb-8">
        <h1 className="text-2xl font-semibold text-primary">관심사 (선택사항)</h1>
        <p className="text-primary font-medium mt-1 text-sm">{selected.length}/{MAX_SELECTION}</p>
        <p className="text-gray-600 text-sm mt-2">
          프로필에 최대 7개의 관심사를 추가 하세요
        </p>
        <div className="mt-4">
          <div className="flex items-center gap-2 px-4 py-2.5 bg-surface rounded-button border-2 border-primary/10">
            <span className="text-gray-500 text-lg">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="검색"
              className="flex-1 bg-transparent text-primary placeholder-gray-400 text-sm outline-none"
            />
          </div>
        </div>
        <div className="mt-6 space-y-6">
          {filteredCategories.map((cat) => (
            <section key={cat.id}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{cat.icon}</span>
                <h2 className="text-base font-semibold text-primary">{cat.title}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggle(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-colors ${
                      selected.includes(tag)
                        ? 'bg-primary text-white border-primary'
                        : 'bg-white text-primary border-primary/20 hover:border-primary/40'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>
        <button
          type="button"
          onClick={handleComplete}
          className="w-full py-3.5 bg-primary text-white rounded-button font-medium mt-8"
        >
          완료
        </button>
      </div>
    </div>
  )
}
