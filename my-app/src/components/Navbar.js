import logo from "../images/logo.png"

const Navbar = () => {
    return(
        <div>
            <div>
                {/* logo */}
                <img src={logo} alt=""></img>
            </div>
            <div>
                {/* navigation */}
                <div>Home</div>
                <div>CCTV</div>
                <div>Laptop</div>
                <div>Spare Parts</div>
                <div>Accessories</div>
            </div>
            <div>
                {/* contact */}
                <button>Get In Touch</button>
            </div>
        </div>
    )
}

export default Navbar;