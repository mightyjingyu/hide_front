import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const tabs = [
  { path: '/', label: '홈', icon: '🏠' },
  { path: '/messages', label: '메시지', icon: '💬' },
  { path: '/profile', label: '프로필', icon: '👤' },
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
                <span className="text-lg mb-0.5">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            )
          })}
        </nav>
      )}
    </div>
  )
}
