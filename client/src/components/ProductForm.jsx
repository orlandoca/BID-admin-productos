import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const ProductsErrores = Yup.object().shape({
  title: Yup.string()
    .min(5, "El titulo debe tener como minimo 5 caracteres")
    .max(70, "No puede ser muy largo el nombre.")
    .required("Requerido"),
  price: Yup.number()
    .required("El precio es requerido.")
    .integer("Debe ser numero entero")
    .positive("No puede ser negativo"),
  description: Yup.string()
    .required("Se necesita la descripcion si o si.")
    .max(100, "No puede ser muy largo el nombre."),
});

const ProductForm = ({ initialValues, botonTexto, onSubmit }) => {
  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={ProductsErrores}
    >
      {({ errors, touched, isValid, dirty }) => (
        <Form>
          <Field name="title" className="form-control" placeholder="title" />
          {touched.title && errors.title && (
            <div className="ms-3 mt-1 text-danger">{errors.title}</div>
          )}
          <Field
            name="description"
            className="form-control mt-2"
            placeholder="description del producto"
          />
          {touched.price && errors.price && (
            <div className="ms-3 mt-1 text-danger">{errors.description}</div>
          )}
          <Field
            name="price"
            type="number"
            className="form-control mt-2"
            placeholder="price"
          />
          {touched.price && errors.price && (
            <div className="ms-3 mt-1 text-danger">{errors.price}</div>
          )}
          <button
            className="btn btn-primary mt-5"
            disabled={!(isValid && dirty)}
          >
            {botonTexto} Producto
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ProductForm;
