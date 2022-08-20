import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";
import { alpha } from "@mui/material/styles";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import classes from "./product.module.css";
// import useStyles from "./styles.js";
const Product = ({ product, onAddToCart }) => {
  //   const classes = useStyles();
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 3,
      }}
    >
      <CardMedia
        image={product.image.url}
        title={product.name}
        sx={{
          height: 100,
          paddingTop: "56.25%",
          objectFit: "contain",
        }}
      />
      <CardContent
        component="div"
        sx={{
          display: "grid",
          gridTemplateColumns: "3fr 2fr",
        }}
      >
        <Typography variant="h5" gutterBottom sx={{ textAlign: "left" }}>
          {product.name}
        </Typography>
        <Typography variant="h5" sx={{ mr: 0, textAlign: "right" }}>
          {product.price.formatted_with_symbol}
        </Typography>{" "}
        <Typography
          variant="body2"
          sx={{ textAlign: "left" }}
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions
        disableSpacing
        className={classes.cardActions}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
