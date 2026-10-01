import vector from "../assets/Vectorlogo.svg";
 import cartIcon from "../assets/cartIcon.svg";

function Navbar() {
  return (
    <header className="header-frame">

      {/* Logo */}
      <div className="header-logo">
        <img src={vector} alt="ByteSpace" />
        <span>ByteSpace</span>
      </div>

      {/* Center Menu */}
      <nav className="header-nav-menu">
        <a href="#">Home</a>
        <a href="#">Courses</a>
        <a href="#">Creators</a>
      </nav>

      {/* Right Menu */}
      <div className="header-right-menu">
        <a href="#">Sign In</a>
        <a href="#">Join Us</a>
        {/* Replace ♧ with the SVG here */}
       


<button className="cart-btn" aria-label="Shopping Cart">
  <img src={cartIcon} alt="Cart" className="cart-icon" />
</button>
      </div>

    </header>
  );
}

export default Navbar;