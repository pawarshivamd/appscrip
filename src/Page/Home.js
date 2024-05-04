import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactComponent as LeftArrowIcon } from "../assets/img/icon/arrow-left.svg";
// import { ReactComponent as RightArrowIcon } from "../assets/img/icon/arrow-right.svg";
import { ReactComponent as DownArrowIcon } from "../assets/img/icon/arrow-down.svg";
import imgBag from "../assets/img/products/Front Pic.png";
import ProductCard from "../components/productCard/ProductCard";
import Footer from "../components/Footer/Footer";
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
  return (
    <>
      <Container sx={{ textAlign: "center", py: 6 }}>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 400 }}>
          DISCOVER OUR PRODUCTS
        </Typography>
        <Typography sx={{ fontSize: "1.375rem", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
          <br />
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
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontWeight: 700 }}>3425 Items</Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
              }}
            >
              <LeftArrowIcon />
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#888792",
                  textDecoration: "underline",
                  textTransform: "capitalize",
                }}
              >
                SHOW FILTER
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
          <Grid item xl={3}>
            <Grid item xl={12} lg={12} md={12} xs={12}>
              <Box sx={{ border: "1px solid red" }}></Box>
            </Grid>
          </Grid>
          <Grid item xs={9}>
            <Grid container>
              {products.map((item) => (
                <Grid item xl={4} lg={3} md={4} xs={6}>
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
