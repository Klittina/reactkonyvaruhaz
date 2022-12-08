import '../App.css';
import AdminKonyv from '../components/admin/AdminKonyv';



function Admin() {
  const adminkonyvek = require('../konyvTomb.json');
  return (
    <div className="App">
      <article>
      
      <table className='table table-striped'>
      <thead>
      <tr>
      <th>Szerő</th>
      <th>Cím</th>
      <th>Ár</th>
      <th>Db</th>
      </tr>
      </thead>
      <tbody>
      {adminkonyvek.konyvTomb.map((konyv,index)=>{
        return(<AdminKonyv adminkonyvekObj={konyv} key={index}/>)
      })}
      </tbody>
      
      </table>
      </article>
    </div>
  );
}

export default Admin;
