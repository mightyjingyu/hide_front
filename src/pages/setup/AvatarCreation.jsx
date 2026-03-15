import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LOADING_SECONDS = 2.5

export default function AvatarCreation() {
  const navigate = useNavigate()
  const [step, setStep] = useState('upload') // 'upload' | 'loading' | 'result'

  const handlePhotoUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) setStep('loading')
  }

  useEffect(() => {
    if (step !== 'loading') return
    const t = setTimeout(() => setStep('result'), LOADING_SECONDS * 1000)
    return () => clearTimeout(t)
  }, [step])

  const handleNext = () => {
    navigate('/setup/hand')
  }

  if (step === 'loading') {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-primary font-medium mt-6">아바타를 생성하고 있어요</p>
        <p className="text-gray-500 text-sm mt-1">잠시만 기다려 주세요</p>
      </div>
    )
  }

  if (step === 'result') {
    return (
      <div className="min-h-screen bg-white flex flex-col p-6">
        <div className="flex-1 flex flex-col items-center justify-center max-w-sm mx-auto w-full">
          <p className="text-primary font-semibold text-lg mb-4">당신의 아바타입니다</p>
          <div className="rounded-card bg-surface border-2 border-primary/10 w-full aspect-square max-w-[280px] flex items-center justify-center">
            <span className="text-8xl">👤</span>
          </div>
          <p className="text-gray-600 text-sm mt-4 text-center">
            남들에게 보여질 때 이상형 부합도가 <span className="font-semibold text-primary">85%~95%</span> 사이로 보여져요
          </p>
          <button
            type="button"
            onClick={handleNext}
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium mt-10"
          >
            다음
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button type="button" onClick={() => navigate(-1)} className="self-start p-2 -ml-2 text-primary" aria-label="뒤로">←</button>
      <div className="flex-1 max-w-sm mx-auto w-full flex flex-col justify-center">
        <h1 className="text-2xl font-semibold text-primary">내 아바타 만들기</h1>
        <p className="text-gray-600 mt-1 text-sm">사진을 업로드 하면 AI가 아바타를 만들어 드려요</p>
        <p className="text-gray-500 mt-0.5 text-xs">(아바타 제작 후 사진은 자동 삭제 됩니다)</p>
        <div className="mt-8">
          <div className="rounded-card border-2 border-dashed border-primary/30 p-8 text-center bg-surface/50">
            <p className="text-gray-500 text-sm">얼굴 사진을 업로드해 주세요</p>
            <label className="mt-4 inline-block px-4 py-2 bg-surface text-primary text-sm font-medium rounded-button cursor-pointer">
              사진 선택
              <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}
