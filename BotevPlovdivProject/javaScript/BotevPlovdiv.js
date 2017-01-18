/**
 * Created by Lekov on 3.12.2016 г..
 */
setInterval(function(){
    document.getElementById("clock").innerHTML = (new Date()).toLocaleTimeString();
}, 1000);
function changeLogo() {
    x=document.getElementById("TeamName");
    x.innerHTML="1912";
    x.style.color="red";
    x.style.marginTop="5px"
    x.style.fontSize="500%"
}
function saleOrNot() {
    var x=confirm("Желаете ли да пазарувате?");
    if(x==true){
        alert("Приятно пазаруване!")
    }
    else {
        window.close();
        window.close("Sales.html");

        window.open("BotevPlovdiv.html");
        window.close("Sales.html");

        // window.close("Sales.html");
       // window.open("BotevPlovdiv.html");
    }
}
setInterval(function() {

    element=document.getElementById('logoJS')
    if(today=new Date().getSeconds()%10==1){
        element.src="pictures/botevLogo6.png";
    }
    else if (today=new Date().getSeconds()%10==2){
        element.src="pictures/botevLogo2.png";
    }
    else if (today=new Date().getSeconds()%10==3){
        element.src="pictures/botevLogo3.png";
    }
    else if (today=new Date().getSeconds()%10==4){
        element.src="pictures/botevLogo4.png";
    }
    else if (today=new Date().getSeconds()%10==5){
        element.src="pictures/botevLogo5.png";
    }
    else if (today=new Date().getSeconds()%10==6){
        element.src="pictures/botevLogo6.png";
    }
    else if (today=new Date().getSeconds()%10==7){
        element.src="pictures/botevLogo7.png";
    }
    else if (today=new Date().getSeconds()%10==8){
        element.src="pictures/botevLogo3.png";
    }
    else if (today=new Date().getSeconds()%10==9){
        element.src="pictures/botevLogo4.png";
    }

    else{
        element.src="pictures/botevLogo5.png";
    }
})
function validate() {
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".")
    if(atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        alert("Невалиден имейл")
        return false;
    }
}
