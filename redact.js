var arr = JSON.parse(localStorage.getItem('store'));
var numOfRedaction=localStorage.getItem('num');

document.getElementById('12').value=arr[numOfRedaction].tit ;
document.getElementById('123').value= arr[numOfRedaction].author ;
document.getElementById('124').value=arr[numOfRedaction].name;   
document.getElementById('125').value=arr[numOfRedaction].url;
document.getElementById('imgTest').innerHTML+='<img class="img"'+ arr[numOfRedaction].jpgfile+'>';
   



var saveFun = function() {
    
    arr[numOfRedaction].tit=document.getElementById('12').value;
    arr[numOfRedaction].author=document.getElementById('123').value;
    arr[numOfRedaction].name=document.getElementById('124').value;
    arr[numOfRedaction].url=document.getElementById('125').value;
    

    arr[numOfRedaction].jpgfile=document.getElementById('imgTest').innerHTML;
    localStorage.setItem('store',JSON.stringify(arr));
    
    // if(JSON.parse(localStorage.getItem('store'))==null){
    //     var store=[];
    //     obj.num=0;
    //     store.push(obj);
    //     localStorage.setItem('store',JSON.stringify(store));
        
    // }
    // else{
    //     var store1 = JSON.parse(localStorage.getItem('store'));
    //     obj.num=store1.length;
    //     store1.push(obj);
    //     localStorage.setItem('store',JSON.stringify(store1));
    // }
    
    window.location.replace('queue.html');
};
function encodeImageFileAsURL() {
   
    var filesSelected = document.getElementById('inputFileToLoad').files;
    if (filesSelected.length > 0) {
        var fileToLoad = filesSelected[0];
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
