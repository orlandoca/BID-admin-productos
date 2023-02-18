import React from "react";
import ProductForm from "../../components/ProductForm";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";

const ProductsAdd = () => {
  const initialValues = {
    title: "",
    price: "",
    description: "",
  };
  const navigate = useNavigate();

  const crearProduct = async (values, actions) => {
    try {
      const respuesta = await axios.post(
        `${process.env.REACT_APP_API_URL}/product`,
        values
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha agregado ${respuesta.data.title} perfectamente!`,
        });
        navigate("/products");
        actions.resetForm(initialValues);
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Ops que mal!!!",
        text: `Error: ${error?.response?.data?.message || error.message}`,
      });
    }
  };

  return (
    <>
      <h1>Agregar Producto</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4 col-sm-12 col-md-6">
          <ProductForm
            initialValues={initialValues}
            botonTexto="Agregar"
            onSubmit={crearProduct}
          />
        </div>
      </div>
    </>
  );
};

export default ProductsAdd;
