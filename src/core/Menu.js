import React,{Fragment} from "react";
import { Link,withRouter } from "react-router-dom";
import { signout,isAuthenticated } from "../auth/helper";
import logo from "./logo.png";


const currentTab=(history,path)=>
{ 
        if(history.location.pathname === path)
        {
                return {color:'#6EC72D'};
        }else{
                return {color:'#12B0E8'};
        }
}


 const Menu = ({history})=> 
(
<div>
        <ul className="nav nav-tabs bg-dark ">
        <li className="nav-item">
                <Link className="navbar-brand " to="/">
                        <img src={logo} alt="brand-logo" width="40" height="40"/>
                </Link>
        </li>
        <li className="nav-item">
                <Link style={currentTab(history,"/")} className="nav-link " to="/">
                        Home
                </Link>
        </li>
        <li className="nav-item">
                <Link style={currentTab(history,"/cart")} className="nav-link " to="/cart">
                        Cart
                </Link>
        </li>
      {isAuthenticated() && isAuthenticated().user.role === 0 &&(
                <li className="nav-item">
                <Link style={currentTab(history,"/user/dashBoard")} className="nav-link " to="/user/dashBoard">
                        DashBoard
                </Link>
        </li>
      )  }
      {isAuthenticated() && isAuthenticated().user.role === 1 &&(
                <li className="nav-item">
                <Link style={currentTab(history,"/admin/dashBoard")} className="nav-link " to="/admin/dashBoard">
                       Admin DashBoard
                </Link>
        </li>
      )  }
  {!isAuthenticated() &&(
                <Fragment>
                <li className="nav-item">
                        <Link style={currentTab(history,"/signup")} className="nav-link " to="/signup">
                                SignUp
                        </Link>
                </li>
                
                <li className="nav-item">
                        <Link style={currentTab(history,"/signin")} className="nav-link " to="/signin">
                                SignIn
                        </Link>
                </li>
                </Fragment>
  )}
                {isAuthenticated() && (
                        <li className="nav-item">
                               <span
                               className="nav-link text-warning"
                               onClick={()=>{
                                        signout(()=>{
                                                history.push("/");
                                        })
                               }}>
                                       SignOut
                               </span>
                        </li>
                )}
        </ul>
</div>
)
 
 export default withRouter(Menu);