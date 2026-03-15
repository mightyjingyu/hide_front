import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('hide_onboarding_done', 'true')
    localStorage.setItem('hide_setup_done', 'true')
    navigate('/')
  }

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
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">로그인</h1>
        <p className="text-gray-500 mt-1 text-sm">HIDE에 오신 것을 환영해요</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">아이디</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="아이디"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              autoComplete="username"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              autoComplete="current-password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium mt-2"
          >
            로그인
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          계정이 없으신가요?{' '}
          <Link to="/signup" className="text-primary font-medium">회원가입</Link>
        </p>
      </div>
    </div>
  )
}
