var obj = JSON.parse(localStorage.getItem('store'));

document.getElementById('1121').innerHTML='<div class="xp">'+ obj.tit +'</div>';
document.getElementById('1122').innerHTML='<div class="xp">'+ obj.author +'</div>';
document.getElementById('1123').innerHTML='<div class="xp">'+ obj.name +'</div>';   
