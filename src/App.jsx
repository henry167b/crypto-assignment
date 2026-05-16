import { useState } from 'react'
import PhoneFrame from './components/PhoneFrame'
import Home from './screens/Home'
import AssetList from './screens/AssetList'
import AssetDetail from './screens/AssetDetail'
import GuidedEntry from './screens/GuidedEntry'
import Copilot from './screens/Copilot'

const FEATURES = [
  {
    num: '01',
    title: 'Navigation Fixes',
    desc: 'Duplicate entry point removed. Home retains a passive discovery banner ("Your BTC could be earning X% right now") that leads to one unified Earn destination. Hamburger menu entry removed. One feature, one location — consistent with OKX and Coinbase standard.',
    path: ['Home', 'Explore', 'banner → Earn'],
  },
  {
    num: '02',
    title: 'Naming Changes',
    desc: 'Gamified sub-category names replaced with two clean functional tiers: Flexible Earn (deposit and withdraw anytime, variable rate) and Fixed Earn (locked term, higher rate). Airdrop Arena, Supercharger, and DeFi Yield repositioned as advanced features. Primary Earn experience is financial in tone — not promotional.',
    path: ['Home', 'Earn', 'Flexible / Short Term pills'],
  },
  {
    num: '03',
    title: 'Transparent Rate Display',
    desc: 'Single headline APY replaced with a structured three-line display: Your Rate (actual APY at current CRO tier), Best Possible Rate (tier-dependent, one-tap explanation of what CRO stake unlocks it), and Earn up to X% (best sustained 6-month historical APY). Eliminates silent conditionality that erodes trust.',
    path: ['Home', 'Earn', 'tap asset', 'Asset Detail'],
  },
  {
    num: '04',
    title: 'Traditional Finance Bridge',
    desc: 'Anchors Earn to what users already know. Comparison table across Singapore T-Bill, Bank Fixed Deposit, Revolut, and Crypto Earn (USDT & ETH) — showing Rate Type, Liquidity, Principal Risk, and Indicative Rate. USDT Earn is the closest crypto analogue to a flexible deposit.',
    path: ['Home', 'Earn', 'New to Earn?', 'Getting Started'],
  },
  {
    num: '05',
    title: 'Guided Entry Point',
    desc: 'Structured nudge surfaced before the full asset list for first-time users. Routes cautious users toward USDT or USDC — lowest-complexity entry, no asset price exposure, directly comparable to a flexible deposit. Once first position is active, barrier to exploring other assets drops significantly.',
    path: ['Home', 'Earn', 'New to Earn?'],
  },
  {
    num: '06',
    title: 'Earn Simulator',
    desc: 'User selects amount and term (7 / 30 / 90 days) and sees projected outcomes at their current tier. Outcomes shown in both crypto and USD terms. Makes abstract risk tangible before capital is committed — same convention as mortgage calculators and CPF projection tools. Hold ℹ for full tier breakdown.',
    path: ['Home', 'Earn', 'tap asset', 'Earn Simulator', 'hold ℹ'],
  },
  {
    num: '07',
    title: 'AI CROpilot',
    desc: 'CROpilot surfaces a personalised asset shortlist from wallet holdings (eliminates choice paralysis), fields natural-language Q&A ("What happens if ETH drops while I\'m earning?"), outputs plain-English simulator narratives contextualised against TradFi alternatives, and dynamically updates the comparison table with live T-bill and bank FD rates.',
    path: ['Home', 'tap ✦ icon'],
  },
]

export default function App() {
  const [screen, setScreen] = useState('home')
  const [homeTab, setHomeTab] = useState('explore')

  function navigate(target) {
    // Going back to home from earn-flow screens should land on the earn tab
    if (target === 'home-earn') {
      setHomeTab('earn')
      setScreen('home')
    } else {
      setScreen(target)
    }
  }

  const props = { navigate }

  return (
    <div style={{ display: 'flex', height: '100vh', width: '100%', padding: '0 48px', gap: 0 }}>

      {/* ── Left sidebar ── */}
      <div style={{
        width: 580, flexShrink: 0, height: '100vh', overflowY: 'auto',
        padding: '40px 0 40px', scrollbarWidth: 'none',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 3, height: 28, background: '#2D5BE3', borderRadius: 2 }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, color: '#2D5BE3', letterSpacing: '1.2px', textTransform: 'uppercase' }}>Crypto.com Earn</div>
              <div style={{ fontSize: 17, fontWeight: 800, color: 'white' }}>UX Prototype</div>
            </div>
          </div>
          <div style={{ fontSize: 11, color: '#4A5080', lineHeight: 1.6 }}>
            7 proposed improvements · 2025<br />
            Navigation is fully interactive
          </div>
        </div>

        {/* Feature cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, flex: 1, alignContent: 'start' }}>
          {FEATURES.map((f, i) => (
            <div key={i} style={{
              background: '#0D1235', borderRadius: 12, padding: '12px 14px',
              border: '1px solid #141830',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 5 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#2D5BE3', letterSpacing: '0.5px', flexShrink: 0 }}>{f.num}</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'white' }}>{f.title}</span>
              </div>
              <div style={{ fontSize: 11, color: '#5A6080', lineHeight: 1.55, marginBottom: 8 }}>{f.desc}</div>
              <div style={{
                display: 'flex', flexWrap: 'wrap', gap: 3, alignItems: 'center',
                paddingTop: 7, borderTop: '1px solid #141830',
              }}>
                {f.path.map((step, j) => (
                  <span key={j} style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <span style={{ fontSize: 10, color: '#4A6ACD', fontWeight: 600 }}>{step}</span>
                    {j < f.path.length - 1 && <span style={{ fontSize: 10, color: '#252B50' }}>›</span>}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div style={{ width: 1, background: '#141830', margin: '40px 36px', flexShrink: 0 }} />

      {/* ── Phone area ── */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <PhoneFrame>
          {screen === 'home'               && <Home {...props} tab={homeTab} setTab={setHomeTab} />}
          {screen === 'asset-list'         && <AssetList {...props} type="flexible" />}
          {screen === 'fixed-asset-list'   && <AssetList {...props} type="fixed" />}
          {screen === 'asset-detail'       && <AssetDetail {...props} />}
          {screen === 'guided'             && <GuidedEntry {...props} />}
          {screen === 'copilot'            && <Copilot {...props} />}
        </PhoneFrame>
      </div>

    </div>
  )
}
