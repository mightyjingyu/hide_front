import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SupportReport() {
  const navigate = useNavigate()
  const [reason, setReason] = useState('')
  const [detail, setDetail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/support')
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <header className="flex items-center gap-3 pb-4 border-b-2 border-primary">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">사용자 신고</h1>
      </header>
      <form onSubmit={handleSubmit} className="py-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">신고 사유</label>
          <select
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button focus:border-primary"
          >
            <option value="">선택하세요</option>
            <option value="spam">스팸/광고</option>
            <option value="harass">허위/욕설</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-primary mb-2">상세 내용 (선택)</label>
          <textarea
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button resize-none focus:border-primary"
            placeholder="구체적인 사유를 적어 주세요."
          />
        </div>
        <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-button font-medium">
          신고 접수
        </button>
      </form>
    </div>
  )
}
