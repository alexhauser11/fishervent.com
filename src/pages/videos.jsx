import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


function Videos() {
    return (
        <>
            <title>Videos</title>
            {/* Navigation Bar w/NavBurger BEGIN */}
            <NavBar />
            {/* Navigation Bar w/NavBurger End */}
            <main className="">
                <section
                    id="liveShowMP4"
                    width=""
                    className="main"
                    style={{ marginBottom: 50 }}
                >
                    <video src="/assets/videos/liveshow.mp4" poster="/assets/img/convention/liveShowImg.png" width="100%" height="50%" 
                    title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" controls />

                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Live Show</h2>
                        <p>
                            Filler Text
                        </p>
                        <p>Filler Text</p>
                    </div>
                </section>
                <section
                    id="ventConventMP4"
                    width=""
                    className="main"
                    style={{ marginBottom: 50 }}
                >
                    <video src="/assets/videos/ventconvent.mp4" poster="/assets/img/convention/ventConventImg.png" height="100%" width="100%" title="" frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                          referrerpolicy="strict-origin-when-cross-origin" controls></video>
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>VentHaven Convention</h2>
                        <p>
                            Filler Text
                        </p>
                        <p>Filler Text</p>
                    </div>
                </section>
                <section
                    id="grownUpChristmasList"
                    width=""
                    className="main"
                    style={{ marginBottom: 50 }}
                >
                    <iframe 
                    width="100%"
                    height={315}
                    src="https://www.youtube.com/embed/86wwVmCb3KQ?si=cdX9DLvxiaygTdB7"
                    title="YouTube video player"
                    frameBorder={0}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Tanner's Grown Up Christmas List</h2>
                        <p>
                            Filler Text
                        </p>
                        <p>Merry Christmas!</p>
                    </div>
                </section>
                <section
                    id="familyHolloweenWeek"
                    width=""
                    className="main"
                    style={{ marginBottom: 50 }}
                >
                    <iframe
                        width="100%"
                        height={315}
                        src="https://www.youtube.com/embed/Qmy_f9kRSB4?si=k-O9IYd5-4ArXDwP"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Halloween Special</h2>
                        <p>
                            During the Month of October Roger's Buddies dress up and tell Bible
                            stories, singing christian renditions of popular-halloween-culture songs
                            like Ghostbusters from hit movie, "Ghostbusters", "This is Halloween"
                            from blockbuster hit movie "Nightmare Before Christmas, "Thriller" by
                            Michael Jackson's "Thriller".{" "}
                        </p>
                        <p>Put your favorite Halloween Costume &amp; Sing a Long!</p>
                    </div>
                </section>
                <section
                    id="easter2023"
                    width=""
                    className="main"
                    style={{ marginBottom: 50 }}
                >
                    <iframe
                        width="100%"
                        height="315px"
                        src="https://www.youtube.com/embed/2LX-XdGbJ-w"
                        title="YouTube video player"
                        frameBorder={0}
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
                <section id="christmasspecial2022" width="" className="main">
                    <iframe
                        width="100%"
                        height="315px"
                        src="https://www.youtube.com/embed/bS-oe0mE8hc"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Live at Meadolark Coffee House</h2>
                        <p>
                            Back again! Ventriloquist Roger Fisher performs a Christmas Show at The
                            Meadowlark Coffee House in Lincoln, Nebraska. Debuting his new buddies,
                            this live performance brings laughs and cheerful festive spirits to
                            Christmas celebrations everywhere.
                        </p>
                        <p>Merry Christmas!!</p>
                    </div>
                </section>
                <div className="headerwrap">
                    <h1>Don the Donkey!</h1>
                    <Link to="/about">
                        <img
                            className="headerimg"
                            src="https://fishervent.com/imgrf/don.png"
                            alt=""
                        />
                    </Link>
                </div>
                <section
                    id="christmasspecial2021"
                    className="main"
                    style={{ marginTop: "-25px", marginBottom: "-25px" }}
                >
                    <iframe
                        width="100%"
                        height="315px"
                        src="https://www.youtube-nocookie.com/embed/_S6UzfWQQ68"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Christmas Special</h2>
                        <p>
                            Every year, we perform our Christmas show all throughout! Teddy and Mary
                            welcome Don the Donkey, our new friend. From guessing games to songs,
                            the Chrimstas story bring friend and family together
                        </p>
                        <p>Let's Celebrate Together!</p>
                    </div>
                </section>
                <div className="headerwrap">
                    <h1>Meet Tanner!</h1>
                    <Link to="/about">
                        <img
                            className="headerimg"
                            src="https://fishervent.com/imgrf/tanner.png"
                            alt=""
                        />
                    </Link>
                </div>
                <section
                    id="easterspecial"
                    className="main"
                    style={{ marginTop: "-25px", marginBottom: "-25px" }}
                >
                    <iframe
                        width="100%"
                        height="315px"
                        src="https://www.youtube-nocookie.com/embed/LGpenFOWAao"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Easter Special</h2>
                        <p>
                            Mary &amp; Teddy take the stage to speak to us about Easter. With jokes,
                            songs and stories, we celebrate the resurrection.
                        </p>
                        <p>Hit play and Sing along!</p>
                    </div>
                </section>
                <div className="headerwrap">
                    <h1>This is Cracker!</h1>
                    <Link to="/about">
                        <img
                            className="headerimg"
                            src="https://fishervent.com/imgrf/cracker.png"
                            alt=""
                        />
                    </Link>
                </div>
                <section
                    id="christmasspecial2020"
                    className="main"
                    style={{ marginTop: "-25px" }}
                >
                    <iframe
                        width="100%"
                        height="315px"
                        src="https://www.youtube.com/embed/KuDdKBj17cw?si=oyP-ZDlmccSTdbo4"
                        title="YouTube video player"
                        frameBorder={0}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen=""
                    />
                    <div className="" style={{ padding: "25px 25px" }}>
                        <h2>Thanksgiving &amp; Christmas Special</h2>
                        <p>
                            Our very first Christmas Special! Through song laughter and joy, Teddy
                            and Mary tell us the true story of Chrimstas.
                        </p>
                        <p>Learn about it by clicking Play!</p>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
            {/* Footer END */}
        </>
    );
}

export default Videos;