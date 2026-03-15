import { useNavigate } from 'react-router-dom'
import { mockChats } from '../data/mock'

export default function Messages() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3">
        <h1 className="text-lg font-semibold text-primary">메시지</h1>
      </header>
      <ul className="divide-y divide-primary/10">
        {mockChats.map((chat) => (
          <li key={chat.id}>
            <button
              type="button"
              onClick={() => navigate(`/messages/${chat.id}`)}
              className="w-full flex items-center gap-3 p-4 text-left hover:bg-surface/50"
            >
              <div className="w-12 h-12 rounded-full bg-surface flex items-center justify-center text-2xl flex-shrink-0">
                👤
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-primary">{chat.partner.nickname}</span>
                  <span className="text-xs text-gray-500">{chat.lastAt}</span>
                </div>
                <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
              </div>
              {chat.unread > 0 && (
                <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center">
                  {chat.unread}
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
