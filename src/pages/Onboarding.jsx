import { useNavigate } from 'react-router-dom'

export default function Onboarding() {
  const navigate = useNavigate()

  const handleStart = () => {
    navigate('/onboarding/find-type')
  }

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-card shadow-card border-2 border-primary p-6 relative">
        <button
          type="button"
          onClick={() => navigate('/login')}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-primary"
          aria-label="닫기"
        >
          ✕
        </button>
        <h1 className="text-center text-lg font-medium text-primary pt-2">HIDE</h1>
        <div className="mt-6 text-center">
          <p className="text-xl font-semibold text-primary leading-tight">
            얼굴은 숨기고
          </p>
          <p className="text-xl font-semibold text-primary leading-tight mt-1">
            이상형은 찾는다
          </p>
        </div>
        <button
          type="button"
          onClick={handleStart}
          className="mt-8 w-full py-3.5 bg-primary text-white rounded-button font-medium text-base"
        >
          시작하기
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          이미 계정이 있으신가요?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="text-primary font-semibold underline underline-offset-2"
          >
            로그인
          </button>
        </p>
      </div>
    </div>
  )
}
