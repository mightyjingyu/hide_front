import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const RESULT_TYPE = '무표정 반전 큐티상'
const ONBOARDING_LINK = typeof window !== 'undefined' ? `${window.location.origin}/onboarding` : ''

export default function PreferenceResult() {
  const navigate = useNavigate()
  const location = useLocation()
  const choices = location.state?.choices ?? []
  const [copyMessage, setCopyMessage] = useState('')

  const handleShare = async () => {
    const shareUrl = ONBOARDING_LINK || `${window.location.origin}/onboarding`
    const shareText = `나의 이상형은 "${RESULT_TYPE}"이에요. 당신의 이상형도 찾아보세요!`

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'HIDE - 당신의 이상형을 찾아드립니다',
          text: shareText,
          url: shareUrl,
        })
      } catch (err) {
        if (err.name !== 'AbortError') copyToClipboard(shareUrl, shareText)
      }
    } else {
      copyToClipboard(shareUrl, shareText)
    }
  }

  const copyToClipboard = (url, text) => {
    const full = `${text}\n${url}`
    navigator.clipboard?.writeText(full).then(() => {
      setCopyMessage('링크가 복사되었습니다')
      setTimeout(() => setCopyMessage(''), 2000)
    })
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
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full text-center">
        <div className="rounded-card bg-surface border-2 border-primary/10 p-6">
          <p className="text-xl font-semibold text-primary leading-snug">
            당신의 이상형은<br />
            &quot;{RESULT_TYPE}&quot;입니다
          </p>
          <ul className="mt-6 text-left space-y-2 text-sm text-primary">
            <li>· 부드러운 눈매와 자연스러운 스타일을 선호하는 편이에요.</li>
            <li>· 무표정해 보여도 웃을 때 매력이 돋보이는 타입을 좋아해요.</li>
            <li>· 비슷한 취향을 가진 사람과 매칭될 확률이 높아요.</li>
          </ul>
        </div>
        <p className="text-primary text-sm mt-6">
          친구의 이상형이 알고 싶다면 친구를 초대하세요
        </p>
        <button
          type="button"
          onClick={handleShare}
          className="mt-2 w-full py-2.5 border-2 border-primary text-primary rounded-button font-medium text-sm"
        >
          공유하기
        </button>
        {copyMessage && (
          <p className="text-primary text-xs mt-1">{copyMessage}</p>
        )}
        <p className="text-primary font-medium text-sm mt-6">
          당신의 이상형이<br />
          하이드를 사용하고 있습니다
        </p>
        <p className="text-gray-600 text-sm mt-2">
          가입을 원하시면 아래 시작하기 버튼을 눌러주세요.
        </p>
        <button
          type="button"
          onClick={() => navigate('/signup')}
          className="mt-8 w-full py-3.5 bg-primary text-white rounded-button font-medium"
        >
          시작하기
        </button>
      </div>
    </div>
  )
}
