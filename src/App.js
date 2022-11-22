import './App.css';
import Konyv from './Konyv';

const konyvTomb= [
  {
    cim:"Bábel",
    szerzo:"Leiner Laura",
    ar:4990
  },{
    cim:"Hannibal ébredése",
    szerzo:"Thomas Harris",
    ar:4990
  },{
    cim:"Java programozás",
    szerzo:"Kaczur Sándor",
    ar:4990
  },{
    cim:"Apa, randizhatok egy lovaggal?",
    szerzo:"On Sai",
    ar:3514
  },{
    cim:"Cinder és Ella",
    szerzo:"Kelly Oram",
    ar:2374
  }
]

function App() {

  function kosarkezeles(adat){
      console.log(adat);
      
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>Könyváruház</h1>
      </header>
      <article>
      {konyvTomb.map((konyv,index)=>{
        return(<Konyv konyvObj={konyv} key={index} kosarkezelesFv={kosarkezeles}/>)
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
