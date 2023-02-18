import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../../components/DeleteButton";
import { useNavigate } from "react-router-dom";
//import Products from "./Products";

const ProductDetalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(
        `${process.env.REACT_APP_API_URL}/product/${id}`
      );
      setProduct(respuesta.data);
    };

    getData();
  }, [id]);

  const quitarProduct = (productID) => {
    setProducts(products.filter((product) => product._id !== productID));
  };

  return (
    <div className="card">
      <div className="card-header">Titulo del producto</div>
      <div className="card-body">
        <h5 className="card-title">Nombre del producto: {product.title}</h5>
        <p className="card-text">
          El producto cuesta {product.price} y su descripcion es{" "}
          {product.description}
        </p>
        <Link className="btn btn-primary" to="/products">
          Volver
        </Link>
        <DeleteButton
          id_product={product._id}
          successCallback={quitarProduct}
        />
      </div>
    </div>
  );
};

export default ProductDetalle;
