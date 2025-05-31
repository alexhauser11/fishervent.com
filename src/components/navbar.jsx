import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <>
            <div className="navigationbar">
                <div className="logowrap" id="logowrap">
                    <Link to="/">
                        <img
                            className="logo"
                            id="logo"
                            src="https://fishervent.com/imgrf/rogerandhalloweenbuddies.png"
                            alt=""
                        />
                    </Link>
                </div>
                <div className="navburger" id="navBurger">
                    <div className="line" />
                    <div className="line" />
                    <div className="line" />
                </div>
                <ul className="menu" id="menu">
                    <li>
                        <Link to="/" className="link">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/videos" className="link">
                            Videos
                        </Link>
                    </li>
                    <li>
                        <Link to="/gallery" className="link">
                            Gallery
                        </Link>
                    </li>
                    {/* <li><Link to="press.html" class="link">Press</Link></li> */}
                    <li>
                        <Link to="/about" className="link">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact" className="link">
                            Contact
                        </Link>
                    </li>
                    {/* <div class="smicons">
  <a href="#" class="fa fa-facebook"></a>
  <a href="#" class="fa fa-youtube"></a>
  <a href="#" class="fa fa-instagram"></a>
  <a href="#" class="fa fa-twitter"></a>
</div> */}
                    <p>All Rights Reserved. Roger Fisher Ventriloquist.</p>
                </ul>
            </div>
        </>
    );
}

export default NavBar;