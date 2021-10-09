import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AdminRoute from "./auth/helper/AdminRoutes";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import AdminDashBoard from "./user/AdminDashBoard";
import UserDashBoard from "./user/UserDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCategories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";
import EditUser from "./user/EditUser"
import UserOrders from "./user/UserOrders";
import ManageOrders from "./admin/ManageOrders";
import ViewOrder from "./admin/ViewOrder";


const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/signin" exact component={Signin} />
          <PrivateRoute
            path="/user/dashboard"
            exact
            component={UserDashBoard}
          />
            <PrivateRoute
            path="/user/:userId"
            exact
            component={EditUser}
          />
            <PrivateRoute
            path="/user/orders/:userId"
            exact
            component={UserOrders}
          />
          <Route path="/cart" exact component={Cart} />
          <AdminRoute
            path="/admin/dashboard"
            exact
            component={AdminDashBoard}
          />
          <AdminRoute
            path="/admin/create/category"
            exact
            component={AddCategory}
          />
          <AdminRoute
            path="/admin/categories"
            exact
            component={ManageCategories}
          />

          <AdminRoute
            path="/admin/create/product"
            exact
            component={AddProduct}
          />
          <AdminRoute path="/admin/products" exact component={ManageProducts} />
          <AdminRoute path="/admin/orders" exact component={ManageOrders} />
          <AdminRoute
            path="/admin/product/update/:productId"
            exact
            component={UpdateProduct}
          />
          <AdminRoute
            path="/admin/category/update/:categoryId"
            exact
            component={UpdateCategory}
          />
                <AdminRoute
            path="/admin/view/order/:orderId"
            exact
            component={ViewOrder}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Routes;
