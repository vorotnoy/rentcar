import { Navigate, Route, Routes } from "react-router-dom";
import { FavoritePage } from "./page/FavoritePage/Favorite";
import { HomePage } from "./page/HomePage/Home";
import { SharedLayout } from "./components/ShearedLayout/ShearedLayout";
import { Catalog } from "./page/CatalogPage/Catalog";
import { Loader } from "./components/LoaderScreen/LoaderScreen";

function App() {
  return (
    <>
      <Loader/>
      <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
