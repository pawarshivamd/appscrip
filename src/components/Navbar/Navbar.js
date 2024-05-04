import Box from "@mui/material/Box";
import { Container, Grid, Menu, MenuItem, Typography } from "@mui/material";
// import {ReactComponents as BoxIcon} from '../../assets/img/icon/Box.svg'
import { ReactComponent as BoxIcon } from "../../assets/img/icon/Box.svg";
import { ReactComponent as LogoIcon } from "../../assets/img/logo/Logo.svg";
import { ReactComponent as SearchIcon } from "../../assets/img/icon/search-normal.svg";
import { ReactComponent as HeartIcon } from "../../assets/img/icon/heart.svg";
import { ReactComponent as ShoppingBagIcon } from "../../assets/img/icon/shopping-bag.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  const pages = ['SHOP', 'SKILLS', 'STORIES','ABOUT','CONTACT US'];
  return (
    <>
      <Container maxWidth sx={{ background: "#000" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Typography
            sx={{ display: "flex", alignItems: "center", color: "red" }}
          >
            <BoxIcon /> Lorem ipsum dolor
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", color: "red" }}
          >
            <BoxIcon /> Lorem ipsum dolor
          </Typography>
          <Typography
            sx={{ display: "flex", alignItems: "center", color: "red" }}
          >
            <BoxIcon /> Lorem ipsum dolor
          </Typography>
        </Box>
      </Container>
      <nav className="navbar-section">
      <Container >
        <Grid container spacing={2} sx={{padding:"20px 0"}} alignItems="center">
          <Grid item xs>
            <LogoIcon />
          </Grid>
          <Grid item xs>
            <Typography variant="h4"  sx={{ textAlign: "center",fontWeight:800 } } >LOGO</Typography>
          </Grid>
          <Grid item xs>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                gap: "10px",
              }}
            >
              <Link>
                <SearchIcon />
              </Link>
              <Link>
                <HeartIcon />
              </Link>
              <Link>
                <ShoppingBagIcon />
              </Link>
              <Link></Link>
            </Box>
          </Grid>
        </Grid>
        <Container>
          <ul  style={{display:"flex",justifyContent:"center" ,padding:"30px 0"}}  >
            {pages.map((page) => (
              <li style={{paddingInline:"30px"}}  key={page}>
                <Link underline="none" style={{color:"black"}}>{page}</Link>
              </li>
            ))}
          </ul>
        </Container>
      </Container>
      </nav>
    </>
  );
};

export default Navbar;
