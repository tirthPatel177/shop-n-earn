import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";


function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route exact path="/" element={<Navigate to="/" />} /> */}
        <Route exact path="/create" element={<CreatePoll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;