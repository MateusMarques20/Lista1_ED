class Funcao{

    constructor(num, den){
        this.num = num;
        this.den = den;
    }

    multi(f){
        let num = this.num * f.num;
        let den = this.den * f.den;
        let respo = new F(num, den);
        return respo;
    }

    div(f){
        let num = this.num * f.den;
        let den = this.den * f.num; 
        let respo = new F(num, den);
        return respo;
    }
}

export default Fracao;