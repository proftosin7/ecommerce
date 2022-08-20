import React from "react";
import { Typography, Button, Divider } from "@mui/material";
import Review from "./Review";

const PaymentForm = ({ checkoutToken }) => {
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <Divider />
      <Typography variant="h6" gutterBottom style={{ margin: "20px 0" }}>
        Payment Methods
      </Typography>
    </>
  );
};

export default PaymentForm;
