import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SupportInquiry() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/support')
  }

  return (
    <div className="min-h-screen bg-white p-4">
      <header className="flex items-center gap-3 pb-4 border-b-2 border-primary">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">문의하기</h1>
      </header>
      <form onSubmit={handleSubmit} className="py-6 space-y-4">
        <div>
          <label className="block text-sm font-medium text-primary mb-2">문의 내용</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full px-4 py-3 border-2 border-primary/30 rounded-button resize-none focus:border-primary"
            placeholder="문의하실 내용을 자세히 적어 주세요."
            required
          />
        </div>
        <button type="submit" className="w-full py-3.5 bg-primary text-white rounded-button font-medium">
          문의 보내기
        </button>
      </form>
    </div>
  )
}
