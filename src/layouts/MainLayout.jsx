import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const iconClass = 'w-5 h-5 shrink-0'

const tabs = [
  {
    path: '/',
    label: '홈',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    path: '/messages',
    label: '메시지',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    path: '/profile',
    label: '프로필',
    icon: (
      <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
]

const hideNavPaths = ['/messages/', '/profile/', '/likes', '/profile/edit', '/tier-missions', '/support']

export default function MainLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const showNav = !hideNavPaths.some((p) => location.pathname.startsWith(p) || location.pathname === p)

  return (
    <div className="min-h-screen min-h-[100dvh] bg-white flex flex-col pb-16" style={{ paddingBottom: 'calc(4rem + env(safe-area-inset-bottom, 0px))' }}>
      <main className="flex-1 min-h-0 flex flex-col">
        <Outlet />
      </main>
      {showNav && (
        <nav
          className="fixed left-0 right-0 max-w-[430px] mx-auto bg-white border-t-2 border-primary flex justify-around items-center bg-white"
          style={{
            bottom: 0,
            height: 'calc(4rem + env(safe-area-inset-bottom, 0px))',
            paddingBottom: 'env(safe-area-inset-bottom, 0px)',
          }}
        >
          {tabs.map((tab) => {
            const isActive =
              tab.path === '/'
                ? location.pathname === '/'
                : location.pathname.startsWith(tab.path)
            return (
              <button
                key={tab.path}
                type="button"
                onClick={() => navigate(tab.path)}
                className={`flex flex-col items-center justify-center flex-1 py-2 text-xs ${
                  isActive ? 'text-primary font-semibold' : 'text-gray-500'
                }`}
              >
                <span className="mb-0.5 flex items-center justify-center">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>
      )}
    </div>
  )
}
