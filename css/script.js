               // USER TOGGLE

 let burger=document.querySelector(".user");
 let Links=document.querySelector(".nav_user_show");
 burger.addEventListener('click',()=> {
     Links.classList.toggle("nav-show");
 });

 let user_close=document.querySelector(".user_close");

 user_close.addEventListener("click",()=>{
  Links.classList.toggle("nav-show");
 });

              // SIDE NAV BOTTOM ARROW
      $('.side_nav_bottom').click(function(){
        $(this).find('i').toggleClass('fa-angles-left')
    });
    

                //  DARK LIGHT THEME

function darkmode() {
    const wasDarkmode = localStorage.getItem('darkmode') === 'true';
    localStorage.setItem('darkmode', !wasDarkmode);
    const element = document.body;
    element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
    document.body.classList.toggle('dark-mode', localStorage.getItem('darkmode') === 'true');
}
