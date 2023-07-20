import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>strona główna</>} />
        {/* place for other routes */}
      </Route>
    </Routes>
  );
}

export default App;
