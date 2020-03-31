// hamburger button
$(document).ready(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
    });
});

// year
$(document).ready(function() { $('#year').text((new Date).getFullYear())});

// remove class at 768px in order to disable navbar hover on touch devices
$(document).ready(function() {
  if ($(window).width()<768) {
    $('.hover-effect').removeClass('hover-effect');
  }
});

// smooth dropdown
$(document).ready(function() {
    $('.dropdown').on('show.bs.dropdown', function(e){
        // e.preventDefault()
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });

    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('.dropdown').on('hide.bs.dropdown', function(e){
        // e.preventDefault();
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400, function(){
            // $('.dropdown').removeClass('open');
            // $('.dropdown').find('.dropdown-toggle').attr('aria-expanded','false');
        });
    });
});

// toggle collapse between 2 elements - certificates_ino.html
$(document).ready(function(){

    $('[data-target="#vdeCert"]').on('click', function(e){
        e.preventDefault()
        $('#rusCert').collapse('hide');
        $('#vdeCert').collapse('toggle');

    });
    
    // ADD SLIDEUP ANIMATION TO DROPDOWN //
    $('[data-target="#rusCert"]').on('click', function(e){
        e.preventDefault()
        $('#vdeCert').collapse('hide');
        $('#rusCert').collapse('toggle');

    });
    
});

// captcha example

  var code;
  function createCaptcha() {
    //clear the contents of captcha div first 
    document.getElementById('captcha').innerHTML = "";
    var charsString =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lengthOtp = 6;
    var codeArr = [];
    for (var i = 0; i < lengthOtp; i++) {
      //below code will not allow Repetition of Characters
      var index = Math.floor(Math.random() * charsString.length + 1); //get the next character from the array
      if (codeArr.indexOf(charsString[index]) == -1)
        codeArr.push(charsString[index]);
      else i--;
    }
    var canv = document.createElement("canvas");
    // var canv = document.getElementById('captcha');
    canv.id = "canv";
    canv.width = 100;
    canv.height = 50;
    var ctx = canv.getContext("2d");
    ctx.shadowOffsetX = 10;
    ctx.shadowOffsetY = 10;
    ctx.shadowBlur = 2;
    ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
    ctx.font = "25px Georgia";
    ctx.strokeText(codeArr.join(""), 0, 20);
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = codeArr.join("");
    document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
  }
  // function validateCaptcha() {
  //   event.preventDefault();
  //   debugger
  //   if (document.getElementById("code").value == code) {
  //     alert("Valid Captcha")
  //   }else{
  //     alert("Invalid Captcha. try Again");
  //     createCaptcha();
  //   }
  // }
  
  function validateCaptcha() {
    
    if (document.getElementById("code").value == code) {
      // alert("Valid Captcha")
      
      return true;
    } else {
      // alert("Invalid Captcha. try Again");
      createCaptcha();
      return false;
    }
  }