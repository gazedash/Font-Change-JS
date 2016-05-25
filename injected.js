;(function() {
  var allstyles = document.getElementsByTagName('style'),
      styles = "* {font-family: Calibri !important;}",
      result = 0;
  
  console.log(styles);
  console.log("Injected???");
  
  function changeStyle() {
    console.log("Hello!")
    var sheet = document.createElement('style');

    sheet.innerHTML = styles;
    document.body.appendChild(sheet);
    }
  changeStyle();
})();