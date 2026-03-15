import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProfileSetup() {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')
  const [age, setAge] = useState('')
  const [region, setRegion] = useState('')
  const [intro, setIntro] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/setup/interests')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button type="button" onClick={() => navigate(-1)} className="self-start p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
      <div className="flex-1 max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">프로필 설정</h1>
        <p className="text-gray-600 mt-1 text-sm">기본 정보를 입력해 주세요</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-primary mb-1">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="닉네임"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">나이</label>
            <input
              type="number"
              min="18"
              max="99"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="나이"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">지역</label>
            <input
              type="text"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              placeholder="예: 서울, 강남구"
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-1">한 줄 소개</label>
            <textarea
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
              placeholder="예: 카페 탐방과 영화 보는 걸 좋아해요."
              rows={3}
              className="w-full px-4 py-3 border-2 border-primary/30 rounded-button resize-none focus:border-primary"
            />
          </div>
          <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-button font-medium">
            다음
          </button>
        </form>
      </div>
    </div>
  )
}
