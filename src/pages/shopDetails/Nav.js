import styled from "@emotion/styled";
import { Button, useMediaQuery } from "@mui/material";
import React from "react";

const Nav = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        paddingBottom: "12px",
      }}
    >
      <ShopTitle>Jade Blue</ShopTitle>
      {greaterThan600 && (
        <Button variant="contained" color="primary">
          Pay
        </Button>
      )}
    </div>
  );
};

const ShopTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  margin: 0;
  padding: 0;
`;
export default Nav;
