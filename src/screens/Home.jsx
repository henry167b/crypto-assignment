import { useState } from 'react'
import AssetIcon from '../components/AssetIcon'
import BottomNav from '../components/BottomNav'

// ── shared data ──────────────────────────────────────────────
const HOLDINGS = [
  { asset: 'btc',  name: 'Bitcoin',    amount: '0.2104 BTC', usd: '$21,420', chg: '+3.1%', pos: true  },
  { asset: 'eth',  name: 'Ethereum',   amount: '1.85 ETH',   usd: '$6,840',  chg: '+1.8%', pos: true  },
  { asset: 'usdt', name: 'Tether USD', amount: '2,500 USDT', usd: '$2,500',  chg: '—',     pos: null  },
]


// ── root component ────────────────────────────────────────────
export default function Home({ navigate, tab, setTab }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden' }}>
      {/* ── fixed chrome ── */}
      <div style={{ flexShrink: 0 }}>
        {/* Top bar */}
        <div style={{ padding: '6px 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Hamburger */}
          <IconBtn>
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <path d="M0 1H18M0 7H18M0 13H18" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </IconBtn>
          {/* Right actions */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {/* Level Up pill */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 6,
              background: '#1A1F3A', borderRadius: 20, padding: '6px 12px',
              position: 'relative',
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  stroke="#8A8FA8" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'white' }}>Level Up</span>
              <span style={{ position: 'absolute', top: -3, right: -3, width: 8, height: 8, background: '#F44336', borderRadius: '50%' }}/>
            </div>
            <div style={{ position: 'relative' }}>
              <IconBtn onClick={() => navigate('copilot')}><CROpilotIcon size={18} color="#8A8FA8" /></IconBtn>
            </div>
            <div style={{ position: 'relative' }}>
              <IconBtn>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="#8A8FA8" strokeWidth="1.5"/>
                  <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20" stroke="#8A8FA8" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </IconBtn>
            </div>
          </div>
        </div>

        {/* Explore / Earn tab bar */}
        <div style={{ display: 'flex', padding: '0 20px', gap: 24, borderBottom: '1px solid #1A2040' }}>
          {['explore', 'earn'].map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                background: 'none', border: 'none', padding: '4px 0 10px',
                fontSize: 16, fontWeight: 600,
                color: tab === t ? 'white' : '#8A8FA8',
                borderBottom: tab === t ? '2px solid #2D5BE3' : '2px solid transparent',
                marginBottom: -1,
                cursor: 'pointer',
              }}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── scrollable content (swaps with tab) ── */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' }}>
        {tab === 'explore' ? <ExploreContent navigate={navigate} /> : <EarnContent navigate={navigate} />}
      </div>

      <BottomNav current="home" navigate={navigate} />
    </div>
  )
}

// ── Explore tab content ───────────────────────────────────────
function ExploreContent({ navigate }) {
  return (
    <>
      {/* Portfolio card */}
      <div style={{
        margin: '16px 16px 16px',
        background: 'linear-gradient(135deg, #1A2B6B 0%, #1A1F3A 100%)',
        borderRadius: 20, padding: '18px 20px',
      }}>
        <div style={{ fontSize: 12, color: '#8A8FA8', marginBottom: 4 }}>Total Portfolio</div>
        <div style={{ fontSize: 30, fontWeight: 700, color: 'white', marginBottom: 3 }}>$30,760.42</div>
        <div style={{ fontSize: 13, color: '#4CAF50', marginBottom: 14 }}>▲ +2.4% today</div>
        <div style={{ display: 'flex', gap: 8 }}>
          {['⬆ Deposit', '⬇ Withdraw', '↗ Send'].map(a => (
            <button key={a} style={{
              flex: 1, background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 8,
              padding: 8, color: 'white', fontSize: 12, fontWeight: 600,
            }}>{a}</button>
          ))}
        </div>
      </div>

      {/* Earn discovery banner */}
      <div
        onClick={() => navigate('home-earn')}
        style={{
          margin: '0 16px 14px',
          background: 'linear-gradient(135deg, #1B3A8A 0%, #2D5BE3 100%)',
          borderRadius: 16, padding: '18px 20px', cursor: 'pointer', position: 'relative', overflow: 'hidden',
        }}
      >
        <div style={{ position: 'absolute', right: -15, top: -15, width: 90, height: 90, background: 'rgba(255,255,255,0.06)', borderRadius: '50%' }}/>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#93B4FF', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 5 }}>⚡ Passive income</div>
        <div style={{ fontSize: 16, fontWeight: 700, color: 'white', marginBottom: 3, lineHeight: 1.3 }}>Your BTC could be earning 1.00% right now</div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', marginBottom: 12 }}>0.2104 BTC is sitting idle — put it to work</div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 5,
          background: 'rgba(255,255,255,0.18)', borderRadius: 20,
          padding: '5px 13px', fontSize: 12, fontWeight: 600, color: 'white',
        }}>Start Earning →</div>
      </div>

      {/* AI Copilot entry */}
      <button
        onClick={() => navigate('copilot')}
        style={{
          margin: '0 16px 16px', width: 'calc(100% - 32px)',
          background: '#1A1F3A', border: '1px solid rgba(45,91,227,0.4)',
          borderRadius: 16, padding: '14px 16px',
          display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left',
        }}
      >
        <div style={{ width: 40, height: 40, background: 'rgba(45,91,227,0.2)', borderRadius: 11, display: 'flex', alignItems: 'center', justifyContent: 'center' }}><CROpilotIcon size={22} color="#5B84F5" /></div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>Ask CROpilot</div>
          <div style={{ fontSize: 11, color: '#8A8FA8' }}>Personalised yield advice, instantly</div>
        </div>
        <div style={{ marginLeft: 'auto', color: '#4A5080', fontSize: 18 }}>›</div>
      </button>

      {/* Holdings */}
      <div style={{ fontSize: 15, fontWeight: 700, color: 'white', padding: '0 16px', marginBottom: 10 }}>My Holdings</div>
      <div style={{ background: '#0D1235', borderRadius: 16, margin: '0 16px 20px', overflow: 'hidden' }}>
        {HOLDINGS.map(({ asset, name, amount, usd, chg, pos }) => (
          <div key={asset} style={{ display: 'flex', alignItems: 'center', padding: '13px 16px', borderBottom: '1px solid #131830', gap: 12 }}>
            <AssetIcon asset={asset} size={40} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{name}</div>
              <div style={{ fontSize: 12, color: '#8A8FA8' }}>{amount}</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'white' }}>{usd}</div>
              <div style={{ fontSize: 11, color: pos === true ? '#4CAF50' : pos === false ? '#F44336' : '#8A8FA8' }}>{chg}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

// ── Earn tab content ──────────────────────────────────────────
const MY_CRYPTO_EARN = [
  {
    asset: 'btc', name: 'BTC', label: 'Bitcoin',
    options: [
      { term: 'Flexible', termLabel: 'Flexible', apy: '1.00%', route: 'asset-list' },
      { term: 'Short Term', termLabel: '3 Months', apy: '2.00%', route: 'fixed-asset-list' },
    ],
  },
  {
    asset: 'eth', name: 'ETH', label: 'Ethereum',
    options: [
      { term: 'Flexible', termLabel: 'Flexible', apy: '4.00%', route: 'asset-list' },
      { term: 'Short Term', termLabel: '3 Months', apy: '8.00%', route: 'fixed-asset-list' },
    ],
  },
  {
    asset: 'usdt', name: 'USDT', label: 'Tether USD',
    options: [
      { term: 'Flexible', termLabel: 'Flexible', apy: '5.00%', route: 'asset-list' },
      { term: 'Short Term', termLabel: '1 Month', apy: '8.00%', route: 'fixed-asset-list' },
    ],
  },
]

const TERM_FILTERS = ['All terms', 'Flexible', 'Short Term']

function EarnContent({ navigate }) {
  const [termFilter, setTermFilter] = useState('All terms')

  return (
    <>
          {/* New to Earn banner */}
          <div
            onClick={() => navigate('guided')}
            style={{
              margin: '14px 16px 14px',
              background: '#1A1F3A', border: '1px solid #252B50',
              borderRadius: 14, padding: '12px 14px',
              display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer',
            }}
          >
            <div style={{ width: 38, height: 38, background: 'rgba(45,91,227,0.15)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🌱</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>New to Earn?</div>
              <div style={{ fontSize: 11, color: '#8A8FA8' }}>Start with stablecoins — no price risk</div>
            </div>
            <div style={{ marginLeft: 'auto', color: '#4A5080', fontSize: 18 }}>›</div>
          </div>

          {/* Earn explainer */}
          <div style={{ margin: '0 16px 18px', padding: '16px', background: '#0D1235', borderRadius: 16 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: 'white', lineHeight: 1.25, marginBottom: 8 }}>
              Make your crypto<br />work for you
            </div>
            <div style={{ fontSize: 12, color: '#8A8FA8', lineHeight: 1.65, marginBottom: 14 }}>
              Earn yield on the crypto you already hold — no trading required. Choose flexible terms to withdraw anytime, or lock in higher rates with fixed terms.
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {[
                { icon: '💧', label: 'Flexible', sub: 'Up to 5% APY' },
                { icon: '🔒', label: 'Fixed', sub: 'Up to 8% APY' },
                { icon: '🛡', label: 'Secure', sub: 'Non-custodial' },
              ].map(({ icon, label, sub }) => (
                <div key={label} style={{
                  flex: 1, background: '#1A1F3A', borderRadius: 12,
                  padding: '10px 8px', textAlign: 'center',
                }}>
                  <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'white', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontSize: 10, color: '#8A8FA8' }}>{sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Term filter pills */}
          <div style={{ display: 'flex', gap: 8, padding: '0 16px 16px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {TERM_FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setTermFilter(f)}
                style={{
                  background: 'transparent',
                  border: termFilter === f ? '1.5px solid #2D5BE3' : '1.5px solid #252B50',
                  borderRadius: 22, padding: '7px 16px',
                  fontSize: 13, fontWeight: 600,
                  color: termFilter === f ? 'white' : '#8A8FA8',
                  whiteSpace: 'nowrap', cursor: 'pointer',
                }}
              >{f}</button>
            ))}
          </div>

          {/* Asset groups */}
          <div style={{ padding: '0 16px' }}>
            {/* Column header */}
            <div style={{ display: 'flex', alignItems: 'center', padding: '0 4px 8px' }}>
              <div style={{ flex: 1 }} />
              <div style={{ fontSize: 10, fontWeight: 700, color: '#4A5080', textTransform: 'uppercase', letterSpacing: '0.6px' }}>Earn up to</div>
              <div style={{ width: 26 }} />
            </div>

            {MY_CRYPTO_EARN.map(({ asset, name, label, options }) => {
              const filtered = termFilter === 'All terms' ? options : options.filter(o => o.term === termFilter)
              if (filtered.length === 0) return null
              return (
                <div key={asset} style={{ marginBottom: 16 }}>
                  <div style={{ fontSize: 12, color: '#8A8FA8', marginBottom: 8 }}>Earn with {name}</div>
                  <div style={{ background: '#0D1235', borderRadius: 14, overflow: 'hidden' }}>
                    {filtered.map((opt, i) => (
                      <div
                        key={opt.term}
                        onClick={() => navigate(opt.route)}
                        style={{
                          display: 'flex', alignItems: 'center', gap: 12,
                          padding: '14px 16px', cursor: 'pointer',
                          borderBottom: i < filtered.length - 1 ? '1px solid #131830' : 'none',
                        }}
                      >
                        <AssetIcon asset={asset} size={40} />
                        <div style={{ flex: 1 }}>
                          <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>{name}</div>
                          <div style={{ fontSize: 12, color: '#8A8FA8' }}>{opt.termLabel}</div>
                        </div>
                        <div style={{ fontSize: 17, fontWeight: 800, color: '#4CAF50' }}>{opt.apy}</div>
                        <div style={{ color: '#3A4070', fontSize: 18 }}>›</div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

      <div style={{ height: 8 }} />
    </>
  )
}

const TOP_RATES = [
  { rank: '🥇', asset: 'usdt', name: 'Tether USD',  apy: '5.00%', apyColor: '#4CAF50', badge: 'Stablecoin' },
  { rank: '🥈', asset: 'usdc', name: 'USD Coin',    apy: '5.00%', apyColor: '#4CAF50', badge: 'Stablecoin' },
  { rank: '🥉', asset: 'eth',  name: 'Ethereum',    apy: '4.00%', apyColor: '#5B84F5', badge: null },
  { rank: '4',  asset: 'btc',  name: 'Bitcoin',     apy: '1.00%', apyColor: '#8A8FA8', badge: null },
]

function IconBtn({ children, onClick }) {
  return (
    <button onClick={onClick} style={{
      width: 34, height: 34, background: '#1A1F3A', border: 'none',
      borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: 15, flexShrink: 0,
    }}>{children}</button>
  )
}

// Spark / AI wand icon for CROpilot
function CROpilotIcon({ size = 20, color = 'white' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      {/* Main wand */}
      <path d="M15 3L16.5 6.5L20 8L16.5 9.5L15 13L13.5 9.5L10 8L13.5 6.5L15 3Z"
        fill={color} opacity="1"/>
      {/* Small star bottom-left */}
      <path d="M6 14L7 16.5L9.5 17.5L7 18.5L6 21L5 18.5L2.5 17.5L5 16.5L6 14Z"
        fill={color} opacity="0.7"/>
      {/* Tiny dot */}
      <circle cx="19" cy="17" r="1.5" fill={color} opacity="0.5"/>
    </svg>
  )
}
