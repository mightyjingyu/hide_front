import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../../hooks/useOnboarding'

const TOTAL_STEPS = 12
const questions = [
  { label: '눈 모양', left: 'A', right: 'B' },
  { label: '얼굴형', left: 'A', right: 'B' },
  { label: '피부톤', left: 'A', right: 'B' },
  { label: '헤어스타일', left: 'A', right: 'B' },
  { label: '앞머리', left: 'A', right: 'B' },
  { label: '코 모양', left: 'A', right: 'B' },
  { label: '눈썹', left: 'A', right: 'B' },
  { label: '입술', left: 'A', right: 'B' },
  { label: '턱선', left: 'A', right: 'B' },
  { label: '전체 인상', left: 'A', right: 'B' },
  { label: '스타일', left: 'A', right: 'B' },
  { label: '분위기', left: 'A', right: 'B' },
]

export default function FacePreferenceTest() {
  const navigate = useNavigate()
  const [step, setStep] = useState(0)
  const [choices, setChoices] = useState([])

  const current = questions[step]
  const progress = ((step + 1) / TOTAL_STEPS) * 100

  const handleChoice = (choice) => {
    const next = [...choices, choice]
    setChoices(next)
    if (step + 1 >= TOTAL_STEPS) {
      navigate('/setup/hand-verification')
      return
    }
    setStep(step + 1)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-4">
      <div className="flex items-center justify-between py-4">
        <button type="button" onClick={() => navigate(-1)} className="p-2 text-gray-600" aria-label="뒤로">←</button>
        <span className="text-sm text-gray-500">{step + 1} / {TOTAL_STEPS}</span>
      </div>
      <div className="h-1.5 bg-surface rounded-full overflow-hidden mb-6">
        <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <h1 className="text-xl font-semibold text-primary text-center mb-2">얼굴 선호도 테스트</h1>
      <p className="text-gray-500 text-sm text-center mb-8">어떤 스타일이 더 마음에 드나요?</p>
      <p className="text-center font-medium text-primary mb-6">{current.label}</p>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <button
          type="button"
          onClick={() => handleChoice('A')}
          className="aspect-[3/4] rounded-card bg-surface border-2 border-transparent hover:border-primary flex items-center justify-center"
        >
          <span className="text-6xl">👤</span>
        </button>
        <button
          type="button"
          onClick={() => handleChoice('B')}
          className="aspect-[3/4] rounded-card bg-surface border-2 border-transparent hover:border-primary flex items-center justify-center"
        >
          <span className="text-6xl">👤</span>
        </button>
      </div>
      <p className="text-center text-xs text-gray-400 mt-4">A 선택 · B 선택</p>
    </div>
  )
}
