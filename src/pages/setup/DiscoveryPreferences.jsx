import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useOnboarding } from '../../hooks/useOnboarding'

export default function DiscoveryPreferences() {
  const navigate = useNavigate()
  const { completeSetup } = useOnboarding()
  const [distanceMin, setDistanceMin] = useState(0)
  const [distanceMax, setDistanceMax] = useState(50)
  const [ageMin, setAgeMin] = useState(20)
  const [ageMax, setAgeMax] = useState(35)

  const handleSubmit = (e) => {
    e.preventDefault()
    completeSetup()
    navigate('/')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button type="button" onClick={() => navigate(-1)} className="self-start p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
      <div className="flex-1 max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">탐색 설정</h1>
        <p className="text-gray-600 mt-1 text-sm">매칭 우선순위: 비슷한 관심사를 가진 사람이 먼저 노출돼요</p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-primary mb-2">거리 (km)</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={0}
                value={distanceMin}
                onChange={(e) => setDistanceMin(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              />
              <span className="text-gray-500">~</span>
              <input
                type="number"
                min={0}
                value={distanceMax}
                onChange={(e) => setDistanceMax(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-primary mb-2">선호 나이</label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min={18}
                max={99}
                value={ageMin}
                onChange={(e) => setAgeMin(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              />
              <span className="text-gray-500">~</span>
              <input
                type="number"
                min={18}
                max={99}
                value={ageMax}
                onChange={(e) => setAgeMax(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
              />
            </div>
          </div>
          <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-button font-medium">
            시작하기
          </button>
        </form>
      </div>
    </div>
  )
}
