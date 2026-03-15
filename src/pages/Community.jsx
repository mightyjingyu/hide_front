import { useState, useMemo } from 'react'
import { mockCommunityPosts } from '../data/mock'

const FILTER_REGIONS = ['전체', '서울 강남', '서울 마포', '경기 분당']
const FILTER_AGES = ['전체', '20대 초반', '20대 후반', '30대']
const FILTER_GENDERS = ['전체', '남', '여']
const FILTER_SCHOOLS = ['전체', '서울대', '연세대', '고려대', '성균관대']

export default function Community() {
  const [posts, setPosts] = useState(mockCommunityPosts)
  const [region, setRegion] = useState('전체')
  const [age, setAge] = useState('전체')
  const [gender, setGender] = useState('전체')
  const [school, setSchool] = useState('전체')
  const [filterOpen, setFilterOpen] = useState(false)

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      const r = region === '전체' || (p.author.region === region)
      const ageMatch =
        age === '전체' ||
        (age === '20대 초반' && p.author.age >= 20 && p.author.age < 24) ||
        (age === '20대 후반' && p.author.age >= 24 && p.author.age < 30) ||
        (age === '30대' && p.author.age >= 30)
      const g = gender === '전체' || p.author.gender === gender
      const s = school === '전체' || p.author.school === school
      return r && ageMatch && g && s
    })
  }, [posts, region, age, gender, school])

  const toggleLike = (id) => {
    setPosts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, likes: p.likes + (p.liked ? -1 : 1), liked: !p.liked } : p))
    )
  }

  const hasActiveFilter = region !== '전체' || age !== '전체' || gender !== '전체' || school !== '전체'

  return (
    <div className="min-h-screen bg-surface/30">
      <header className="sticky top-0 z-10 bg-white border-b-2 border-primary px-4 py-3">
        <h1 className="text-lg font-semibold text-primary">커뮤니티</h1>
        <p className="text-sm text-gray-500 mt-0.5">자유롭게 이야기해 보세요</p>
        <button
          type="button"
          onClick={() => setFilterOpen((o) => !o)}
          className={`mt-3 flex items-center gap-2 px-3 py-2 rounded-button border-2 text-sm font-medium ${hasActiveFilter ? 'border-primary bg-primary text-white' : 'border-primary/30 text-primary'}`}
        >
          필터 {hasActiveFilter && `적용됨`}
          <span className={filterOpen ? 'rotate-180' : ''}>▼</span>
        </button>
        {filterOpen && (
          <div className="mt-3 p-3 rounded-card bg-surface border border-primary/10 space-y-3">
            <div>
              <p className="text-xs font-medium text-primary mb-1">지역</p>
              <div className="flex flex-wrap gap-1.5">
                {FILTER_REGIONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegion(r)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${region === r ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/20'}`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-primary mb-1">나이</p>
              <div className="flex flex-wrap gap-1.5">
                {FILTER_AGES.map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAge(a)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${age === a ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/20'}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-primary mb-1">성별</p>
              <div className="flex flex-wrap gap-1.5">
                {FILTER_GENDERS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setGender(g)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${gender === g ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/20'}`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-medium text-primary mb-1">학교</p>
              <div className="flex flex-wrap gap-1.5">
                {FILTER_SCHOOLS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSchool(s)}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${school === s ? 'bg-primary text-white' : 'bg-white text-primary border border-primary/20'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>
      <div className="p-4 space-y-4">
        {filteredPosts.length === 0 ? (
          <p className="text-center text-gray-500 py-8">조건에 맞는 글이 없어요. 필터를 바꿔 보세요.</p>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-card bg-white shadow-card border border-primary/10 p-4"
            >
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-xl flex-shrink-0">
                  👤
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-primary">{post.author.nickname}</p>
                  <p className="text-xs text-gray-500">
                    {post.author.region} · {post.author.age}세 · {post.author.gender} · {post.author.school}
                  </p>
                  <p className="text-sm text-gray-500">{post.createdAt}</p>
                </div>
              </div>
              <p className="mt-3 text-primary">{post.content}</p>
              <div className="flex items-center gap-4 mt-4">
                <button
                  type="button"
                  onClick={() => toggleLike(post.id)}
                  className="flex items-center gap-1 text-sm text-gray-500 hover:text-primary"
                >
                  ❤️ {post.likes}
                </button>
                <span className="text-sm text-gray-500">💬 {post.comments}</span>
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  )
}
