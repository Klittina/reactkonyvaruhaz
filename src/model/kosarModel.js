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

    getDb(){
        return this.#db;
    }
    getosszAr(){
        return this.#osszAr;
    }

    setKosaram(adat){

        //const [myArray, updateMyArray] = useState([]);

        var idhelye=0;
        if (this.#kosaram.length===0) {
            this.#kosaram.push(adat);
        }else{
            for (let index = 0; index < this.#kosaram.length; index++) {
                if (this.#kosaram[index].id === adat.id) {
                    idhelye = this.#kosaram[index].id;
                }
            }
            if (idhelye===0) {
                this.#kosaram.push(adat);
            }else{
                console.log(idhelye);
                console.log(this.#kosaram);
                this.#kosaram[idhelye].db =+1;
                //updateMyArray( arr => [...arr, `${arr.length}`]);
                
            }
        }


        /*
        console.log(idhelye);
        if (idhelye===0){
            this.#kosaram.push(adat);
        }else{
            this.#kosaram[idhelye]. =+1;
        }
 /*
        if (this.#kosaram.id === adat.id) {
            //megnéztük hogy adott id-jű termék benne van-e már a kosárban
            this.#kosaram.indexOf(adat.id);
            

        }else{
            console.log(this.#kosaram.id);
            console.log(adat.id);
            console.log(this.#kosaram);
            //nem látja a this.#kosaram id-jét, undefined
            //valszeg mert lista, és megkell adni h a lista melyik elemén BELÜL kell az id
            this.#kosaram.push(adat);
        }
        /**
         * adat.id === this.#kosaram.id
         * ha megegyezik akkor this.#kosaram[x].db+=1
         * 
         * this.#kosaram.findIndex(fug1)
         * fug(elem) {return elem.id == adat.id}
         * 
         * ha nem akkor push
         * 
         * dupla belső függvény, szopo de whileal is működőképes lehet, ha egyáltalán el tudna ez fos indulni
         * 
         */
       // this.#kosaram.push(adat);
       // if(this.#kosaram.id)
        //console.log(this.#kosaram);
    }
}
export default kosarModel;