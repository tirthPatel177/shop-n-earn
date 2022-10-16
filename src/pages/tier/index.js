import { Check, CheckBox } from "@mui/icons-material";
import {
  Button,
  Checkbox,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  TextareaAutosize,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { createTier } from "../../apis/auth";
import Header from "../../headers";
import colors from "../../theme/colors";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Tier = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  const [personName, setPersonName] = React.useState([]);
  const user = useSelector(state => state.user?.userDetails);
  useEffect(() => {
    console.log(user)
  }, [user])

  const [tier, setTier] = useState({
    name: "",
    description: "",
    level: 0,
    minValue: 0,
    maxValue: 0,
    amountToCoinRatio: 0,
    coinToAmountRatio: 0
  });

  const handleSubmit = async () => {
      const result = await createTier({
          ...tier,
          shopId: user._id
      })
      if(result){
          console.log(result);
      }
  }

  return (
    <>
      <Header />
      <div className="mx-auto" style={{ maxWidth: "1400px" }}>
        <div className="bg-primary md:bg-white flex items-center justify-center">
          <div className="w-full mx-4">
            <h1 className="text-xl md:text-3xl font-bold mt-0 pb-6">
              Add Tier
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
        <form
          style={{
            maxWidth: "500px",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            margin: greaterThan600 ? "0 auto" : "0",
          }}
          T
        >
          <div>
            <InputLabel
              sizeSmall
              htmlFor="name-input"
              required
              sx={{
                color: "black",
              }}
            >
              Name
            </InputLabel>
            <TextField
              required
              id="name-input"
              placeholder="Enter your name"
              sx={{
                width: "100%",
                mt: 1,
              }}
              value={tier.name}
              onChange = {(e) => setTier({ ...tier, name: e.target.value })}
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="description-input"
              required
              sx={{
                color: "black",
              }}
            >
              Description
            </InputLabel>
            <TextField
              required
              id="description-input"
              placeholder="Enter your UPI ID"
              sx={{
                width: "100%",
                mt: 1,
              }}
              value={tier.description}
              onChange = {(e) => setTier({ ...tier, description: e.target.value })}
              multiline
              rows={4}
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="level-input"
              required
              sx={{
                color: "black",
              }}
            >
              Level
            </InputLabel>
            <TextField
              required
              id="level-input"
              placeholder="Enter level"
              sx={{
                width: "100%",
                mt: 1,
              }}
              type="number"
              value={tier.level}
              onChange = {(e) => setTier({ ...tier, level: e.target.value })}
            />
          </div>

          <div>
            <InputLabel
              sizeSmall
              htmlFor="minValue-input"
              required
              sx={{
                color: "black",
              }}
            >
                Min Value
            </InputLabel>
            <TextField
              required
              id="minValue-input"
              placeholder="Enter level"
              sx={{
                width: "100%",
                mt: 1,
              }}
              type="number"
              value={tier.minValue}
              onChange = {(e) => setTier({ ...tier, minValue: e.target.value })}
            />
          </div>

          <div>
            <InputLabel
              sizeSmall
              htmlFor="maxValue-input"
              required
              sx={{
                color: "black",
              }}
            >
              Max Value
            </InputLabel>
            <TextField
              required
              id="maxValue-input"
              placeholder="Enter level"
              sx={{
                width: "100%",
                mt: 1,
              }}
              type="number"
              value={tier.maxValue}
              onChange = {(e) => setTier({ ...tier, maxValue: e.target.value })}
            />
          </div>

          <div>
            <InputLabel
              sizeSmall
              htmlFor="amountToCoinRatio-input"
              required
              sx={{
                color: "black",
              }}
            >
              Amount to Coin Ratio
            </InputLabel>
            <TextField
              required
              id="amountToCoinRatio-input"
              placeholder="Enter level"
              sx={{
                width: "100%",
                mt: 1,
              }}
              type="number"
              value={tier.amountToCoinRatio}
              onChange = {(e) => setTier({ ...tier, amountToCoinRatio: e.target.value })}
            />
          </div>

          <div>
            <InputLabel
              sizeSmall
              htmlFor="coinToAmountRatio-input"
              required
              sx={{
                color: "black",
              }}
            >
              Coin to Amount Ratio
            </InputLabel>
            <TextField
              required
              id="coinToAmountRatio-input"
              placeholder="Enter level"
              sx={{
                width: "100%",
                mt: 1,
              }}
              type="number"
              value={tier.coinToAmountRatio}
              onChange = {(e) => setTier({ ...tier, coinToAmountRatio: e.target.value })}
            />
          </div>

          
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleSubmit}>
            Save
          </Button>
        </form>
      </div>
    </>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default Tier;
