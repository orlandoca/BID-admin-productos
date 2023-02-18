const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api", ProductController.index);
  app.post("/api/product", ProductController.createProduct); //TRAE PRODUCTOS
  app.get("/api/product", ProductController.getAllProduct); //TRAE TODOS
  app.get("/api/product/:id", ProductController.getProduct); //TRAE EL ID
  app.put("/api/product/:id", ProductController.updateProduct); //ACTUALIZA
  app.delete("/api/product/:id", ProductController.deleteProduct); //ELIMINA
};
