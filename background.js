;(function() {
  var state = 0,
      styles = "* {font-family: Calibri !important;}",
      result = 0;
  console.log("Hello!")

  go = document.getElementById('click');  
  stop = document.getElementById('stop');

  // go.addEventListener("click", run);
  // stop.addEventListener("click", reload);

  function run(){
  	// chrome.tabs.update(tab.id, {active: true});
    // Execute code on the existing tab to 
    state = 1;

    whichFont = document.getElementById('font').value;
    whichSize = document.getElementById('size').value;
    whichColor = document.getElementById('color').value;
    styles = "* {font-family:" + whichFont + "!important;}" + 
    "{font-size:" + whichSize + "!important;}" + "{font-color:"
    + whichColor + "!important;}";

    console.log("Injected?");
    chrome.tabs.executeScript(null, {file: "/injected.js"}, 
    	 function(){
            chrome.tabs.sendMessage(tab, styles, 
                function(response){
                    console.log(response);
                }
            );
        });
}

  function reload(){
    chrome.tabs.executeScript(null, {code: "location.reload()"});
    state = 2;
  }

    go.onclick = run;
  stop.onclick = reload;
  
    //result = !allstyles.indexOf('styles') > -1
  // if (state == 1)

})();