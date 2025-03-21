import articulo from "./Cl_articulo.js";

export default class viveres extends articulo{
    constructor(nombre, costo, basico){
        
        super(nombre, costo);
        this.basico =basico;

    }

    porcGanancia(){
        if (this.basico)

        return 5/100;

        else 
        
        return this.porcInc();

        }
        mostrar(){
            return `<tr>
            <td>${this.nombre}</td>
            </tr>`}
}