import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <Card
      sx={{
        maxWidth: "100%",
        borderRadius: 3,
      }}
    >
      <CardMedia
        image={item.image.url}
        alt={item.name}
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
        <Typography variant="h4" gutterBottom sx={{ textAlign: "left" }}>
          {item.name}
        </Typography>
        <Typography variant="h5" sx={{ mr: 0, textAlign: "right" }}>
          {item.line_total.formatted_with_symbol}
        </Typography>{" "}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <div>
          <Button
            type="button"
            onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="button"
            onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
          >
            +
          </Button>
        </div>
        <Button
          type="button"
          color="secondary"
          onClick={() => onRemoveFromCart(item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
