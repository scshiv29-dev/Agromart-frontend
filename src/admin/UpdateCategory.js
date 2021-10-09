import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory,getCategory,updateCategory } from "./helper/adminapicall";

const AddCategory = ({match}) => {
        const [name, setName] = useState('');
        const [error, setError] = useState(false);
        const [success, setSuccess] = useState(false);

        const {user,token}=isAuthenticated();

        const goBack = () => (
                <div className="mt-5">
                  <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
                    Admin Home
                  </Link>
                </div>
              );
              const handleChange = event => {
                setError("");
                setName(event.target.value);
              };
const preload=categoryId=>{
        getCategory(categoryId).then(data=>{
        
        if(data.error){
                setError(data.error);
        }else{
                setName(data.name);
        }
})
}
useEffect(()=>{
        preload(match.params.categoryId);
       
},[])
const onSubmit = event => {
        event.preventDefault();
        setError("");
        setSuccess(false);
    
        //backend request fired
        updateCategory(match.params.categoryId,user._id, token,{name}).then(data => {
          if (data.error) {
            setError(true);
          } else {
            setError("");
            setSuccess(true);
            setName("");
          }
        });
      };
      const successMessage = () => {
        if (success) {
          return <h4 className="text-success">Category Updated successfully</h4>;
        }
      };
    
      const warningMessage = () => {
        if (error) {
          return <h4 className="text-success">Failed to update category</h4>;
        }
      };
    
        const myCategoryForm=()=>{
                return(
<form>
        <div className="form-group">
        <p className="fw-bold text-dark">Enter New Name for theCategory</p>        
        <input type="text" className="formcontrol my-3"
        onChange={handleChange}
        value={name}
        autoFocus
        required
        placeholder="For Ex. Cereals" />
        
        <button onClick={onSubmit} className="bt btn-outline-info">Update Category</button>
        </div>
</form>
                )
        }
return(
       <Base title="Update Category" 
       description=""
       className="container bg-dark p-4">
        <div className="row bg-light rounded">
                <div className="col-md-8 offset-md-2">
                {successMessage()}
          {warningMessage()}
                {myCategoryForm()}
                {goBack()}
                </div>
        </div>

        </Base>
)

}

export default AddCategory;