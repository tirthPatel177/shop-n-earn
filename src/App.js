import "./App.css";
import { PublicRoute } from "./routes/PublicRoute";
import React from "react";
import { Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { setToast } from "./redux/slices/toastSlice";
import { useDispatch, useSelector } from "react-redux";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function App() {
  const toast = useSelector((state) => state.toast.toast);
  const dispatch = useDispatch();

  const handleClickSnackbar = () => {
    dispatch(
      setToast({
        ...toast,
        status: true,
      })
    );
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    dispatch(
      setToast({
        ...toast,
        status: false,
      })
    );
  };
  return (
    <>
      <div>
        <PublicRoute />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={toast.status}
          onClose={handleCloseSnackbar}
          autoHideDuration={6000}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={toast.type}
            sx={{ width: "100%" }}
          >
            {toast.message}
          </Alert>
        </Snackbar>
      </div>
    </>
  );
}

export default App;
