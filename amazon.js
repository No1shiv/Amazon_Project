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