import { Handshake, Store, TrendingUp } from 'lucide-react';

export default function Partner() {
  return (
    <div className="container" style={{ padding: 'var(--sp-12) 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 'var(--sp-10)' }}>
          <Handshake size={56} color="var(--accent)" style={{ margin: '0 auto var(--sp-4)' }} />
          <h1 style={{ marginBottom: 'var(--sp-4)', fontSize: 36 }}>Partner with <span style={{ color: 'var(--accent)' }}>Automob</span></h1>
          <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.6 }}>
            Are you a spare parts retailer, distributor, or manufacturer? Join India's fastest-growing digital marketplace and expand your reach.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-6)', marginBottom: 'var(--sp-12)' }}>
          <div className="card" style={{ padding: 'var(--sp-6)' }}>
            <Store size={28} color="var(--accent)" style={{ marginBottom: 'var(--sp-3)' }} />
            <h3 style={{ marginBottom: 'var(--sp-2)' }}>Sell Your Inventory</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>List your genuine and aftermarket parts on Automob and reach millions of car owners nationwide.</p>
          </div>
          <div className="card" style={{ padding: 'var(--sp-6)' }}>
            <TrendingUp size={28} color="var(--accent)" style={{ marginBottom: 'var(--sp-3)' }} />
            <h3 style={{ marginBottom: 'var(--sp-2)' }}>Grow Your Business</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Benefit from our massive marketing campaigns, efficient logistics network, and secure payment gateways.</p>
          </div>
        </div>

        <div className="card" style={{ padding: 'var(--sp-8)' }}>
          <h2 style={{ marginBottom: 'var(--sp-6)', textAlign: 'center' }}>Become a Partner</h2>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>Business Name</label>
              <input type="text" className="input" placeholder="e.g. Sharma Auto Spares" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>Contact Person</label>
              <input type="text" className="input" placeholder="Full Name" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>Phone Number</label>
              <input type="tel" className="input" placeholder="+91" />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>Email Address</label>
              <input type="email" className="input" placeholder="company@email.com" />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14 }}>Business Type</label>
              <select className="input" style={{ appearance: 'auto', background: 'var(--bg)' }}>
                <option>Retailer / Shop</option>
                <option>Wholesale Distributor</option>
                <option>OEM Manufacturer</option>
                <option>Authorized Service Center</option>
              </select>
            </div>
            <div style={{ gridColumn: 'span 2' }}>
              <button type="submit" className="btn btn-accent" style={{ width: '100%', marginTop: 'var(--sp-2)', padding: '14px' }}>Submit Partnership Request</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
