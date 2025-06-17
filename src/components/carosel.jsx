import React, { useRef } from "react";
import { Link } from "react-router-dom";

function Carosel() {
    const touchStartX = useRef(null);
    const touchEndX = useRef(null);
    const slideCount = 5;

    const getCurrentIndex = () => {
        for (let i = 1; i <= slideCount; i++) {
            if (document.getElementById(`radio${i}`).checked) {
                return i - 1;
            }
        }
        return 0;
    };

    const setChecked = (current) => {
        const radio = document.getElementById(`radio${current + 1}`);
        if (radio) {
            radio.checked = true;
        }
    };

    // Gets the x position of the start of the swipe.
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        touchEndX.current = e.changedTouches[0].clientX;
        const diff = touchStartX.current - touchEndX.current;

        // Checks if the swipe was a greater than 40 pixels long
        if (diff > 40 || diff < -40) {
            let current = getCurrentIndex();

            // goes to the next slide if the x position of the start is greater than the x position of the
            // end of swipe meaning the swipe was to the left and vice versa.
            if (diff > 0) {
                setChecked((current + 1) % slideCount);
            } else {
                setChecked((current - 1 + slideCount) % slideCount);
            }
        }
    };

    return (
        <>
            {/* Image Slider Begins */}
            <section
                className="homebanner"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div className="slider">
                    <div className="slides">
                        <input type="radio" name="radio-btn" id="radio1" defaultChecked/>
                        <input type="radio" name="radio-btn" id="radio2" />
                        <input type="radio" name="radio-btn" id="radio3" />
                        <input type="radio" name="radio-btn" id="radio4" />
                        <input type="radio" name="radio-btn" id="radio5" />
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