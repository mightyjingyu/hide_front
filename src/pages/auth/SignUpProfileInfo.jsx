import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SignUpProfileInfo() {
  const navigate = useNavigate()
  const location = useLocation()
  const [nickname, setNickname] = useState('')
  const [birthYear, setBirthYear] = useState('')
  const [birthMonth, setBirthMonth] = useState('')
  const [birthDay, setBirthDay] = useState('')
  const [gender, setGender] = useState('')
  const [region, setRegion] = useState('')
  const [intro, setIntro] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const birthdate = [birthYear, birthMonth, birthDay].every(Boolean)
      ? `${birthYear}-${String(birthMonth).padStart(2, '0')}-${String(birthDay).padStart(2, '0')}`
      : ''
    navigate('/setup/avatar', {
      state: {
        ...location.state,
        nickname,
        birthdate,
        gender,
        region,
        intro,
      },
    })
  }

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 80 }, (_, i) => currentYear - 79 + i)
  const months = Array.from({ length: 12 }, (_, i) => i + 1)
  const days = Array.from({ length: 31 }, (_, i) => i + 1)

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
      <div className="flex-1 flex flex-col max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">프로필 정보</h1>
        <p className="text-gray-500 mt-1 text-sm">닉네임과 기본 정보를 입력해 주세요</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">생년월일</label>
            <div className="flex gap-2">
              <select
                value={birthYear}
                onChange={(e) => setBirthYear(e.target.value)}
                className="flex-1 px-3 py-3 border-2 border-primary/30 rounded-button focus:border-primary bg-white"
              >
                <option value="">년</option>
                {years.map((y) => (
                  <option key={y} value={y}>{y}년</option>
                ))}
              </select>
              <select
                value={birthMonth}
                onChange={(e) => setBirthMonth(e.target.value)}
                className="flex-1 px-3 py-3 border-2 border-primary/30 rounded-button focus:border-primary bg-white"
              >
                <option value="">월</option>
                {months.map((m) => (
                  <option key={m} value={m}>{m}월</option>
                ))}
              </select>
              <select
                value={birthDay}
                onChange={(e) => setBirthDay(e.target.value)}
                className="flex-1 px-3 py-3 border-2 border-primary/30 rounded-button focus:border-primary bg-white"
              >
                <option value="">일</option>
                {days.map((d) => (
                  <option key={d} value={d}>{d}일</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">성별</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setGender('남')}
                className={`flex-1 py-3 rounded-button font-medium border-2 ${gender === '남' ? 'bg-primary text-white border-primary' : 'border-primary/30 text-primary'}`}
              >
                남성
              </button>
              <button
                type="button"
                onClick={() => setGender('여')}
                className={`flex-1 py-3 rounded-button font-medium border-2 ${gender === '여' ? 'bg-primary text-white border-primary' : 'border-primary/30 text-primary'}`}
              >
                여성
              </button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">사는 지역</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="예: 서울 강남구"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">간단한 자기소개</label>
            <textarea
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              placeholder="자기소개를 입력해 주세요"
              rows={4}
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium mt-6"
          >
            다음
          </button>
        </form>
      </div>
    </div>
  )
}
