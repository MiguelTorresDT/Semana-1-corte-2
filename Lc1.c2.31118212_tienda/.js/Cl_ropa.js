import articulo from "./Cl_articulo.js";

export default class ropa extends articulo{
    constructor(nombre, costo, color){
        super(nombre, costo);
        this.color = color;
    }

    porcDesc() {
        if (this.color === 3) {
            return 10/100;
        } 

        else {
            return 0;
        }
    }
    mostrar(){
        return `<tr>
        <td>${this.nombre}</td>
        </tr>`}
    
}