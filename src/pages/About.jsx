import { Shield, Target, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="container" style={{ padding: 'var(--sp-12) 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <h1 style={{ marginBottom: 'var(--sp-6)', textAlign: 'center', fontSize: 36 }}>About <span style={{ color: 'var(--accent)' }}>Automob</span></h1>
        
        <p style={{ fontSize: 18, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 'var(--sp-8)', textAlign: 'center' }}>
          Founded in 2024, Automob has quickly become India's most trusted online marketplace for genuine and aftermarket auto parts. Our mission is to democratize access to high-quality car components, ensuring every driver can maintain their vehicle safely and affordably.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-6)', marginBottom: 'var(--sp-12)' }}>
          <div className="card" style={{ padding: 'var(--sp-6)', textAlign: 'center' }}>
            <Shield size={32} color="var(--accent)" style={{ margin: '0 auto var(--sp-4)' }} />
            <h3 style={{ marginBottom: 'var(--sp-2)' }}>100% Genuine</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>We source directly from OEMs and authorized distributors.</p>
          </div>
          <div className="card" style={{ padding: 'var(--sp-6)', textAlign: 'center' }}>
            <Target size={32} color="var(--accent)" style={{ margin: '0 auto var(--sp-4)' }} />
            <h3 style={{ marginBottom: 'var(--sp-2)' }}>Precision Fit</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Our catalog matching system guarantees the perfect fit for your car.</p>
          </div>
          <div className="card" style={{ padding: 'var(--sp-6)', textAlign: 'center' }}>
            <Users size={32} color="var(--accent)" style={{ margin: '0 auto var(--sp-4)' }} />
            <h3 style={{ marginBottom: 'var(--sp-2)' }}>Expert Support</h3>
            <p style={{ color: 'var(--text-2)', fontSize: 14 }}>Our team of mechanics is ready to help you find the right part.</p>
          </div>
        </div>

        <h2 style={{ marginBottom: 'var(--sp-4)', fontSize: 24 }}>Our Story</h2>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)', marginBottom: 'var(--sp-6)' }}>
          The idea for Automob was born out of frustration. Our founders struggled to find reliable, fairly-priced spare parts for their own vehicles. The local market was flooded with counterfeits, and authorized service centers charged exorbitant premiums. 
        </p>
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--text-2)' }}>
          We realized there had to be a better way. By leveraging technology and building direct relationships with top-tier manufacturers like Bosch, Brembo, and NGK, we created a platform where transparency, quality, and customer satisfaction come first.
        </p>
      </div>
    </div>
  );
}
