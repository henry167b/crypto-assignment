const NAV = [
  {
    id: 'home', label: 'Home',
    icon: (active) => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M3 12L12 3L21 12V21H15V15H9V21H3V12Z"
          fill={active ? 'white' : 'none'}
          stroke={active ? 'white' : '#8A8FA8'}
          strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: null, label: 'Accounts',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#8A8FA8" strokeWidth="1.5"/>
        <path d="M2 10H22" stroke="#8A8FA8" strokeWidth="1.5"/>
        <rect x="5" y="14" width="4" height="2" rx="0.5" fill="#8A8FA8"/>
      </svg>
    ),
  },
  {
    id: null, label: 'Trade',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M7 16L17 6M17 6H10M17 6V13" stroke="#8A8FA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 16L7 6" stroke="#8A8FA8" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: null, label: 'Market',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <polyline points="2,14 6,10 10,13 14,8 18,11 22,7"
          stroke="#8A8FA8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: null, label: 'Card',
    icon: () => (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="#8A8FA8" strokeWidth="1.5"/>
        <path d="M2 9H22" stroke="#8A8FA8" strokeWidth="2"/>
        <rect x="5" y="14" width="5" height="2" rx="0.5" fill="#8A8FA8"/>
      </svg>
    ),
  },
]

export default function BottomNav({ current, navigate }) {
  return (
    <div style={{
      height: 80,
      background: '#0A0F2A',
      borderTop: '1px solid #1A2040',
      display: 'flex',
      alignItems: 'center',
      paddingBottom: 8,
      flexShrink: 0,
    }}>
      {NAV.map(({ id, label, icon }) => {
        const active = id === current
        return (
          <div
            key={label}
            onClick={() => id && navigate(id)}
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              cursor: id ? 'pointer' : 'default',
            }}
          >
            {/* Active pill behind icon */}
            <div style={{
              background: active ? '#1E2D5A' : 'transparent',
              borderRadius: 20,
              padding: active ? '5px 16px' : '5px 4px',
              transition: 'all 0.2s',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {icon(active)}
            </div>
            <span style={{
              fontSize: 10,
              color: active ? 'white' : '#8A8FA8',
              fontWeight: active ? 600 : 400,
            }}>
              {label}
            </span>
          </div>
        )
      })}
    </div>
  )
}
