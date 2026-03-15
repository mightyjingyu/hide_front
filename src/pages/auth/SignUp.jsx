import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()
  const [userId, setUserId] = useState('')
  const [idChecked, setIdChecked] = useState(false)
  const [idCheckMessage, setIdCheckMessage] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [agree1, setAgree1] = useState(false)
  const [agree2, setAgree2] = useState(false)
  const [agree3, setAgree3] = useState(false)

  const passwordMatch = !passwordConfirm || password === passwordConfirm

  const handleIdCheck = () => {
    const id = userId.trim()
    if (!id) {
      setIdCheckMessage('아이디를 입력해 주세요')
      setIdChecked(false)
      return
    }
    if (id.length < 2) {
      setIdCheckMessage('2자 이상 입력해 주세요')
      setIdChecked(false)
      return
    }
    const takenIds = ['admin', 'test', 'hide']
    if (takenIds.includes(id.toLowerCase())) {
      setIdCheckMessage('이미 사용 중인 아이디예요')
      setIdChecked(false)
      return
    }
    setIdCheckMessage('사용 가능해요')
    setIdChecked(true)
  }

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
    setIdChecked(false)
    setIdCheckMessage('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/signup/profile-info', { state: { userId, password } })
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
        <h1 className="text-2xl font-semibold text-primary">회원가입</h1>
        <p className="text-gray-500 mt-1 text-sm">아이디와 비밀번호를 입력하고 약관에 동의해 주세요</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">아이디</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={userId}
                onChange={handleUserIdChange}
                placeholder="아이디"
                className="flex-1 px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              />
              <button
                type="button"
                onClick={handleIdCheck}
                className="px-4 py-3 border-2 border-primary text-primary rounded-button font-medium text-sm whitespace-nowrap"
              >
                중복 확인
              </button>
            </div>
            {idCheckMessage && (
              <p className={`text-xs mt-1 ${idChecked ? 'text-primary' : 'text-red-500'}`}>
                {idCheckMessage}
              </p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">비밀번호 확인</label>
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              placeholder="비밀번호 확인"
              className={`w-full px-4 py-3 border-2 rounded-button focus:border-primary ${passwordConfirm && !passwordMatch ? 'border-red-500' : 'border-primary/30'}`}
            />
            {passwordConfirm && !passwordMatch && (
              <p className="text-red-500 text-xs mt-1">비밀번호가 일치하지 않습니다</p>
            )}
          </div>
          <div className="space-y-3 pt-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agree1}
                onChange={(e) => setAgree1(e.target.checked)}
                className="rounded border-2 border-primary/40 accent-primary"
              />
              <span className="text-sm text-primary">이용약관 동의 (필수)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agree2}
                onChange={(e) => setAgree2(e.target.checked)}
                className="rounded border-2 border-primary/40 accent-primary"
              />
              <span className="text-sm text-primary">개인정보 처리방침 동의 (필수)</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={agree3}
                onChange={(e) => setAgree3(e.target.checked)}
                className="rounded border-2 border-primary/40 accent-primary"
              />
              <span className="text-sm text-primary">위치 정보 수집 및 이용 동의 (선택)</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium mt-6"
          >
            가입하기
          </button>
        </form>
        <p className="text-center text-sm text-gray-500 mt-6">
          이미 계정이 있으신가요?{' '}
          <Link to="/login" className="text-primary font-medium">로그인</Link>
        </p>
      </div>
    </div>
  )
}
