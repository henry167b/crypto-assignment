import { useState } from 'react'
import AssetIcon from '../components/AssetIcon'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'

const FLEXIBLE_ASSETS = [
  { asset: 'btc',  name: 'BTC',  full: 'Bitcoin',              your: '0.25%', best: '1.00%', hist: '3.50%' },
  { asset: 'eth',  name: 'ETH',  full: 'Ethereum',             your: '2.00%', best: '4.00%', hist: '7.50%' },
  { asset: 'usdt', name: 'USDT', full: 'Tether USD · Stablecoin', your: '3.00%', best: '5.00%', hist: '8.00%' },
  { asset: 'usdc', name: 'USDC', full: 'USD Coin · Stablecoin',   your: '3.00%', best: '5.00%', hist: '8.00%' },
]

const FIXED_ASSETS = [
  { asset: 'btc',  name: 'BTC',  full: 'Bitcoin · 3-month term',    your: '1.00%', best: '2.00%', hist: '5.00%' },
  { asset: 'eth',  name: 'ETH',  full: 'Ethereum · 3-month term',   your: '4.00%', best: '8.00%', hist: '12.00%' },
  { asset: 'usdt', name: 'USDT', full: 'Tether USD · 1-month term', your: '5.00%', best: '8.00%', hist: '12.00%' },
  { asset: 'usdc', name: 'USDC', full: 'USD Coin · 1-month term',   your: '5.00%', best: '8.00%', hist: '12.00%' },
]

const TABS = ['All Assets', 'Stablecoins', 'Bitcoin', 'Ethereum']

export default function AssetList({ navigate, type = 'flexible' }) {
  const [activeTab, setActiveTab] = useState('All Assets')
  const isFixed = type === 'fixed'
  const assets = isFixed ? FIXED_ASSETS : FLEXIBLE_ASSETS

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden' }}>
      <ScreenHeader
        title={isFixed ? 'Fixed Earn' : 'Flexible Earn'}
        onBack={() => navigate('home-earn')}
      />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' }}>

        {isFixed && (
          <div style={{
            margin: '0 16px 14px',
            background: 'rgba(38,161,123,0.1)', border: '1px solid rgba(38,161,123,0.3)',
            borderRadius: 12, padding: '10px 14px',
            fontSize: 12, color: '#8A8FA8', lineHeight: 1.5,
          }}>
            🔒 <span style={{ color: '#4CAF50', fontWeight: 600 }}>Fixed terms lock your funds</span> for 1–3 months in exchange for higher rates. Early withdrawal is not available.
          </div>
        )}

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 7, padding: '0 16px 14px', overflowX: 'auto', scrollbarWidth: 'none' }}>
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setActiveTab(t)}
              style={{
                background: activeTab === t ? '#2D5BE3' : '#1A1F3A',
                border: `1px solid ${activeTab === t ? '#2D5BE3' : '#252B50'}`,
                borderRadius: 20, padding: '6px 14px',
                fontSize: 12, fontWeight: 600,
                color: activeTab === t ? 'white' : '#8A8FA8',
                whiteSpace: 'nowrap',
              }}
            >{t}</button>
          ))}
        </div>

        {/* Asset rows */}
        <div style={{ background: '#0D1235', margin: '0 16px', borderRadius: 16, overflow: 'hidden' }}>
          {assets.map(({ asset, name, full, your, best, hist }, i) => (
            <div
              key={asset}
              onClick={() => navigate('asset-detail')}
              style={{
                display: 'flex', alignItems: 'center', padding: '14px 16px', gap: 12, cursor: 'pointer',
                borderBottom: i < assets.length - 1 ? '1px solid #131830' : 'none',
              }}
            >
              <AssetIcon asset={asset} size={40} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>{name}</div>
                <div style={{ fontSize: 11, color: '#8A8FA8', marginBottom: 7 }}>{full}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  <RateLine label="Your rate:" value={your} color="#5B84F5" />
                  <RateLine label="Best rate:" value={`${best} (CRO stake)`} color="#4CAF50" />
                  <RateLine label="Historical best:" value={hist} color="#FF9800" />
                </div>
              </div>
              <div style={{ color: '#3A4070', fontSize: 18 }}>›</div>
            </div>
          ))}
        </div>

        {/* CRO nudge */}
        <div style={{
          margin: '14px 16px 20px', background: '#1A1F3A',
          border: '1px solid rgba(45,91,227,0.3)', borderRadius: 16, padding: '14px 16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span style={{ fontSize: 24 }}>🚀</span>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'white', marginBottom: 2 }}>Unlock best rates</div>
              <div style={{ fontSize: 11, color: '#8A8FA8' }}>Stake CRO to boost your Earn rate by up to 2×</div>
            </div>
          </div>
          <button style={{
            background: '#2D5BE3', color: 'white', border: 'none',
            borderRadius: 12, padding: '12px 16px', fontSize: 14, fontWeight: 600, width: '100%',
          }}>Stake CRO to Boost</button>
        </div>

      </div>
      <BottomNav current="asset-list" navigate={navigate} />
    </div>
  )
}

function RateLine({ label, value, color }) {
  return (
    <div style={{ fontSize: 11, color: '#8A8FA8' }}>
      {label} <span style={{ color, fontWeight: 700 }}>{value} APY</span>
    </div>
  )
}
