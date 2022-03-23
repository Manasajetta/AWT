async function weather(){
    let cityname=document.getElementById("city");
    url='https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=550cfdf61df46ea6c7bf66881bd70c01&units=metric';
    const resp=await fetch(url);
    let data=await resp.json();
    console.log(data);
    let{main : {temp,temp_min,temp_max}}=data;
    console.log("temp : "+temp);
    console.log("min temp : "+temp_min);
    console.log("max temp : "+temp_max);
}