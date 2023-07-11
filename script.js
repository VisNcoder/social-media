const profile=document.querySelector(".user-icon");
const button=document.querySelector("#dark-btn");
const setting=document.querySelector(".settings")
var sign=document.querySelector(".sign-up");
const overley=document.querySelector(".overlay");
const but=document.querySelector(".logo");
const leftbar=document.querySelector(".left-sidebar");
profile.addEventListener('click',()=>{
    setting.classList.toggle("settings-menu");
});

button.onclick=function(){
    button.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
}
 
sign.onclick=function(){
    overley.classList.toggle("overlay-on");
};

but.onclick=function(){
    leftbar.classList.toggle("left-sidebar-on");
};