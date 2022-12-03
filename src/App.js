import axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import Apod from "./Apod";
//import { fakeData } from "./fakeData.js";


//console.log(fakeData);

const reqUrl = "https://api.nasa.gov/planetary/apod?api_key=beXtWJTy4pw06gUN2vxVXC8zQCZ3fHgRE1S0mBBr"
/* NASA sayfasından aldık*/

const reqUrl_dün = "https://api.nasa.gov/planetary/apod?api_key=beXtWJTy4pw06gUN2vxVXC8zQCZ3fHgRE1S0mBBr&date=2022-12-1"

// NASA nın sitesinde tarihi nasıl değiştireceğimiz yazıyordu, requrl e &date=2022-12-01 yazdık dünü bulduk.
const reqUrl_geçen = "https://api.nasa.gov/planetary/apod?api_key=beXtWJTy4pw06gUN2vxVXC8zQCZ3fHgRE1S0mBBr&date=2022-11-24"

const urls = ["&date=2022-12-02", "&date=2022-12-01", "&date=2022-11-24"]

function App() {

  const [day, setDay] = useState(1);
  //console.log(`Gün State'i ${day}`);

  const [apod, setApod] = useState(null);

  useEffect(() => {
    axios.get(reqUrl + urls[day - 1])
      .then(res => {
        setApod(res.data)
      });
  }, [day])

  //sadece axios dersek foto tarihleri değişmiyor. değişmesi için useeffect lazım. useeffette 2. parametre olan ;"[]" burda birşeyler değişincde useeffectin içi birkez daha çalışıyor
  // axios.get(reqUrl)
  //   .then(res => {
  //     //console.log(`Axios data : ${res.data}`)
  //     setApod(res.data);
  //   });

  // axios.get(reqUrl + urls[day-1])
  // .then(res => {
  //   //console.log(`Axios data : ${res.data}`)  
  //   setApod(res.data);
  // });
  // console.log(`Apod bilgisi : ${apod}`) //bu şekilde sürekli yazıdrıyordu, sadece verdiğimiz değişkene göre y1 kere render etmesi için useeffect kullanmaya karar verdk, burayı komple useeffect içine taşıdık



  return (
    <div className="App">
      <div className="content">
        <h1>Photo Of The Day- NASA</h1>
        {/* <div>Tarih seçim butonları gelecek</div> */}
        <div className="buttons">
          <button onClick={() => setDay(1)} className={day === 1 ? "selected" : ""}>Bugün</button> 
          <button onClick={() => setDay(2)} className={day === 2 ? "selected" : ""}>Dün</button>
          <button onClick={() => setDay(3)} className={day === 3 ? "selected" : ""}>Geçen Hafta</button>

          {/* //aşağıdaki gibi bir kontrol yapmassak , null ın url diye bir property si yok der  // */}
          {/* // selected yukarda burda bir class,bu yüzden css de kullanabildik ! // */}

        </div>


        {apod === null ? <div>Apod yükleniyor</div>

          :
          (
            <Apod dopa={apod} />
            //burda yazan tüm apod ları önce fakeData olarak yazdık
            // <div className="photo">
            //   <div className="photo-img">
            //     {/* Buraya günün fotosu gelecek (öndeden tasarladık.) ımg alt kısmında ise foto yüklenmesinde problem olsaydı yüklenene kadar yazacağı şey*/}
            //     <img src={apod.url} alt={`A visual of the day ${apod.date}`} />
            //   </div>
            //   <div className="photo-info">
            //     {/* Buraya fotoğraf bilgisi gelecek */}
            //     <h2>{apod.title}</h2>
            //     <div>{apod.date}</div>
            //     <p>{apod.explanation}</p>
            //   </div>
            // </div> KOMPLE BU KISMI APOD.JS E KOYDUK COMPONENT OLUŞTURMAK İÇİN

          )
        }
      </div>
    </div>
  )
}

export default App;
