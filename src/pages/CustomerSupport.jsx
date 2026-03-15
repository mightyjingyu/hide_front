import { useNavigate } from 'react-router-dom'

const menu = [
  { path: '/support/help', label: '자주 묻는 질문' },
  { path: '/support/inquiry', label: '문의하기' },
]

export default function CustomerSupport() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">고객지원</h1>
      </header>
      <nav className="p-4 max-w-md mx-auto">
        <ul className="rounded-card bg-white shadow-card border-2 border-primary/10 overflow-hidden divide-y divide-primary/10">
          {menu.map((item) => (
            <li key={item.path}>
              <button
                type="button"
                onClick={() => navigate(item.path)}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-surface/50 text-primary"
              >
                <span>{item.label}</span>
                <span className="text-gray-400">›</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
