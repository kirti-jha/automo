import { useNavigate, Link } from 'react-router-dom';
import { Search, ChevronRight, Star, ShoppingCart, Zap, Shield, Clock } from 'lucide-react';
import { CATEGORIES, PRODUCTS, TESTIMONIALS, fmt, discount } from '../data';

// ── Reusable Product Card ──────────────────────────────────────────────────
export function ProductCard({ p }) {
  const nav = useNavigate();
  const disc = discount(p.price, p.mrp);
  return (
    <div className="card" style={{ cursor: 'pointer' }} onClick={() => nav(`/product/${p.id}`)}>
      {/* Image */}
      <div style={{ position: 'relative', background: 'var(--bg)', padding: 'var(--sp-4)', height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={`/images/${p.img}`} alt={p.name} style={{ maxHeight: 160, maxWidth: '90%', objectFit: 'contain', transition: 'transform 0.3s' }}
          onMouseEnter={e => e.target.style.transform='scale(1.06)'}
          onMouseLeave={e => e.target.style.transform='scale(1)'} />
        {p.badge && <span className="badge badge-orange" style={{ position:'absolute', top:10, left:10 }}>{p.badge}</span>}
        {!p.stock && <div style={{ position:'absolute', inset:0, background:'rgba(255,255,255,0.7)', display:'flex', alignItems:'center', justifyContent:'center', borderRadius:'var(--radius-md) var(--radius-md) 0 0' }}><span style={{ fontWeight:700, color:'var(--red)' }}>Out of Stock</span></div>}
        <span className={`badge ${p.type==='Genuine'?'badge-blue':'badge-gray'}`} style={{ position:'absolute', top:10, right:10 }}>{p.type}</span>
      </div>
      {/* Body */}
      <div style={{ padding: 'var(--sp-4)' }}>
        <div style={{ fontSize:11, color:'var(--text-3)', fontWeight:600, textTransform:'uppercase', letterSpacing:1, marginBottom:4 }}>{p.brand}</div>
        <h4 style={{ fontSize:14, fontWeight:600, color:'var(--text-1)', marginBottom:6, height:40, overflow:'hidden', lineHeight:1.4 }}>{p.name}</h4>
        <div style={{ fontSize:12, color:'var(--text-3)', marginBottom:8, overflow:'hidden', whiteSpace:'nowrap', textOverflow:'ellipsis' }}>🚗 {p.fitment}</div>
        <div className="flex items-center gap-2" style={{ marginBottom: 8 }}>
          <div className="stars">{Array(5).fill(0).map((_,i)=><span key={i} style={{ color: i<Math.floor(p.rating)?'var(--yellow)':'#e2e8f0' }}>★</span>)}</div>
          <span style={{ fontSize:12, color:'var(--text-3)' }}>({p.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="price-main" style={{ fontSize:20 }}>{fmt(p.price)}</span>
            <div className="flex items-center gap-2" style={{ marginTop:2 }}>
              <span className="price-old">{fmt(p.mrp)}</span>
              <span className="price-save">{disc}% off</span>
            </div>
          </div>
          <button
            className="btn btn-accent btn-sm btn-icon"
            style={{ padding:'9px 12px' }}
            onClick={e => { e.stopPropagation(); nav('/cart'); }}
          >
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

// ── HOME PAGE ─────────────────────────────────────────────────────────────
export default function Home() {
  const nav = useNavigate();

  const bestSellers = PRODUCTS.filter(p => p.badge === 'Best Seller').slice(0, 5);
  const deals = PRODUCTS.filter(p => discount(p.price, p.mrp) >= 25).slice(0, 5);

  return (
    <div>
      {/* ── HERO ──────────────────────────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-mid) 50%, #1a3c5c 100%)',
        padding: 'var(--sp-16) 0 var(--sp-20)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* bg decoration */}
        <div style={{ position:'absolute', top:-80, right:-80, width:400, height:400, borderRadius:'50%', background:'rgba(249,115,22,0.07)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:-120, left:-60, width:300, height:300, borderRadius:'50%', background:'rgba(59,130,246,0.06)', pointerEvents:'none' }} />

        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--sp-12)', alignItems:'center' }}>
            {/* Left */}
            <div className="fade-up">
              <div className="flex items-center gap-2" style={{ marginBottom:'var(--sp-4)' }}>
                <span style={{ background:'rgba(249,115,22,0.15)', color:'var(--accent)', padding:'4px 14px', borderRadius:'var(--radius-full)', fontSize:12, fontWeight:700, border:'1px solid rgba(249,115,22,0.3)' }}>
                  🔥 India's Most Trusted Auto Parts Store
                </span>
              </div>
              <h1 style={{ color:'white', marginBottom:'var(--sp-8)' }}>
                Find the Right Part<br /><span style={{ color:'var(--accent)' }}>for Your Car</span>
              </h1>

              {/* Search */}
              <div style={{ background:'white', borderRadius:'var(--radius-md)', padding:6, display:'flex', gap:6, boxShadow:'0 20px 60px rgba(0,0,0,0.3)', marginBottom:'var(--sp-8)' }}>
                <input placeholder="Search by Part No, OEM, or Part Name..." style={{ flex:1, padding:'12px 16px', border:'none', fontSize:15, color:'var(--text-1)', background:'transparent' }}
                  onKeyPress={e => e.key==='Enter' && nav('/search')} />
                <button className="btn btn-accent" style={{ padding:'12px 24px', borderRadius:'var(--radius-sm)' }} onClick={() => nav('/search')}>
                  <Search size={18} /> Search
                </button>
              </div>

              {/* Trust Quote */}
              <div style={{ marginTop:'var(--sp-6)', display:'flex', alignItems:'center', gap:'var(--sp-4)' }}>
                <div style={{ width:40, height:2, background:'var(--accent)' }} />
                <p style={{ color:'rgba(255,255,255,0.9)', fontSize:20, fontWeight:300, fontStyle:'italic', letterSpacing:1 }}>
                  "Trust starts with us."
                </p>
              </div>
            </div>

            {/* Right — Featured Images Grid */}
            <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:'var(--sp-4)' }}>
              {PRODUCTS.slice(0,3).map((p, i) => (
                <div key={p.id} onClick={() => nav(`/product/${p.id}`)} style={{
                  background: i===0 ? 'linear-gradient(to bottom right, rgba(249,115,22,0.12), rgba(249,115,22,0.02))' : 'rgba(255,255,255,0.05)',
                  border: i===0 ? '1px solid rgba(249,115,22,0.3)' : '1px solid rgba(255,255,255,0.08)',
                  borderRadius:'var(--radius-md)', padding:'var(--sp-5)', cursor:'pointer',
                  transition:'transform 0.2s',
                  gridRow: i===0 ? 'span 2' : undefined,
                  display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'
                }}
                  onMouseEnter={e => e.currentTarget.style.transform='translateY(-4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform='translateY(0)'}
                >
                  <img src={`/images/${p.img}`} alt={p.name} style={{ width:'100%', height: i===0?240:110, objectFit:'contain', marginBottom:'var(--sp-4)' }} />
                  <div style={{ color:'white', fontWeight:600, fontSize: i===0?16:13, lineHeight:1.3 }}>{p.name}</div>
                  <div style={{ color:'var(--accent)', fontWeight:800, fontSize: i===0?18:15, marginTop:6 }}>{fmt(p.price)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────────── */}
      <div style={{ background:'var(--accent)', color:'white', padding:'var(--sp-5) 0' }}>
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--sp-4)', textAlign:'center' }}>
            {[
              { n:'10,000+', l:'Part Numbers' },
              { n:'50+', l:'Top Brands' },
              { n:'2L+', l:'Happy Customers' },
              { n:'24-48hr', l:'Delivery' },
            ].map(s => (
              <div key={s.n}>
                <div className="brand-font" style={{ fontSize:28, fontWeight:700, lineHeight:1 }}>{s.n}</div>
                <div style={{ fontSize:13, opacity:0.85, marginTop:4 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CATEGORIES ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Shop by <span>Category</span></h2>
              <div className="sep" />
            </div>
            <Link to="/search" className="view-all">View All Categories <ChevronRight size={16} /></Link>
          </div>
          <div className="grid-6" style={{ gap:'var(--sp-4)' }}>
            {CATEGORIES.map(cat => (
              <div key={cat.id} onClick={() => nav(`/search?cat=${cat.id}`)} style={{
                background:'white', borderRadius:'var(--radius-lg)', padding:'var(--sp-5) var(--sp-4)',
                textAlign:'center', cursor:'pointer', border:'1.5px solid var(--border)',
                transition:'all 0.25s',
              }}
                onMouseEnter={e => { const el=e.currentTarget; el.style.borderColor='var(--accent)'; el.style.transform='translateY(-4px)'; el.style.boxShadow='var(--shadow-md)'; }}
                onMouseLeave={e => { const el=e.currentTarget; el.style.borderColor='var(--border)'; el.style.transform='none'; el.style.boxShadow='none'; }}
              >
                <div style={{ height:90, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'var(--sp-3)', background:'var(--bg)', borderRadius:'var(--radius-md)' }}>
                  <img src={`/images/${cat.img}`} alt={cat.name} style={{ maxHeight:70, maxWidth:'85%', objectFit:'contain' }} />
                </div>
                <div style={{ fontWeight:700, fontSize:13, color:'var(--text-1)' }}>{cat.name}</div>
                <div style={{ fontSize:11, color:'var(--text-3)', marginTop:3 }}>{cat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BEST SELLERS ───────────────────────────────────────────────── */}
      <section style={{ background:'var(--bg-dark)', padding:'var(--sp-16) 0' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">🏆 Best <span>Sellers</span></h2>
              <div className="sep" />
            </div>
            <Link to="/search" className="view-all">See All <ChevronRight size={16}/></Link>
          </div>
          <div className="grid-5" style={{ gap:'var(--sp-4)' }}>
            {bestSellers.map(p => <ProductCard key={p.id} p={p} />)}
          </div>
        </div>
      </section>

      {/* ── PROMO BANNER ───────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'var(--sp-5)' }}>
            {/* Banner 1 */}
            <div style={{ background:'linear-gradient(135deg,#0f1923 0%,#1a3c5c 100%)', borderRadius:'var(--radius-xl)', padding:'var(--sp-10)', position:'relative', overflow:'hidden', cursor:'pointer' }} onClick={()=>nav('/search?cat=brake')}>
              <div style={{ position:'absolute', right:-20, top:'50%', transform:'translateY(-50%)', opacity:0.12, fontSize:140 }}>🔴</div>
              <div className="badge badge-orange" style={{ marginBottom:'var(--sp-4)' }}>UP TO 35% OFF</div>
              <h2 style={{ color:'white', fontSize:28, marginBottom:'var(--sp-2)' }}>Premium<br />Brake Systems</h2>
              <p style={{ color:'#94a3b8', marginBottom:'var(--sp-6)' }}>Brembo, ATE, TRW & more</p>
              <button className="btn btn-accent">Shop Now <ChevronRight size={16}/></button>
            </div>
            {/* Banner 2 */}
            <div style={{ background:'linear-gradient(135deg,#1a3c1a 0%,#0f2b0f 100%)', borderRadius:'var(--radius-xl)', padding:'var(--sp-10)', position:'relative', overflow:'hidden', cursor:'pointer' }} onClick={()=>nav('/search?cat=filter')}>
              <div style={{ position:'absolute', right:-20, top:'50%', transform:'translateY(-50%)', opacity:0.12, fontSize:140 }}>🌀</div>
              <div className="badge badge-green" style={{ marginBottom:'var(--sp-4)' }}>COMBO DEALS</div>
              <h2 style={{ color:'white', fontSize:28, marginBottom:'var(--sp-2)' }}>Filter Service<br />Kits</h2>
              <p style={{ color:'#94a3b8', marginBottom:'var(--sp-6)' }}>Oil + Air + Cabin filter combos</p>
              <button className="btn btn-accent">Shop Now <ChevronRight size={16}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOT DEALS ──────────────────────────────────────────────────── */}
      <section style={{ background:'var(--primary)', padding:'var(--sp-16) 0' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2 style={{ color:'white' }}>⚡ Hot <span style={{ color:'var(--accent)' }}>Deals</span></h2>
              <div className="sep" />
            </div>
            <Link to="/search" className="view-all" style={{ color:'var(--accent)' }}>View All <ChevronRight size={16}/></Link>
          </div>
          <div className="grid-5" style={{ gap:'var(--sp-4)' }}>
            {deals.map(p => (
              <div key={p.id} className="card" style={{ cursor:'pointer' }} onClick={() => nav(`/product/${p.id}`)}>
                <div style={{ background:'var(--primary-mid)', padding:'var(--sp-4)', height:170, display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                  <img src={`/images/${p.img}`} alt={p.name} style={{ maxHeight:140, maxWidth:'85%', objectFit:'contain' }} />
                  <div style={{ position:'absolute', top:10, right:10, background:'var(--red)', color:'white', borderRadius:'var(--radius-full)', padding:'3px 9px', fontSize:11, fontWeight:800 }}>
                    -{discount(p.price,p.mrp)}%
                  </div>
                </div>
                <div style={{ padding:'var(--sp-4)' }}>
                  <div style={{ fontSize:11, color:'var(--text-3)', fontWeight:600, textTransform:'uppercase', marginBottom:4 }}>{p.brand}</div>
                  <h4 style={{ fontSize:13, height:36, overflow:'hidden', lineHeight:1.4, marginBottom:6 }}>{p.name}</h4>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize:19, fontWeight:800, color:'var(--accent)' }}>{fmt(p.price)}</span>
                    <span style={{ fontSize:13, textDecoration:'line-through', color:'var(--text-3)' }}>{fmt(p.mrp)}</span>
                  </div>
                  <button className="btn btn-accent w-full" style={{ marginTop:'var(--sp-3)', padding:'9px' }} onClick={e=>{e.stopPropagation();nav('/cart')}}>
                    <ShoppingCart size={15}/> Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── TRUST STRIPS ────────────────────────────────────────────────── */}
      <section className="section-sm">
        <div className="container">
          <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:'var(--sp-5)' }}>
            {[
              { icon:'🛡️', title:'100% Genuine Parts', sub:'All parts are OEM or verified aftermarket' },
              { icon:'🚚', title:'Fast Delivery', sub:'24-48 hour shipping pan India' },
              { icon:'🔄', title:'Easy Returns', sub:'10-day hassle-free return policy' },
              { icon:'🎧', title:'Expert Support', sub:'Talk to our auto parts specialists' },
            ].map(t => (
              <div key={t.title} className="trust-strip">
                <div className="trust-icon" style={{ flexShrink:0, fontSize:22 }}>{t.icon}</div>
                <div>
                  <div style={{ fontWeight:700, fontSize:14, color:'var(--text-1)' }}>{t.title}</div>
                  <div style={{ fontSize:12, color:'var(--text-3)', marginTop:2 }}>{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section style={{ background:'var(--primary)', padding:'var(--sp-16) 0' }}>
        <div className="container">
          <div style={{ textAlign:'center', marginBottom:'var(--sp-10)' }}>
            <h2 style={{ color:'white' }}>What Our <span style={{ color:'var(--accent)' }}>Customers Say</span></h2>
            <p style={{ color:'#94a3b8', marginTop:'var(--sp-2)' }}>Real reviews from verified buyers across India</p>
          </div>
          <div className="grid-4" style={{ gap:'var(--sp-5)' }}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:'var(--radius-lg)', padding:'var(--sp-6)' }}>
                <div className="stars" style={{ marginBottom:'var(--sp-3)' }}>{Array(t.rating).fill(0).map((_,j)=><span key={j}>★</span>)}</div>
                <p style={{ color:'#cbd5e1', fontSize:14, lineHeight:1.7, marginBottom:'var(--sp-5)', fontStyle:'italic' }}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div style={{ width:40, height:40, borderRadius:'50%', background:'var(--accent)', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:800, fontSize:16, color:'white' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ color:'white', fontWeight:600, fontSize:14 }}>{t.name}</div>
                    <div style={{ color:'var(--text-3)', fontSize:12 }}>{t.city} • {t.car}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
