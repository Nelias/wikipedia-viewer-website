document.getElementById("input-field").onkeypress = function(e) {
  if (!e) e = window.event;
  var keyCode = e.keyCode || e.which;
  // Checking if enter is pressed after writing in a search field
  if (keyCode == '13') {
    var input = document.getElementById("input-field").value;
    
    document.getElementById("input-field").value = "";
    document.getElementById("search-results-wrapper").removeAttribute("class");
    
    // Clearing all innerHTML fields
    document.getElementById("first-result").innerHTML = "";
    document.getElementById("second-result").innerHTML = "";
    document.getElementById("third-result").innerHTML = "";
    document.getElementById("fourth-result").innerHTML = "";
    document.getElementById("fifth-result").innerHTML = "";
    document.getElementById("sixth-result").innerHTML = "";
    
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + input  + "&limit=10&namespace=0&format=json";
  fetch(proxyurl + url)
  .then(response => response.text())
  .then(contents => JSON.parse(contents).forEach(function (val, index, array) { 
    
    if (index !== 0 && index !== 3)  { 

      var firstResult = document.createElement('h3');
      firstResult.innerHTML = val[0];
      document.getElementById("first-result").appendChild(firstResult);

      var secondResult = document.createElement('h3');
      secondResult.innerHTML = val[1];
      document.getElementById("second-result").appendChild(secondResult);

      var thirdResult = document.createElement('h3');
      thirdResult.innerHTML = val[2];
      document.getElementById("third-result").appendChild(thirdResult);

      var fourthResult = document.createElement('h3');
      fourthResult.innerHTML = val[3];
      document.getElementById("fourth-result").appendChild(fourthResult);

      var fifthResult = document.createElement('h3');
      fifthResult.innerHTML = val[4];
      document.getElementById("fifth-result").appendChild(fifthResult);
      
      var sixthResult = document.createElement('h3');
      sixthResult.innerHTML = val[5];
      document.getElementById("sixth-result").appendChild(sixthResult);
      
    }
    // Setting an url link for each article
    if (index === 3) {
      document.getElementById("first-result-anchor").href=val[0]; 
      document.getElementById("second-result-anchor").href=val[1];
      document.getElementById("third-result-anchor").href=val[2];
      document.getElementById("fourth-result-anchor").href=val[3];
      document.getElementById("fifth-result-anchor").href=val[4];
      document.getElementById("sixth-result-anchor").href=val[5];
    }
    
  }))
  .catch(() => console.log("Can’t access " + url + " response. It might be blocked by your browser."))
    }
}