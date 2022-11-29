import './Kosar.css';

function Kosar(props){
    return(
        <tr>
        <td>{props.kosarObj.szero}</td>
        <td>{props.kosarObj.cim}</td>
        <td>{props.kosarObj.ar}</td>
        <td>{props.kosarObj.db}</td>
        </tr>
    );
}

export default Kosar;