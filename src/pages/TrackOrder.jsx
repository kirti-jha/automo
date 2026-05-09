import { PackageSearch, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function TrackOrder() {
  const [tracked, setTracked] = useState(false);

  return (
    <div className="container" style={{ padding: 'var(--sp-16) 0', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ maxWidth: 600, width: '100%', padding: 'var(--sp-10)', textAlign: 'center' }}>
        <PackageSearch size={48} color="var(--accent)" style={{ margin: '0 auto var(--sp-6)' }} />
        <h1 style={{ marginBottom: 'var(--sp-2)' }}>Track Your Order</h1>
        <p style={{ color: 'var(--text-2)', marginBottom: 'var(--sp-8)' }}>Enter your order ID and email to see live tracking updates.</p>

        {!tracked ? (
          <form onSubmit={(e) => { e.preventDefault(); setTracked(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <input type="text" className="input" placeholder="Order ID (e.g., ORD-99321)" required />
            <input type="email" className="input" placeholder="Email Address used for order" required />
            <button type="submit" className="btn btn-accent" style={{ marginTop: 'var(--sp-2)' }}>Track Now <ArrowRight size={18} style={{ marginLeft: 8 }} /></button>
          </form>
        ) : (
          <div style={{ textAlign: 'left', background: 'var(--bg-dark)', padding: 'var(--sp-6)', borderRadius: 'var(--radius-md)', marginTop: 'var(--sp-6)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--sp-4)', paddingBottom: 'var(--sp-4)', borderBottom: '1px solid var(--border)' }}>
              <div>
                <p style={{ fontSize: 12, color: 'var(--text-2)' }}>ORDER ID</p>
                <strong>ORD-99321</strong>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontSize: 12, color: 'var(--text-2)' }}>STATUS</p>
                <strong style={{ color: '#10b981' }}>In Transit</strong>
              </div>
            </div>
            
            <div style={{ position: 'relative', paddingLeft: 24 }}>
              <div style={{ position: 'absolute', left: 4, top: 6, bottom: 6, width: 2, background: 'var(--accent)' }} />
              
              <div style={{ position: 'relative', marginBottom: 'var(--sp-4)' }}>
                <div style={{ position: 'absolute', left: -25, top: 4, width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
                <p style={{ fontWeight: 600, fontSize: 14 }}>Out for Delivery</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)' }}>Today, 09:45 AM - Delhi Hub</p>
              </div>
              
              <div style={{ position: 'relative', marginBottom: 'var(--sp-4)' }}>
                <div style={{ position: 'absolute', left: -25, top: 4, width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
                <p style={{ fontWeight: 600, fontSize: 14 }}>Arrived at Destination Hub</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)' }}>Yesterday, 11:20 PM - Delhi Hub</p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: -25, top: 4, width: 10, height: 10, borderRadius: '50%', background: 'var(--accent)' }} />
                <p style={{ fontWeight: 600, fontSize: 14 }}>Shipped from Warehouse</p>
                <p style={{ fontSize: 13, color: 'var(--text-2)' }}>2 Days Ago, 04:15 PM - Gurgaon WH</p>
              </div>
            </div>
            
            <button className="btn btn-outline" style={{ width: '100%', marginTop: 'var(--sp-6)' }} onClick={() => setTracked(false)}>Track Another Order</button>
          </div>
        )}
      </div>
    </div>
  );
}
