import React, { useContext, useEffect, useState } from "react";
import AdminContext from "../../context/AdminContext";

const OwnerModel = () => {
    const [ownerData, setOwnerData] = useState({ ownerName: "", email: "", password: "" });
  const { allOwner ,setAllOwner}=useContext(AdminContext)
    // Function to generate a random strong password
    const generatePassword = () => {
        const length = 10; // Define the length of the password
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Define characters to be used in the password
        let password = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }
        return password;
    };

    useEffect(()=>{
        const newPassword = generatePassword();

        // Update the state with the new password
        setOwnerData({ ...ownerData, password: newPassword });
    },[])
    const handleSubmit =async (event) => {
        console.log(ownerData)
        event.preventDefault(); // Prevent default form submission
        const response = await fetch(`http://localhost:8080/owner/addowner`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(ownerData),
          });
          const data = await response.json();
          setAllOwner(allOwner.concat(data));
          document.getElementById("closeButton").click();
        
        console.log("Form Data:", ownerData);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setOwnerData({ ...ownerData, [name]: value });
    };

    return (
        <div>
            <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Add Owner</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Owner Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter name"
                                        name="ownerName"
                                        value={ownerData.userName}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Enter email"
                                        name="email"
                                        value={ownerData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                        <div className="modal-footer">
                            <button type="button" id="closeButton" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save changes</button>
                        </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerModel;
