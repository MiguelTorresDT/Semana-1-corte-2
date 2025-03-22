import articulo from "./Cl_articulo.js";

export default class ropa extends articulo{
    constructor(nombre, costo, color){
        super(nombre, costo);
        this.color = color;
    }

    porcDesc() {
        if (this.color === 3) {
            return this.precio() - (this.precio() * (10/100));
        } 

        else {
            return 0;
        }
    }
}