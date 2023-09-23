import { Route, Routes } from "react-router-dom";
import Cart from "../Cart";
import LandingPage from "../pages/step1/pages/LandingPage";
import OrderSuccessfull from "../pages/step1/pages/OrderSuccessfull";
import PaymentForm from "../pages/step1/pages/PaymentForm";
import Coach from "../pages/step3/pages/Coach";
import ProductPage from "../pages/step3/pages/Product Page";
import SingleProductPage from "../pages/step3/pages/SingleProductPage";
import UserDashboard from "../pages/step3/pages/UserDashboard";
import Login from "../pages/step2/pages/Login";
import SignUp from "../pages/step2/pages/SignUp";
import Plans from "../pages/step4/pages/Plans";
import SinglePlanPage from "../pages/step4/pages/SinglePlanPage";
import AdminDashbord from "../pages/step5/pages/AdminDashbord";
import AddProduct from "../pages/step5/pages/nestedPages/AddProduct";
import AllUsers from "../pages/step5/pages/nestedPages/AllUsers";
import Dashborad from "../pages/step5/pages/nestedPages/Dashborad";
import AdminPrivateAuth from "./AdminPrivateRoute";
import PrivateRoute from "./PrivateRoute";


const AllRoutes = () => {
    return (
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/coach" element={<Coach />} />

          <Route path="/plans" element={<Plans />} />
          <Route path="/plans/:plan" element={<SinglePlanPage />} />

          <Route path="/products" element={<ProductPage />} />
          <Route path="/products/:id" element={<SingleProductPage />} />

          <Route
          path="/checkout/payment"
          element={
            <PrivateRoute>
              <PaymentForm />
            </PrivateRoute>
          }
        />

        <Route
          path="/OrderSuccessfull"
          element={
            <PrivateRoute>
              <OrderSuccessfull />
            </PrivateRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />




          <Route path="/user-profile" element={<UserDashboard />} />


{/*////////////////////////////////////////////////////*/}


          <Route path="/admin" element={<AdminDashbord />} >

               
                <Route
                  index
                  element={
                    <AdminPrivateAuth>
                      <Dashborad />{" "}
                    </AdminPrivateAuth>
                  }
                />
                <Route
                  exact
                  path="dashboard"
                  element={
                    <AdminPrivateAuth>
                      <Dashborad />{" "}
                    </AdminPrivateAuth>
                  }
                />

                <Route
                  exact
                  path="add-product"
                  element={
                    <AdminPrivateAuth>
                      <AddProduct />{" "}
                    </AdminPrivateAuth>
                  }
                />
                <Route
                  exact
                  path="all-users"
                  element={
                    <AdminPrivateAuth>
                      <AllUsers />{" "}
                    </AdminPrivateAuth>
                  }
                />

          </Route>
       
        </Routes>
      </div>
    );
  };
  
  export default AllRoutes;
  