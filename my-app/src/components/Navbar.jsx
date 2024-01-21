import { Box, Container, Flex } from "@chakra-ui/react"
import logo from "../images/logo.png"
import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <Container>
        <Flex>
            <Box>
                {/* logo */}
                <img src={logo} alt=""></img>
            </Box>
            <Flex>
                
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