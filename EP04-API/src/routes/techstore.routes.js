import { Router } from "express";
import { methods as productoController } from "../controllers/producto";
import { methods as ordenController } from "../controllers/orden";
import { methods as clienteController } from "../controllers/cliente";
import { methods as categoriaController } from "../controllers/categoria";

const router = Router();

// Rutas

router.get("/api/productos", productoController.getProductos);
router.get("/api/producto", productoController.getProducto);
router.post("/api/producto", productoController.addProducto);
router.put("/api/producto", productoController.updateProducto);
router.delete("/api/producto", productoController.delProducto);

// EJEMPLO DE ADDPRODUCTO MEDIANTE POSTMAN - JSON
/*
 {
    "nombre": "Smart TV Sony Bravia X80K 4K HDR",
    "descripcion": "Smart TV 4K HDR con pantalla LED de 55 pulgadas, procesador Cognitive Processor XR y sistema operativo Google TV.",
    "precio": 899.99,
    "stock": 5,
    "categoria_id": 5
}
*/

router.get("/api/clientes", clienteController.getClientes);
router.get("/api/cliente", clienteController.getCliente);
router.post("/api/cliente", clienteController.addCliente);
router.put("/api/cliente", clienteController.updateCliente);
router.delete("/api/cliente", clienteController.delCliente);

// EJEMPLO DE ADDCLIENTE MEDIANTE POSTMAN - JSON
/*
{
    "nombre": "Pedro López",
    "email": "pedro.lopez@correo.com",
    "telefono": "963210543",
    "direccion": "Jr. Ica 789, Surquillo, Lima"
}
*/

router.get("/api/categorias", categoriaController.getCategorias);
router.post("/api/categoria", categoriaController.addCategoria);
router.put("/api/categoria", categoriaController.updateCategoria);
router.delete("/api/categoria", categoriaController.delCategoria);

// EJEMPLO DE ADDCATEGORIA MEDIANTE POSTMAN - JSON
/*
{
    "nombre": "Computadoras",
    "descripcion": "Esta categoría incluye laptops, desktops, workstations y all-in-one. Se pueden encontrar equipos para diversos usos, como trabajo, estudio, entretenimiento y videojuegos."
}
*/

router.get("/api/orden", ordenController.getOrden);
router.post("/api/orden", ordenController.addOrden);
router.put("/api/orden", ordenController.updateEstadoOrden);
router.delete("/api/orden", ordenController.delOrden);

// EJEMPLO DE ADDORDEN MEDIANTE POSTMAN - JSON
/*
{
  "cliente_id": 2,
  "productos": [
    {
      "producto_id": 1,
      "cantidad": 1
    },
    {
      "producto_id": 4,
      "cantidad": 2
    },
    {
      "producto_id": 5,
      "cantidad": 1
    }
  ],
  "estado": "PENDIENTE"
}
*/

export default router;
