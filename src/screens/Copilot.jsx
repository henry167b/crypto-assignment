import AssetIcon from '../components/AssetIcon'
import ScreenHeader from '../components/ScreenHeader'

const WALLET = [
  { asset: 'btc', name: 'Bitcoin',   amount: '0.2104 BTC · $21,420', apy: 'Earn 1.00% APY' },
  { asset: 'eth', name: 'Ethereum',  amount: '1.85 ETH · $6,840',    apy: 'Earn 4.00% APY' },
]

export default function Copilot({ navigate }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflow: 'hidden' }}>

      <ScreenHeader
        title="CROpilot"
        onBack={() => navigate('home')}
        right={
          <span style={{
            background: 'rgba(45,91,227,0.18)', borderRadius: 20,
            padding: '4px 10px', fontSize: 10, fontWeight: 700, color: '#5B84F5', letterSpacing: '0.5px',
          }}>AI BETA</span>
        }
      />

      {/* Wallet section */}
      <div style={{ padding: '0 16px 10px', flexShrink: 0 }}>
        <div style={{ fontSize: 10, fontWeight: 700, color: '#4A5080', textTransform: 'uppercase', letterSpacing: '0.7px', marginBottom: 8 }}>
          Your wallet — suggested for Earn
        </div>
        {WALLET.map(({ asset, name, amount, apy }) => (
          <div key={asset} style={{
            display: 'flex', alignItems: 'center',
            background: '#1A1F3A', borderRadius: 11, padding: '10px 13px',
            marginBottom: 7, gap: 10,
          }}>
            <AssetIcon asset={asset} size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'white' }}>{name}</div>
              <div style={{ fontSize: 11, color: '#8A8FA8' }}>{amount}</div>
            </div>
            <div style={{ fontSize: 11, color: '#4CAF50', fontWeight: 600 }}>{apy}</div>
          </div>
        ))}
        <button style={{
          width: '100%', background: 'rgba(45,91,227,0.15)', border: '1px solid rgba(45,91,227,0.35)',
          borderRadius: 10, padding: 10, fontSize: 13, fontWeight: 600, color: '#5B84F5',
        }}>⚡ Put this to work</button>
      </div>

      <div style={{ height: 1, background: '#141830', margin: '0 16px', flexShrink: 0 }} />

      {/* Chat messages */}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 10, scrollbarWidth: 'none' }}>
        <div style={{ textAlign: 'center', fontSize: 10, color: '#3A4070' }}>Today · 1:11 PM</div>

        {/* User message */}
        <div style={{ display: 'flex', flexDirection: 'row-reverse', gap: 7, alignItems: 'flex-end' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#1A1F3A', border: '1px solid #252B50', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>👤</div>
          <div style={{ maxWidth: '78%', padding: '10px 13px', borderRadius: 15, borderBottomRightRadius: 4, background: '#2D5BE3', color: 'white', fontSize: 12, lineHeight: 1.55 }}>
            What happens if ETH drops while I'm earning?
          </div>
        </div>

        {/* AI response */}
        <div style={{ display: 'flex', gap: 7, alignItems: 'flex-end' }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#2D5BE3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><CROpilotIcon size={14} /></div>
          <div style={{ maxWidth: '78%', padding: '10px 13px', borderRadius: 15, borderBottomLeftRadius: 4, background: '#1A1F3A', color: '#C0C6E0', fontSize: 12, lineHeight: 1.55 }}>
            Your yield continues to accrue normally — but the USD value of your position decreases with ETH's price.
            <br /><br />
            For example: ETH down 20% while earning 4% APY = net ~−16% in USD over the year.
            <br /><br />
            <span style={{ color: '#93B4FF', fontWeight: 600 }}>Consider USDT Earn</span> if you want yield without price exposure — 3–5% APY with no volatility risk.
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 16px 14px', borderTop: '1px solid #141830', background: '#0B1133', flexShrink: 0,
      }}>
        <input
          readOnly
          placeholder="Ask about rates, risk, strategies…"
          style={{
            flex: 1, background: '#1A1F3A', border: '1px solid #252B50', borderRadius: 22,
            padding: '9px 15px', fontSize: 13, color: '#8A8FA8', outline: 'none',
          }}
        />
        <button style={{
          width: 36, height: 36, background: '#2D5BE3', border: 'none', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 15,
        }}>↑</button>
      </div>

    </div>
  )
}

function CROpilotIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 3L16.5 6.5L20 8L16.5 9.5L15 13L13.5 9.5L10 8L13.5 6.5L15 3Z" fill="white"/>
      <path d="M6 14L7 16.5L9.5 17.5L7 18.5L6 21L5 18.5L2.5 17.5L5 16.5L6 14Z" fill="white" opacity="0.7"/>
      <circle cx="19" cy="17" r="1.5" fill="white" opacity="0.5"/>
    </svg>
  )
}
