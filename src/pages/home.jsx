import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Carosel from '../components/carosel';
import Form from '../components/form';

function Home() {
  return (
    <>
      {/* Navigation Bar w/NavBurger */}
      <NavBar />


      <table border={0} cellPadding={0} cellSpacing={0} width="100%">
        <tbody>
          {/* BODY CONTENT */}
          <tr>
            <td align="center" style={{ padding: 20 }}>


              {/* Page 1 */}
              <table
                className="email-container"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd" }}
              >
                <tbody>
                  <tr>
                    <td align="center" style={{ padding: "0 20px 20px" }}>
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        {/* Dear Program Director */}
                        <tbody>
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <h4>Dear program director</h4>
                              <p>
                                In late 2025, or anytime in 2026 you have opportunity
                                to have a great ventriloquist show at your facility.
                                Using our own American holidays and history to be a
                                vehicle to reinforce so many of our heart felt
                                memories. That coming to you from a bunch of funny
                                wholesome, talkative puppets, who are dressed for the
                                occasion. Loads of jokes. portions of great seasonal
                                and noteworthy songs mixed in with your all-time
                                favorites.
                              </p>
                            </td>
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/rogerandtanners.jpg">
                                <img
                                  src="/assets/img/rogerandtanners.jpg"
                                  alt="Roger and Tanners"
                                  title="Roger and Tanners"
                                  width="100%"
                                />
                              </a>
                            </td>
                          </tr>
                          {/* Grown Up Christmas List */}
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/tailoredtofunction.png">
                                <iframe
                                  width="100%"
                                  height="125%"
                                  src="https://www.youtube.com/embed/86wwVmCb3KQ?si=EfOOhk1iEzBu6iax"
                                  title="YouTube video player"
                                  frameBorder={0}
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  referrerPolicy="strict-origin-when-cross-origin"
                                  allowFullScreen=""
                                />
                              </a>
                            </td>
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <h4>
                                To see my latest{" "}
                                <a href="#">"My Grown Up Christmas List"</a> a live
                                song at the Crescent Moon Coffee Shop in Lincoln, NE.
                              </h4>
                              <h3>Tap on the arrow to watch video.</h3>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Single Paragraph Section */}
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        <tbody>
                          <tr className="stack-column">
                            <td width="33.33%" align="center" style={{ padding: 10 }}>
                              <p style={{ textIndent: 0 }}>
                                We have done shows in Methodist, Lutheran, and Berean
                                churches. Also we have done lots of senior shows in
                                assisted living, independent, memory care, group
                                homes, 55+, and governmental programs. Also, hundreds
                                of other different gigs in all venues.
                              </p>
                              <p style={{ textIndent: 0 }}>
                                After performing so many times, my friends and I have
                                put together two great shows!
                              </p>
                              <p
                                style={{
                                  width: "100%",
                                  textIndent: 0,
                                  textAlign: "center"
                                }}
                              >
                                You can sign up now or at fishervent.com!
                              </p>
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


          {/* Page 2 */}
          <tr>
            <td
              align="center"
              style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}
            >
              <table
                className="email-container"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd" }}
              >
                <tbody>
                  <tr>
                    <td align="center" style={{ padding: "0 20px 20px" }}>
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        {/* American Adventure */}
                        <tbody>
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/theamericanadventure.png">
                                <img
                                  src="/assets/img/theamericanadventure.png"
                                  alt="The American Adventure"
                                  title="The American Adventure"
                                  width="100%"
                                />
                              </a>
                              <h4>The American Adventure</h4>
                              <p>
                                A positive tribute of past and present adventures and
                                songs of our awesome America.
                              </p>
                            </td>
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <video
                                src="/assets/videos/liveshow.mp4" poster="/assets/img/convention/liveShowImg.png" height="100%" width="100%" title="" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" controls></video>
                              <p style={{ width: "100%", textAlign: "center" }}>
                                Go to fishervent.com to watch one our adventures
                              </p>
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


          {/* Page 3 */}
          <tr>
            <td
              align="center"
              style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}
            >
              <table
                className="email-container"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd" }}
              >
                <tbody>
                  <tr>
                    <td align="center" style={{ padding: "0 20px 20px" }}>
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        {/* Holidays in the USA */}
                        <tbody>
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/holidaysintheusa.png">
                                <img
                                  src="/assets/img/holidaysintheusa.png"
                                  alt="Holidays in the USA"
                                  title="Holidays in the USA"
                                  width="100%"
                                />
                              </a>
                              <h4>Holidays in the USA</h4>
                              <p>
                                A smattering of my past seven holiday shows on YouTube
                                the past four years. It comes with some new pizzazz
                                and highlighting of our holiday themes that are so
                                fun, so captivating!
                              </p>
                            </td>
                            {/* Family Easter Week Video */}
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/2LX-XdGbJ-w?si=DsjXwHLRUMkLd0is"
                                title="YouTube video player"
                                frameBorder={0}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen=""
                              />
                              <p style={{ textAlign: "center", margin: "1rem" }}>
                                Tap arrow to play video
                              </p>
                              <p>
                                One of the shows of the YouTube series Holidays in the
                                USA is the ”Family Easter Week”. This show was a viral
                                hit with over 80 thousand hits in one week and YouTube
                                made it seen to over 1.4 million times worldwide.
                              </p>
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


          {/* Page 4 */}
          <tr>
            <td
              align="center"
              style={{ paddingBottom: 20, paddingLeft: 20, paddingRight: 20 }}
            >
              <table
                className="email-container"
                width={600}
                cellPadding={0}
                cellSpacing={0}
                border={0}
                style={{ backgroundColor: "#ffffff", border: "1px solid #dddddd" }}
              >
                <tbody>
                  <tr>
                    <td align="center" style={{ padding: "0 20px 20px" }}>
                      <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                        {/* Dentist */}
                        <tbody>
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/aboutmyself.png">
                                <img
                                  src="/assets/img/aboutmyself.png"
                                  alt="About Myself Image"
                                  title="About Myself"
                                  width="100%"
                                />
                              </a>
                            </td>
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <p>
                                Before venturing into ventriloquism, I have been a
                                Dentist for over 36 years. Starting my career as a
                                teacher, then becoming a tennis professional
                                instructor. During my collegiate career, I was a
                                national counselor for the Fellowship of Christian
                                Athletes. As a tennis pro of the Lincoln Racket Club I
                                organized free clinics to kids to lean about Christ
                                and playing tennis.
                              </p>
                            </td>
                          </tr>
                          {/* Hospital Visit */}
                          <tr className="stack-column">
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <p style={{ textIndent: 0 }}>
                                Over a 13 year period I devoted time for persons with
                                needed dental/medical care, playing a very active roll
                                and building a $300k state of the art free dental
                                clinic. The governor of Nebraska even acknowledged me
                                with the Point of Light award, a unique statewide
                                recognition of service to others.
                              </p>
                              <p>
                                I have even traveled to Honduras on a dental mission.
                                I currently live in Lincoln, Nebraska on a lake just
                                west of the University of Nebraska Cornhusker campus
                                and stadium. I live with a live golden doodle dog who
                                is often a part of the show.
                              </p>
                            </td>
                            <td
                              width="33.33%"
                              align="center"
                              className="stack-column"
                              style={{ padding: 10 }}
                            >
                              <a href="/assets/img/hospitalvisit.jpeg">
                                <img
                                  src="/assets/img/hospitalvisit.jpeg"
                                  alt="Hospital Visit"
                                  title="Hospital Visit"
                                  width="100%"
                                />
                              </a>
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

          {/* Page 5 */}
          <tr>
            <td align="center" style={{ paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
              <table className="email-container" width="600" cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: '#ffffff', border: '1px solid #dddddd' }}>
                <tr>
                  <td align="center" style={{ padding: '0 20px 20px' }}>
                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                      {/* Single Paragraph Section */}
                      <tr className="stack-column">


                        <td width="100%" align="center" className="stack-column" style={{ padding: '10px' }}>
                          <p style={{ textIndent: '10px' }}>
                            Performing over 150 gigs with over 7000 miles of travel.
                            Ranging from Yellowstone National Park to Seattle to San Francisco to Lake Tahoe to
                            Rocky Mountain national Park in Colorado on the national Western tour.
                            Touring the Southwest from Albuquerque, New Mexico to Phoenix, Arizona.
                            Touching base from Niagara Falls to New Harbor Maine. Doing a lot in my home
                            state of Nebraska and shows in Orlando, Florida.
                          </p>
                        </td>
                      </tr>
                    </table>

                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                      {/* National Ventriloquist Convention */}
                      <tr className="stack-column">
                        <td width="33.33%" align="center" className="stack-column" style={{ padding: '10px' }}>
                          <p>
                            One of my highlights so far was to be picked as a medalist being one of the final
                            eight to perform in the open mic competition of the National Ventriloquist Convention,
                            especially, using the same mic as Jeff Dunham.
                          </p>
                        </td>
                        <td width="33.33%" align="center" className="stack-column" style={{ padding: '10px' }}>
                          <video src="/assets/videos/ventconvent.mp4" poster="/assets/img/convention/ventConventImg.png" height="100%" width="100%" title="" frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerpolicy="strict-origin-when-cross-origin" controls></video>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          {/* Page 6 */}
          <tr>
            <td align="center" style={{ paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
              <table className="email-container" width="600" cellPadding={0} cellSpacing={0} border={0} style={{ backgroundColor: '#ffffff', border: '1px solid #dddddd' }}>
                <tr>
                  <td align="center" style={{ padding: '0 20px 20px' }}>
                    <table width="100%" cellPadding={0} cellSpacing={0} border={0}>
                      {/* Paragraph Section */}
                      <tr className="stack-column">
                        <td width="100%" align="center" className="stack-column" style={{ padding: '10px' }}>
                          <p style={{ textIndent: '0px' }}>
                            As far as payment, I am looking at the two shows for $800, or one show at $600.
                            “The American Adventure” is an hour show, and the “Holidays in the USA” is an hour and a half show.
                            If travel is involved a $100 travel fee. Any senior event is an hour & the customary fee.
                          </p>
                          <p>
                            I am negotiable because my goal is to uplift everyone, and have fun.
                            I can also come early to greet and invite members and meet kids. Certainly, this is a chance to invite Guests!
                          </p>
                          <p>
                            Our show is done in a general way and can be customized to your audience.
                            Often only portions of the songs are done and a program is available to follow the songs.
                          </p>
                          <p>
                            Other events we have done/are available to you include:
                            Birthday or office parties, service club or fundraising event, any senior event, family or school or community reunion or gathering.
                            Any function like hospital, or hospice event, a coffee shop, sports bar, nightclub or sports activity, a reception, carnival, or market show.
                            All kinds of school/church situations of any age. Of course, etc.etc which my puppets always can adapt to enhance your activity.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Form */}
      <Form />

     {/* Carosel */}
      <Carosel />

      {/* Footer */}
      <Footer />

    </>
  );
}

export default Home;