import NavBar from '../components/navbar';
import Footer from '../components/footer';

export default function Book() {
  return (
    <>
      <NavBar />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0d1f3c 0%, #1a3d72 100%)',
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          boxShadow: '0 0 30px rgba(0, 0, 0, 0.5)',
          maxWidth: '700px',
          padding: '40px 32px',
          margin: '20px auto',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img
              src="/assets/img/trauma/TraumaBookCover.png"
              alt="Trauma Book Cover"
              style={{
                maxWidth: '300px',
                height: 'auto',
                borderRadius: '8px',
                boxShadow: '0 0 20px rgba(201, 162, 39, 0.3)',
              }}
            />
          </div>

          <div style={{
            backgroundColor: 'rgba(13, 31, 60, 0.05)',
            border: '2px solid #c9a227',
            borderRadius: '8px',
            padding: '32px',
            marginBottom: '28px',
          }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#0d1f3c',
              marginBottom: '20px',
              textAlign: 'center',
            }}>
              Realizing Trauma...
            </h1>

            <div style={{ lineHeight: 1.8, color: '#333333', fontSize: '16px' }}>
              <p style={{ marginBottom: '16px' }}>
                Alone without any possessions but three ceramic dogs, a cereal bowl, a fork, and a Cup.
              </p>
              <p style={{ marginBottom: '16px' }}>
                After a successful practice there was nothing left to my name.
              </p>
              <p style={{ marginBottom: '16px' }}>
                The death spiral began after reading a letter of banishment from a non-profit organization I loved and served for decades.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Days after that betrayal, my car explodes into flames on the interstate. These traumas pulled me down into a deep depression that cost my dignity.
              </p>
              <p style={{ marginBottom: '16px' }}>
                Once hospitalized the misdiagnoses, the overmedication, and prior years of health professionals more apt to prescribe medication than deal with deeper issues, left me dehumanized.
              </p>
              <p style={{ marginBottom: '16px' }}>
                I hope you will join in my journey back to life.
              </p>
              <p style={{ marginBottom: '0' }}>
                Weaving 14 different counseling topics through my story you will see how the "Wheel of Radical Acceptance" diagram helps one deal with trauma, anxiety, grief, addiction, bi-polar, PTSD, abuse, rage, suicide, etc.
              </p>
            </div>
          </div>

          <div style={{
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            <p style={{ fontSize: '14px', color: '#666', margin: '0 0 12px 0' }}>
              <strong>The Wheel of Radical Acceptance</strong> — A downloadable resource to support your healing journey
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}>
            <a
              href="https://www.amazon.com/s?k=trauma+wheel+of+radical+acceptance"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                flex: '1 1 200px',
                padding: '14px 24px',
                backgroundColor: '#c9a227',
                color: '#0d1f3c',
                textDecoration: 'none',
                borderRadius: '6px',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                minWidth: '160px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#b8922a'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#c9a227'}
            >
              Buy on Amazon
            </a>
            <a
              href="/assets/img/trauma/WheelOfRadicalAcceptance.jpg"
              download
              style={{
                flex: '1 1 200px',
                padding: '14px 24px',
                backgroundColor: '#1a3d72',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '6px',
                textAlign: 'center',
                fontWeight: 600,
                fontSize: '15px',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                minWidth: '160px',
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0d1f3c'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#1a3d72'}
            >
              Download Wheel of Radical Acceptance
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
