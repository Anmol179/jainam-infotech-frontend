import { Box, Container, Flex } from "@chakra-ui/react"
import logo from "../images/logo.png"
import {Link, useNavigate} from "react-router-dom"

const Navbar = () => {
    const navigate =useNavigate();
    return(
        <Container>
        <Flex>
            <Box>
                {/* logo */}
                <img src={logo} alt=""></img>
            </Box>
            <Flex>
                <h6 onClick={(()=>navigate("/"))}>Home</h6>
                <h6 onClick={(()=>navigate("/cctv"))}>CCTV</h6>
                <h6 onClick={(()=>navigate("/laptop"))}>Laptop</h6>
                <h6 onClick={(()=>navigate("/spare-parts"))}>Spare Parts</h6>
                <h6 onClick={(()=>navigate("/accessories"))}>Accessories</h6>
            </Flex>
            <div>
                {/* contact */}
                <button>Get In Touch</button>
            </div>
            </Flex>
            </Container>
    )
}

export default Navbar;