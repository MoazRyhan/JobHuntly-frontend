
// User Profile Component (HTML Only)
export function DashboardPublicProfile() {
  return (
    <div>
      {/* Header */}
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '24px 0'}}>
        <h1 style={{fontSize: 28, margin: 0}}>My Profile</h1>
        <button style={{padding: '10px 16px', border: '1px solid #ccc', borderRadius: 6}}>Back to homepage</button>
      </header>

      {/* Banner */}
      <section style={{background: '#fff', borderRadius: 8, padding: 24, border: '1px solid #eee', marginBottom: 32}}>
        <div style={{display: 'flex', alignItems: 'center', gap: 24}}>
          <div style={{width: 90, height: 90, background: '#ddd', borderRadius: '50%'}}></div>
          <div>
            <h2 style={{margin: 0}}>Jake Gyll</h2>
            <p style={{margin: '4px 0', color: '#6b7280'}}>Product Designer at Twitter</p>
            <p style={{margin: 0, color: '#6b7280'}}>Manchester, UK</p>
            <button style={{marginTop: 12, padding: '8px 12px', background: '#d1fae5', borderRadius: 6}}>Open for opportunities</button>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section style={{background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #eee', marginBottom: 32}}>
        <h3>About Me</h3>
        <p style={{color: '#6b7280'}}>I'm a product designer & filmmaker currently working remotely at Twitter...</p>
      </section>

      {/* Experience */}
      <section style={{background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #eee', marginBottom: 32}}>
        <h3>Experiences</h3>
        <div style={{marginTop: 16}}>
          <h4>Product Designer — Twitter</h4>
          <p style={{color: '#6b7280'}}>Full-Time • Jun 2019 – Present • Manchester, UK</p>
          <p style={{color: '#6b7280'}}>Created and executed social media plan...</p>
        </div>

        <div style={{marginTop: 24}}>
          <h4>Growth Marketing Designer — GoDaddy</h4>
          <p style={{color: '#6b7280'}}>Full-Time • Jun 2011 – May 2019 • Manchester, UK</p>
          <p style={{color: '#6b7280'}}>Developed digital marketing strategies...</p>
        </div>
      </section>

      {/* Education */}
      <section style={{background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #eee', marginBottom: 32}}>
        <h3>Educations</h3>
        <div style={{marginTop: 16}}>
          <h4>Harvard University</h4>
          <p style={{color: '#6b7280'}}>Postgraduate Degree • Applied Psychology</p>
        </div>

        <div style={{marginTop: 24}}>
          <h4>University of Toronto</h4>
          <p style={{color: '#6b7280'}}>Bachelor of Arts • Visual Communication</p>
        </div>
      </section>

      {/* Skills */}
      <section style={{background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #eee', marginBottom: 32}}>
        <h3>Skills</h3>
        <div style={{display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 16}}>
          <span style={{padding: '6px 12px', background: '#f3f4f6', borderRadius: 6}}>Communication</span>
          <span style={{padding: '6px 12px', background: '#f3f4f6', borderRadius: 6}}>Analytics</span>
          <span style={{padding: '6px 12px', background: '#f3f4f6', borderRadius: 6}}>Facebook Ads</span>
          <span style={{padding: '6px 12px', background: '#f3f4f6', borderRadius: 6}}>Content Planning</span>
        </div>
      </section>

      {/* Portfolio */}
      <section style={{background: '#fff', padding: 24, borderRadius: 8, border: '1px solid #eee'}}>
        <h3>Portfolios</h3>
        <div style={{marginTop: 16, display: 'flex', gap: 16, overflowX: 'auto'}}>
          <div style={{width: 200, height: 120, background: '#e5e7eb', borderRadius: 8}}></div>
          <div style={{width: 200, height: 120, background: '#e5e7eb', borderRadius: 8}}></div>
          <div style={{width: 200, height: 120, background: '#e5e7eb', borderRadius: 8}}></div>
        </div>
      </section>
    </div>
  );
}
