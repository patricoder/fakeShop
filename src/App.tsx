import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        {/* place for other routes */}
      </Route>
    </Routes>
  );
}

export default App;
