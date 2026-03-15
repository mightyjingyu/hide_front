import { useNavigate } from 'react-router-dom'

export default function FindYourTypeIntro() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="self-start p-2 -ml-2 text-primary"
        aria-label="뒤로"
      >
        ←
      </button>
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-sm mx-auto w-full">
        <h1 className="text-xl font-semibold text-primary leading-snug">
          당신의 이상형을 찾아드립니다
        </h1>
        <p className="text-sm text-gray-500 mt-2">성별을 선택해 주세요</p>
        <div className="mt-10 w-full flex flex-col gap-3">
          <button
            type="button"
            onClick={() => navigate('/onboarding/face-preference', { state: { gender: '남성' } })}
            className="w-full py-3.5 border-2 border-primary text-primary rounded-button font-medium text-base hover:bg-surface"
          >
            남성
          </button>
          <button
            type="button"
            onClick={() => navigate('/onboarding/face-preference', { state: { gender: '여성' } })}
            className="w-full py-3.5 border-2 border-primary text-primary rounded-button font-medium text-base hover:bg-surface"
          >
            여성
          </button>
        </div>
      </div>
    </div>
  )
}
