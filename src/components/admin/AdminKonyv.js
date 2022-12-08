import './AdminKonyv.css';

function AdminKonyv(props){

    function adatszerkeszt(props){
        console.log(props.adminkonyvekObj);
    }

    function adattorol(props){
        console.log(props.adminkonyvekObj);
    }

    return(
        <tr>
        <td>{props.adminkonyvekObj.id}</td>
        <td>{props.adminkonyvekObj.szerzo}</td>
        <td>{props.adminkonyvekObj.cim}</td>
        <td>{props.adminkonyvekObj.ar}</td>
        <td>{props.adminkonyvekObj.db}</td>
        <td><button onClick={adatszerkeszt}>Szerkesztés</button></td>
        <td><button onClick={adattorol}>Törlés</button></td>
       
        </tr> 
    );
}
export default AdminKonyv;