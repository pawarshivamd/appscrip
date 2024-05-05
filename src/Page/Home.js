import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { ReactComponent as LeftArrowIcon } from "../assets/img/icon/arrow-left.svg";
import { ReactComponent as RightArrowIcon } from "../assets/img/icon/arrow-right.svg";
import { ReactComponent as DownArrowIcon } from "../assets/img/icon/arrow-down.svg";
import imgBag from "../assets/img/products/Front Pic.png";
import ProductCard from "../components/productCard/ProductCard";
import Footer from "../components/Footer/Footer";
import AsiderSection from "../components/Asidebar/AsiderSection";
import { useState } from "react";
import { useTheme } from "@emotion/react";
const products = [
  {
    id: 1,
    name: "PPXOC Milkyway dress in pressed flowers",
    img: imgBag,
    newProduct: true,
    OutOfStock: false,
  },
  {
    id: 2,
    name: "Another Product Name",
    img: imgBag,
    newProduct: false,
    OutOfStock: true,
  },
  {
    id: 3,
    name: "Another Product Name",
    img: imgBag,
    newProduct: false,
    OutOfStock: false,
  },
  {
    id: 4,
    name: "Another Product Name",
    img: imgBag,
    newProduct: false,
    OutOfStock: false,
  },
];
const Home = () => {

  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const [showFilter, setShowFilter] = useState(!isXs);
  const [gridItemSize, setGridItemSize] = useState(showFilter ? 3 : 12);
  const transitionDuration = 600;
  const handleHideFilter = () => {
    setShowFilter(!showFilter);
    setGridItemSize(showFilter ? 12 : 3);
    setTimeout(() => {
      setGridItemSize(showFilter ? 12 : 3);
    }, transitionDuration);
  };
  return (
    <>
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h2"  gutterBottom sx={{ fontWeight: 400 , fontSize:{ md:"3.75rem" , xs:"1.24rem"} }}>
          DISCOVER OUR PRODUCTS
        </Typography>
        <Typography sx={{ fontSize:  {md:"1.375rem", xs:"1rem"} , fontWeight: 400 , mx:"auto" , width:{md:"60%" ,xs:"100%"} }} lg={7}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
        
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </Typography>
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={2}
          sx={{
            borderTop: "1px solid #E5E5E5",
            borderBottom: "1px solid #E5E5E5",
            padding: "40px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid
            item
            xl={3}
            md={4}
            sm={4}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography  sx={{ fontWeight: 700, display:{md:"block", xs:"none"} }}>3425 Items</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "0.5rem",
              }}
            >
              {showFilter ? <LeftArrowIcon /> : <RightArrowIcon />}

              <Typography
                onClick={handleHideFilter}
                sx={{
                  fontSize: "16px",
                  color: "#888792",
                  textDecoration: "underline",
                  textTransform: "uppercase",
                  cursor: "pointer",
                }}
              >
                {showFilter ? "Hide Filter" : "Show Filter"}
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              justifyContent: "end",
            }}
          >
            <Typography>RECOMMENDED</Typography>
            <DownArrowIcon />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="xl" sx={{ py: 5 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xl={gridItemSize}
            md={4}
            sm={4}
            xs={12}
            sx={{
              transition: `transform ${transitionDuration}ms`,
              transform: showFilter ? "translateX(0)" : "translateX(-100%)",
              overflow: "hidden",
              position: "relative",
              [theme.breakpoints.down("xs")]: { 
                display: showFilter ? 'none' : 'hide', 
                transform: showFilter ? "translateX(0)" : "translateX(-100%)",                position: "absolute",
                left: 0,
                right: 0,
                background: "white",
                zIndex: 1,
              },
            }}
          >
            {showFilter && (
              <Grid item xl={12} lg={12} md={12} xs={12}>
                <AsiderSection />
              </Grid>
            )}
          </Grid>
          <Grid item xl={showFilter ? 9 : 12} md={ showFilter ? 8 : 12} sm={showFilter ? 8 : 12} xs={12}>
            <Grid container spacing={2}>
              {products.map((item) => (
                <Grid item xl={showFilter ? 4 : 3} lg={showFilter ? 4 : 3} md={showFilter ? 6 : 4} sm={6} xs={6}>
                  <ProductCard key={item.id} product={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
