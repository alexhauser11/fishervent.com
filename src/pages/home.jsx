import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      {/* Navigation Bar w/NavBurger BEGIN */}
      <NavBar/>
      {/* Navigation Bar w/NavBurger End */}
      {/* Image Slider Begins */}
      <section className="homebanner">
        <div className="slider">
          <div className="slides">
            {/* Radio Buttons Begin */}
            {/* Radio Buttons are Invisible */}
            <input type="radio" name="radio-btn" id="radio1" defaultValue="" />
            <input type="radio" name="radio-btn" id="radio2" defaultValue="" />
            <input type="radio" name="radio-btn" id="radio3" defaultValue="" />
            <input type="radio" name="radio-btn" id="radio4" defaultValue="" />
            <input type="radio" name="radio-btn" id="radio5" defaultValue="" />
            {/* Radio Buttons End */}
            {/* slide images start */}
            {/* <div class="slide first">
      <div class="slide1">
        <table class="main" width="100%" style="margin: -25px 0 25px 0;">
          <tr>
            <td style="text-indent: 20px; line-height: px; text-align: left; font-size: 20px; font-weight: bold; font-style: italic; padding: 20px 100px 20px 100px; font-family: sans-serif;">
              <p style="text-indent: 0px;">
                Hello,
              </p>
              <p>
                I'm Roger Fisher from Lincoln Nebraska. Bringing to our Midlands and across the globe a New Twist in Entertainment!
              </p>
              <p>Learn about everything me and buddies do!!</p>
            </td>
          </tr>
        </table>
      </div>
    </div> */}
            <div className="slide first">
              <div className="slide1">
                <a href="#halloweenspecialhome">
                  <table
                    className="main"
                    width="100%"
                    style={{ margin: "-25px 0 25px 0" }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          <div className="halloweenbanner"></div>
                          <div
                            className=""
                            style={{
                              padding: "25px 25px",
                              backgroundColor: "rgba(255, 0, 0, 0.4)"
                            }}
                          >
                            <h2>Halloween Special is Here!!</h2>
                            <p> </p>
                            <p>
                              Put your favorite Halloween Costume and Sing a Long!
                            </p>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </a>
              </div>
            </div>
            <div className="slide">
              <Link to="/venthaven2023">
                <div className="slide2"></div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/oceanback">
                <div
                  className="slide3"
                  alt="Group picture at Vent Haven Convention, magnified on Roger and Tanner with other convention pictures."
                ></div>
              </Link>
            </div>
            <div className="slide">
              <Link to="/oceanback">
                <div
                  className="slide4"
                  alt="Collage of pictures from Roger Fisher and Buddies' trip to the Ocean and Back"
                ></div>
              </Link>
            </div>
            <div className="slide">
              <div className="slide5">
                <div className="slidecontent">
                  <div className="halloweencopy">
                    <h1>
                      Halloween <br />
                      Special
                    </h1>
                    <p>
                      Get your costume ready and come watch Tanner, Cracker, Don,
                      Mary and Teddy along with some new friends, celebrate all
                      Saints Day together!
                    </p>
                    <h2>Scroll Down for Entire Video</h2>
                  </div>
                  <div className="tanner"></div>
                </div>
              </div>
            </div>
            {/* slide images end */}
            {/* automatic navigation start */}
            <div className="navigation-auto">
              <div className="auto-btn1" />
              <div className="auto-btn2" />
              <div className="auto-btn3" />
              <div className="auto-btn4" />
              <div className="auto-btn5" />
            </div>
            {/* automatic navigation end */}
            {/* Manual Navigation Begins */}
            <div className="navigation-manual">
              <label htmlFor="radio1" className="manual-btn" />
              <label htmlFor="radio2" className="manual-btn" />
              <label htmlFor="radio3" className="manual-btn" />
              <label htmlFor="radio4" className="manual-btn" />
              <label htmlFor="radio5" className="manual-btn" />
            </div>
            {/* Manual Navigation Ends */}
          </div>
        </div>
      </section>
      {/* Image Slider Ends */}
      <section className="wrapper">
        {/* Header */}
        <table width="100%">
          <tbody>
            <tr>
              <td className="two-columns">
                <table className="column">
                  <tbody>
                    <tr>
                      <td className="padding">
                        <table className="content">
                          <tbody>
                            <tr>
                              <td>
                                <Link to="/">
                                  <img
                                    src="http://fishervent.com/imgrf/rogerfisherandhalloweenbuddieslogo.png"
                                    alt="Roger Fisher & Buddies"
                                    width="100%px"
                                  />
                                </Link>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table className="column">
                  <tbody>
                    <tr>
                      <td className="padding">
                        <table className="content">
                          <tbody>
                            <tr>
                              <td style={{ textAlign: "center", color: "#422f92" }}>
                                <h1>Welcome You!</h1>
                                <h2 />
                                <h2
                                  style={{
                                    lineHeight: 30,
                                    fontFamily: "sans-serif, Impact, sans-serif",
                                    fontSize: 31
                                  }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
        {/* Introduction */}
        <section id="halloweenspecialhome" className="main">
          <iframe
            width="100%"
            height={315}
            src="https://www.youtube.com/embed/Qmy_f9kRSB4?si=cvibkKF5T-OdjnrZ"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            allowFullScreen=""
          />
          <div className="" style={{ padding: "25px 25px" }}>
            <h2>Halloween Special</h2>
            <p>
              During the Month of October Roger's Buddies dress up and tell Bible
              stories, singing christian renditions of popular-halloween-culture
              songs like Ghostbusters from hit movie, "Ghostbusters", "This is
              Halloween" from blockbuster hit movie "Nightmare Before Christmas,
              "Thriller" by Michael Jackson's "Thriller".{" "}
            </p>
            <p>Put your favorite Halloween Costume &amp; Sing a Long!</p>
          </div>
        </section>
        <section id="easter2023" className="main">
          <iframe
            width="100%"
            height="315px"
            src="https://www.youtube.com/embed/2LX-XdGbJ-w"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
          <div className="" style={{ padding: "25px 25px" }}>
            <h2>Family Easter Week Live</h2>
            <p>
              Celebrating Family Easter Week, Roger &amp; Buddies tell the story of
              Easter to Preschool and Elementary Students
            </p>
            <p>Join us and Learn!</p>
          </div>
        </section>
        {/* TEMPLATE TABLE FOR A SCHEDULE
<h1>December 2022 Schedule</h1>

<table class="schedule">
  <thead>
    <tr>
      <th colspan="3"><h2>Public Shows</h2></th>
    </tr>
  </thead>
  <tr>
    <td>Dec 10th</td>
    <td>9am & 9:30am</td>
    <td>Rock 'n' Joe's</td>
  </tr>
    <tr>
      <td>Dec 23rd</td>
      <td>9am</td>
      <td>Hyvee @ Pioneers & 70th</td>
    </tr>

  <thead>
    <tr>
      <th colspan="3"><h2>Exclusive Shows</h2></th>
    </tr>
  </thead>
  <tr>
    <td>Dec 9th</td>
    <td>TBA</td>
    <td>Bitford Assisted Living</td>
  </tr>
  <tr>
    <td>Dec 14th</td>
    <td>TBA</td>
    <td>Aging Partners</td>
  </tr>
  <tr>
    <td>Dec 15th</td>
    <td>TBA</td>
    <td>Bubbles and Block</td>
  </tr>
  <tr>
    <td>Dec 19th</td>
    <td>TBA</td>
    <td>Waterford at Williamsburg</td>
  </tr>
  <tr>
    <td>Dec 23rd</td>
    <td>2pm</td>
    <td>Yankee Hill Indpendent Living</td>
  </tr>

  <thead>
    <tr>
      <th colspan="3"><h2>Dec Open Mic Shows</h2></th>
    </tr>
  </thead>
    <tr>
      <td>Wednesday's</td>
      <td>7th, 14th, 21st</td>
      <td>Meadowlark</td>
    </tr>
    <tr>
      <td>Thursday's</td>
      <td>8th 15th 22nd</td>
      <td>Crescent Moon</td>
    </tr>
</table> */}
        <section id="easterspecial" className="main">
          <iframe
            width="100%"
            height="315px"
            src="https://www.youtube-nocookie.com/embed/LGpenFOWAao"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen=""
          />
          <div className="" style={{ padding: "25px 25px" }}>
            <h2>Easter Special</h2>
            <p>
              Mary &amp; Teddy take the stage to speak to us about Easter. With
              jokes, songs and stories, we celebrate the resurrection.
            </p>
            <p>Hit play and sing along!</p>
          </div>
        </section>
      </section>
      {/* Footer */}
      <Footer/>
      {/* Footer END */}
    </>
  );
}

export default Home;