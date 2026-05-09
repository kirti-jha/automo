import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ShoppingCart, Heart, Share2, CheckCircle, Truck, RefreshCcw, ShieldCheck, Star, ChevronRight, Minus, Plus } from 'lucide-react';
import { getProductById, PRODUCTS, CATEGORIES, fmt, discount, getCategoryById } from '../data';

export default function ProductDetail() {
  const { id } = useParams();
  const nav = useNavigate();
  const product = getProductById(id);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState('desc');
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) return (
    <div style={{ textAlign: 'center', padding: '100px 0' }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>🔧</div>
      <h2>Part not found</h2>
      <button className="btn btn-primary" style={{ marginTop: 20 }} onClick={() => nav('/')}>Back to Home</button>
    </div>
  );

  const cat = getCategoryById(product.cat);
  const related = PRODUCTS.filter(p => p.cat === product.cat && p.id !== product.id).slice(0, 4);
  const disc = discount(product.price, product.mrp);

  return (
    <div className="container" style={{ padding: 'var(--sp-8) var(--sp-6)' }}>
      {/* Breadcrumb */}
      <nav className="breadcrumb">
        <Link to="/">Home</Link>
        <ChevronRight size={12} />
        <Link to={`/search?cat=${product.cat}`}>{cat?.name}</Link>
        <ChevronRight size={12} />
        <span>{product.name}</span>
      </nav>

      {/* Main Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 'var(--sp-10)', background: 'white', borderRadius: 'var(--radius-xl)', padding: 'var(--sp-8)', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)', marginBottom: 'var(--sp-8)' }}>
        {/* ── Images ── */}
        <div>
          {/* Main */}
          <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-lg)', height: 380, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--sp-4)', border: '1.5px solid var(--border)', overflow: 'hidden', position: 'relative' }}>
            <img src={`/images/${product.img}`} alt={product.name} style={{ maxHeight: 320, maxWidth: '85%', objectFit: 'contain', transition: 'transform 0.4s' }}
              onMouseEnter={e => e.target.style.transform = 'scale(1.08)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'} />
            {disc >= 20 && <div style={{ position: 'absolute', top: 16, left: 16, background: 'var(--red)', color: 'white', fontWeight: 800, fontSize: 14, padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>-{disc}% OFF</div>}
            {product.badge && <span className="badge badge-orange" style={{ position: 'absolute', top: 16, right: 16 }}>{product.badge}</span>}
          </div>
          {/* Thumbnails */}
          <div className="flex gap-3">
            {[0,1,2,3].map(i => (
              <div key={i} onClick={() => setSelectedImg(i)} style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', border: `2px solid ${selectedImg===i?'var(--accent)':'var(--border)'}`, background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', overflow: 'hidden', transition: 'border-color 0.2s' }}>
                <img src={`/images/${product.img}`} alt="" style={{ maxWidth: 64, maxHeight: 64, objectFit: 'contain', opacity: selectedImg===i ? 1 : 0.55 }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Info ── */}
        <div>
          {/* Brand + badges */}
          <div className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-3)' }}>
            <span style={{ background: 'var(--primary)', color: 'white', padding: '3px 12px', borderRadius: 'var(--radius-full)', fontSize: 12, fontWeight: 700 }}>{product.brand}</span>
            <span className={`badge ${product.type==='Genuine'?'badge-blue':'badge-gray'}`}>{product.type}</span>
            {product.stock ? <span className="badge badge-green">✓ In Stock</span> : <span className="badge badge-red">Out of Stock</span>}
          </div>

          <h1 style={{ fontSize: 26, lineHeight: 1.3, marginBottom: 'var(--sp-3)' }}>{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-5)' }}>
            <div className="flex items-center gap-1">
              <div className="stars">{Array(5).fill(0).map((_,i)=><span key={i} style={{ color: i<Math.floor(product.rating)?'var(--yellow)':'#e2e8f0', fontSize:16 }}>★</span>)}</div>
              <span style={{ fontWeight: 700, fontSize: 15 }}>{product.rating}</span>
            </div>
            <span style={{ color: 'var(--text-3)', fontSize: 14 }}>{product.reviews} reviews</span>
            <span style={{ color: 'var(--text-3)' }}>|</span>
            <span style={{ fontSize: 13, color: 'var(--text-2)' }}>Part No: <strong>{product.partNo}</strong></span>
          </div>

          {/* Price Box */}
          <div style={{ background: 'linear-gradient(135deg, var(--bg) 0%, #fff7ed 100%)', border: '1px solid #fed7aa', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-6)' }}>
            <div className="flex items-end gap-3" style={{ marginBottom: 6 }}>
              <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{fmt(product.price)}</span>
              <span style={{ fontSize: 18, color: 'var(--text-3)', textDecoration: 'line-through', marginBottom: 4 }}>{fmt(product.mrp)}</span>
              <span className="price-save" style={{ marginBottom: 4, fontSize: 13 }}>You save {fmt(product.mrp - product.price)} ({disc}%)</span>
            </div>
            <p style={{ fontSize: 12, color: 'var(--text-3)' }}>Price inclusive of all taxes. Free delivery above ₹999.</p>
          </div>

          {/* Fitment */}
          <div style={{ background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)', padding: 'var(--sp-4)', marginBottom: 'var(--sp-5)', display: 'flex', alignItems: 'center', gap: 'var(--sp-3)' }}>
            <span style={{ fontSize: 22 }}>🚗</span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 13, color: '#15803d' }}>Compatible With</div>
              <div style={{ fontSize: 14 }}>{product.fitment}</div>
            </div>
          </div>

          {/* Qty + CTA */}
          <div className="flex items-center gap-4" style={{ marginBottom: 'var(--sp-5)' }}>
            <div className="qty-control">
              <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q-1))}><Minus size={16} /></button>
              <span className="qty-num">{qty}</span>
              <button className="qty-btn" onClick={() => setQty(q => q+1)}><Plus size={16} /></button>
            </div>
            <button className="btn btn-accent btn-lg flex-1" onClick={() => nav('/cart')}>
              <ShoppingCart size={18} /> Add to Cart
            </button>
            <button className="btn btn-outline btn-icon" style={{ padding: 12 }}><Heart size={20} /></button>
            <button className="btn btn-outline btn-icon" style={{ padding: 12 }}><Share2 size={20} /></button>
          </div>

          <button className="btn btn-primary btn-lg w-full" style={{ marginBottom: 'var(--sp-6)' }} onClick={() => nav('/checkout')}>
            Buy Now — {fmt(product.price * qty)}
          </button>

          {/* Trust Badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-3)' }}>
            {[
              { icon: <ShieldCheck size={16} style={{ color: 'var(--green)' }} />, text: '100% Genuine Guarantee' },
              { icon: <Truck size={16} style={{ color: 'var(--blue)' }} />, text: 'Free Delivery over ₹999' },
              { icon: <RefreshCcw size={16} style={{ color: 'var(--accent)' }} />, text: '10-Day Easy Return' },
              { icon: <CheckCircle size={16} style={{ color: 'var(--primary)' }} />, text: 'Warranty Included' },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2" style={{ background: 'var(--bg)', borderRadius: 'var(--radius-sm)', padding: 'var(--sp-3)', fontSize: 13 }}>
                {b.icon} {b.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TABS ── */}
      <div className="card" style={{ marginBottom: 'var(--sp-8)' }}>
        <div className="flex" style={{ borderBottom: '1px solid var(--border)' }}>
          {[['desc','Description'],['spec','Specifications'],['review','Reviews']].map(([key,label]) => (
            <button key={key} onClick={() => setTab(key)} style={{
              padding: 'var(--sp-4) var(--sp-6)', fontWeight: 600, fontSize: 14, background: 'transparent',
              borderBottom: tab===key ? '2px solid var(--accent)' : '2px solid transparent',
              color: tab===key ? 'var(--accent)' : 'var(--text-2)',
              transition: 'all 0.2s'
            }}>{label}</button>
          ))}
        </div>

        <div style={{ padding: 'var(--sp-6)' }}>
          {tab === 'desc' && (
            <div>
              <p style={{ color: 'var(--text-2)', lineHeight: 1.8, marginBottom: 'var(--sp-5)' }}>
                The <strong>{product.name}</strong> by <strong>{product.brand}</strong> is a {product.type.toLowerCase()} quality replacement part designed for {product.fitment}. Engineered to meet or exceed OEM specifications, this part ensures reliable performance and longevity.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Direct OEM Fit — no modifications required', 'Tested to ISO/TS 16949 quality standards', 'Corrosion-resistant coating for long service life', 'Includes all necessary hardware', 'Backed by manufacturer warranty'].map(f => (
                  <li key={f} className="flex items-center gap-2" style={{ fontSize: 14 }}>
                    <CheckCircle size={15} style={{ color: 'var(--green)', flexShrink: 0 }} /> {f}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {tab === 'spec' && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-8)' }}>
              {[
                { label:'Brand', value: product.brand },
                { label:'Part Number', value: product.partNo },
                { label:'Compatible With', value: product.fitment },
                { label:'Part Type', value: product.type },
                { label:'Category', value: cat?.name },
                { label:'Rating', value: `${product.rating}/5 (${product.reviews} reviews)` },
                { label:'Weight', value: '0.8 – 2.4 kg (varies by variant)' },
                { label:'Origin', value: 'India / Germany (OEM)' },
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ width: 160, color: 'var(--text-3)', fontSize: 14, flexShrink: 0 }}>{r.label}</span>
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{r.value}</span>
                </div>
              ))}
            </div>
          )}
          {tab === 'review' && (
            <div>
              <div className="flex items-center gap-8" style={{ marginBottom: 'var(--sp-6)' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 56, fontWeight: 800, color: 'var(--primary)', lineHeight: 1 }}>{product.rating}</div>
                  <div className="stars" style={{ justifyContent: 'center', marginTop: 4 }}>{Array(5).fill(0).map((_,i)=><span key={i} style={{ color: i<Math.floor(product.rating)?'var(--yellow)':'#e2e8f0' }}>★</span>)}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-3)', marginTop: 4 }}>{product.reviews} reviews</div>
                </div>
                <div style={{ flex: 1 }}>
                  {[5,4,3,2,1].map(n => (
                    <div key={n} className="flex items-center gap-3" style={{ marginBottom: 6 }}>
                      <span style={{ fontSize: 13, width: 16, textAlign: 'right' }}>{n}</span>
                      <span style={{ color: 'var(--yellow)', fontSize: 13 }}>★</span>
                      <div style={{ flex: 1, height: 8, background: 'var(--bg)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: `${n===5?70:n===4?18:n===3?8:3}%`, background: 'var(--yellow)', borderRadius: 'var(--radius-full)' }} />
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--text-3)', width: 30 }}>{n===5?70:n===4?18:n===3?8:3}%</span>
                    </div>
                  ))}
                </div>
              </div>
              {['Excellent quality, fits perfectly on my Swift. Installation was easy.', 'Fast delivery, part looks genuine and brand new.', 'Works great. My mechanic was happy with the quality.'].map((t, i) => (
                <div key={i} style={{ borderTop: '1px solid var(--border)', paddingTop: 'var(--sp-5)', marginTop: 'var(--sp-5)' }}>
                  <div className="flex items-center gap-3" style={{ marginBottom: 8 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                      {['R','P','A'][i]}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14 }}>{['Rahul M.','Priya S.','Arun K.'][i]}</div>
                      <div className="stars" style={{ fontSize: 12 }}>{Array(5).fill(0).map((_,j)=><span key={j} style={{ color:'var(--yellow)' }}>★</span>)}</div>
                    </div>
                    <span style={{ marginLeft: 'auto', fontSize: 12, color: 'var(--text-3)' }}>{['2 days ago','1 week ago','3 weeks ago'][i]}</span>
                  </div>
                  <p style={{ color: 'var(--text-2)', fontSize: 14 }}>{t}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ── RELATED PRODUCTS ── */}
      {related.length > 0 && (
        <div>
          <h2 style={{ marginBottom: 'var(--sp-6)' }}>Related <span style={{ color: 'var(--accent)' }}>Parts</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--sp-4)' }}>
            {related.map(p => {
              const d = discount(p.price, p.mrp);
              return (
                <div key={p.id} className="card" style={{ cursor: 'pointer' }} onClick={() => nav(`/product/${p.id}`)}>
                  <div style={{ background: 'var(--bg)', padding: 'var(--sp-4)', height: 160, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={`/images/${p.img}`} alt={p.name} style={{ maxHeight: 130, maxWidth: '85%', objectFit: 'contain' }} />
                  </div>
                  <div style={{ padding: 'var(--sp-4)' }}>
                    <div style={{ fontSize: 11, color: 'var(--text-3)', fontWeight: 600, textTransform: 'uppercase', marginBottom: 4 }}>{p.brand}</div>
                    <h4 style={{ fontSize: 13, height: 36, overflow: 'hidden', lineHeight: 1.4, marginBottom: 6 }}>{p.name}</h4>
                    <div className="flex items-center justify-between">
                      <div>
                        <span style={{ fontWeight: 800, color: 'var(--primary)', fontSize: 16 }}>{fmt(p.price)}</span>
                        <span className="price-save" style={{ marginLeft: 6 }}>{d}% off</span>
                      </div>
                      <button className="btn btn-accent" style={{ padding: '7px 12px', fontSize: 12 }} onClick={e => { e.stopPropagation(); nav('/cart'); }}>
                        <ShoppingCart size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
