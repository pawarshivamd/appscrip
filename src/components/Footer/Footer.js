import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer-section">
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: 700, mb: 3 }}
            >
              Be the first to know
            </Typography>
            <Typography>Sign up for updates from mettā muse.</Typography>
            <Box>
              <form>
                <input type="email" />
                <Button>Subscribe</Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
