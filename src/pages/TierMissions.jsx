import { useNavigate } from 'react-router-dom'
import { mockUser } from '../data/mock'

const mockMissions = [
  { id: '1', title: '프로필 100% 완성', reward: '+10', done: true },
  { id: '2', title: '첫 대화 시작하기', reward: '+5', done: false },
  { id: '3', title: '커뮤니티 글 작성', reward: '+5', done: false },
]

export default function TierMissions() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">티어 & 미션</h1>
      </header>
      <div className="p-4 max-w-md mx-auto space-y-6">
        <div className="rounded-card bg-surface p-4">
          <p className="text-sm text-gray-500">연결 점수</p>
          <p className="text-2xl font-semibold text-primary mt-1">{mockUser.tier}점</p>
          <div className="h-2 bg-white rounded-full mt-2 overflow-hidden">
            <div className="h-full bg-primary rounded-full" style={{ width: `${mockUser.tier}%` }} />
          </div>
          <p className="text-xs text-gray-500 mt-2">티어가 높을수록 더 많은 매칭 기회가 있어요</p>
        </div>
        <div>
          <h2 className="font-medium text-primary mb-3">미션</h2>
          <ul className="space-y-2">
            {mockMissions.map((m) => (
              <li
                key={m.id}
                className={`flex items-center justify-between p-3 rounded-button ${m.done ? 'bg-surface' : 'bg-white border-2 border-primary/20'}`}
              >
                <span className={m.done ? 'text-gray-500' : 'text-primary'}>{m.title}</span>
                <span className="text-sm font-medium text-primary">+{m.reward}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
