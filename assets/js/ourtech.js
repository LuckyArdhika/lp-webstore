  // get id from mouseover technoList
  const tech = document.getElementById("tech");
  tech.addEventListener('mouseover', scrapeWiki, false);
  const techTitle = document.getElementById("techTitle");
  const techText = document.getElementById("techText");

  // get data from json file

  async function scrapeWiki(event, res){
    let id = event.target.id;
  //   function loadJSON(callback) {
  //   var xobj = new XMLHttpRequest();
  //   xobj.overrideMimeType("application/json");
  //   xobj.open('GET', 'technoList.json', true); // Replace 'my_data' with the path to your file
  //   xobj.onreadystatechange = function () {
  //         if (xobj.readyState == 4 && xobj.status == "200") {
  //           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
  //           callback(xobj.responseText);
  //         }
  //   };
  //   xobj.send(null);
  // }

  // function init() {
  //   loadJSON(function(response) {
  //   // Parse JSON string into object
  //     var actual_JSON = JSON.parse(response);
  //   });
  // }
  // using Promise 
//   fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data));
// // or if you can use async/await 

    // get and parsing json file
    let response = await fetch("assets/json/technoList.json"); //pov 
    let object = await response.json();

    // check id that mouseover
    if (id == 1){
      techTitle.innerHTML = object.html.title;
      techText.innerHTML = object.html.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 2){
      techTitle.innerHTML = object.css.title;
      techText.innerHTML = object.css.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 3){
      techTitle.innerHTML = object.javascript.title;
      techText.innerHTML = object.javascript.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 4){
      techTitle.innerHTML = object.mysql.title;
      techText.innerHTML = object.mysql.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 5){
      techTitle.innerHTML = object.expressjs.title;
      techText.innerHTML = object.expressjs.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 6){
      techTitle.innerHTML = object.mongodb.title;
      techText.innerHTML = object.mongodb.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 7){
      techTitle.innerHTML = object.bootstrap.title;
      techText.innerHTML = object.bootstrap.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 8){
      techTitle.innerHTML = object.nodejs.title;
      techText.innerHTML = object.nodejs.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    } else if (id == 9){
      techTitle.innerHTML = object.reactjs.title;
      techText.innerHTML = object.reactjs.adjective;
      techTitle.classList.add("technoTransition");
      techText.classList.add("technoTransition");
      setTimeout(() => {
        techTitle.classList.remove("technoTransition");
        techText.classList.remove("technoTransition");
      }, 500);
    }
  }