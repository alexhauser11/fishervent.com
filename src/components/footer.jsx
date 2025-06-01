

function Footer() {
  return (
    <footer>
      <nav>
        <hr />
        <div className="smicons">
          <a
            href="https://www.facebook.com/rogerfisherventriloquist/"
            className="fa fa-facebook"
          />
          <a
            href="https://www.youtube.com/channel/UCvHFPg74VD1lTKqygrU3LlA"
            className="fa fa-youtube"
          />
          <a href="#" className="fa fa-instagram" />
          <a href="#" className="fa fa-twitter" />
        </div>
        <h3>
          <a
            href="tel:+14024295492"
            className="contact-information"
            style={{ color: "#422f92" }}
          >
            (402)429-5492
          </a>
        </h3>
        <h3>
          <a
            href="mailto:fisherrj53@gmail.com?subject=Book Now"
            className="contact-information"
            style={{ color: "#422f92" }}
          >
            fisherrj53@gmail.com
          </a>
        </h3>
        <p style={{ color: "white" }}>
          All Rights Reserved. Roger Fisher Ventriloquist.
        </p>
      </nav>
    </footer>
  );
}

export default Footer;