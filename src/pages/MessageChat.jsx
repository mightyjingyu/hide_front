import { useState, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { mockChats, mockMessages } from '../data/mock'

export default function MessageChat() {
  const { chatId } = useParams()
  const navigate = useNavigate()
  const [input, setInput] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [messages, setMessages] = useState(mockMessages[chatId] || [])
  const [imagePreview, setImagePreview] = useState(null)
  const fileInputRef = useRef(null)
  const chat = mockChats.find((c) => c.id === chatId)

  const handleSend = (e) => {
    e.preventDefault()
    if (imagePreview) {
      setMessages((prev) => [...prev, { id: `img-${Date.now()}`, from: 'me', type: 'image', url: imagePreview, time: '방금 전' }])
      setImagePreview(null)
      return
    }
    if (!input.trim()) return
    setMessages((prev) => [...prev, { id: `t-${Date.now()}`, from: 'me', text: input.trim(), time: '방금 전' }])
    setInput('')
  }

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setImagePreview(URL.createObjectURL(file))
    }
    e.target.value = ''
  }

  const removeImagePreview = () => setImagePreview(null)

  if (!chat) return null

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <header className="sticky top-0 z-20 bg-white border-b-2 border-primary px-4 py-3 flex items-center gap-3">
        <button type="button" onClick={() => navigate(-1)} className="p-2 -ml-2 text-primary" aria-label="뒤로">←</button>
        <button
          type="button"
          onClick={() => navigate(`/profile/${chat.partner.id}`)}
          className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-xl flex-shrink-0 hover:opacity-80"
          aria-label="상대방 프로필 보기"
        >
          👤
        </button>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-primary">{chat.partner.nickname}</p>
        </div>
        <div className="relative">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="p-2 text-primary rounded-lg hover:bg-surface"
            aria-label="더보기"
          >
            ⋮
          </button>
          {menuOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setMenuOpen(false)} aria-hidden />
              <ul className="absolute right-0 top-full mt-1 py-1 min-w-[120px] bg-white border-2 border-primary/10 rounded-button shadow-card z-20">
                <li>
                  <button type="button" onClick={() => { setMenuOpen(false); }} className="w-full px-4 py-2 text-left text-sm text-primary hover:bg-surface">
                    차단
                  </button>
                </li>
                <li>
                  <button type="button" onClick={() => { setMenuOpen(false); }} className="w-full px-4 py-2 text-left text-sm text-primary hover:bg-surface">
                    신고하기
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
      </header>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <p className="text-center text-xs text-gray-400 py-2">오늘</p>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-2 ${msg.from === 'me' ? 'flex-row-reverse' : ''}`}
          >
            <div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-sm flex-shrink-0">
              👤
            </div>
            <div className={`max-w-[75%] ${msg.from === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
              {msg.type === 'image' ? (
                <img src={msg.url} alt="" className="max-w-full max-h-48 rounded-2xl object-cover" />
              ) : (
                <div
                  className={`px-4 py-2 rounded-2xl ${
                    msg.from === 'me' ? 'bg-primary text-white rounded-br-md' : 'bg-surface text-primary rounded-bl-md'
                  }`}
                >
                  {msg.text}
                </div>
              )}
              <p className={`text-xs text-gray-400 mt-0.5 ${msg.from === 'me' ? 'text-right' : ''}`}>
                {msg.read && msg.from === 'me' ? '읽음 ' : ''}{msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>
      {imagePreview && (
        <div className="px-3 pt-2 flex items-center gap-2">
          <div className="relative inline-block">
            <img src={imagePreview} alt="" className="w-16 h-16 rounded-lg object-cover" />
            <button type="button" onClick={removeImagePreview} className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-xs">✕</button>
          </div>
          <span className="text-xs text-gray-500">전송 버튼을 누르면 보냅니다</span>
        </div>
      )}
      <form onSubmit={handleSend} className="p-3 border-t-2 border-primary/20 flex items-center gap-2 bg-white">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleImageSelect}
          className="hidden"
        />
        <button type="button" onClick={() => fileInputRef.current?.click()} className="p-2 text-primary rounded-lg hover:bg-surface" aria-label="이미지 첨부">
          +
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="메시지를 입력하세요..."
          className="flex-1 px-4 py-2.5 bg-surface rounded-full text-primary placeholder-gray-400 text-sm"
        />
        <button
          type="submit"
          className="px-4 py-2.5 bg-primary text-white rounded-button text-sm font-medium"
        >
          전송
        </button>
      </form>
    </div>
  )
}
