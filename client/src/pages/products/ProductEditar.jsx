import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import axios from "axios";
import Swal from "sweetalert2";

const ProductEditar = () => {
  const navigate = useNavigate();

  const initialValues = {
    title: "",
    price: "",
    description: "",
  };

  const { id } = useParams();
  const [product, setProduct] = useState(initialValues);

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/${id}`
      );
      setProduct(respuesta.data);
    };

    getData();
  }, [id]);

  const actualizarProduct = async (values, actions) => {
    try {
      const respuesta = await axios.put(
        `${process.env.REACT_APP_API_URL}/product/${id}`,
        values
      );
      console.log(respuesta);
      if (respuesta.status === 200) {
        Swal.fire({
          icon: "success",
          title: "GENIAL!!!",
          text: `Se ha actualizado ${respuesta.data.title} perfectamente!`,
        });

        navigate("/products");
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
      <h1>Editar Producto</h1>
      <hr />
      <div className="row">
        <div className="col-lg-4 col-sm-12 col-md-6">
          <ProductForm
            initialValues={product}
            botonTexto="Actualizar"
            onSubmit={actualizarProduct}
          />
        </div>
      </div>
    </>
  );
};

export default ProductEditar;
