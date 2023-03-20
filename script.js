var unit = "c";

function city(){
  alert("Loading weather report...");
}

function metricConversion(element){
  if (element.value==="fahrenheit"){
    if (unit==="c"){
      unit="f";
      todaysHigh.innerText=Math.round(((9/5) * todaysHigh.innerText)+32);
      todaysLow.innerText=Math.round(((9/5) * todaysLow.innerText)+32);
      tomorrowsHigh.innerText=Math.round(((9/5) * tomorrowsHigh.innerText)+32);
      tomorrowsLow.innerText=Math.round(((9/5) * tomorrowsLow.innerText)+32);
      fridaysHigh.innerText=Math.round(((9/5) * fridaysHigh.innerText)+32);
      fridaysLow.innerText=Math.round(((9/5) * fridaysLow.innerText)+32);
      saterdaysHigh.innerText=Math.round(((9/5) * saterdaysHigh.innerText)+32);
      saterdaysLow.innerText=Math.round(((9/5) * saterdaysLow.innerText)+32);
    }
  }
  if (element.value==="celsius"){
    if (unit==="f"){
      unit="c";
      console.log("converting from f to c");
      todaysHigh.innerText=Math.round((5/9)*( todaysHigh.innerText -32));
      todaysLow.innerText=Math.round((5/9)*( todaysLow.innerText -32));
      tomorrowsHigh.innerText=Math.round((5/9)*( tomorrowsHigh.innerText -32));
      tomorrowsLow.innerText=Math.round((5/9)*( tomorrowsLow.innerText -32));
      fridaysHigh.innerText=Math.round((5/9)*( fridaysHigh.innerText -32));
      fridaysLow.innerText=Math.round((5/9)*( fridaysLow.innerText -32));
      saterdaysHigh.innerText=Math.round((5/9)*( saterdaysHigh.innerText -32));
      saterdaysLow.innerText=Math.round((5/9)*( saterdaysLow.innerText -32));
    }
  }
}

function dismissCookie(){
  document.querySelector(".cookie").style.visibility = "hidden";
}