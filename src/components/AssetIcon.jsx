const STYLES = {
  btc:  { background: '#F7931A', color: 'white', label: '₿' },
  eth:  { background: '#627EEA', color: 'white', label: 'Ξ' },
  usdt: { background: '#26A17B', color: 'white', label: '₮' },
  usdc: { background: '#2775CA', color: 'white', label: '$' },
}

export default function AssetIcon({ asset, size = 40 }) {
  const s = STYLES[asset] ?? { background: '#1A1F3A', color: '#8A8FA8', label: '?' }
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: s.background, color: s.color,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontWeight: 700, fontSize: size * 0.42, flexShrink: 0,
    }}>
      {s.label}
    </div>
  )
}
