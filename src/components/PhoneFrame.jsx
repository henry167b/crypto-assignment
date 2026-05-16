export default function PhoneFrame({ children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <span style={{ color: '#2A3060', fontSize: 10, letterSpacing: '1px', textTransform: 'uppercase' }}>
        375px
      </span>

      <div style={{
        width: 375,
        height: 'calc(100vh - 60px)',
        background: '#0B1133',
        borderRadius: 44,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 0 0 1px #1E2448, 0 0 0 3px #0D1030, 0 40px 80px rgba(0,0,0,0.8)',
        position: 'relative',
      }}>
        {/* Status bar */}
        <div style={{
          height: 44, background: '#0B1133',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 28px', flexShrink: 0,
        }}>
          <span style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>1:11</span>
          <div style={{ display: 'flex', gap: 5, alignItems: 'center', color: 'white' }}>
            <svg width="16" height="11" viewBox="0 0 16 11">
              <rect x="0" y="4" width="3" height="7" rx="0.5" fill="white"/>
              <rect x="4.5" y="2.5" width="3" height="8.5" rx="0.5" fill="white"/>
              <rect x="9" y="0.5" width="3" height="10.5" rx="0.5" fill="white"/>
              <rect x="13.5" y="0" width="2.5" height="11" rx="0.5" fill="rgba(255,255,255,0.3)"/>
            </svg>
            <span style={{ fontSize: 10, fontWeight: 600 }}>4G</span>
            <svg width="24" height="12" viewBox="0 0 24 12">
              <rect x="0" y="1" width="21" height="10" rx="2" stroke="white" strokeWidth="1" fill="none"/>
              <rect x="21" y="3.5" width="2" height="5" rx="1" fill="white" opacity="0.6"/>
              <rect x="1.5" y="2.5" width="14" height="7" rx="1" fill="white"/>
            </svg>
          </div>
        </div>

        {children}
      </div>

    </div>
  )
}
