document.getElementById('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    let body = document.querySelector('body');
    let fontcolor=document.getElementById('fontcolor').value;
    let fontsize= document.getElementById('fontsize').value;
   
document.cookie = "fontcolor=" + fontcolor;
	document.cookie= "fontsize="+ fontsize;
    body.style.fontSize=fontsize+"px";
    body.style.color=fontcolor;

    })