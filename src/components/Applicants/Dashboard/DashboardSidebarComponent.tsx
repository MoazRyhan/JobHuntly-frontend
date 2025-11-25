import type { JSX } from "react";

// Sidebar component (standalone)
export function DashboardSidebarComponent(): JSX.Element {
  return (
    <aside style={{width: 280, minHeight: '100vh', background: '#fbfdff', borderRight: '1px solid #eef2f7', padding: 24, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28}}>
          <img src={'/mnt/data/0f71f64b-cdee-42ef-8b5a-20a3be3aa0ca.png'} alt="JobHuntly logo" style={{width: 36, height: 36, borderRadius: 8}} />
          <div style={{fontWeight: 700, fontSize: 16}}>JobHuntly</div>
        </div>

        <nav style={{display: 'flex', flexDirection: 'column', gap: 12, color: '#4b5563'}}>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>🏠 Dashboard</a>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>📁 My Applications</a>
          {/* <a href="#" style={{display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>🔎 Find Jobs</a>
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>🏢 Browse Companies</a> */}
          <a href="#" style={{display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, textDecoration: 'none', color: 'inherit'}}>👤 My Public Profile</a>
        </nav>

        <div style={{marginTop: 36}}>
          <div style={{fontSize: 12, color: '#9ca3af', textTransform: 'uppercase', marginBottom: 8}}>Settings</div>
          <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
            <li style={{padding: 10, borderRadius: 8, background: '#f5f3ff', fontWeight: 600}}>Settings</li>
            <li style={{padding: 10, borderRadius: 8}}>Help Center</li>
          </ul>
        </div>
      </div>

      <div style={{display: 'flex', alignItems: 'center', gap: 12}}>
        <img src={'/mnt/data/fb6c2671-c864-476f-b70f-4b9bbc6d1be0.png'} alt="avatar" style={{width: 44, height: 44, borderRadius: '50%', objectFit: 'cover'}} />
        <div style={{fontSize: 13}}>
          <button> Log Out </button>
          <div style={{fontWeight: 700}}>Jake Gyll</div>
          <div style={{color: '#9ca3af', fontSize: 12}}>jakegyll@email.com</div>
        </div>
      </div>
    </aside>
  );
}