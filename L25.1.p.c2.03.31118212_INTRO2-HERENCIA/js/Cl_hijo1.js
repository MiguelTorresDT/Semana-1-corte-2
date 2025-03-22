import padre from "./Cl_padre"

export default class hijo1 extends padre{
    constructor(atribA, atrib1){
        super(atribA);
        this.atrib1 = atrib1;
    }

    set atrib1 (atrib1){
        this._atrib1 = atrib1;
    }
    get atrib1(){
        return this._atrib1;
    }

    metodoCalculoHj1(){
        this.atribA * this._atrib1;
    }

}