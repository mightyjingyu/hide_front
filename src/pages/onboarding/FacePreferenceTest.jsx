import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TOTAL_ROUNDS = 10

// 2지선다용 플레이스홀더 이미지 영역 (이상형 월드컵 스타일)
const ChoiceCard = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="aspect-[3/4] rounded-card bg-surface border-2 border-primary/20 hover:border-primary flex flex-col items-center justify-center transition-colors"
  >
    <span className="text-6xl mb-2">👤</span>
    <span className="text-sm text-primary font-medium">{label}</span>
  </button>
)

export default function FacePreferenceTest() {
  const navigate = useNavigate()
  const [round, setRound] = useState(0)
  const [choices, setChoices] = useState([])

  const progress = ((round + 1) / TOTAL_ROUNDS) * 100

  const handleChoice = (choice) => {
    const next = [...choices, choice]
    setChoices(next)
    if (round + 1 >= TOTAL_ROUNDS) {
      navigate('/onboarding/preference-result', { state: { choices: next } })
      return
    }
    setRound(round + 1)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex items-center justify-between py-4">
        <button type="button" onClick={() => navigate(-1)} className="p-2 text-primary" aria-label="뒤로">←</button>
        <span className="text-sm font-medium text-primary">{round + 1} / {TOTAL_ROUNDS}</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden mb-6">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h1 className="text-xl font-semibold text-primary text-center mb-1">당신의 선택은?</h1>
      <p className="text-gray-500 text-sm text-center mb-6">더 마음에 드는 쪽을 선택해 주세요</p>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <ChoiceCard label="A" onClick={() => handleChoice('A')} />
        <ChoiceCard label="B" onClick={() => handleChoice('B')} />
      </div>
    </div>
  )
}
