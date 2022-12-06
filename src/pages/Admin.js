import '../App.css';

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

function Admin() {


  return (
    <div className="App">
      <section>
      <p>Admin.js</p>
      <p>Az admmin  egy táblázatban kilistázza az összes könyvet, tud törölni, szerkeszteni, új könyvet felvinni</p>
      <p>formokat kell hozzá csinálni ami az etananyagon fent van</p>
      </section>
    </div>
  );
}

export default Admin;
