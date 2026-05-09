import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../data';

// Inline social SVG icons (no external dependency)
const FBIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const IGIcon = () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const YTIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/></svg>;
const TWIcon = () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;

export default function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: '#94a3b8', marginTop: 'var(--sp-16)' }}>
      {/* Top band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', padding: 'var(--sp-10) 0' }}>
        <div className="container grid-4">
          <div className="flex items-center gap-4">
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🚚</div>
            <div><div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Free Delivery</div><div style={{ fontSize: 13 }}>On orders above ₹999</div></div>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1a2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>✅</div>
            <div><div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>100% Genuine Parts</div><div style={{ fontSize: 13 }}>Sourced directly from brands</div></div>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1a2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🔄</div>
            <div><div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>Easy Returns</div><div style={{ fontSize: 13 }}>10-day hassle-free returns</div></div>
          </div>
          <div className="flex items-center gap-4">
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#1a2b3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>🎧</div>
            <div><div style={{ color: 'white', fontWeight: 700, fontSize: 15 }}>24/7 Support</div><div style={{ fontSize: 13 }}>Expert help anytime</div></div>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container" style={{ padding: 'var(--sp-12) var(--sp-6)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 'var(--sp-10)' }}>
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-5)' }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: 'linear-gradient(135deg, var(--accent), #c2410c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>🏎️</div>
              <div className="brand-font" style={{ color: 'white', fontSize: 26, letterSpacing: 1 }}>AUTOMOB</div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, marginBottom: 'var(--sp-5)' }}>
              India's trusted single-vendor automotive parts store. We stock genuine and premium aftermarket parts for all popular car brands.
            </p>
            <div className="flex flex-col gap-3" style={{ fontSize: 13 }}>
              <span className="flex items-center gap-2"><MapPin size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} /> 42 Auto Plaza, Sector 18, Gurugram, Haryana 122015</span>
              <a href="tel:+918001234567" className="flex items-center gap-2" style={{ color: '#94a3b8' }}><Phone size={14} style={{ color: 'var(--accent)' }} /> +91 800-123-4567</a>
              <a href="mailto:hello@automob.in" className="flex items-center gap-2" style={{ color: '#94a3b8' }}><Mail size={14} style={{ color: 'var(--accent)' }} /> hello@automob.in</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: 'white', marginBottom: 'var(--sp-5)', fontSize: 15 }}>Quick Links</h4>
            {[
              { name: 'About Us', path: '/about' },
              { name: 'Contact Us', path: '/contact' },
              { name: 'Track Order', path: '/track-order' },
              { name: 'Blog', path: '/blog' },
              { name: 'Careers', path: '/careers' },
              { name: 'Partner With Us', path: '/partner' }
            ].map(l => (
              <Link key={l.name} to={l.path} className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: 13, padding: '5px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; }}>
                <ArrowRight size={12} /> {l.name}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4 style={{ color: 'white', marginBottom: 'var(--sp-5)', fontSize: 15 }}>Categories</h4>
            {CATEGORIES.slice(0, 8).map(c => (
              <Link key={c.id} to={`/search?cat=${c.id}`} className="flex items-center gap-2" style={{ color: '#94a3b8', fontSize: 13, padding: '5px 0', transition: 'color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; }}>
                <ArrowRight size={12} /> {c.name}
              </Link>
            ))}
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{ color: 'white', marginBottom: 'var(--sp-2)', fontSize: 15 }}>Newsletter</h4>
            <p style={{ fontSize: 13, marginBottom: 'var(--sp-4)' }}>Get deals, new arrivals & part alerts in your inbox.</p>
            <div className="flex gap-2" style={{ marginBottom: 'var(--sp-5)' }}>
              <input placeholder="Your email address" style={{ flex: 1, padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.06)', color: 'white', fontSize: 13 }} />
              <button style={{ background: 'var(--accent)', color: 'white', padding: '10px 16px', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>Go</button>
            </div>
            <h4 style={{ color: 'white', marginBottom: 'var(--sp-3)', fontSize: 14 }}>Follow Us</h4>
            <div className="flex gap-3">
              {[{ Icon: FBIcon, c:'#1877f2' }, { Icon: IGIcon, c:'#e1306c' }, { Icon: YTIcon, c:'#ff0000' }, { Icon: TWIcon, c:'#1da1f2' }].map(({ Icon, c }, i) => (
                <a key={i} href="#" style={{ width: 36, height: 36, borderRadius: 8, background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = c; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}>
                  <Icon size={16} style={{ color: 'white' }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'var(--sp-4) 0' }}>
        <div className="container flex items-center justify-between" style={{ fontSize: 12 }}>
          <span>© 2025 Automob Auto Parts. All rights reserved.</span>
          <div className="flex gap-6">
            <Link to="/" style={{ color: '#64748b' }}>Privacy Policy</Link>
            <Link to="/" style={{ color: '#64748b' }}>Terms of Use</Link>
            <Link to="/" style={{ color: '#64748b' }}>Return Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
