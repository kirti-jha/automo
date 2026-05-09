import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowLeft, ShieldCheck, Truck, Tag, ChevronRight } from 'lucide-react';
import { PRODUCTS, fmt, discount } from '../data';

const CART_ITEMS = PRODUCTS.slice(0, 3).map((p, i) => ({ ...p, qty: i === 0 ? 2 : 1 }));

export default function Cart() {
  const nav = useNavigate();
  const [items, setItems] = useState(CART_ITEMS);
  const [coupon, setCoupon] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const couponDisc = couponApplied ? Math.round(subtotal * 0.1) : 0;
  const tax = Math.round((subtotal - couponDisc) * 0.18);
  const total = subtotal + shipping - couponDisc + tax;

  const updateQty = (id, d) => setItems(prev => prev.map(i => i.id===id ? { ...i, qty: Math.max(1, i.qty+d) } : i));
  const remove = (id) => setItems(prev => prev.filter(i => i.id !== id));

  return (
    <div className="container" style={{ padding: 'var(--sp-8) var(--sp-6)' }}>
      <nav className="breadcrumb">
        <Link to="/">Home</Link> <ChevronRight size={12} /> <span>Shopping Cart</span>
      </nav>
      <h1 style={{ fontSize: 28, marginBottom: 'var(--sp-8)' }}>Shopping Cart <span style={{ fontSize: 16, color: 'var(--text-3)', fontWeight: 400 }}>({items.length} items)</span></h1>

      {items.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '80px 0' }}>
          <div style={{ fontSize: 80, marginBottom: 20 }}>🛒</div>
          <h2 style={{ color: 'var(--text-2)', marginBottom: 12 }}>Your cart is empty</h2>
          <button className="btn btn-accent btn-lg" onClick={() => nav('/search')}>Browse Parts</button>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 'var(--sp-8)', alignItems: 'flex-start' }}>
          {/* ── LEFT: Items ── */}
          <div>
            {/* Header row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 120px 140px 110px 40px', gap: 'var(--sp-4)', background: 'var(--primary)', color: 'white', padding: 'var(--sp-3) var(--sp-5)', borderRadius: 'var(--radius-md)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 'var(--sp-3)' }}>
              <span>Product</span><span style={{ textAlign: 'center' }}>Unit Price</span><span style={{ textAlign: 'center' }}>Quantity</span><span style={{ textAlign: 'right' }}>Total</span><span />
            </div>

            {items.map(item => (
              <div key={item.id} style={{ background: 'white', borderRadius: 'var(--radius-md)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-3)', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 120px 140px 110px 40px', gap: 'var(--sp-4)', alignItems: 'center', boxShadow: 'var(--shadow-xs)' }}>
                {/* Product */}
                <div className="flex gap-4 items-center">
                  <div style={{ width: 80, height: 80, borderRadius: 'var(--radius-md)', background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '1px solid var(--border)' }}>
                    <img src={`/images/${item.img}`} alt="" style={{ maxWidth: 65, maxHeight: 65, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--accent)', fontWeight: 700, marginBottom: 4 }}>{item.brand} · {item.partNo}</div>
                    <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, lineHeight: 1.3 }}>{item.name}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-3)' }}>🚗 {item.fitment}</div>
                    <span className={`badge ${item.type==='Genuine'?'badge-blue':'badge-gray'}`} style={{ marginTop: 6 }}>{item.type}</span>
                  </div>
                </div>

                {/* Unit Price */}
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontWeight: 700, fontSize: 16 }}>{fmt(item.price)}</div>
                  <div style={{ fontSize: 12, textDecoration: 'line-through', color: 'var(--text-3)' }}>{fmt(item.mrp)}</div>
                  <span className="price-save" style={{ fontSize: 11 }}>{discount(item.price,item.mrp)}% off</span>
                </div>

                {/* Qty */}
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div className="qty-control">
                    <button className="qty-btn" onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                    <span className="qty-num">{item.qty}</span>
                    <button className="qty-btn" onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                  </div>
                </div>

                {/* Total */}
                <div style={{ textAlign: 'right', fontWeight: 800, fontSize: 17, color: 'var(--primary)' }}>{fmt(item.price * item.qty)}</div>

                {/* Remove */}
                <button onClick={() => remove(item.id)} style={{ background: 'transparent', color: 'var(--text-3)', padding: 6, borderRadius: 'var(--radius-sm)', transition: 'color 0.2s' }}
                  onMouseEnter={e => e.currentTarget.style.color='var(--red)'}
                  onMouseLeave={e => e.currentTarget.style.color='var(--text-3)'}>
                  <Trash2 size={16} />
                </button>
              </div>
            ))}

            <button onClick={() => nav('/search')} className="btn btn-outline flex items-center gap-2" style={{ marginTop: 'var(--sp-4)' }}>
              <ArrowLeft size={16} /> Continue Shopping
            </button>
          </div>

          {/* ── RIGHT: Summary ── */}
          <div style={{ position: 'sticky', top: 160 }}>
            {/* Coupon */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-5)', border: '1px solid var(--border)', marginBottom: 'var(--sp-4)', boxShadow: 'var(--shadow-xs)' }}>
              <h4 className="flex items-center gap-2" style={{ marginBottom: 'var(--sp-3)' }}><Tag size={16} style={{ color: 'var(--accent)' }} /> Coupon Code</h4>
              <div className="flex gap-2">
                <input value={coupon} onChange={e => setCoupon(e.target.value)} placeholder="Enter coupon" className="input" style={{ flex: 1, padding: '10px 14px', fontSize: 14 }} />
                <button className="btn btn-primary" style={{ padding: '10px 16px', fontSize: 13 }}
                  onClick={() => { if (coupon.toLowerCase() === 'auto10') setCouponApplied(true); }}>
                  Apply
                </button>
              </div>
              {couponApplied && <div style={{ marginTop: 8, color: 'var(--green)', fontSize: 13, fontWeight: 600 }}>✓ Coupon applied! 10% off</div>}
              <p style={{ fontSize: 12, color: 'var(--text-3)', marginTop: 8 }}>Try: <strong>AUTO10</strong> for 10% off</p>
            </div>

            {/* Summary */}
            <div style={{ background: 'white', borderRadius: 'var(--radius-lg)', padding: 'var(--sp-6)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ marginBottom: 'var(--sp-5)' }}>Order Summary</h3>

              {[
                { label: `Subtotal (${items.reduce((s,i)=>s+i.qty,0)} items)`, val: fmt(subtotal) },
                { label: 'Shipping', val: shipping === 0 ? <span style={{ color: 'var(--green)', fontWeight: 700 }}>FREE</span> : fmt(shipping) },
                ...(couponApplied ? [{ label: 'Coupon Discount (AUTO10)', val: <span style={{ color: 'var(--green)' }}>-{fmt(couponDisc)}</span> }] : []),
                { label: 'GST (18%)', val: fmt(tax) },
              ].map((r, i) => (
                <div key={i} className="flex justify-between items-center" style={{ padding: 'var(--sp-3) 0', borderBottom: '1px solid var(--border)', fontSize: 14 }}>
                  <span style={{ color: 'var(--text-2)' }}>{r.label}</span>
                  <span style={{ fontWeight: 600 }}>{r.val}</span>
                </div>
              ))}

              <div className="flex justify-between items-center" style={{ padding: 'var(--sp-4) 0', fontSize: 20, fontWeight: 800 }}>
                <span>Total</span>
                <span style={{ color: 'var(--primary)' }}>{fmt(total)}</span>
              </div>

              <button className="btn btn-accent btn-lg w-full" style={{ marginTop: 'var(--sp-2)' }} onClick={() => nav('/checkout')}>
                Proceed to Checkout <ChevronRight size={18} />
              </button>

              <div className="flex items-center justify-center gap-2" style={{ marginTop: 'var(--sp-4)', fontSize: 12, color: 'var(--text-3)' }}>
                <ShieldCheck size={14} style={{ color: 'var(--green)' }} /> 100% Secure &amp; Encrypted Checkout
              </div>

              {shipping > 0 && (
                <div style={{ marginTop: 'var(--sp-4)', background: '#fff7ed', border: '1px solid #fed7aa', borderRadius: 'var(--radius-sm)', padding: 'var(--sp-3)', fontSize: 13, color: '#c2410c' }}>
                  🚚 Add <strong>{fmt(999 - subtotal)}</strong> more for free shipping!
                </div>
              )}
            </div>

            {/* Accepted payments */}
            <div style={{ marginTop: 'var(--sp-4)', textAlign: 'center' }}>
              <div style={{ fontSize: 12, color: 'var(--text-3)', marginBottom: 8 }}>We Accept</div>
              <div className="flex justify-center gap-3">
                {['💳 Card', '📱 UPI', '🏦 Net Banking', '💵 COD'].map(m => (
                  <span key={m} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 4, padding: '4px 10px', fontSize: 12, fontWeight: 600 }}>{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
