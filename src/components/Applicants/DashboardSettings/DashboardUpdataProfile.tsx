import  { type JSX } from 'react';


// MyProfile component (standalone)
export function DashboardUpdataProfile(): JSX.Element {
  return (
    <section style={{padding: 32, background: '#fff', borderRadius: 6, boxShadow: '0 0 0 1px rgba(16,24,40,0.03)'}}>
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18}}>
        <h2 style={{fontSize: 20, margin: 0}}>My Profile</h2>
        <div style={{display: 'flex', gap: 12}}>
          <button style={{padding: '8px 12px', border: '1px solid #ddd', borderRadius: 6}}>Back to homepage</button>
        </div>
      </div>

      <h3 style={{marginTop: 6, marginBottom: 6}}>Basic Information</h3>
      <p style={{color: '#6b7280', marginTop: 0}}>This is your personal information that you can update anytime.</p>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, marginTop: 24}}>
        <div>
          <div style={{fontWeight: 600}}>Profile Photo</div>
          <p style={{color: '#9ca3af'}}>This image will be shown publicly as your profile picture, it will help recruiters recognize you!</p>
        </div>

        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: 18}}>
            <img src={'/mnt/data/fb6c2671-c864-476f-b70f-4b9bbc6d1be0.png'} alt="avatar" style={{width: 88, height: 88, borderRadius: '50%'}} />
            <div style={{flex: 1, border: '2px dashed #7c3aed', padding: 18, textAlign: 'center'}}>
              <div style={{fontWeight: 600}}>Click to replace or drag and drop</div>
              <div style={{color: '#9ca3af', fontSize: 12}}>SVG, PNG, JPG or GIF (max. 400 x 400px)</div>
            </div>
          </div>

          <form style={{marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
            <div>
              <label style={{display: 'block', fontSize: 13, fontWeight: 600}}>Full Name</label>
              <input defaultValue="Jake Gyll" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
            </div>

            <div>
              <label style={{display: 'block', fontSize: 13, fontWeight: 600}}>Email</label>
              <input defaultValue="Jakegyll@gmail.com" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
            </div>

            <div>
              <label style={{display: 'block', fontSize: 13, fontWeight: 600}}>Phone Number</label>
              <input defaultValue="+44 1245 572 135" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
            </div>

            <div>
              <label style={{display: 'block', fontSize: 13, fontWeight: 600}}>Date of Birth</label>
              <input defaultValue="09/08/1997" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
            </div>

            <div style={{gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 18, marginTop: 8}}>
              <label style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <input type="radio" name="accountType" defaultChecked />
                <span>Job Seeker</span>
              </label>

              <label style={{display: 'flex', alignItems: 'center', gap: 8}}>
                <input type="radio" name="accountType" />
                <span>Employer</span>
              </label>

              <div style={{marginLeft: 'auto'}}>
                <button type="button" style={{padding: '10px 14px', background: '#5b21b6', color: '#fff', borderRadius: 6, border: 'none'}}>Save Profile</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

