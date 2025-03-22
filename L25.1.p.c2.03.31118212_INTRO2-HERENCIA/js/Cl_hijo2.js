import padre from "./Cl_padre"

export default class hijo2 extends padre{
    constructor(atribA, atrib2){
        super(atribA);
        this.atrib2 = atrib2;
    }

    set atrib2 (atrib2){
        this._atrib2 = atrib2;
    }
    get atrib2(){
        return this._atrib2;
    }

    metodoCalculoHj2(){
        this.atribA + this._atrib2;
    }

}