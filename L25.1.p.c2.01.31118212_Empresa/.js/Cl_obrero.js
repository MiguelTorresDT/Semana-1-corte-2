import personal from "./Cl_personal.js";

export default class obrero extends personal{
    constructor(nombre, edad, hijos){
        super(nombre, edad);
        this.hijos = hijos;
    }

    bono(){
        if (this.hijos <= 3)

            return 50;
    
        else if (this.hijos >=3)

            return 70;
        
        else 
        return 0;
    }

    suelFnal(){
        return this.sueldoBase() + this.bono()
    }
} 