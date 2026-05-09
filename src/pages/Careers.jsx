import { Briefcase, MapPin, ArrowRight } from 'lucide-react';

const JOBS = [
  { id: 1, title: 'Senior React Developer', type: 'Full-time', location: 'Remote / Gurgaon', dept: 'Engineering' },
  { id: 2, title: 'Automotive Catalog Specialist', type: 'Full-time', location: 'Gurgaon, India', dept: 'Operations' },
  { id: 3, title: 'Customer Support Executive', type: 'Contract', location: 'Remote', dept: 'Support' },
  { id: 4, title: 'Supply Chain Manager', type: 'Full-time', location: 'Delhi Hub', dept: 'Logistics' },
];

export default function Careers() {
  return (
    <div className="container" style={{ padding: 'var(--sp-12) 0' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center', marginBottom: 'var(--sp-12)' }}>
        <h1 style={{ marginBottom: 'var(--sp-4)', fontSize: 36 }}>Join the <span style={{ color: 'var(--accent)' }}>Automob</span> Team</h1>
        <p style={{ fontSize: 18, color: 'var(--text-2)', lineHeight: 1.6 }}>
          We are revolutionizing the automotive aftermarket industry in India. If you are passionate about cars, technology, and building great products, we want to hear from you.
        </p>
      </div>

      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ marginBottom: 'var(--sp-6)', borderBottom: '1px solid var(--border)', paddingBottom: 'var(--sp-4)' }}>Open Positions</h2>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--sp-4)' }}>
          {JOBS.map(job => (
            <div key={job.id} className="card" style={{ padding: 'var(--sp-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', transition: 'border-color 0.2s', border: '1px solid var(--border)', cursor: 'pointer' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--border)'}>
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 'var(--sp-2)' }}>{job.title}</h3>
                <div style={{ display: 'flex', gap: 'var(--sp-4)', color: 'var(--text-2)', fontSize: 14 }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Briefcase size={16} /> {job.type}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><MapPin size={16} /> {job.location}</span>
                  <span className="badge badge-blue">{job.dept}</span>
                </div>
              </div>
              <button className="btn btn-outline" style={{ borderRadius: 'var(--radius-full)' }}>Apply <ArrowRight size={16} style={{ marginLeft: 6 }} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
