import { Link } from 'react-router-dom';

function Carosel() {
    return (
        <>
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
        </>
    );
}

export default Carosel;