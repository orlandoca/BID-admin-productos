import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteButton from "../../components/DeleteButton";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const respuesta = await axios.get(
        `${process.env.REACT_APP_API_URL}/product`
      );
      //console.log(respuesta.data);
      setProducts(respuesta.data);
    };

    getData();
  }, []);

  const quitarProduct = (productID) => {
    setProducts(products.filter((product) => product._id !== productID));
  };

  return (
    <>
      <h1>Listado de Productos</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Titulo </th>
            <th>Precio</th>
            <th>Descripction</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>
                <Link
                  className="btn btn-primary"
                  to={`/products/${product._id}`}
                >
                  Detalle
                </Link>
                <Link
                  className="btn btn-success ms-2"
                  to={`/products/${product._id}/editar`}
                >
                  Editar
                </Link>
                <DeleteButton
                  id_product={product._id}
                  successCallback={quitarProduct}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/products/agregar" className="btn btn-primary">
        Agregar Producto
      </Link>
    </>
  );
};

export default Products;
