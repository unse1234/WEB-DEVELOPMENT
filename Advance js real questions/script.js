const key=`b92e57938eaebc6ded1fcf3a2f5b4bc3`;
 
async function getweather(city){
   
    try
    {        let res=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`);
        let data=await res.json();
        console.log(data);
    }
    catch(err)  {
        console.log(err);
    }
}

getweather("islamabad");