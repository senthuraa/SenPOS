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

                //  SIDE NAV BOTTOM DROPDOWN
const side_nav_home =document.querySelector(".side_nav_home"),
      side_nav_inventory=document.querySelector(".side_nav_inventory"),
      side_nav_sales = document.querySelector(".side_nav_sales"),
      side_nav_records= document.querySelector(".side_nav_records"),
      side_nav_dropdown =document.querySelector(".side_nav_dropdown"),
      side_nav_dropdown2 =document.querySelector(".side_nav_dropdown2"),
      side_nav_bottom =document.querySelector(".side_nav_bottom"),
      side_nav_close_open =document.querySelector(".side_nav_close_open"),
      side_nav_open_close =document.querySelector(".side_nav_open_close");

      side_nav_sales.addEventListener("click",()=>{
        if (side_nav_dropdown2.style.display === "block") {
          side_nav_dropdown2.style.display = "none";
        } else {
          side_nav_dropdown2.style.display = "block";  
        }
      });
     
      side_nav_bottom.addEventListener("click",()=>{
        if (side_nav_dropdown2.style.display === "none") {
          side_nav_dropdown2.style.display = "block";
        } else {
          side_nav_dropdown2.style.display = "none";  
        }
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
