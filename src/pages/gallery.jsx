import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Gallery() {
    return (
        <>
            <title>Gallery</title>
            {/* Navigation Bar w/NavBurger BEGIN */}
            <NavBar />
            {/* Navigation Bar w/NavBurger End */}
            <h1 style={{ fontSize: 50, textAlign: "center", marginTop: 40 }}>Gallery</h1>
            <div className="" style={{ marginTop: "10vh", justifyContent: "center"}}>
                <div className="gallery">
                    <div className="image-container">
                        <div className="gallery-item">
                            <Link to="/videos">
                                <h1>All Video Gallery</h1>
                                <div className="image">
                                    <img
                                        src="/assets/img/homeslider/oceanbackcollage.png"
                                        alt=""
                                    />
                                    <div className="image__overlay">
                                        <div className="image__title">
                                            Video Gallery
                                            <p className="image__description">All Videos</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="gallery-item">
                            <Link to="/venthaven2023">
                                <h1>Vent Haven Convention</h1>
                                <div className="image">
                                    <img
                                        src="/assets/img/homeslider/convention.png"
                                        alt=""
                                    />
                                    <div className="image__overlay">
                                        <div className="image__title">
                                            VentHaven <br /> Convention 2023
                                            <p className="image__description">See more Pictures</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="gallery-item">
                            <Link to="/oceanback">
                                <h1>Ocean &amp; Back</h1>
                                <div className="image">
                                    <img
                                        src="/assets/img/homeslider/oceanbackcollage.png"
                                        alt=""
                                    />
                                    <div className="image__overlay">
                                        <div className="image__title">
                                            Ocean &amp; Back
                                            <p className="image__description">See More Pictures</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <Footer />
            {/* Footer END */}

        </>
    );
}

export default Gallery;