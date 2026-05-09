import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="container" style={{ padding: 'var(--sp-12) 0' }}>
      <h1 style={{ marginBottom: 'var(--sp-10)', textAlign: 'center', fontSize: 36 }}>Contact <span style={{ color: 'var(--accent)' }}>Us</span></h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-12)' }}>
        {/* Contact Info */}
        <div>
          <h2 style={{ marginBottom: 'var(--sp-6)' }}>Get in Touch</h2>
          <p style={{ color: 'var(--text-2)', marginBottom: 'var(--sp-8)', lineHeight: 1.6 }}>
            Have a question about a part? Need help with an order? Our automotive experts are here to assist you Monday through Saturday, 9 AM to 7 PM.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-6)' }}>
            <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-dark)', padding: 12, borderRadius: 'var(--radius-full)', color: 'var(--accent)' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: 4 }}>Phone Support</h4>
                <p style={{ color: 'var(--text-2)' }}>+91 800-123-4567</p>
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-dark)', padding: 12, borderRadius: 'var(--radius-full)', color: 'var(--accent)' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: 4 }}>Email Support</h4>
                <p style={{ color: 'var(--text-2)' }}>support@automob.in</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 'var(--sp-4)', alignItems: 'flex-start' }}>
              <div style={{ background: 'var(--bg-dark)', padding: 12, borderRadius: 'var(--radius-full)', color: 'var(--accent)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ marginBottom: 4 }}>Corporate Office</h4>
                <p style={{ color: 'var(--text-2)', lineHeight: 1.5 }}>
                  Automob HQ, Auto Hub Plaza,<br />
                  Sector 45, Gurgaon,<br />
                  Haryana 122003, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card" style={{ padding: 'var(--sp-8)' }}>
          <h3 style={{ marginBottom: 'var(--sp-6)' }}>Send us a Message</h3>
          <form onSubmit={e => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Full Name</label>
              <input type="text" className="input" placeholder="John Doe" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Email Address</label>
              <input type="email" className="input" placeholder="john@example.com" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Vehicle Details (Optional)</label>
              <input type="text" className="input" placeholder="e.g. 2018 Hyundai i20 Petrol" />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>Message</label>
              <textarea className="input" rows="4" placeholder="How can we help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-accent" style={{ marginTop: 'var(--sp-2)' }}>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
