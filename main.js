(function() {
  function $(id) {
    return document.getElementById(id);
  }
  
  // https://stackoverflow.com/questions/3943772/how-do-i-shuffle-the-characters-in-a-string-in-javascript
  function scrambleString(str) {
      var a = str.replace(/[\n\r]/g, '').split(""),
          n = a.length;

      for(var i = n - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var tmp = a[i];
          a[i] = a[j];
          a[j] = tmp;
      }
      return a.join("");
  }
  
  function onScrambleClick() {
    $("mainOutput").value = scrambleString($("mainInput").value);
  }
  
  var mainInputShown = true;
  
  function onHideInputClick() {
    mainInputShown = !mainInputShown;
    $("mainInput").style.display = mainInputShown ? "block" : "none";
    $("mainInputToggle").style.textContent = mainInputShown ? "Hide" : "Show";
  }
  
  $("scramble").addEventListener("click", onScrambleClick);
})();
