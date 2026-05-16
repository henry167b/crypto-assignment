import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'

const TABLE = [
  { prod: '🏛 T-Bill',     type: 'Fixed',    liq: 'lo', liqLabel: 'Low',  rate: '4.3%',  hi: false },
  { prod: '🏦 Fixed Dep.', type: 'Fixed',    liq: 'lo', liqLabel: 'Low',  rate: '3.8%',  hi: false },
  { prod: '🟣 Revolut',    type: 'Variable', liq: 'hi', liqLabel: 'High', rate: '3.5%',  hi: false },
  { prod: '₮ USDT Earn',   type: 'Variable', liq: 'hi', liqLabel: 'High', rate: '5.00%', hi: true  },
  { prod: 'Ξ ETH Earn',    type: 'Variable', liq: 'md', liqLabel: 'Med',  rate: '4.00%', hi: true  },
]
const LIQ = { hi: '#4CAF50', md: '#FF9800', lo: '#F44336' }

const FEATURES = [
  { icon: '💵', title: '1 USDT ≈ $1.00 — always',      sub: "Unlike BTC or ETH, stablecoins don't swing in price" },
  { icon: '📈', title: 'Earn up to 5.00% APY',          sub: 'Beats most savings accounts and T-bills' },
  { icon: '⚡', title: 'Flexible — withdraw anytime',   sub: 'No lock-up on Flexible Earn' },
]

export default function GuidedEntry({ navigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden' }}>
      <ScreenHeader title="Getting Started" onBack={() => navigate('home-earn')} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' }}>
        <div style={{ padding: '12px 20px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Hero icon */}
          <div style={{
            width: 72, height: 72, background: 'rgba(45,91,227,0.12)',
            borderRadius: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36,
          }}>🌱</div>

          {/* Title + copy */}
          <div>
            <div style={{ fontSize: 22, fontWeight: 800, color: 'white', lineHeight: 1.2, marginBottom: 10 }}>
              New to Earn?<br />Start with stablecoins.
            </div>
            <div style={{ fontSize: 14, color: '#8A8FA8', lineHeight: 1.65 }}>
              Earn yield on your crypto without{' '}
              <span style={{ color: '#4CAF50', fontWeight: 600 }}>cryptocurrency price risk</span>.
              Stablecoins like USDT and USDC are pegged to the US Dollar — your balance stays stable
              while you earn interest, just like a high-yield savings account.
            </div>
          </div>

          {/* Feature list */}
          <div style={{ background: '#1A1F3A', borderRadius: 14, padding: 14, display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FEATURES.map(({ icon, title, sub }) => (
              <div key={title} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{
                  width: 30, height: 30, background: 'rgba(45,91,227,0.15)',
                  borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 14, flexShrink: 0,
                }}>{icon}</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: 'white', marginBottom: 2 }}>{title}</div>
                  <div style={{ fontSize: 11, color: '#8A8FA8' }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 3 }}>How does Earn compare?</div>
            <div style={{ fontSize: 11, color: '#8A8FA8', marginBottom: 10 }}>Indicative rates — updated weekly</div>
            <div style={{ background: '#1A1F3A', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 0.9fr 0.9fr 0.9fr', padding: '8px 12px', background: '#141830', borderBottom: '1px solid #212646' }}>
                {['Product', 'Rate', 'Liquidity', 'Est. APY'].map(h => (
                  <span key={h} style={{ fontSize: 9, fontWeight: 700, color: '#8A8FA8', textTransform: 'uppercase', letterSpacing: '0.6px' }}>{h}</span>
                ))}
              </div>
              {TABLE.map(({ prod, type, liq, liqLabel, rate, hi }, i) => (
                <div key={prod} style={{
                  display: 'grid', gridTemplateColumns: '1.6fr 0.9fr 0.9fr 0.9fr',
                  padding: '10px 12px', alignItems: 'center',
                  borderBottom: i < TABLE.length - 1 ? '1px solid #1E2345' : 'none',
                  background: hi ? 'rgba(45,91,227,0.07)' : 'transparent',
                }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'white' }}>{prod}</span>
                  <span style={{ fontSize: 11, color: '#A0A6C0' }}>{type}</span>
                  <span style={{ fontSize: 11, color: '#A0A6C0' }}>
                    <span style={{ display: 'inline-block', width: 7, height: 7, borderRadius: '50%', background: LIQ[liq], marginRight: 3, verticalAlign: 'middle' }}/>
                    {liqLabel}
                  </span>
                  <span style={{ fontSize: hi ? 12 : 11, fontWeight: hi ? 700 : 400, color: hi ? '#4CAF50' : '#8A8FA8' }}>{rate}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
            <button
              onClick={() => navigate('asset-detail')}
              style={{
                background: '#2D5BE3', color: 'white', border: 'none',
                borderRadius: 12, padding: 16, fontSize: 16, fontWeight: 600, width: '100%',
              }}
            >Start with USDT</button>
            <button
              onClick={() => navigate('asset-list')}
              style={{
                background: 'transparent', color: '#2D5BE3',
                border: '1.5px solid #2D5BE3', borderRadius: 12,
                padding: 14, fontSize: 15, fontWeight: 600, width: '100%',
              }}
            >Explore all assets</button>
          </div>

        </div>
      </div>
      <BottomNav current="guided" navigate={navigate} />
    </div>
  )
}
