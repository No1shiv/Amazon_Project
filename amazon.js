function changeMode(){

    let mybody = document.body
    mybody.classList.toggle('mydark')  

  }

function mode(){

      for(i=0;i<3;i++){
        var c1t1 = document.getElementsByClassName('tile1')[i]
        c1t1.classList.toggle("mydark")

        let c1t2 = document.getElementsByClassName('tile2')[i]
        c1t2.classList.toggle("mydark")

        let c1t3 = document.getElementsByClassName('tile3')[i]
        c1t3.classList.toggle("mydark")

        let c1t4 = document.getElementsByClassName('tile4')[i]
        c1t4.classList.toggle("mydark")
      }
  }
 
function drow(){

      for(i=0;i<48;i++){
        var d = document.getElementsByClassName('d1')[i]
        d.classList.toggle("mydark")
      }
  }  

  function foot(){

         let f1 = document.getElementById('f1')
         f1.classList.toggle("dark")      
  }



  //  For Coupoun 

  function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    for(k=0;k<4;k++){
    document.getElementsByClassName('main')[k].style.opacity = '0.3'
    }

}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    for(k=0;k<4;k++){
      document.getElementsByClassName('main')[k].style.opacity = '1'
      }
}


// for Geolocation

function geolocation(){
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(showPosition)
  }else{
      x.innerText="Geo Not Supported"
      }
  }
  
              function showPosition(data){
  
                  let x = document.getElementById('out');
                  let y = document.getElementById('weather');
  
                  console.log(data)
                  let lat = data.coords.latitude
                  let lon = data.coords.longitude
                  //  x.innerText = `Latitude is ${lat} and longitude is ${lon}`
                  
  
                  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
                  //api calling
                  fetch(url,{method: 'GET'})
                  //return promise
                  .then((res) => res.json())
                  //resolve the promise
                  .then((data) => {
                      console.log(data)
                      let cityName = data.city.name;
                      let temp = data.list[0].temp.day + ' \u00B0C';
  
                      x.innerText = cityName
                      y.innerText = temp
                  })
              }  