import { useNavigate } from 'react-router-dom'

export default function SupportHelp() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white p-4">
      <header className="flex items-center gap-3 pb-4 border-b-2 border-primary">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
        <h1 className="text-lg font-semibold text-primary">자주 묻는 질문</h1>
      </header>
      <div className="py-6 space-y-4 text-primary">
        <p className="text-gray-600">자주 묻는 질문과 이용 안내를 확인해 보세요.</p>
        <ul className="space-y-2">
          <li className="p-3 bg-surface rounded-button">계정 문의</li>
          <li className="p-3 bg-surface rounded-button">매칭 이용 방법</li>
          <li className="p-3 bg-surface rounded-button">결제/환불</li>
        </ul>
      </div>
    </div>
  )
}
