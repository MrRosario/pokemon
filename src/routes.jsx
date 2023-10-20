import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "pages/Home";
import MapPage from "pages/Map";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Router;
