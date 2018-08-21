
// console.log(localStorage.getItem('store'));
// console.log(JSON.parse(localStorage.getItem('store')));
var saveFun = function() {
    var obj={};
    // localStorage.setItem('title',document.getElementById('12').value);
    // localStorage.setItem('author',document.getElementById('123').value);
    // localStorage.setItem('name',document.getElementById('124').value);
    // obj.tit=localStorage.getItem('title');
    // obj.author=localStorage.getItem('author');
    // obj.name=localStorage.getItem('name');
    console.log(obj);
    
    obj.tit=document.getElementById('12').value;
    obj.author=document.getElementById('123').value;
    obj.name=document.getElementById('124').value;
    obj.jpgfile=document.getElementById('imgTest').innerHTML;
    
    if(JSON.parse(localStorage.getItem('store'))==null){
        var store=[];
        store.push(obj);
        localStorage.setItem('store',JSON.stringify(store));
    }
    else{
        var store1 = JSON.parse(localStorage.getItem('store'));
        store1.push(obj);
        localStorage.setItem('store',JSON.stringify(store1));
    }
    
    window.location.replace('queue.html');
};
function encodeImageFileAsURL() {
   
    var filesSelected = document.getElementById('inputFileToLoad').files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
        console.log(fileToLoad);
        var fileReader = new FileReader();
        
        fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target.result; // <--- data: base64
            var newImage = document.createElement('img');
            newImage.src = srcData;
            //console.log(srcData);

          
            document.getElementById('imgTest').innerHTML = newImage.outerHTML;
        //alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        //console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        };
        fileReader.readAsDataURL(fileToLoad);
    }
}    

// function clickMe(){
//     var p=document.getElementById('1121');
//     p.onclick=clickEvent;
// }

// function clickEvent(){
//     saveFun();
// } 


