const url="https://api.adviceslip.com/advice";
// fetch(url).then(function(response) { //is this also a html request as if in terms of their functionality they are similar
//   return response.json();
// }).then(function(data) {
//   console.log(data);
// }).catch(function() {
//   console.log("Error");
// });
function req(){
  httpGet(url);
}
function httpGet(URL) {
  let xmlHttpReq = new XMLHttpRequest();
  xmlHttpReq.open("GET", URL, false);
  xmlHttpReq.send(null);
  //this is an object
  console.log(xmlHttpReq)
  //confusing here that if this is a JSON file and if yes then can JSON file be there in a object as a value
  console.log(xmlHttpReq.responseText);
  // as this is showing undefined in console log
  console.log(xmlHttpReq.responseText.slip)

  // considered xmlHttpReq.responseText as JSON file then executed following is this right way of doing this
  var response=JSON.parse(xmlHttpReq.responseText)//here i parsed xmlHttpReq.responseText
  console.log(response)//now it is showing this as an object file


  document.querySelectorAll(".info-div")[0].innerText='"'+response.slip.advice+'"'
  document.querySelectorAll(".header-div")[0].innerText="ADVICE # " +response.slip.id
}
