import { Calendar, ChevronRight } from 'lucide-react';

const POSTS = [
  { id: 1, title: 'How to Choose the Right Brake Pads for Your Car', date: 'Oct 15, 2024', img: 'car_brake_pads_category_1778327187913.png', category: 'Maintenance' },
  { id: 2, title: 'Signs Your Alternator is Failing', date: 'Oct 02, 2024', img: 'car_electricals_category_1778327286059.png', category: 'Troubleshooting' },
  { id: 3, title: 'OEM vs Aftermarket Parts: What You Need to Know', date: 'Sep 28, 2024', img: 'car_engine_part_category_1778327173549.png', category: 'Buying Guide' },
  { id: 4, title: 'Winter Car Care: Essential Fluid Checks', date: 'Sep 10, 2024', img: 'car_oil_filter_product_1778327316988.png', category: 'Tips & Tricks' },
];

export default function Blog() {
  return (
    <div className="container" style={{ padding: 'var(--sp-12) 0' }}>
      <div className="section-header">
        <div>
          <h1 className="section-title">Automob <span>Blog</span></h1>
          <div className="sep" />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--sp-8)' }}>
        {POSTS.map(post => (
          <div key={post.id} className="card" style={{ overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ height: 200, background: 'var(--bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', padding: 'var(--sp-4)' }}>
              <img src={`/images/${post.img}`} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'contain', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform='scale(1.05)'} onMouseLeave={e => e.currentTarget.style.transform='scale(1)'} />
            </div>
            <div style={{ padding: 'var(--sp-6)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--sp-3)' }}>
                <span className="badge badge-blue">{post.category}</span>
                <span style={{ fontSize: 13, color: 'var(--text-2)', display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={14} /> {post.date}</span>
              </div>
              <h3 style={{ fontSize: 18, marginBottom: 'var(--sp-4)', lineHeight: 1.4 }}>{post.title}</h3>
              <a href="#" style={{ color: 'var(--accent)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 4 }}>Read Article <ChevronRight size={16} /></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
