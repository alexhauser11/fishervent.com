import NavBar from '../components/navbar';
import Footer from '../components/footer';

function OceanBack() {
    return (
        <>
            {/* Navigation Bar w/NavBurger BEGIN */}
            <NavBar />
            {/* Navigation Bar w/NavBurger End */}

                <h1 style={{ fontSize: 50, textAlign: "center", marginTop: 35 }}>
                    To the Ocean &amp; Back
                </h1>
                <div className="gallery-convention">
                    <div className="image-container" style={{}}>
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_3980.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4028.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4071.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4091.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4187.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4213.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4380.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4519.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4540.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4613.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_4655.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_5003.jp2" alt="" />
                        <img src="http://fishervent.com/imgrf/oceanback/IMG_5016.jp2" alt="" />
                    </div>
                </div>


            {/* Footer */}
            <Footer />
            {/* Footer END */}
        </>
    );
}

export default OceanBack;