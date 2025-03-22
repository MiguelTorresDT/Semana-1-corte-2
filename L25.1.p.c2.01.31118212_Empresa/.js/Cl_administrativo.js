import personal from "./Cl_personal.js";
export default class administrativo extends personal {
    constructor(nombre, edad, nvelEstudio ){
        super(nombre, edad);
        this.nvelEstudio = nvelEstudio;
    }

    incentivo() {
        switch (this.nvelEstudio) {
            case 1: {
                if (this.edad >= 18)
                    return 50;
                else return 0
            };
                break;
            case 2: {
                if (this.edad >= 18)
                    return 100
                else return 0
            };
                break;
            case 3: {
                if (this.edad >= 18)
                    return 100
                else return 0
            };
                break;
            default:
                0
        }
    }
    suelFnal(){
        return this.sueldoBase() +this.incentivo()
    }
    
}