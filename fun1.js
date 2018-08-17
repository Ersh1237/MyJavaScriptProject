

var saveFun = function() {
    var obj={};
    localStorage.setItem('title',document.getElementById('12').value);
        localStorage.setItem('author',document.getElementById('123').value);
    localStorage.setItem('name',document.getElementById('124').value);
         obj.tit=localStorage.getItem('title');
       obj.author=localStorage.getItem('author');
    obj.name=localStorage.getItem('name');
    console.log(obj);
    localStorage.setItem('store',JSON.stringify(obj));
    window.location.replace('queue.html');
};

// function clickMe(){
//     var p=document.getElementById('1121');
//     p.onclick=clickEvent;
// }

// function clickEvent(){
//     saveFun();
// } 


