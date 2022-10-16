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
import React, { useRef } from "react";
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

const EditShopDetails = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  const [personName, setPersonName] = React.useState([]);
  const fileUploadRef = useRef(null);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

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
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="upi-input"
              required
              sx={{
                color: "black",
              }}
            >
              UPI ID
            </InputLabel>
            <TextField
              required
              id="upi-input"
              placeholder="Enter your UPI ID"
              sx={{
                width: "100%",
                mt: 1,
              }}
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="phone-input"
              required
              sx={{
                color: "black",
              }}
            >
              Phone Number
            </InputLabel>
            <TextField
              required
              id="phone-input"
              placeholder="Enter your Phone Number"
              sx={{
                width: "100%",
                mt: 1,
              }}
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="phone-input"
              required
              sx={{
                color: "black",
              }}
            >
              Upload Image of your Shop
            </InputLabel>
            <input
              type="file"
              required
              style={{
                display: "none",
              }}
              accept="image/*"
              ref={fileUploadRef}
            />
            <Button
              variant="outlined"
              color="primary"
              sx={{
                width: "100%",
                mt: 1,
                py: 1.5,
              }}
              onClick={() => {
                fileUploadRef.current.click();
              }}
            >
              Upload
            </Button>
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="city-input"
              required
              sx={{
                color: "black",
              }}
            >
              City
            </InputLabel>
            <TextField
              required
              id="city-input"
              placeholder="Enter your city"
              sx={{
                width: "100%",
                mt: 1,
              }}
            />
          </div>
          <div>
            <InputLabel
              sizeSmall
              htmlFor="city-input"
              required
              sx={{
                color: "black",
              }}
            >
              Select category of products your Business shell
            </InputLabel>
            <Select
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              style={{
                width: "100%",
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </div>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
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

export default EditShopDetails;
