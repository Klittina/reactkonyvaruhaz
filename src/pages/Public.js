import { useState } from 'react';
import '../App.css';
import Konyv from '../components/public/Konyv'
import Kosar from '../components/public/Kosar';
import KosarModel from '../model/kosarModel';

function Public() {

  /** state - reprezentálják az oldal állapotát
   * befrissitik az oldal vonatkozó részét
   * 
  let db = 0;
   */

  const[db,setDb] = useState(0);
  const[osszAr,setOsszar]=useState(0);
  const[kosaram,setKosaram] = useState([]);

  const kosarModel = new KosarModel(kosaram);

  const fokonyvek = require('../konyvTomb.json');

  function kosarKezeles(adat){
      //console.log(adat);
      /** Számoljuk meg, hány könyvet raktunk bele a kosárba 
       * db++;
      */
      setDb(db+1);
      setOsszar(osszAr+adat.ar);
      kosarModel.setKosaram(adat);
      console.log(adat);
      setKosaram(kosarModel.getKosaram());
  }
  return (
    <div className="App">
      <section>
      <p>A könyvek darabszáma: {db}</p>
      <p>A könyvek összára: {osszAr}</p>

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
      
      {kosaram.map((ko,index)=>{
        return(<Kosar kosarObj={ko} key={index} kosarnemkezelFv={kosarKezeles}/>);
      }

      )}
      </tbody>
      
      </table>
      </section>
      <article>
      {fokonyvek.konyvTomb.map((konyv,index)=>{
        return(<Konyv konyvObj={konyv} key={index} kosarkezelesFv={kosarKezeles}/>)
      }

      )}
      </article>
    </div>
  );
}

export default Public;
