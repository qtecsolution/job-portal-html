
let contentLoader=document.getElementsByClassName('content-loader');
let loadedContent=document.getElementsByClassName('loaded-content'); 




// Hide content loader after 3 second
setTimeout(skeletoHide, 1500); 
//  hide content loader when window is loaded 
// window.addEventListener('DOMContentLoaded', (event) => {
//     skeletoHide()
// });


for(item of loadedContent) {
    item.style.display='none'
}


function skeletoHide () {
    for(item of contentLoader) {
    item.style.display='none'
} 
for(item of loadedContent) {
    item.style.display='block'
} 


}