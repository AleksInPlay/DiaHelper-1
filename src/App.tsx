import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Layout from "components/Layout/Layout";
import LoginSignUpPage from "pages/Login-SignUpPage/LoginSignUpPage";
import UserPage from "pages/UserPage/UserPage";
import HomePage from "pages/HomePage/HomePage";
import ProductPage from "pages/ProductPage/ProductPage";




function App() {

  return (
    <BrowserRouter>
      <GlobalStyles />
     <Layout>
     <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/login" element={<LoginSignUpPage />} />
          <Route path="/user" element={<UserPage />} />

          <Route path="*" element="Page Not Found" />
        </Routes>
     </Layout>
    
    </BrowserRouter>
  );
}

export default App;
