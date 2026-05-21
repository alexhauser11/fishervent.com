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
          maxWidth: '900px',
          padding: '40px 32px',
          margin: '20px auto',
        }}>
          <div className="book-layout" style={{
            display: 'flex',
            gap: '40px',
            alignItems: 'flex-start',
            marginBottom: '32px',
          }}>
            {/* Left Column - Wheel of Radical Acceptance */}
            <div style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              textAlign: 'center',
            }}>
              <img
                src="/assets/img/trauma/WheelOfRadicalAcceptance.jpg"
                alt="The Wheel of Radical Acceptance"
                style={{
                  maxWidth: '280px',
                  height: 'auto',
                  borderRadius: '8px',
                  border: '2px solid #c9a227',
                }}
              />

              <div style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                padding: '16px',
                width: '100%',
              }}>
                <p style={{ fontSize: '14px', color: '#666', margin: '0' }}>
                  <strong>The Wheel of Radical Acceptance</strong> — A downloadable resource to support your healing journey
                </p>
              </div>

              <a
                href="/assets/img/trauma/WheelOfRadicalAcceptance.jpg"
                download
                style={{
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
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0d1f3c'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#1a3d72'}
              >
                Download Wheel of Radical Acceptance
              </a>
            </div>

            {/* Right Column - Book Cover and Buy on Amazon */}
            <div className="book-image-container" style={{
              flex: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}>
              <img
                src="/assets/img/trauma/TraumaBookCover.png"
                alt="Trauma Book Cover"
                style={{
                  maxWidth: '350px',
                  height: 'auto',
                  borderRadius: '8px',
                }}
              />

              <a
                href="https://www.amazon.com/Trauma-Here-Comes-There-Goes/dp/B0GTWLSGJV"
                target="_blank"
                rel="noopener noreferrer"
                style={{
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
                  minWidth: '200px',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#b8922a'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#c9a227'}
              >
                Buy on Amazon
              </a>
            </div>
          </div>

          {/* Summary Copy - Full Width Below */}
          <div style={{
            backgroundColor: 'rgba(13, 31, 60, 0.05)',
            border: '2px solid #c9a227',
            borderRadius: '8px',
            padding: '32px',
          }}>
            <h1 style={{
              fontSize: '28px',
              fontWeight: 700,
              color: '#0d1f3c',
              marginBottom: '20px',
              marginTop: 0,
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
        </div>
      </div>
      <Footer />
    </>
  );
}
