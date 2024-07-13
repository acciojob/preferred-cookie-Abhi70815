document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  let fontcolor = document.getElementById('fontcolor').value;
  let fontsize = document.getElementById('fontsize').value;
  
  document.cookie = "fontsize=" + fontsize + "; path=/";
  document.cookie = "fontcolor=" + fontcolor + "; path=/";
  
  applyStyles();
});

function applyStyles() {
  let body = document.querySelector('body');
  
  let fontsize = getCookie('fontsize');
  let fontcolor = getCookie('fontcolor');
  
  body.style.fontSize = fontsize + "px";
  body.style.color = fontcolor;
}

function getCookie(name) {
  let cookieArr = document.cookie.split(";");
  
  for(let i = 0; i < cookieArr.length; i++) {
    let cookiePair = cookieArr[i].split("=");
    
    if(name == cookiePair[0].trim()) {
      return decodeURIComponent(cookiePair[1]);
    }
  }
  
  return null;
}

window.onload = applyStyles;