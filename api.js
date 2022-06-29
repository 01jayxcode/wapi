

var online = navigator.onLine;
         if (online == false) 
            {
                    alert("Sorry, we currently do not have Internet access.please turn on your internet or wi-fi to connect with our page");
                    // location.reload(); 
            }





function load() {
  // alert("Page is loaded");
  $('.unit').text("--/--");
  $('.namee').text("--/--");

}


function getvalue() {

   let searchvalue=$('.search').val();
   localStorage.setItem('city',searchvalue);

   

}



$('.btn').click(function(){
    getvalue();

    $.getJSON(

    "https://api.openweathermap.org/data/2.5/weather?q=" + localStorage.getItem('city') + "&appid=66f4fee39bcb4fcc00294c1173861557",

    function(data){

        console.log(data);
        let weather=true;


        let tem= Math.floor(data.main.temp-273.15)+"'C";
        $('.unit').text(tem);

        let namee=data.name;
        $('.namee').text(namee);
        
        let desc=data.weather[0].main;
        $('.desc').text(desc);

        let feel=Math.floor(data.main.feels_like-273.15)+"'C";
        $('.feel').text( feel);


        let humi=data.main.humidity;
        $('.humidity').text( humi);



        let press=data.main.pressure;
        $('.press').text( press);


        let icon="http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        $('.icon').attr("src",icon);

        
     
    }

    );
})







