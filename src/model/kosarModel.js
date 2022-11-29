class kosarModel{
    #kosaram=[]
    #db
    #osszAr
    constructor(kosaram){
        this.#kosaram = kosaram;
        this.#db=0;
        this.#osszAr=0;
    }
    getKosaram(){
        return this.#kosaram;
    }
    setKosaram(adat){
        this.#kosaram.push(adat);
       // if(this.#kosaram.id)
        console.log(this.#kosaram);
    }
}
export default kosarModel;