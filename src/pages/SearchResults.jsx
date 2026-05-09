import { useState } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import { SlidersHorizontal, ChevronRight, ShoppingCart, Star, X } from 'lucide-react';
import { CATEGORIES, PRODUCTS, fmt, discount, getProductsByCategory, getCategoryById } from '../data';

const SORT_OPTIONS = ['Popularity', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Rating'];
const PRICE_RANGES = [
  { label: 'Under ₹500', min: 0, max: 500 },
  { label: '₹500 – ₹2,000', min: 500, max: 2000 },
  { label: '₹2,000 – ₹5,000', min: 2000, max: 5000 },
  { label: '₹5,000 – ₹15,000', min: 5000, max: 15000 },
  { label: 'Above ₹15,000', min: 15000, max: Infinity },
];

export default function SearchResults() {
  const [params] = useSearchParams();
  const nav = useNavigate();
  const catId = params.get('cat');

  const [sort, setSort] = useState('Popularity');
  const [priceRange, setPriceRange] = useState(null);
  const [typeFilter, setTypeFilter] = useState(null);

  const currentCat = getCategoryById(catId);
  let products = getProductsByCategory(catId);

  if (priceRange) products = products.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
  if (typeFilter) products = products.filter(p => p.type === typeFilter);
  if (sort === 'Price: Low to High') products = [...products].sort((a,b) => a.price - b.price);
  if (sort === 'Price: High to Low') products = [...products].sort((a,b) => b.price - a.price);
  if (sort === 'Rating') products = [...products].sort((a,b) => b.rating - a.rating);

  return (
    <div className="container" style={{ padding: 'var(--sp-8) var(--sp-6)' }}>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={12} />
        <Link to="/search">All Parts</Link>
        {currentCat && <><ChevronRight size={12} /><span>{currentCat.name}</span></>}
      </nav>

      {/* Page title */}
      <div style={{ marginBottom: 'var(--sp-6)' }}>
        <h1 style={{ fontSize: 26 }}>{currentCat ? currentCat.name : 'All Auto Parts'}
          <span style={{ fontSize: 16, color: 'var(--text-3)', fontWeight: 400, marginLeft: 12 }}>({products.length} results)</span>
        </h1>
        <div className="sep" />
      </div>

      {/* Category pills */}
      <div className="flex gap-2 flex-wrap" style={{ marginBottom: 'var(--sp-6)' }}>
        <Link to="/search" className={`tag ${!catId ? 'active' : ''}`}
          style={{ background: !catId ? 'var(--primary)' : 'white', color: !catId ? 'white' : 'var(--text-2)', borderColor: !catId ? 'var(--primary)' : 'var(--border)' }}>
          All
        </Link>
        {CATEGORIES.map(c => (
          <Link key={c.id} to={`/search?cat=${c.id}`} className="tag"
            style={{ background: catId===c.id ? 'var(--accent)' : 'white', color: catId===c.id ? 'white' : 'var(--text-2)', borderColor: catId===c.id ? 'var(--accent)' : 'var(--border)', transition:'all 0.2s' }}>
            {c.icon} {c.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-6" style={{ alignItems: 'flex-start' }}>
        {/* ── SIDEBAR ────────────────────────────────────────────── */}
        <aside style={{ width: 260, flexShrink: 0, position: 'sticky', top: 140 }}>
          {/* Filter card */}
          <div className="card" style={{ padding: 'var(--sp-5)' }}>
            <div className="flex items-center justify-between" style={{ marginBottom: 'var(--sp-5)' }}>
              <h3 className="flex items-center gap-2" style={{ fontSize: 16 }}><SlidersHorizontal size={18} style={{ color: 'var(--accent)' }} /> Filters</h3>
              {(priceRange || typeFilter) && (
                <button onClick={() => { setPriceRange(null); setTypeFilter(null); }} className="btn btn-ghost btn-sm flex items-center gap-1" style={{ color: 'var(--red)', fontSize: 12 }}>
                  <X size={13} /> Clear
                </button>
              )}
            </div>

            {/* Price */}
            <div style={{ marginBottom: 'var(--sp-6)' }}>
              <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-2)', marginBottom: 'var(--sp-3)' }}>Price Range</div>
              {PRICE_RANGES.map(r => (
                <label key={r.label} className="flex items-center gap-2" style={{ padding: '6px 0', cursor: 'pointer', fontSize: 14, color: priceRange?.label===r.label ? 'var(--accent)' : 'var(--text-2)', fontWeight: priceRange?.label===r.label ? 600 : 400 }}>
                  <input type="radio" name="price" checked={priceRange?.label===r.label} onChange={() => setPriceRange(priceRange?.label===r.label ? null : r)} style={{ accentColor: 'var(--accent)' }} />
                  {r.label}
                </label>
              ))}
            </div>

            {/* Type */}
            <div style={{ marginBottom: 'var(--sp-6)' }}>
              <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-2)', marginBottom: 'var(--sp-3)' }}>Part Type</div>
              {['Genuine', 'Aftermarket'].map(t => (
                <label key={t} className="flex items-center gap-2" style={{ padding: '6px 0', cursor: 'pointer', fontSize: 14, color: typeFilter===t ? 'var(--accent)' : 'var(--text-2)', fontWeight: typeFilter===t ? 600 : 400 }}>
                  <input type="radio" name="type" checked={typeFilter===t} onChange={() => setTypeFilter(typeFilter===t ? null : t)} style={{ accentColor: 'var(--accent)' }} />
                  {t}
                </label>
              ))}
            </div>

            {/* Category */}
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: 1, color: 'var(--text-2)', marginBottom: 'var(--sp-3)' }}>Categories</div>
              {CATEGORIES.map(c => (
                <Link key={c.id} to={`/search?cat=${c.id}`} className="flex items-center justify-between" style={{ padding: '7px 0', fontSize: 14, color: catId===c.id ? 'var(--accent)' : 'var(--text-2)', fontWeight: catId===c.id ? 600 : 400, borderBottom: '1px solid var(--border)' }}>
                  <span>{c.icon} {c.name}</span>
                  <ChevronRight size={13} />
                </Link>
              ))}
            </div>
          </div>
        </aside>

        {/* ── PRODUCTS ───────────────────────────────────────────── */}
        <div style={{ flex: 1 }}>
          {/* Sort bar */}
          <div className="flex items-center justify-between" style={{ marginBottom: 'var(--sp-5)', background: 'white', padding: 'var(--sp-3) var(--sp-5)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }}>
            <span style={{ fontSize: 14, color: 'var(--text-2)' }}>Showing <strong>{products.length}</strong> parts</span>
            <div className="flex items-center gap-3">
              <span style={{ fontSize: 13, color: 'var(--text-3)' }}>Sort by:</span>
              <select value={sort} onChange={e => setSort(e.target.value)} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', padding: '6px 10px', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>
                {SORT_OPTIONS.map(o => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <div style={{ fontSize: 60, marginBottom: 'var(--sp-4)' }}>🔍</div>
              <h3 style={{ color: 'var(--text-2)', marginBottom: 'var(--sp-3)' }}>No parts found</h3>
              <button className="btn btn-primary" onClick={() => { setPriceRange(null); setTypeFilter(null); }}>Clear Filters</button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--sp-4)' }}>
              {products.map(p => {
                const disc = discount(p.price, p.mrp);
                return (
                  <div key={p.id} className="card" style={{ cursor: 'pointer' }} onClick={() => nav(`/product/${p.id}`)}>
                    <div style={{ position: 'relative', background: 'var(--bg)', padding: 'var(--sp-4)', height: 190, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <img src={`/images/${p.img}`} alt={p.name} style={{ maxHeight: 155, maxWidth: '90%', objectFit: 'contain', transition: 'transform 0.3s' }}
                        onMouseEnter={e => e.target.style.transform = 'scale(1.07)'}
                        onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
                      {p.badge && <span className="badge badge-orange" style={{ position: 'absolute', top: 8, left: 8 }}>{p.badge}</span>}
                      <span className={`badge ${p.type==='Genuine'?'badge-blue':'badge-gray'}`} style={{ position: 'absolute', top: 8, right: 8 }}>{p.type}</span>
                      {!p.stock && <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-md) var(--radius-md) 0 0' }}><span style={{ fontWeight: 700, color: 'var(--red)' }}>Out of Stock</span></div>}
                    </div>
                    <div style={{ padding: 'var(--sp-4)' }}>
                      <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{p.brand} · {p.partNo}</div>
                      <h4 style={{ fontSize: 14, height: 38, overflow: 'hidden', lineHeight: 1.4, marginBottom: 6 }}>{p.name}</h4>
                      <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 8, overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>🚗 {p.fitment}</div>
                      <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
                        <div className="stars">{Array(5).fill(0).map((_,i) => <span key={i} style={{ color: i<Math.floor(p.rating)?'var(--yellow)':'#e2e8f0' }}>★</span>)}</div>
                        <span style={{ fontSize: 12, color: 'var(--text-3)' }}>({p.reviews})</span>
                        {p.stock ? <span style={{ color: 'var(--green)', fontSize: 12, fontWeight: 600, marginLeft: 'auto' }}>● In Stock</span> : <span style={{ color: 'var(--red)', fontSize: 12, fontWeight: 600, marginLeft: 'auto' }}>● Out of Stock</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <span style={{ fontSize: 20, fontWeight: 800, color: 'var(--primary)' }}>{fmt(p.price)}</span>
                          <div className="flex items-center gap-2" style={{ marginTop: 2 }}>
                            <span className="price-old">{fmt(p.mrp)}</span>
                            <span className="price-save">{disc}% off</span>
                          </div>
                        </div>
                        <button className="btn btn-accent" style={{ padding: '9px 14px' }}
                          onClick={e => { e.stopPropagation(); nav('/cart'); }}>
                          <ShoppingCart size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
