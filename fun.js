var xhr=new XMLHttpRequest();
xhr.open('GET','https://newsapi.org/v2/sources?apiKey=02ff9940178e4378b0ab51df370a5fd1',false);
xhr.send();

fetch('https://newsapi.org/v2/sources?apiKey=02ff9940178e4378b0ab51df370a5fd1')
    .then(function(response) {
        return response.json();
    }).then(function(json) {
        console.log('parsed json', json);
        for(let i=0;i<json.sources.length;i++){
            document.getElementById('7655').innerHTML+='<option value="'+ json.sources[i].id+ '">'+ json.sources[i].name+'</option>';
            clickMe();
        }
    })
    
    .catch(function(ex) {
        console.log('parsing failed', ex);
    });

var fun=function (){
    var e = document.getElementById('7655');
    var strUser = e.options[e.selectedIndex].value;

    fetch('https://newsapi.org/v2/everything?sources='+strUser+'&apiKey=02ff9940178e4378b0ab51df370a5fd1')
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            console.log('parsed json', json);
            for(let i=0;i<json.articles.length;i++){
                document.getElementById('1111').innerHTML+='<div class="xp">'+ json.articles[i].title +'</div>';
                document.getElementById('1111').innerHTML+='<div class="xp">'+ json.articles[i].author +'</div>';
                document.getElementById('1111').innerHTML+='<div class="xp">'+ json.articles[i].source.name +'</div>';
                document.getElementById('1111').innerHTML+='<div class="xp">'+ json.articles[i].publishedAt +'</div>';
                document.getElementById('1111').innerHTML+='<div class="xp">'+ json.articles[i].description +'</div>';
                if(json.articles[i].urlToImage==null){
                    document.getElementById('1111').innerHTML+='<div><img class="img" src="https://www.kasper.by/uploads/articles_img/1455614750714022.jpg"></div>';
                }else{   
                    document.getElementById('1111').innerHTML+='<div><img class="img" src='+ json.articles[i].urlToImage +'></div>';
                }  
                document.getElementById('1111').innerHTML+='<div><a href='+json.articles[i].url+'>'+ 'ссылка на статью' +'</a></div>';
                document.getElementById('1111').innerHTML+='<hr color=#8B4513>';
            }
        });
    

      
    
};
function clickMe(){
    var p=document.getElementById('7557');
    p.onclick=clickEvent;
}

function clickEvent(){
    fun();
}
