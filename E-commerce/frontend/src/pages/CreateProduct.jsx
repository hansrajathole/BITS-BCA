import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState(null);
  const [category, setcategory] = useState("");

  const [error, seterror] = useState("");
  let token = localStorage.getItem("token")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/product/create", {
        title,
        image,
        description,
        price,
        category
      }, {
        headers :{
            authorization : `bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        settitle("")
        setimage("")
        setdescription("")
        setcategory("")
        setprice(null)
        seterror("")
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
        seterror(error.response.data.message);
      });
  };

  return (
    <div className="h-[89vh] w-full flex justify-center items-center">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="border p-5 rounded-2xl"
      >
        <h1 className="text-center font-semibold text-2xl">create product</h1>
        <br />
        <label htmlFor="title">Title :</label>
        <input
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          id="title"
          type="text"
          className="border w-full"
        />
        <br />
        <br />
        <label htmlFor="image">Image :</label>
        <input
          value={image}
          onChange={(e) => {
            setimage(e.target.value);
          }}
          id="image"
          type="text"
          className="border w-full"
        />
        <br />
        <br />
        <label htmlFor="price">Price :</label>
        <br />
        <input
          value={price}
          onChange={(e) => {
            setprice(e.target.value);
          }}
          id="price"
          type="number"
          className="border w-full"
        />

        <br />
        <br />
        <label htmlFor="category">Category :</label>
        <input
          value={category}
          onChange={(e) => {
            setcategory(e.target.value);
          }}
          id="category"
          type="text"
          className="border w-full"
        />
        <br />
        <br />
        <label htmlFor="description">Description :</label>
        <input
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          id="description"
          type="text"
          className="border w-full"
        />
        <br />
        <br />
        <div className="flex justify-center">
          <button className="bg-blue-400 px-3 py-1 font-semibold text-white rounded">
            Submit
          </button>
        </div>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default CreateProduct;
