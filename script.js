const countDate= new Date("Aug 6 2023 10:27:55").getTime();

var x= setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate -now;

    var d= Math.floor(distance / (1000*60*60*24));
    var hrs= Math.floor((distance % (1000*60*60*24))/ (1000 *60* 60));
    var min= Math.floor((distance % (1000*60*60)) / (1000*60));
    var sec= Math.floor((distance % (1000*60)) / (1000));

    document.getElementById('timer').innerHTML = d + "Days" + hrs + "Hrs" + min + "min" + sec + "sec";


    if(distance <0){
        clearInterval(x);
        document.getElementById('timer').innerHTML = "Time's up"
    }
})