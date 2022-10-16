import styled from "@emotion/styled";
import { Button, useMediaQuery } from "@mui/material";
import React from "react";
import Header from "../../headers";
import colors from "../../theme/colors";
import Nav from "./Nav";
import ProgressChart from "./ProgressChart";
import img1 from "./../../assets/Success-factors-amico.png"
import img2 from "./../../assets/coin.png"
import img3 from "./../../assets/Success-factors-bro.png"

const ShopDetails = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Header />
      <div className="mx-auto" style={{ maxWidth: "1400px" }}>
        <div className="bg-primary md:bg-white flex items-center justify-center">
          <div className="w-full mx-4">
            <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">
              Edit Shop Details
            </h1>
          </div>
        </div>
      </div>

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
        <div className="flex items-center justify-center">
          <ProgressChart />
        </div>


        <div className="mt-4">
        <SectionTitle>Current Tier</SectionTitle>
        <div>
          <div className="flex gap-2 justify-between">
            <img src={img1} alt="image1" className="w-3/12" />
            <div>
              <h1 className="font-bold text-2xl">Hello</h1>
              <p className="text-xs font-normal text-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={img2} className="w-12 sm:w-16" alt="" />
              <h1 className="text-3xl sm:text-5xl font-bold text-primary"> 1000 </h1>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-4">
        <SectionTitle>Next Tier</SectionTitle>
        <div>
          <div className="flex gap-2 justify-between">
            <img src={img3} alt="image1" className="w-3/12" />
            <div>
              <h1 className="font-bold text-2xl">Hello</h1>
              <p className="text-xs font-normal text-text2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <img src={img2} className="w-12 sm:w-16" alt="" />
              <h1 className="text-3xl sm:text-5xl font-bold text-primary"> 1000 </h1>
            </div>
          </div>
        </div>
        </div>

        <div className="mt-4">
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
