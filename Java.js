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
