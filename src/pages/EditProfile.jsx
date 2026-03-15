import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockUser } from '../data/mock'
import { interestTags } from '../data/mock'

export default function EditProfile() {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState(mockUser.nickname)
  const [age, setAge] = useState(mockUser.age)
  const [region, setRegion] = useState(mockUser.region)
  const [intro, setIntro] = useState(mockUser.intro)
  const [interests, setInterests] = useState(mockUser.interests.map((t) => t.replace('#', '')))

  const toggleInterest = (tag) => {
    setInterests((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/profile')
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">프로필 수정</h1>
      </header>
      <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-6">
        <div>
          <label className="block text-sm font-medium text-primary mb-1">닉네임</label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
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
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
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
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-1">한 줄 소개</label>
          <textarea
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
            rows={3}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button resize-none focus:border-primary"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-2">관심사</label>
          <div className="flex flex-wrap gap-2">
            {interestTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleInterest(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium ${interests.includes(tag) ? 'bg-primary text-white' : 'bg-surface text-primary'}`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-button font-medium">
          저장
        </button>
      </form>
    </div>
  )
}
