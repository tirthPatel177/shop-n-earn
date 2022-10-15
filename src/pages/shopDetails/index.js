import styled from "@emotion/styled";
import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import colors from "../../theme/colors";
import Nav from "./Nav";
import ProgressChart from "./ProgressChart";
import Tier from "./Tier";

const ShopDetails = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  return (
    <>
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px",
          paddingBottom: "50px",
        }}
      >
        <Nav />
        <SectionTitle>
          Reward Tokens: <span>0</span> Tokens
        </SectionTitle>
        <div>
          <ProgressChart />
        </div>
        <SectionTitle>Current Tier</SectionTitle>
        <div>
          <Tier />
        </div>
        <SectionTitle>Next Tier</SectionTitle>
        <div>
          <Tier />
        </div>
        <SectionTitle>Offers</SectionTitle>
        <div>
          {[
            "Offer 1",
            "Offer 2",
            "Offer 3",
            "Offer 1",
            "Offer 2",
            "Offer 3",
         
            "Offer 2",
            "Offer 3",
          ].map((offer) => {
            return <div>{offer}</div>;
          })}
        </div>
      </div>
      {!greaterThan600 && (
        <Button
          variant="contained"
          color="primary"
          style={{ width: "100%" }}
          sx={{
            position: "fixed",
            bottom: "0",
          }}
        >
          Pay
        </Button>
      )}
    </>
  );
};

const SectionTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  padding: 0;
  margin-bottom: 12px;
  color: ${colors.primary};
`;

export default ShopDetails;
