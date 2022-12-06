import './Kosar.css';

function Kosar(props){

    function kosarminusz(){
        props.kosarnemkezelFv(props.kosarObj.db);
        console.log(props.kosarObj);

    }

    function kosarplusz(){
        props.kosarnemkezelFv(props.kosarObj.db);
        console.log(props.kosarObj);
    }

    /**
     * ha már van az adott elem a kosárba, akkor a darabszámot növeljük 1-gyel
     * ha még nincs, akkor a darabszám az 1 legyen
     * 
     * + növeli a darabszámot
     * - csökkenti a darabszámot
     * törlés - törli a kosárból az elemet
     * 
     * HÁZI FELADAT LESZ BEFEJEZNI 
     */
    return(
        <tr>
        <td>{props.kosarObj.szerzo}</td>
        <td>{props.kosarObj.cim}</td>
        <td>{props.kosarObj.ar}</td>
        <td><button onClick={kosarminusz}>-</button></td>
        <td>{props.kosarObj.db}</td>
        <td><button onClick={kosarplusz}>+</button></td>
        <td><button>Törlés</button></td>
       
        </tr>
    );
}

export default Kosar;