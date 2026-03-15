import { Routes, Route, Navigate } from 'react-router-dom'
import { useOnboarding } from './hooks/useOnboarding'

// Onboarding & Auth
import Onboarding from './pages/Onboarding'
import FindYourTypeIntro from './pages/onboarding/FindYourTypeIntro'
import FacePreferenceTest from './pages/onboarding/FacePreferenceTest'
import PreferenceResult from './pages/onboarding/PreferenceResult'
import Login from './pages/auth/Login'
import SignUp from './pages/auth/SignUp'
import SignUpProfileInfo from './pages/auth/SignUpProfileInfo'

// Setup flow (가입 → 프로필 정보 → 아바타 → 손 인증)
import HandVerification from './pages/setup/HandVerification'
import AvatarCreation from './pages/setup/AvatarCreation'
import ProfileSetup from './pages/setup/ProfileSetup'
import Interests from './pages/setup/Interests'
import DiscoveryPreferences from './pages/setup/DiscoveryPreferences'

// Main app (with bottom nav)
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Messages from './pages/Messages'
import MessageChat from './pages/MessageChat'
import Profile from './pages/Profile'

// Sub pages
import ProfileView from './pages/ProfileView'
import Likes from './pages/Likes'
import EditProfile from './pages/EditProfile'
import TierMissions from './pages/TierMissions'
import CustomerSupport from './pages/CustomerSupport'
import SupportHelp from './pages/support/SupportHelp'
import SupportReport from './pages/support/SupportReport'
import SupportInquiry from './pages/support/SupportInquiry'

const ONBOARDING_KEY = 'hide_onboarding_done'

function App() {
  const { hasCompletedOnboarding } = useOnboarding()
  const onboardingDone = typeof window !== 'undefined' && localStorage.getItem(ONBOARDING_KEY) === 'true'

  return (
    <Routes>
      {/* Onboarding: 온보딩 → 당신의 이상형 찾기 → 성별 선택 → 이상형 월드컵(10회) → 취향 결과 */}
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/onboarding/find-type" element={<FindYourTypeIntro />} />
      <Route path="/onboarding/face-preference" element={<FacePreferenceTest />} />
      <Route path="/onboarding/preference-result" element={<PreferenceResult />} />

      {/* 인증: 취향 결과 다음 */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup/profile-info" element={<SignUpProfileInfo />} />

      {/* Setup: 프로필 정보 후 아바타 → 손 인증 */}
      <Route path="/setup/avatar" element={<AvatarCreation />} />
      <Route path="/setup/hand" element={<HandVerification />} />
      <Route path="/setup/interests" element={<Interests />} />
      <Route path="/setup/profile" element={<ProfileSetup />} />
      <Route path="/setup/discovery" element={<DiscoveryPreferences />} />

      {/* Main app - 손 인증 완료 후 여기로 (localStorage 기준으로 판단) */}
      <Route path="/" element={onboardingDone ? <MainLayout /> : <Navigate to="/onboarding" replace />}>
        <Route index element={<Home />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:chatId" element={<MessageChat />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:userId" element={<ProfileView />} />
        <Route path="likes" element={<Likes />} />
        <Route path="profile/edit" element={<EditProfile />} />
        <Route path="tier-missions" element={<TierMissions />} />
        <Route path="support" element={<CustomerSupport />} />
        <Route path="support/help" element={<SupportHelp />} />
        <Route path="support/report" element={<SupportReport />} />
        <Route path="support/inquiry" element={<SupportInquiry />} />
      </Route>

      <Route path="*" element={<Navigate to={onboardingDone ? '/' : '/onboarding'} replace />} />
    </Routes>
  )
}

export default App
