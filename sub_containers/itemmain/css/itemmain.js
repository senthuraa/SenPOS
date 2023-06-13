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

      side_nav_inventory.addEventListener("click",()=>{
        if (side_nav_dropdown.style.display === "block") {
          side_nav_dropdown.style.display = "none";
        } else {
          side_nav_dropdown.style.display = "block";  
        }
      });
     
      side_nav_bottom.addEventListener("click",()=>{
        if (side_nav_dropdown.style.display === "block") {
          side_nav_dropdown.style.display = "none";
        } else {
          side_nav_dropdown.style.display = "block";  
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

            // ADD RECORDS DATA
const itemmain_add = document.querySelector(".itemmain_add"),
      itemmain_record_contain =document.querySelector(".itemmain_record_contain"),
      itemmain_record_icon = document.querySelector(".itemmain_record_icon");

      itemmain_add.addEventListener("click",()=>{
        itemmain_record_contain.style.display="block";
      })

      itemmain_record_icon.addEventListener("click",()=>{
        itemmain_record_contain.style.display="none";
      });

      // ADD RECORDS DATA HIDE AND SHOW COLOUM
const add_record_save =document.querySelector(".add_record_save");

add_record_save.addEventListener("click",()=>{
  itemmain_record_contain.style.display="none";
});

  function hide_show_table(col_name)
  {
   var checkbox_val=document.getElementById(col_name).value;
   if(checkbox_val=="hide")
   {
    var all_col=document.getElementsByClassName(col_name);
    for(var i=0;i<all_col.length;i++)
    {
     all_col[i].style.display="none";
    }
    document.getElementById(col_name+"_head").style.display="none";
    document.getElementById(col_name).value="show";
   }
      
   else
   {
    var all_col=document.getElementsByClassName(col_name);
    for(var i=0;i<all_col.length;i++)
    {
     all_col[i].style.display="table-cell";
    }
    document.getElementById(col_name+"_head").style.display="table-cell";
    document.getElementById(col_name).value="hide";
   }
  }

// CHECKBOX

 const selectAllCheckbox = document.getElementById("select-all-checkbox");
 const dataCheckboxes = document.querySelectorAll(".data-checkbox");
 const countContainer = document.getElementById("count-container");

 // Function to handle select all checkbox change event
 function handleSelectAllChange() {
   const isChecked = selectAllCheckbox.checked;

   dataCheckboxes.forEach((checkbox) => {
     checkbox.checked = isChecked;
   });

   updateCount();
 }

 // Function to handle individual data checkboxes change event
 function handleDataCheckboxChange() {
   const allChecked = Array.from(dataCheckboxes).every(
     (checkbox) => checkbox.checked
   );
   selectAllCheckbox.checked = allChecked;

   updateCount();
 }

 // Function to update the count of selected checkboxes
 function updateCount() {
   const checkedCount = Array.from(dataCheckboxes).filter(
     (checkbox) => checkbox.checked
   ).length;
   countContainer.textContent = `${checkedCount} Items Selected`;
 }

 // Add event listeners to checkboxes
 selectAllCheckbox.addEventListener("change", handleSelectAllChange);
 dataCheckboxes.forEach((checkbox) => {
   checkbox.addEventListener("change", handleDataCheckboxChange);
 });


//  BULK ACTION REMOVE
const itemmain_green_bubble=document.querySelector(".itemmain_green-bubble"),
itemmain_select2_contain =document.querySelector(".itemmain_select2_contain");

itemmain_green_bubble.addEventListener("click",()=>{
  itemmain_select2_contain.style.display="none";
})


// PAGINATION

// ADD RECORDS DATA CHECKBOX
$(document).ready(function() {
  $('label input[type="checkbox"]').change(function(){
  var total_checked=  $("label input[type='checkbox']:checked").length 
  $("#d1").html(total_checked +" of 36 selected");
  });
  /////////////
  var total_checked=  $("label input[type='checkbox']:checked").length 
  $("#d1").html(total_checked +" of 36 selected" );
  ///////
  });



  // SEARCH FILTER TABLE 
  document.getElementById("search_input_all").addEventListener("input", function() {
    var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById("search_input_all");
    filter = input.value.toUpperCase();
    table = document.getElementById("table-id");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, hide those that don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td");
      for (j = 0; j < td.length; j++) {
        txtValue = td[j].textContent || td[j].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          break;
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  });


  // SEARCH FILTER LIST 
  document.getElementById("item_searchInput").addEventListener("input", function() {
    var input, filter, ul, li, item, i, txtValue;
    input = document.getElementById("item_searchInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
  
    // Loop through all list items and hide those that don't match the search query
    for (i = 0; i < li.length; i++) {
      item = li[i];
      txtValue = item.textContent || item.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item.style.display = "";
      } else {
        item.style.display = "none";
      }
    }
  });
  


  const bulkaction_itemmain = document.querySelector(".bulkaction_itemmain"),
        bulk_dropdown_btn= document.querySelector(".bulk_dropdown_btn");
  bulkaction_itemmain.addEventListener("click",()=>{
    
    bulk_dropdown_btn.classList.toggle("bulk_dropdown_btn2")
  })