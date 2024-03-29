import React, { useContext, useState } from "react";
import AdminContext from "../../../context/AdminContext";
import { imageDb } from "./ImageDb";
import {getDownloadURL, listAll, ref,uploadBytes} from "firebase/storage";
import {v4 } from "uuid"

const AddFoodModel = () => {
  const [image, setImage] = useState(null);
  const [newFood, setNewFood] = useState({
    name: "",
    category: "",
    description: "",
    price: null,
    type: "",
    imageUrl: "",
  });
  const { getFood,setAllFood,allFood } = useContext(AdminContext);
  const [loading,setLoading]=useState(false)

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };
  const handleOnChange = (e) => {
    setNewFood({ ...newFood, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async () => {
    setLoading(true)
      const imgRef=await ref(imageDb,`foodImage/${v4()}`)
     await uploadBytes(imgRef, image).then(() => {
        // Image upload successful, get its download URL
        getDownloadURL(imgRef).then(url => {
          console.log(url)
          setNewFood({ ...newFood, imageUrl: url });
        }).catch(error => {
          console.error("Error getting download URL:", error);
        });
      }).catch(error => {
        console.error("Error uploading image:", error);
      });
      setLoading(false)
      setImage(null)
      getFood()
  };
  
  const addFood = async () => {
    const response = await fetch(`http://localhost:8080/food/addfood`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFood),
    });
    const data = await response.json();
    console.log(data);
    setAllFood(allFood.concat(data));
    document.getElementById("closeButton").click();
  };
  
  const handleAddFood = async (e) => {
    e.preventDefault();
    await addFood(); // Upload the image before adding food
    setNewFood({
      name: "",
      category: "",
      description: "",
      price: null,
      type: "",
      imageUrl: "",
    });
    setImage(null);
  };
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add Food
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <form onSubmit={handleAddFood}>
                  <label htmlFor="foodName" className="col-form-label">
                    Food Name:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="foodName"
                    name="name"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="description" className="col-form-label">
                    Food Description:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="description"
                    name="description"
                    onChange={handleOnChange}
                  />
                  <label htmlFor="price" className="col-form-label">
                    Price:
                  </label>
                  <input
                    required
                    type="text"
                    className="form-control"
                    id="price"
                    name="price"
                    onChange={handleOnChange}
                  />
                  <div>
                    <label className="col-form-label">Type:</label>
                    <br />
                    <select
                      className="w-50 form-select form-select-lg mb-3"
                      aria-label=".form-select-lg example"
                      name="type"
                      required
                      onChange={handleOnChange}
                    >
                      <option value="" disabled selected>
                        select Type
                      </option>
                      <option value="snackes">Snackes</option>
                      <option value="beverages">Beverages</option>
                      <option value="popcorn">Popcorn</option>
                      <option value="combos">Combos</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="col-form-label">Category:</label>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        id="veg"
                        value="vegetarian"
                        name="category"
                        onChange={handleOnChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="veg">
                        Vegetarian
                      </label>
                      <br />
                      <input
                        className="form-check-input"
                        type="radio"
                        id="non-veg"
                        value="non-vegetarian"
                        name="category"
                        onChange={handleOnChange}
                        required
                      />
                      <label className="form-check-label" htmlFor="non-veg">
                        Non-Vegetarian
                      </label>
                    </div>
                  </div>
                  <label className="form-check-label" htmlFor="veg">
                        Food Image
                      </label>
                  <input required type="file" onChange={handleImageChange} />

                  <button type="button" onClick={handleImageUpload}>
                    {loading?"loading":"upload"}</button>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      id="closeButton"
                    >
                      Close
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFoodModel;
