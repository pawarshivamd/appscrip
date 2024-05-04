import React from "react";
import NewProductInfo from "./NewProductInfo";
import OutOfStockInfo from "./OutOfStockInfo";
import { Box, Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import { ReactComponent as HeartIcon } from "../../assets/img/icon/heart.svg";
import { ReactComponent as HeartFillIcon } from "../../assets/img/icon/hearthfill-icon.svg";
import { Link } from "react-router-dom";
const ProductCard = ({product}) => {
  return (
    <Card sx={{ border: "none", boxShadow: "none", width: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          image={product.img}
          alt="Product Image"
          sx={{ position: "relative", height: {md:400 ,xs:244 } }}
        />
        {product.newProduct && <NewProductInfo />}
        {product.OutOfStock && <OutOfStockInfo />}
      </CardActionArea>
      <Box sx={{ display: "flex", alignItems: "flex-end" }}>
        <Box
          sx={{
            width: "90%",
            flex: "1",
          }}
        >
          <Typography
            gutterBottom
            sx={{
              textOverflow: "ellipsis",
              fontSize: "1.125rem",
              fontWeight: 700,
              overflow: "hidden",
              textWrap: "nowrap",
              width: "80%",
            }}
          >
            {product.name}
          </Typography>
          <Typography className="text-secondary-color" variant="body2">
            <Link
              style={{ textDecoration: "underline" }}
              className="text-secondary-color"
            >
              Sign in
            </Link>{" "}
            or Create an account to see pricing
          </Typography>
        </Box>

        {/* Heart icon condition */}
        {true ? (
          <HeartIcon className="heart-icon" width={20} height={17} />
        ) : (
          <HeartFillIcon width={20} height={17} />
        )}
      </Box>
    </Card>
  );
};

export default ProductCard;
