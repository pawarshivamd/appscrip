import { Box, Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { ReactComponent as FlagIcon } from "../../assets/img/icon/flag.svg";
import { ReactComponent as StartIcon } from "../../assets/img/icon/Star 1.svg";
import { ReactComponent as InstaIcon } from "../../assets/img/icon/insta.svg";
import { ReactComponent as InIcon } from "../../assets/img/icon/in.svg";
import { ReactComponent as IpayIcon } from "../../assets/img/icon/i-pay.svg";
import { ReactComponent as GpayIcon } from "../../assets/img/icon/g-pay.svg";
import { ReactComponent as OpayIcon } from "../../assets/img/icon/o-pay.svg";
import { ReactComponent as AmexIcon } from "../../assets/img/icon/amex.svg";
import { ReactComponent as PayIcon } from "../../assets/img/icon/pay.svg";
import { ReactComponent as TworoundIcon } from "../../assets/img/icon/tworound.svg";

import { Link } from "react-router-dom";
const links = [
  { text: "About Us", url: "/about" },
  { text: "Stories", url: "/stories" },
  { text: "Artisans", url: "/artisans" },
  { text: "Boutiques", url: "/boutiques" },
  { text: "Contact Us", url: "/contact" },
  { text: "EU Compliances Docs", url: "/eu-compliance" },
  { text: "Join as a Seller", url: "/join-seller" },
];
const quickLinks = [
  { text: "Orders & Shipping", url: "/orders-shipping" },
  { text: "Join/Login as a Seller", url: "/join-seller" },
  { text: "Payment & Pricing", url: "/payment-pricing" },
  { text: "Return & Refunds", url: "/return-refunds" },
  { text: "FAQs", url: "/faqs" },
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Terms & Conditions", url: "/terms-conditions" },
];
const Footer = () => {
  return (
    <footer className="footer-section">
      <Container maxWidth="xl">
        <Grid container spacing={2} sx={{ borderBottom: "1px solid #FFFFFF" }}>
          <Grid item xl={6} lg={6} md={6} xs={12}>
            <Typography
              sx={{ textTransform: "capitalize", fontWeight: 700, mb: 3 }}
            >
              Be the first to know
            </Typography>
            <Typography>Sign up for updates from mettā muse.</Typography>
            <Box sx={{ mt: 5 }}>
              <form className="form-control">
                <input
                  type="email"
                  className="input-text"
                  placeholder="Enter your e-mail..."
                />
                <button className="btn-sub">Subscribe</button>
              </form>
            </Box>
          </Grid>
          <Grid item xl={5} lgOffset={1} lg={5} md={6}>
            <Box>
              <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}>
                CONTACT US
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: 400, mb: 1 }}>
                +44 221 133 5360
              </Typography>
              <Typography sx={{ fontSize: "16px", fontWeight: 400, mb: 3 }}>
                customercare@mettamuse.com
              </Typography>
              <Typography sx={{ fontSize: "20px", fontWeight: 700, mb: 2 }}>
                Currency
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  mb: 2,
                }}
              >
                <FlagIcon />
                <StartIcon />
                <Typography sx={{ fontSize: "16px", fontWeight: 700 }}>
                  USD
                </Typography>
              </Box>
              <Typography sx={{ fontSize: "12px", fontWeight: 400, mb: 2 }}>
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ py: 5 }}>
          <Grid item lg={3} md={3}>
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 3 }}>
                mettā muse
              </Typography>
              <ul>
                {links.map((link, index) => (
                  <li key={index} style={{ paddingBottom: "15px" }}>
                    <Link
                      to={link.url}
                      style={{
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "#FFF",
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item lg={3} md={3}>
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 3 }}>
                Quick Links
              </Typography>
              <ul>
                {quickLinks.map((link, i) => (
                  <li key={i} style={{ paddingBottom: "15px" }}>
                    <Link
                      to={link.url}
                      style={{
                        fontSize: "18px",
                        fontWeight: 400,
                        color: "#FFF",
                      }}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>
          </Grid>
          <Grid item lgOffset={1} lg={5} md={6}>
            <Box>
              <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 3 }}>
                Follow Us
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  mb: 3,
                }}
              >
                <Box className="icon-box">
                  <Link style={{ display: "inherit" }}>
                    <InstaIcon />
                  </Link>
                </Box>
                <Box className="icon-box">
                  <Link style={{ display: "inherit" }}>
                    <InIcon />
                  </Link>
                </Box>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "24px", fontWeight: 700, mb: 3 }}>
                  mettā muse Accepts
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                >
                  <GpayIcon />
                  <TworoundIcon />
                  <PayIcon/>
                  <AmexIcon />
                  <IpayIcon />
                  <OpayIcon />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography
              sx={{ textAlign: "center", fontSize: "14px", fontWeight: 400 }}
            >
              Copyright © 2023 mettamuse. All rights reserved.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
