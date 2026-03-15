// Mock data for frontend-only implementation

export const mockUser = {
  id: 'me',
  nickname: '민수',
  age: 26,
  region: '서울, 강남구',
  intro: '새로운 사람들과 대화하는 것을 좋아해요. 맛집탐방하고 영화 볼 친구 찾아요!',
  interests: ['#음악', '#여행', '#영화', '#카페투어', '#테니스'],
  avatarUrl: null,
  isOnline: true,
  tier: 75,
  compatibility: 85,
}

export const mockCards = [
  {
    id: '1',
    nickname: '서아',
    age: 24,
    region: '서울 강남구',
    interests: ['#강아지', '#카페', '#영화'],
    compatibility: 92,
    avatarUrl: '/avatar-dummy.png',
    handPhotoUrl: '/hand-dummy.png',
    intro: '강아지 좋아해요!',
    isOnline: true,
  },
  {
    id: '2',
    nickname: '지훈',
    age: 28,
    region: '서울 마포구',
    interests: ['#테니스', '#맛집', '#음악'],
    compatibility: 88,
    avatarUrl: '/avatar-dummy.png',
    handPhotoUrl: '/hand-dummy.png',
    intro: '주말엔 운동하고 맛집 탐방해요.',
    isOnline: false,
  },
  {
    id: '3',
    nickname: '수진',
    age: 25,
    region: '경기 성남시',
    interests: ['#영화', '#여행', '#카페'],
    compatibility: 95,
    avatarUrl: '/avatar-dummy.png',
    handPhotoUrl: '/hand-dummy.png',
    intro: '영화 보는 걸 좋아해요.',
    isOnline: true,
  },
]

export const mockLikedMe = [mockCards[0], mockCards[2]]
export const mockOnline = mockCards.filter((c) => c.isOnline)

export const mockMatches = [
  { id: 'm1', user: mockCards[0], matchedAt: '2024-01-15' },
  { id: 'm2', user: mockCards[2], matchedAt: '2024-01-14' },
]

export const mockChats = [
  {
    id: 'c1',
    partner: { id: '1', nickname: '서아', avatarUrl: null, isOnline: true },
    lastMessage: '정말요? 강아지 키우면 일상이 훨씬 행복해지긴 해요.',
    lastAt: '오후 2:40',
    unread: 0,
  },
  {
    id: 'c2',
    partner: { id: '3', nickname: '수진', avatarUrl: null, isOnline: false },
    lastMessage: '다음에 같이 영화 봐요!',
    lastAt: '어제',
    unread: 2,
  },
]

export const mockMessages = {
  c1: [
    { id: '1', from: '1', text: '안녕하세요! 프로필 사진 속 강아지가 너무 귀여워서 말 걸어봐요. 이름이 뭐예요?', time: '오후 2:30' },
    { id: '2', from: 'me', text: "감사합니다! '초코'라고 해요. 이제 2살 됐어요 :)", time: '오후 2:34', read: true },
    { id: '3', from: '1', text: '초코요? 이름도 너무 잘 어울려요! 저도 강아지 키우고 싶어서 요즘 고민 중이거든요.', time: '오후 2:36' },
    { id: '4', from: 'me', text: '정말요? 강아지 키우면 일상이 훨씬 행복해지긴 해요. 혹시 생각하시는 견종이 있으세요?', time: '오후 2:40', read: false },
  ],
}

export const mockCommunityPosts = [
  {
    id: 'p1',
    author: { nickname: '민지', avatarUrl: null, region: '서울 강남', age: 24, gender: '여', school: '서울대' },
    content: '오늘 날씨 좋다! 나들이 가고 싶어요. 혼자 가기 심심한데 같이 갈 분?',
    likes: 12,
    comments: 3,
    createdAt: '1시간 전',
    liked: false,
  },
  {
    id: 'p2',
    author: { nickname: '준호', avatarUrl: null, region: '서울 강남', age: 28, gender: '남', school: '연세대' },
    content: '맛집 추천 받아요. 강남 쪽 한식당 좋은 곳 있으면 댓글로 알려주세요!',
    likes: 8,
    comments: 5,
    createdAt: '3시간 전',
    liked: false,
  },
  {
    id: 'p3',
    author: { nickname: '수진', avatarUrl: null, region: '경기 분당', age: 25, gender: '여', school: '고려대' },
    content: '영화 동호회 같이 하실 분 구해요!',
    likes: 5,
    comments: 2,
    createdAt: '5시간 전',
    liked: false,
  },
  {
    id: 'p4',
    author: { nickname: '태현', avatarUrl: null, region: '서울 마포', age: 27, gender: '남', school: '성균관대' },
    content: '주말에 테니스 치실 분 있나요?',
    likes: 15,
    comments: 4,
    createdAt: '어제',
    liked: false,
  },
]

export const mockFaceOptions = [
  { id: 'a1', label: '눈 모양 A', url: null },
  { id: 'a2', label: '눈 모양 B', url: null },
  { id: 'b1', label: '얼굴형 A', url: null },
  { id: 'b2', label: '얼굴형 B', url: null },
]

export const interestTags = [
  '음악', '여행', '영화', '카페투어', '스포츠', '테니스', '맛집', '독서', '사진', '산책',
  'MBTI', '직업', '라이프스타일', '종교',
]

export const interestCategories = [
  {
    id: 'tv',
    title: 'TV와 영화',
    icon: '🎬',
    tags: ['한국 드라마', '애니메이션', '범죄 프로그램', '드라마', '판타지 영화', '액션 영화', '로맨스', '다큐멘터리'],
  },
  {
    id: 'value',
    title: '가치와 이상',
    icon: '🌐',
    tags: ['사회 개발', '정치', '액티비즘', '평등', '포용성', '인권', '환경', '자원봉사'],
  },
  {
    id: 'game',
    title: '게임',
    icon: '🕹️',
    tags: ['PC방', '오버워치', 'E-스포츠', '로블록스', '모바일 게임', '보드게임'],
  },
  {
    id: 'life',
    title: '라이프스타일',
    icon: '☕',
    tags: ['음악', '여행', '영화', '카페투어', '맛집', '독서', '사진', '산책', '테니스', '요가'],
  },
]
