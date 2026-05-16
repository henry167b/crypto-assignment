import { useState } from 'react'
import AssetIcon from '../components/AssetIcon'
import ScreenHeader from '../components/ScreenHeader'
import BottomNav from '../components/BottomNav'

const PRINCIPAL = 2500
const TERMS = [7, 30, 90]

const TIERS = [
  { key: '1', label: 'Tier 1', range: '< $3,807.36',                  apy: 0.050, apyLabel: '5.00%', color: '#4CAF50', active: true  },
  { key: '2', label: 'Tier 2', range: '$3,807.36 – $34,266.24',        apy: 0.030, apyLabel: '3.00%', color: '#5B84F5', active: false },
  { key: '3', label: 'Tier 3', range: '> $34,266.24',                  apy: 0.015, apyLabel: '1.50%', color: '#8A8FA8', active: false },
]

const TIER_DISCLAIMER = [
  "Reward Rate is determined at the time of confirmation. It is tied to your Level Up or CRO Lockup Tier and may change if you upgrade / downgrade.",
  "Allocation Amount is based on the allocation's USD value at the time of confirmation.",
  "If a single allocation exceeds the remaining quota for the tier, the entire allocation will be subject to the next tier's rate.",
]

export default function AssetDetail({ navigate }) {
  const [term, setTerm] = useState(30)
  const [tooltip, setTooltip] = useState(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, minHeight: 0, overflow: 'hidden' }}>
      <ScreenHeader title="USDT Earn" onBack={() => navigate('asset-list')} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', scrollbarWidth: 'none' }}>

        {/* Hero */}
        <div style={{ padding: '4px 16px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <AssetIcon asset="usdt" size={64} />
          <div style={{ fontSize: 22, fontWeight: 800, color: 'white', margin: '10px 0 2px' }}>Tether USD</div>
          <div style={{ fontSize: 13, color: '#8A8FA8' }}>Stablecoin · Pegged 1:1 to USD · No price risk</div>
        </div>

        {/* Rate card */}
        <div style={{ background: '#1A1F3A', borderRadius: 16, padding: '4px 16px', margin: '0 16px 12px' }}>
          <RateRow label="Your rate">
            <span style={{ fontSize: 17, fontWeight: 800, color: '#5B84F5' }}>3.00% APY</span>
          </RateRow>
          <RateRow label="Best available rate">
            <span style={{ fontSize: 17, fontWeight: 800, color: '#4CAF50' }}>5.00% APY</span>
            <span style={{
              fontSize: 9, fontWeight: 700, background: 'rgba(76,175,80,0.15)', color: '#4CAF50',
              borderRadius: 5, padding: '2px 5px', textTransform: 'uppercase',
            }}>CRO stake</span>
          </RateRow>
          <RateRow label="Historical best" last>
            <span style={{ fontSize: 17, fontWeight: 800, color: '#FF9800' }}>8.00% APY</span>
          </RateRow>
        </div>

        {/* Simulator */}
        <div style={{ background: '#1A1F3A', borderRadius: 16, padding: '18px 16px', margin: '0 16px 12px', position: 'relative' }}>

          {/* Tier info tooltip */}
          {tooltip === 'tier-info' && (
            <div style={{
              position: 'absolute', top: 44, left: 16, right: 16,
              background: '#1E2448', border: '1px solid rgba(45,91,227,0.4)',
              borderRadius: 14, padding: '14px', zIndex: 10,
              boxShadow: '0 12px 32px rgba(0,0,0,0.7)', pointerEvents: 'none',
            }}>
              {/* Caret */}
              <div style={{
                position: 'absolute', top: -5, left: 130,
                width: 8, height: 8, background: '#1E2448',
                border: '1px solid rgba(45,91,227,0.4)',
                borderBottom: 'none', borderRight: 'none',
                transform: 'rotate(45deg)',
              }}/>
              {/* Table header */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 16px', marginBottom: 8, paddingBottom: 8, borderBottom: '1px solid #252B50' }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#8A8FA8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Total Earn Allocation</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#8A8FA8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Tier</span>
                <span style={{ fontSize: 10, fontWeight: 700, color: '#8A8FA8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rate</span>
              </div>
              {TIERS.map((tier, i) => (
                <div key={tier.key} style={{
                  display: 'grid', gridTemplateColumns: '1fr auto auto', gap: '0 16px',
                  padding: '7px 0', borderBottom: i < TIERS.length - 1 ? '1px solid #1A2040' : 'none',
                  alignItems: 'center',
                }}>
                  <span style={{ fontSize: 11, color: '#C0C6E0' }}>{tier.range}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: tier.color }}>{tier.key}</span>
                  <span style={{ fontSize: 11, fontWeight: 700, color: tier.color }}>{tier.apyLabel}</span>
                </div>
              ))}
              <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {TIER_DISCLAIMER.map((d, i) => (
                  <div key={i} style={{ fontSize: 10, color: '#8A8FA8', lineHeight: 1.5 }}>{d}</div>
                ))}
              </div>
            </div>
          )}

          {/* Header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <div style={{ fontSize: 15, fontWeight: 700, color: 'white' }}>⚡ Earn Simulator</div>
            <span
              onMouseDown={e => { e.stopPropagation(); setTooltip('tier-info') }}
              onMouseUp={e => { e.stopPropagation(); setTooltip(null) }}
              onMouseLeave={() => setTooltip(null)}
              onTouchStart={e => { e.stopPropagation(); setTooltip('tier-info') }}
              onTouchEnd={e => { e.stopPropagation(); setTooltip(null) }}
              style={{
                width: 16, height: 16, borderRadius: '50%',
                background: 'rgba(255,255,255,0.12)',
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 700,
                cursor: 'help', userSelect: 'none',
              }}
            >i</span>
          </div>

          <div style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'stretch' }}>
            {/* Amount */}
            <div style={{ flex: 1, background: '#141830', border: '1px solid #252B50', borderRadius: 10, padding: '11px 13px' }}>
              <div style={{ fontSize: 9, color: '#8A8FA8', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>Amount</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: 'white' }}>2,500 USDT</div>
              <div style={{ fontSize: 10, color: '#8A8FA8', marginTop: 2 }}>≈ $2,500.00</div>
            </div>
            {/* Term toggle */}
            <div style={{ display: 'flex', background: '#141830', border: '1px solid #252B50', borderRadius: 10, overflow: 'hidden' }}>
              {TERMS.map(d => (
                <button
                  key={d}
                  onClick={() => setTerm(d)}
                  style={{
                    padding: '0 12px', fontSize: 12, fontWeight: 600, border: 'none',
                    background: term === d ? '#2D5BE3' : 'transparent',
                    color: term === d ? 'white' : '#8A8FA8',
                    borderRadius: term === d ? 8 : 0,
                    margin: term === d ? 3 : 0,
                    transition: 'all 0.15s',
                  }}
                >{d}d</button>
              ))}
            </div>
          </div>

          <div style={{ fontSize: 10, color: '#8A8FA8', marginBottom: 10 }}>
            Projected returns over <strong style={{ color: '#C0C6E0' }}>{term} days</strong>
          </div>

          {/* Current tier row */}
          {(() => {
            const tier = TIERS.find(t => t.active)
            const earned = (PRINCIPAL * tier.apy * term / 365).toFixed(2)
            return (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 12,
                background: `${tier.color}15`, border: `1px solid ${tier.color}50`,
                borderRadius: 11, padding: '14px 14px',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: tier.color }}>Tier {tier.key}</span>
                    <span style={{ fontSize: 9, fontWeight: 700, background: `${tier.color}25`, color: tier.color, borderRadius: 4, padding: '2px 5px' }}>YOUR TIER</span>
                  </div>
                  <div style={{ fontSize: 11, color: '#8A8FA8' }}>{tier.apyLabel} APY · {tier.range}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: 16, fontWeight: 800, color: 'white' }}>+{earned} USDT</div>
                  <div style={{ fontSize: 10, color: '#8A8FA8' }}>≈ +${earned}</div>
                </div>
              </div>
            )
          })()}

          <div style={{ fontSize: 10, color: '#3A4070', textAlign: 'center', marginTop: 10 }}>
            Hold ℹ above to see all tiers · Rates are indicative
          </div>
        </div>

        {/* Risk note */}
        <div style={{
          margin: '0 16px 12px',
          background: 'rgba(38,161,123,0.08)', border: '1px solid rgba(38,161,123,0.25)',
          borderRadius: 14, padding: '14px 15px', display: 'flex', gap: 10,
        }}>
          <span style={{ fontSize: 20 }}>🛡️</span>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: '#4CAF50', marginBottom: 4 }}>Stablecoin — no price risk</div>
            <div style={{ fontSize: 11, color: '#8A8FA8', lineHeight: 1.5 }}>
              USDT is pegged 1:1 to USD. Your yield accrues in USDT regardless of crypto market movements.
            </div>
          </div>
        </div>

        <div style={{ padding: '4px 16px 20px' }}>
          <button style={{
            background: '#2D5BE3', color: 'white', border: 'none',
            borderRadius: 12, padding: 16, fontSize: 16, fontWeight: 600, width: '100%',
          }}>Start Earning</button>
        </div>

      </div>
      <BottomNav current="asset-detail" navigate={navigate} />
    </div>
  )
}

function RateRow({ label, children, last }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '13px 0', borderBottom: last ? 'none' : '1px solid #1E2448',
    }}>
      <span style={{ fontSize: 12, color: '#8A8FA8' }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>{children}</div>
    </div>
  )
}

