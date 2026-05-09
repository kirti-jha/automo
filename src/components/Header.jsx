import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, User, Phone, ChevronDown, Menu, X, Zap } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Brake System', href: '/search?cat=brake' },
  { label: 'Engine Parts', href: '/search?cat=engine' },
  { label: 'Suspension', href: '/search?cat=susp' },
  { label: 'Lighting', href: '/search?cat=light' },
  { label: 'Electricals', href: '/search?cat=elec' },
  { label: 'All Parts', href: '/search' },
];

export default function Header() {
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 2px 20px rgba(0,0,0,0.12)' }}>
      {/* Top Bar */}
      <div className="header-top-bar" style={{ background: 'var(--primary)', color: 'white', padding: '8px 0', fontSize: '12px' }}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Zap size={12} style={{ color: 'var(--accent)' }} /> Free shipping on orders above ₹999</span>
            <span style={{ color: '#94a3b8' }}>|</span>
            <span>100% Genuine Parts Guaranteed</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+918001234567" className="flex items-center gap-1" style={{ color: 'var(--accent)', fontWeight: 600 }}>
              <Phone size={12} /> +91 800-123-4567
            </a>
            <span style={{ color: '#94a3b8' }}>|</span>
            <Link to="/" style={{ color: '#cbd5e1' }}>Track Order</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div style={{ background: 'var(--primary-mid)', padding: '0' }}>
        <div className="container flex items-center gap-6 header-main-container" style={{ height: '72px' }}>
          {/* Logo */}
          <Link to="/" style={{ flexShrink: 0 }}>
            <div className="flex items-center gap-2">
              <div style={{
                width: 38, height: 38, borderRadius: 10,
                background: 'linear-gradient(135deg, var(--accent) 0%, #c2410c 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: 'var(--shadow-accent)'
              }}>
                <span style={{ fontSize: 20 }}>🏎️</span>
              </div>
              <div>
                <div className="brand-font" style={{ color: 'white', fontSize: 24, fontWeight: 700, lineHeight: 1, letterSpacing: 1 }}>AUTOMOB</div>
                <div style={{ color: 'var(--accent)', fontSize: 9, letterSpacing: 3, fontWeight: 600 }}>AUTO PARTS STORE</div>
              </div>
            </div>
          </Link>

          {/* Search */}
          <form onSubmit={handleSearch} className="flex-1 header-search-form" style={{ maxWidth: 600 }}>
            <div className="flex" style={{ background: 'white', borderRadius: 'var(--radius-md)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ borderRight: '1px solid var(--border)', padding: '0 12px', display: 'flex', alignItems: 'center', background: 'var(--bg)' }}>
                <select style={{ border: 'none', background: 'transparent', fontSize: 13, color: 'var(--text-2)', cursor: 'pointer', fontWeight: 600, paddingRight: 4 }}>
                  <option>All</option>
                  <option>Brakes</option>
                  <option>Engine</option>
                  <option>Lighting</option>
                </select>
              </div>
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search by Part No, Name, OEM Number, Vehicle..."
                style={{ flex: 1, padding: '12px 16px', border: 'none', fontSize: 14, color: 'var(--text-1)' }}
              />
              <button type="submit" style={{
                background: 'var(--accent)', color: 'white', padding: '0 22px',
                fontWeight: 700, fontSize: 14, display: 'flex', alignItems: 'center', gap: 6
              }}>
                <Search size={16} /> Search
              </button>
            </div>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-4" style={{ marginLeft: 'auto', flexShrink: 0 }}>
            <button className="flex flex-col items-center gap-1" style={{ color: 'white', background: 'transparent' }}>
              <User size={20} style={{ color: '#94a3b8' }} />
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Login</span>
            </button>
            <Link to="/cart" className="flex flex-col items-center gap-1" style={{ color: 'white', position: 'relative' }}>
              <ShoppingCart size={20} style={{ color: '#94a3b8' }} />
              <span className="notif-dot" style={{ top: -6, right: -6 }}>3</span>
              <span style={{ fontSize: 11, color: '#94a3b8' }}>Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Nav Bar */}
      <div className="nav-bar-desktop" style={{ background: 'var(--primary-light)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container flex items-center gap-1" style={{ height: 44 }}>
          <Link to="/search" style={{
            background: 'var(--accent)', color: 'white', padding: '6px 18px',
            borderRadius: 'var(--radius-sm)', fontWeight: 700, fontSize: 13, display: 'flex', alignItems: 'center', gap: 6, marginRight: 8
          }}>
            <Menu size={15} /> All Categories
          </Link>
          {NAV_LINKS.map(l => (
            <Link key={l.href} to={l.href} style={{ color: '#cbd5e1', fontSize: 13, fontWeight: 500, padding: '6px 14px', borderRadius: 'var(--radius-sm)', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={e => { e.target.style.background = 'rgba(255,255,255,0.08)'; e.target.style.color = 'white'; }}
              onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#cbd5e1'; }}>
              {l.label}
            </Link>
          ))}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: 'var(--accent)', fontSize: 12, fontWeight: 700, animation: 'pulse-badge 2s infinite' }}>🔥 SALE UP TO 40% OFF</span>
          </div>
        </div>
      </div>
    </header>
  );
}
