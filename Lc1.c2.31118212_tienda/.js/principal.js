/*Una tienda planea incrementar el 20% del costo para establecer el precio de venta de sus 
artículos (1=ropa, 2=víveres), conociendo su nombre y costo. Para la ropa de color rojo 
(1=blanco, 2=azul, 3=rojo) otorgará un 10% de descuento. Los víveres no tienen 
descuento, pero si es un producto básico, sólo aplicará un 5% del costo para la ganancia
*/

import ropa from "./Cl_ropa.js";
import viveres from "./Cl_viveres.js";


let leche = new viveres("Leche",  10, "SI" );
let camisa = new ropa("Camisa",  20,  2 );
let short = new ropa("Short", 20,  3 );
let toddy = new viveres("Toddy",  30,  "NO" );
let blusa = new ropa("Blusa",  40,  3 );
