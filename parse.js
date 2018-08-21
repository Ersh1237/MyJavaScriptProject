var arr = JSON.parse(localStorage.getItem('store'));

for(var i =0;i< arr.length;i++){
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].tit +'</div>';
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].author +'</div>';
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].name +'</div>';   
    document.getElementById('1121').innerHTML+='<img class="img"'+ arr[i].jpgfile+'>';
    document.getElementById('1121').innerHTML+='<hr color=#8B4513>';
}
