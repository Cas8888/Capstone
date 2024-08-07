var timeleft = 60;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished! Click 'New Photo' to continue!";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
}, 1000);





let clientID = "eFxf3eHFBxEfNMtsuI6dRUehzsReHWuXFpGZusFVGIU";
let api= `https://api.unsplash.com/photos/random/?client_id=${clientID}`;

let referenceImage = document.querySelector ('#referenceimage');
let imageLink = document.querySelector ("#imageLink");
let creator = document.querySelector ("#creator")


fetch (api)

.then ((response) => response.json ())
.then (function (jsonData) {
referenceImage.src = jsonData.urls.regular;


creator.innerText = jsonData.user.name;
creator.setAttribute("href", jsonData.user.portfolio_url);

})

const username = document.getElementById ('subject');
const loginForm = document.getElementById ('form1');
const invalidSubject = document.getElementById ('invalidsubject');

username.addEventListener ('input', function(e) {

const pattern = /^[0-9]+$/;
const currentValue = e.target.value;
const valid = pattern.test(currentValue);

if(valid) {
invalidSubject.style.display = 'block'
} else {
invalidSubject.style.display = 'none'
}

})


