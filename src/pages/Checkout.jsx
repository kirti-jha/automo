import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ChevronRight, ShieldCheck, CreditCard, Smartphone, Banknote, MapPin, CheckCircle } from 'lucide-react';
import { fmt } from '../data';

const STEPS = ['Cart', 'Address', 'Payment', 'Confirm'];

export default function Checkout() {
  const nav = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ fname:'', lname:'', email:'', phone:'', addr:'', city:'', state:'', pin:'' });
  const [payment, setPayment] = useState('card');
  const [placed, setPlaced] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));
  const total = 6130;

  if (placed) return (
    <div style={{ textAlign: 'center', padding: '80px 0' }}>
      <div style={{ fontSize: 80, marginBottom: 20 }}>🎉</div>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: '#dcfce7', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
        <CheckCircle size={44} style={{ color: 'var(--green)' }} />
      </div>
      <h2 style={{ marginBottom: 12 }}>Order Placed Successfully!</h2>
      <p style={{ color: 'var(--text-2)', marginBottom: 8 }}>Order ID: <strong>#AUT{Date.now().toString().slice(-6)}</strong></p>
      <p style={{ color: 'var(--text-2)', marginBottom: 32 }}>You'll receive a confirmation SMS &amp; email shortly.</p>
      <button className="btn btn-accent btn-lg" onClick={() => nav('/')}>Continue Shopping</button>
    </div>
  );

  return (
    <div className="container" style={{ padding: 'var(--sp-8) var(--sp-6)', maxWidth: 1100 }}>
      <nav className="breadcrumb">
        <Link to="/">Home</Link> <ChevronRight size={12} /> <Link to="/cart">Cart</Link> <ChevronRight size={12} /> <span>Checkout</span>
      </nav>
      <h1 style={{ fontSize: 26, marginBottom: 'var(--sp-8)' }}>Secure Checkout</h1>

      {/* Progress */}
      <div className="flex items-center" style={{ marginBottom: 'var(--sp-10)' }}>
        {STEPS.map((s, i) => (
          <div key={s} className="flex items-center" style={{ flex: i < STEPS.length-1 ? 1 : 'none' }}>
            <div className="flex items-center gap-3">
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: i <= step ? 'var(--accent)' : 'var(--border)', color: i <= step ? 'white' : 'var(--text-3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 14, transition: 'all 0.3s' }}>
                {i < step ? '✓' : i+1}
              </div>
              <span style={{ fontWeight: i===step ? 700 : 400, color: i<=step ? 'var(--text-1)' : 'var(--text-3)', fontSize: 14 }}>{s}</span>
            </div>
            {i < STEPS.length-1 && <div style={{ flex: 1, height: 2, background: i < step ? 'var(--accent)' : 'var(--border)', margin: '0 var(--sp-3)', transition: 'background 0.3s' }} />}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 'var(--sp-8)', alignItems: 'flex-start' }}>
        {/* ── FORMS ── */}
        <div>
          {step === 1 && (
            <div className="card" style={{ padding: 'var(--sp-8)' }}>
              <h3 className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-6)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>1</div>
                Delivery Address
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--sp-4)' }}>
                {[
                  { k:'fname', label:'First Name', ph:'Rahul', col:1 },
                  { k:'lname', label:'Last Name', ph:'Kumar', col:1 },
                  { k:'email', label:'Email', ph:'rahul@example.com', col:2 },
                  { k:'phone', label:'Phone', ph:'+91 98765 43210', col:1 },
                  { k:'addr', label:'Street Address', ph:'42, Sector 18, Near Metro', col:2 },
                  { k:'city', label:'City', ph:'Gurugram', col:1 },
                  { k:'state', label:'State', ph:'Haryana', col:1 },
                  { k:'pin', label:'PIN Code', ph:'122015', col:1 },
                ].map(f => (
                  <div key={f.k} style={{ gridColumn: `span ${f.col}` }}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-2)', marginBottom: 6, display: 'block' }}>{f.label}</label>
                    <input value={form[f.k]} onChange={e => set(f.k, e.target.value)} placeholder={f.ph} className="input" />
                  </div>
                ))}
              </div>
              <button className="btn btn-accent btn-lg" style={{ marginTop: 'var(--sp-6)' }} onClick={() => setStep(2)}>
                Continue to Payment <ChevronRight size={18} />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="card" style={{ padding: 'var(--sp-8)' }}>
              <h3 className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-6)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>2</div>
                Payment Method
              </h3>
              <div className="flex flex-col gap-3" style={{ marginBottom: 'var(--sp-8)' }}>
                {[
                  { id:'card', icon:<CreditCard size={22} style={{ color:'var(--primary)' }} />, label:'Credit / Debit Card', sub:'Visa, Mastercard, Rupay' },
                  { id:'upi', icon:<Smartphone size={22} style={{ color:'#6d28d9' }} />, label:'UPI', sub:'GPay, PhonePe, Paytm, BHIM' },
                  { id:'netbank', icon:<Banknote size={22} style={{ color:'var(--green)' }} />, label:'Net Banking', sub:'All major banks' },
                  { id:'cod', icon:<MapPin size={22} style={{ color:'var(--accent)' }} />, label:'Cash on Delivery', sub:'Available for orders up to ₹10,000' },
                ].map(m => (
                  <label key={m.id} className={`radio-card ${payment===m.id?'active':''}`} onClick={() => setPayment(m.id)}>
                    <input type="radio" name="pay" value={m.id} checked={payment===m.id} onChange={()=>{}} style={{ accentColor: 'var(--accent)' }} />
                    <div>{m.icon}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15 }}>{m.label}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-3)' }}>{m.sub}</div>
                    </div>
                  </label>
                ))}
              </div>

              {payment === 'card' && (
                <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-md)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-6)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-3)' }}>
                    <input placeholder="Card Number" className="input" />
                    <div className="flex gap-3">
                      <input placeholder="MM / YY" className="input" />
                      <input placeholder="CVV" className="input" type="password" />
                    </div>
                    <input placeholder="Cardholder Name" className="input" />
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button className="btn btn-outline" onClick={() => setStep(1)}><ChevronRight size={16} style={{ transform:'rotate(180deg)' }} /> Back</button>
                <button className="btn btn-accent btn-lg flex-1" onClick={() => setStep(3)}>Review Order <ChevronRight size={18} /></button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="card" style={{ padding: 'var(--sp-8)' }}>
              <h3 className="flex items-center gap-3" style={{ marginBottom: 'var(--sp-6)' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>3</div>
                Confirm Your Order
              </h3>
              <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-md)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-5)' }}>
                <h4 style={{ marginBottom: 'var(--sp-3)', color: 'var(--text-2)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Delivery Address</h4>
                <p style={{ fontWeight: 600 }}>{form.fname || 'Rahul'} {form.lname || 'Kumar'}</p>
                <p style={{ color: 'var(--text-2)', fontSize: 14 }}>{form.addr || '42 Sector 18, Gurugram'}, {form.city || 'Gurugram'} – {form.pin || '122015'}</p>
              </div>
              <div style={{ background: 'var(--bg)', borderRadius: 'var(--radius-md)', padding: 'var(--sp-5)', marginBottom: 'var(--sp-6)' }}>
                <h4 style={{ marginBottom: 'var(--sp-3)', color: 'var(--text-2)', fontSize: 13, textTransform: 'uppercase', letterSpacing: 1 }}>Payment</h4>
                <p style={{ fontWeight: 600, textTransform: 'capitalize' }}>{payment === 'netbank' ? 'Net Banking' : payment.toUpperCase()}</p>
              </div>
              <div className="flex gap-3">
                <button className="btn btn-outline" onClick={() => setStep(2)}><ChevronRight size={16} style={{ transform:'rotate(180deg)' }} /> Back</button>
                <button className="btn btn-accent btn-lg flex-1" onClick={() => setPlaced(true)}>
                  Place Order — {fmt(total)} 🎉
                </button>
              </div>
            </div>
          )}
        </div>

        {/* ── SUMMARY ── */}
        <div style={{ position: 'sticky', top: 160 }}>
          <div className="card" style={{ padding: 'var(--sp-6)' }}>
            <h3 style={{ marginBottom: 'var(--sp-5)' }}>Order Summary</h3>
            {[
              { label:'Subtotal (3 items)', val: '₹5,010' },
              { label:'Shipping', val: <span style={{ color:'var(--green)', fontWeight:700 }}>FREE</span> },
              { label:'Coupon (AUTO10)', val: <span style={{ color:'var(--green)' }}>-₹501</span> },
              { label:'GST (18%)', val: '₹1,621' },
            ].map((r,i) => (
              <div key={i} className="flex justify-between" style={{ padding: 'var(--sp-3) 0', borderBottom: '1px solid var(--border)', fontSize: 14 }}>
                <span style={{ color: 'var(--text-2)' }}>{r.label}</span>
                <span style={{ fontWeight: 600 }}>{r.val}</span>
              </div>
            ))}
            <div className="flex justify-between" style={{ padding: 'var(--sp-4) 0', fontSize: 20, fontWeight: 800 }}>
              <span>Total</span>
              <span style={{ color:'var(--primary)' }}>{fmt(total)}</span>
            </div>
            <div className="flex items-center justify-center gap-2" style={{ marginTop: 'var(--sp-4)', fontSize: 12, color: 'var(--text-3)' }}>
              <ShieldCheck size={14} style={{ color:'var(--green)' }} /> SSL Encrypted · 100% Safe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
