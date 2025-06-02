import NavBar from '../components/navbar';
import Footer from '../components/footer';

function Store() {
    return (
        <>
            {/* Navigation Bar w/NavBurger BEGIN */}
            <NavBar />
            {/* Navigation Bar w/NavBurger End */}

            <main className="">
                <section
                    id="contact"
                    className="main"
                    style={{
                        marginTop: "-0px",
                        marginBottom: "-25px",
                        padding: "100px 25px",
                        textAlign: "center"
                    }}
                >
                    <h1 style={{ fontSize: 30 }}>Contact</h1>
                    <h3 />
                    <h3>Fisher Vent LLC</h3>
                    <h3>Lincoln, Nebraska</h3>
                    <h3>Roger Fisher</h3>
                    <a href="mailto:fisherrj53@gmail.com?subject=feedback">
                        <h3>fisherrj53@gmail.com</h3>
                    </a>
                    <a href="tel:+4024295492">
                        <h3>(402)429-5492</h3>
                    </a>
                    <br />
                    <h1 style={{ fontSize: 25 }}>Management</h1>
                    <h3>Jupiter House</h3>
                    <h3>Lincoln, Nebraska</h3>
                    <h3>Ludwing Siebenhor</h3>
                    <a href="mailto:ludwing@jupiterhouse.space?subject=feedback">
                        <h3>ludwing@jupiterhouse.space</h3>
                    </a>
                    <a href="tel:+4026138124">
                        <h3>(402)613-8124</h3>
                    </a>
                </section>
            </main>

            {/* Footer */}
            <Footer />
            {/* Footer END */}
        </>
    );
}

export default Store;