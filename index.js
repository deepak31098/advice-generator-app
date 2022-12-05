const url="https://api.adviceslip.com/advice";

function req(){

    fetch(url).
    then((res) => {
      console.log("By fetch")
      return res.json();
    }).
    then((data) =>{
      document.querySelectorAll(".info-div")[0].innerText='"'+data.slip.advice+'"';
      document.querySelectorAll(".header-div")[0].innerText="ADVICE # " +data.slip.id;
    }).
    catch((error) =>{
      console.log(error.message)
    })
};