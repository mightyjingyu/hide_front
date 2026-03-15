import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function HandVerification() {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)

  const handleFile = (e) => {
    const f = e.target.files?.[0]
    if (f) {
      setFile(f)
      setPreview(URL.createObjectURL(f))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/setup/interests')
  }

  return (
    <div className="min-h-screen bg-white flex flex-col p-6">
      <button type="button" onClick={() => navigate(-1)} className="self-start p-2 -ml-2 text-gray-600" aria-label="뒤로">←</button>
      <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
        <h1 className="text-2xl font-semibold text-primary">손 인증</h1>
        <div className="text-gray-600 mt-2 text-sm leading-relaxed">
          <p>신뢰할 수 있는 커뮤니티를 위해 간단한 손 사진 인증을 진행합니다.</p>
          <p>촬영한 손 사진은 프로필에 함께 표시됩니다.</p>
          <p className="text-gray-500 mt-3 text-xs">(손 이외에 다른 신체 부위가 나올 경우 인증이 안 됩니다)</p>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-card border-2 border-dashed border-primary/30 p-8 text-center bg-surface/50">
            {preview ? (
              <img src={preview} alt="손 사진 미리보기" className="w-full max-h-48 object-contain rounded-lg mx-auto" />
            ) : (
              <p className="text-gray-500 text-sm">자신의 손 사진을 찍어주세요</p>
            )}
            <label className="mt-4 inline-block px-6 py-3 bg-primary text-white text-sm font-medium rounded-button cursor-pointer">
              사진 찍기
              <input
                type="file"
                accept="image/*"
                capture="user"
                onChange={handleFile}
                className="hidden"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 bg-primary text-white rounded-button font-medium"
          >
            인증 완료
          </button>
        </form>
      </div>
    </div>
  )
}
