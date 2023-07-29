// JavaScript Document
$(document).ready(function() {

    "use strict";
    
    $(".register-form").submit(function(e) {
        e.preventDefault();
        var name = $(".name");
        var email = $(".email");
        var phone = $(".phone");
        var flag = false;
        if (name.val() == "") {
            name.closest(".form-control").addClass("error");
            name.focus();
            flag = false;
            return false;
        } else {
            name.closest(".form-control").removeClass("error").addClass("success");
        } if (email.val() == "") {
            email.closest(".form-control").addClass("error");
            email.focus();
            flag = false;
            return false;
        } else {
            email.closest(".form-control").removeClass("error").addClass("success");
        } if (phone.val() == '' ||  phone.val().length != 10 ) {
            phone.closest(".control-group").addClass("error");
             phone.css("border","1px solid red")
             phone.css("box-shadow","none")
            phone.focus();
            
            flag = false;
            return false;
        } else {
            phone.closest(".control-group").removeClass("error").addClass("success");
            flag = true;
        }
        var dataString = $("#servicefrm").serialize();
        //var dataString = "name=" + name.val() + "&email=" + email.val() + "&phone=" + phone.val();
        $(".loading").fadeIn("slow").html("Loading...");
        $.ajax({
            type: "POST",
            data: dataString,
            url: "send-data-from.php",
            cache: false,
            success: function (d) {
                $(".form-control").removeClass("success");
                
                  window.location.href = 'https://onlinemba.degree/dypatil/thank-you.php?name='+$(".name").val()+'&campaign='+$("#00N9000000ABA9a").val()+'&source='+$("#00N9000000AAXKh").val();
                    
                    //if(d == 'success') // Message Sent? Show the 'Thank You' message and hide the form
                        //$('.loading').fadeIn('slow').html('<font color="#48af4b">Mail sent Successfully.</font>').delay(3000).fadeOut('slow');
                    //else
                        //$('.loading').fadeIn('slow').html('<font color="#ff5607">Mail not sent.</font>').delay(3000).fadeOut('slow');

                                  }
        });
        return false;
    });
    $("#reset").on('click', function() {
        $(".form-control").removeClass("success").removeClass("error");
    });
})



