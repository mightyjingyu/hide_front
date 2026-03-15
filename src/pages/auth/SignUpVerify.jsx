import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SignUpVerify() {
  const navigate = useNavigate()
  const location = useLocation()
  const [code, setCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/setup/avatar')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="self-start p-2 -ml-2 text-gray-600"
        aria-label="뒤로"
      >
        ←
      </button>
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">인증 코드 입력</h1>
        <p className="text-gray-500 mt-1 text-sm">
          {location.state?.userId || '가입한 아이디'}로 전송된 6자리 코드를 입력하세요
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="000000"
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button text-center text-lg tracking-widest focus:border-primary"
            maxLength={6}
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium"
          >
            가입 완료
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          코드가 오지 않았나요? <button type="button" className="text-primary font-medium">다시 받기</button>
        </p>
      </div>
    </div>
  )
}
