var arr = JSON.parse(localStorage.getItem('store'));

for(var i =0;i< arr.length;i++){
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].tit +'</div>';
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].author +'</div>';
    document.getElementById('1121').innerHTML+='<div class="xp">'+ arr[i].name +'</div>';   
    document.getElementById('1121').innerHTML+='<div class="xp"><a href='+ arr[i].url +'>ссылка на статью '+ arr[i].url + '</a></div>';
    document.getElementById('1121').innerHTML+='<img class="img"'+ arr[i].jpgfile+'>';
    document.getElementById('1121').innerHTML+='<input type="button" class="but" onclick="thisNum('+ arr[i].num+')" value="Редактировать статью">';
    document.getElementById('1121').innerHTML+='<hr color=#8B4513>';
}

var clearFun=function(){
    localStorage.clear();
    location.reload();
};

var thisNum=function(i){
    var number=i;
    localStorage.setItem('num',number);
    window.location.replace('ReNews.html');
};