import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BookModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 9998,
      }} onClick={() => setIsOpen(false)} />

      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
        padding: '32px',
        maxWidth: '500px',
        width: '90%',
        zIndex: 9999,
      }}>

        <button
          onClick={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#0d1f3c',
            padding: '8px',
            lineHeight: 1,
          }}
        >
          ×
        </button>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <img
            src="/assets/img/trauma/TraumaBookCover.png"
            alt="Trauma Book Cover"
            style={{
              maxWidth: '220px',
              height: 'auto',
              borderRadius: '8px',
              marginBottom: '20px',
            }}
          />
        </div>

        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontSize: '14px', color: '#0d1f3c', fontWeight: 600, margin: '8px 0' }}>
            Now Available on Amazon
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            margin: '20px 0 24px 0',
          }}>
            <span style={{
              fontSize: '2.5rem',
              fontWeight: 900,
              lineHeight: 1,
              color: '#c9a227',
            }}>
              TRAUMA
            </span>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '14px',
              fontWeight: 600,
              color: '#0d1f3c',
              lineHeight: 1.4,
            }}>
              <span>Here it Comes.</span>
              <span>There it Goes.</span>
            </div>
          </div>

          <h2 style={{ fontSize: '24px', color: '#0d1f3c', fontWeight: 700, margin: '12px 0' }}>
            The Wheel of Radical Acceptance
          </h2>
          <p style={{ fontSize: '14px', color: '#1a3d72', fontWeight: 600, margin: '8px 0' }}>
            14 Therapeutic Modalities
          </p>
          <p style={{ fontSize: '13px', color: '#666', fontStyle: 'italic', margin: '12px 0' }}>
            "My Tumultuous Journey"
          </p>
        </div>

        <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
          <Link
            to="/book"
            onClick={() => setIsOpen(false)}
            style={{
              flex: 1,
              padding: '12px 20px',
              backgroundColor: '#c9a227',
              color: '#0d1f3c',
              textDecoration: 'none',
              borderRadius: '6px',
              textAlign: 'center',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#b8922a'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#c9a227'}
          >
            Learn More
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            style={{
              flex: 1,
              padding: '12px 20px',
              backgroundColor: '#f0f0f0',
              color: '#0d1f3c',
              border: '1px solid #ddd',
              borderRadius: '6px',
              fontWeight: 600,
              fontSize: '14px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#f0f0f0'}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
