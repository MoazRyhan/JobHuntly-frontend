import type { JSX } from "react";

// LoginDetails component (standalone)
export function DashboardLoginDetails(): JSX.Element {
  return (
    <section style={{padding: 32, marginTop: 22, background: '#fff', borderRadius: 6}}>
      <h3 style={{margin: 0, marginBottom: 8}}>Login Details</h3>
      <p style={{color: '#6b7280', marginTop: 0}}>This is login information that you can update anytime.</p>

      <div style={{display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 24, marginTop: 20}}>
        <div>
          <div style={{fontWeight: 600}}>Update Email</div>
          <p style={{color: '#9ca3af'}}>Update your email address to make sure it is safe</p>
        </div>

        <div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div>
              <div style={{fontWeight: 700}}>jakegyll@email.com</div>
              <div style={{color: '#9ca3af'}}>Your email address is verified.</div>
            </div>

            <div style={{width: '48%'}}>
              <input placeholder="Enter your new email" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6}} />
              <button style={{marginTop: 12, padding: '10px 14px', background: '#5b21b6', color: '#fff', borderRadius: 6, border: 'none'}}>Update Email</button>
            </div>
          </div>

          <div style={{marginTop: 22, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12}}>
            <div>
              <div style={{fontWeight: 600}}>New Password</div>
              <p style={{color: '#9ca3af'}}>Manage your password to make sure it is safe</p>
            </div>

            <div>
              <label style={{display: 'block', fontSize: 13}}>Old Password</label>
              <input placeholder="Enter your old password" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
              <label style={{display: 'block', fontSize: 13, marginTop: 12}}>New Password</label>
              <input placeholder="Enter your new password" style={{width: '100%', padding: 10, border: '1px solid #e6e7eb', borderRadius: 6, marginTop: 8}} />
              <button style={{marginTop: 14, padding: '10px 14px', background: '#5b21b6', color: '#fff', borderRadius: 6, border: 'none'}}>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

