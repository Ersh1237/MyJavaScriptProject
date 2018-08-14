var xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/sources?apiKey=02ff9940178e4378b0ab51df370a5fd1',false);
xhr.send();
// alert(xhr.status);
//
var fun=function (){
    var e = document.getElementById('7655');
    var strUser = e.options[e.selectedIndex].value;
    xhr.open('GET','https://newsapi.org/v2/everything?sources='+strUser+'&apiKey=02ff9940178e4378b0ab51df370a5fd1',false);
    xhr.send();
    // console.log(JSON.parse( xhr.responseText));
    // console.log(strUser);
    var chp=JSON.parse( xhr.responseText);    
    for(let i=0;i<chp.articles.length;i++){
        document.getElementById('1111').innerHTML+='<div class="xp">'+ chp.articles[i].title +'</div>';
        document.getElementById('1111').innerHTML+='<div class="xp">'+ chp.articles[i].author +'</div>';
        document.getElementById('1111').innerHTML+='<div class="xp">'+ chp.articles[i].source.name +'</div>';
        document.getElementById('1111').innerHTML+='<div class="xp">'+ chp.articles[i].publishedAt +'</div>';
        document.getElementById('1111').innerHTML+='<div class="xp">'+ chp.articles[i].description +'</div>';
        if(chp.articles[i].urlToImage==null){
            document.getElementById('1111').innerHTML+='<div><img class="img" src="https://www.kasper.by/uploads/articles_img/1455614750714022.jpg"></div>';
        }else{   
            document.getElementById('1111').innerHTML+='<div><img class="img" src='+ chp.articles[i].urlToImage +'></div>';
        }  
        document.getElementById('1111').innerHTML+='<div><a href='+chp.articles[i].url+'>'+ 'ссылка на статью' +'</a></div>';
        document.getElementById('1111').innerHTML+='<hr color=#8B4513>';
    }
};
function clickMe(){
    var p=document.getElementById('7557');
    p.onclick=clickEvent;
}

function clickEvent(){
    fun();
}
//var elem=document.getElementById('7557');
if (xhr.status != 200) {
// обработать ошибку
    alert( xhr.status + ': ' + xhr.statusText );
} 
else {
// вывести результат
    clickMe();
    //console.log(JSON.parse( xhr.responseText));
    var ger=JSON.parse( xhr.responseText);
    // console.log(ger.sources.length);
    // console.log(ger.sources[1].name);
    for(let i=0;i<ger.sources.length;i++){
        document.getElementById('7655').innerHTML+='<option value="'+ ger.sources[i].id+ '">'+ ger.sources[i].name+'</option>';
    }
    
}
