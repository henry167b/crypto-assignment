export default function ScreenHeader({ title, onBack, right }) {
  return (
    <div style={{
      padding: '10px 16px 14px',
      display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0,
    }}>
      <button
        onClick={onBack}
        style={{
          width: 34, height: 34, background: '#1A1F3A', border: 'none',
          borderRadius: '50%', color: 'white', fontSize: 17,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}
      >←</button>
      <span style={{ fontSize: 19, fontWeight: 700, color: 'white' }}>{title}</span>
      {right && <div style={{ marginLeft: 'auto' }}>{right}</div>}
    </div>
  )
}
