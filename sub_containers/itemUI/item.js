document.getElementById('salesinformation').onclick = function() {
    var disabled = document.getElementById("sales_disaple").disabled;
    if (disabled) {
        document.getElementById("sales_disaple").disabled = false;
        document.querySelector(".item_sales_error").style.display="block";
        document.getElementById("sales_disaple").style.cursor="text";
    }
    else {
        document.getElementById("sales_disaple").disabled = true;
        document.querySelector(".item_sales_error").style.display="none";
        document.getElementById("sales_disaple").style.cursor="not-allowed";
        
    }
}

document.getElementById('purchaseinformation').onclick = function() {
    var disabled = document.getElementById("purchase_disaple").disabled;
    if (disabled) {
        document.getElementById("purchase_disaple").disabled = false;
        document.querySelector(".item_purchase_error").style.display="block";
        document.getElementById("purchase_disaple").style.cursor="text";
    }
    else {
        document.getElementById("purchase_disaple").disabled = true;
        document.querySelector(".item_purchase_error").style.display="none";
        document.getElementById("purchase_disaple").style.cursor="not-allowed";
    }
}
          // SERVICES CLICK CHNAGE METHOD 
const goods =document.querySelector("#goods"),
      services =document.querySelector("#services"),
      item_goods_unit=document.querySelector(".item_goods_unit"),
      item_goods_unit_input=document.querySelector(".item_goods_unit_input"),
      item_service_unit = document.querySelector(".item_service_unit"),
      item_service_unit_input =document.querySelector(".item_service_unit_input"),
      item_goods_hsncode =document.querySelector(".item_goods_hsncode"),
      search_item_eight=document.querySelector(".search_item_eight"),
      item_services_sac=document.querySelector(".item_services_sac"),
      search_item_six=document.querySelector(".search_item_six"),
      item_goods_return=document.querySelector(".item_goods_return"),
      item_service_digital=document.querySelector(".item_service_digital");
      
      services.addEventListener("click",()=>{
        item_service_unit.style.display="block";
        item_service_unit_input.style.display="block";
        item_goods_unit.style.display="none";
        item_goods_unit_input.style.display="none";
        item_goods_hsncode.style.display="none";
        search_item_eight.style.display="none";
        item_services_sac.style.display="block";
        search_item_six.style.display="block";
        item_goods_return.style.display="none";
        item_service_digital.style.display="block";
      });
      goods.addEventListener("click",()=>{
        item_service_unit.style.display="none";
        item_service_unit_input.style.display="none";
        item_goods_unit.style.display="block";
        item_goods_unit_input.style.display="block";
        item_goods_hsncode.style.display="block";
        search_item_eight.style.display="block";
        item_services_sac.style.display="none";
        search_item_six.style.display="none";
        item_goods_return.style.display="block";
        item_service_digital.style.display="none";
      });
  

  
          // ERROR AND SUCCESS THOROW

  function validateInputs() {
    const item_name = document.querySelector("#item_name").value.trim();
    if (item_name == "") {
      document.querySelector(".item_error").innerHTML="*Please Enter name";
    }else{
      document.querySelector(".item_error").innerHTML="";
    }
    const item_unit = document.querySelector("#SelExample").value.trim();
    if (item_unit == "") {
      document.querySelector(".item_unit_error").innerHTML="*Please Enter Unit";
    }else{
      document.querySelector(".item_unit_error").innerHTML="";
    }
    const sales_disaple = document.querySelector("#sales_disaple").value.trim();
    if (sales_disaple == "") {
      document.querySelector(".item_sales_error").innerHTML="*Enter Sales Information";
    }else{
      document.querySelector(".item_sales_error").innerHTML="";
    }
    const purchase_disaple = document.querySelector("#purchase_disaple").value.trim();
    if (purchase_disaple == "") {
      document.querySelector(".item_purchase_error").innerHTML="*Enter Purchase Information";
    }else{
      document.querySelector(".item_purchase_error").innerHTML="";
    }
  }
                    
                    // HSN CODE
   function isInputNumber(evt){
                
                var ch = String.fromCharCode(evt.which);
                
                if(!(/[0-9]/.test(ch))){
                    evt.preventDefault();
                }
                
            }
function isInputNumbersix(evt){
                
                var ch = String.fromCharCode(evt.which);
                
                if(!(/[0-9]/.test(ch))){
                    evt.preventDefault();
                }
                
            }


            // DRAG AND DROP IMAGE
document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
});
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  


  // UNIT 
  $(document).ready(function(){
 
    // Initialize select2
    $("#SelExample").select2();
    $("#SelExample").select2("val", "4");
  $('#SelExample option:selected').text('Vizag');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample option:selected').text();
      var userid = $('#SelExample').val();
    });
  });

  $(document).ready(function(){
 
    // Initialize select2
    $("#SelExample2").select2();
    $("#SelExample2").select2("val", "4");
  $('#SelExample2 option:selected').text('Vizag');
    // Read selected option
    $('#but_read').click(function(){
      var username = $('#SelExample2 option:selected').text();
      var userid = $('#SelExample2').val();
    });
  });

  // SALES PURCHASE INFORMATION

  $('.decimal').keyup(function(){
    var val = $(this).val();
    if(isNaN(val)){
         val = val.replace(/[^0-9\.]/g,'');
         if(val.split('.').length>2) 
             val =val.replace(/\.+$/,"");
    }
    $(this).val(val); 
});


// DEFAULT TAX RATES SELECT
$(document).ready(function(){
 
  // Initialize select2
  $("#SelExample3").select2();
  $("#SelExample3").select2("val", "3");
$('#SelExample3 option:selected').text('Vizag');
  // Read selected option
  $('#but_read').click(function(){
    var username = $('#SelExample3 option:selected').text();
    var userid = $('#SelExample3').val();
  });
});

$(document).ready(function(){
 
  // Initialize select2
  $("#SelExample4").select2();
  $("#SelExample4").select2("val", "3");
$('#SelExample4 option:selected').text('Vizag');
  // Read selected option
  $('#but_read').click(function(){
    var username = $('#SelExample4 option:selected').text();
    var userid = $('#SelExample4').val();
  });
});