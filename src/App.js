import { useState } from 'react';
import './App.css';
import Konyv from './Konyv';
import Kosar from './Kosar';
import KosarModel from './model/kosarModel';




const konyvTomb= [
  {
    id:1,
    db:1,
    cim:"Bábel",
    szerzo:"Leiner Laura",
    ar:4990
  },{
    id:2,
    db:1,
    cim:"Hannibal ébredése",
    szerzo:"Thomas Harris",
    ar:4990
  },{
    id:3,
    db:1,
    cim:"Java programozás",
    szerzo:"Kaczur Sándor",
    ar:4990
  },{
    id:4,
    db:1,
    cim:"Apa, randizhatok egy lovaggal?",
    szerzo:"On Sai",
    ar:3514
  },{
    id:5,
    db:1,
    cim:"Cinder és Ella",
    szerzo:"Kelly Oram",
    ar:2374
  }
]

function App() {

  /** state - reprezentálják az oldal állapotát
   * befrissitik az oldal vonatkozó részét
   * 
  let db = 0;
   */

  const[db,setDb] = useState(0);
  const[osszAr,setOsszar]=useState(0);
  const[kosaram,setKosaram] = useState([]);

  const kosarModel = new KosarModel(kosaram);

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
      //console.log(kosaram)
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Könyváruház</h1>
      </header>
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
      {konyvTomb.map((konyv,index)=>{
        return(<Konyv konyvObj={konyv} key={index} kosarkezelesFv={kosarKezeles}/>)
      }

      )}
      {/*
      <Konyv konyvObj={konyvTomb[0]} />
      <Konyv konyvObj={konyvTomb[1]} />
      <Konyv konyvObj={konyvTomb[2]} />
      <Konyv konyvObj={konyvTomb[3]} />
      <Konyv konyvObj={konyvTomb[4]} />  
    */}
      </article>
      <footer>
      Szedlár Krisztina
      </footer>
    </div>
  );
}

export default App;
