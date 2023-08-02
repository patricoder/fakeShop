import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Products />} />
        
        {/* place for other routes */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
