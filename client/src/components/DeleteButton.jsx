import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const DeleteButton = ({ id_product, successCallback }) => {
  const navigate = useNavigate();
  const eliminarProduct = async (productID) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/product/${productID}`
      );
      successCallback(productID);
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Ops que mal!!!",
        text: `Error: ${error?.response?.data?.message || error.message}`,
      });
    }
  };

  const confirmarEliminar = (productID) => {
    Swal.fire({
      title: "Estas seguro de eliminar?",
      text: "No podrás arrepentirte!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI, eliminalo ahora!",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProduct(productID);
      }
      navigate("/products");
    });
  };

  return (
    <button
      className="btn btn-danger ms-2"
      onClick={() => {
        confirmarEliminar(id_product);
      }}
    >
      Eliminar
    </button>
  );
};

export default DeleteButton;
