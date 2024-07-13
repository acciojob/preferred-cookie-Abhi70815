document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let body = document.querySelector('body');
    let fontcolor=document.getElementById('fontcolor').value;
    let fontsize= document.getElementById('fontsize').value;
   
    localStorage.setItem("fontsize",fontsize);
    localStorage.setItem("fontcolor",fontcolor);
    body.style.fontSize=fontsize+"px";
    body.style.color=fontcolor;

    })