import React from "react";

function Apod(props){

    const {dopa}= props;

    //(dopa) ilk bu şekilde göndermiştik, consoleda baktık ve obje içinde obje gibi oldu o yüzden süslü yazdık

    //const {url,date,explanation} = dopa

    //dopa.url,dopa.date.. demek istedik üstte
    
    return (
        <div className="photo">
        <div className="photo-img">
          {/* Buraya günün fotosu gelecek (öndeden tasarladık.) ımg alt kısmında ise foto yüklenmesinde problem olsaydı yüklenene kadar yazacağı şey*/}
          <img src={dopa.url} alt={`A visual of the day ${dopa.date}`} />
        </div>
        <div className="photo-info">
           {/* Buraya fotoğraf bilgisi gelecek  */}
          <h2>{dopa.title}</h2>
          <div>{dopa.date}</div>
          <p>{dopa.explanation}</p>
        </div>
      </div>

    )
}
export default Apod;