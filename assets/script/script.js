$(document).ready(function(){
    $("#btn").click(function(){


        if(!validName())
        {

            $("#dobErr").text( "");
            $("#emailErr").text( "  ");
            $("#dobErr").text( "");
            $("#mobErr").text( " ");
            $("#genErr").text("");
            $("#countryErr").text( "");
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#dob").css({border:"none"});
            $("#email").css({border:"none"});
            $("#mobile").css({border:"none"});
            $("#inputCountry").css({border:"none"})
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );
          
            

        }
        else if (!validDate())
        {
            $("#emailErr").text( "  ");
            $("#mobErr").text( " ");
            $("#genErr").text("");
            $("#countryErr").text( "");
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#email").css({border:"none"});
            $("#mobile").css({border:"none"});
            $("#inputCountry").css({border:"none"})
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );
           

        }
        else if (!validEmail())
        {
            $("#dobErr").text( "");
            $("#mobErr").text( " ");
            $("#genErr").text("");
            $("#countryErr").text( "");
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#mobile").css({border:"none"});
            $("#inputCountry").css({border:"none"})
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );
        }
        else if (!validMobile())
        {
            $("#genErr").text("");
            $("#countryErr").text( "");
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#inputCountry").css({border:"none"})
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );
           

        }
        else if (!validGender())
        {
            console.log("gen ok")
          
            $("#countryErr").text( "");
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#inputCountry").css({border:"none"})
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );
        }
        else if (!validCountry())
        {
    
            $("#pssErr").text( "");
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#password").css({border:"none"} );
            $("#password2").css({border:"none"} );

        }
        else if (!validPassword())
        {
          
           
         
            $("#pserr2").text( "");
            $("#checkErr").text("");
            $("#password2").css({border:"none"} );

        }
          else if (!revalidPassword())
        {
         
            $("#checkErr").text("");

        }
        else if (!matchPassword()) {

         $("#pserr2").text( "password and conform password should be same");
         $("#pserr2").css({color:"red"})
        
        
          }
        else if (!validCheckbox())
        {
         console.log("ok")
         

        }
        else{

            console.log("form ok")

            $("#success").css({display:"block"})
            $("#form")[0].reset();
            $("input").css({border:"none"})
            $("#inputCountry").css({border:"none"})

            setTimeout(function(){
                $("#success").fadeOut();
            }, 3000);

            
        }

    
    });
});

// name validation
function validName(){
    let name=$("#name").val();

    if (name === "") {
        $("#nameErr").text("Name Can't be Empty");
        $("#nameErr").css({color:"red"});
        $("#name").css({border:"1px solid red"});
        $("#name").focus();
        return false;
    }
    else if (name.length < 3) {
        $("#nameErr").text("Name Should be at least 3 letters");
        $("#nameErr").css({color:"red"});
        $("#name").css({border:"1px solid red"});
        return false;
    }
    else if (name.charAt(0) >= 'A' && name.charAt(0) <= 'Z') {
        var containsNumber = false;
        for (var i = 0; i < name.length; i++) {
            if (!isNaN(parseInt(name[i]))) {
                containsNumber = true;
                break;
            }
        }
        if (!containsNumber) {
            $("#nameErr").text(" ");
            $("#name").css({border:"1px solid green"});
            return true;
        }
        else {
            $("#nameErr").text("Name Should not contain numbers");
            $("#nameErr").css({color:"red"});
            $("#name").css({border:"1px solid red"});
            return false;
        }
    }
    else {
        $("#nameErr").text("Name first letter should be capital and name should not contain numbers");
        $("#nameErr").css({color:"red"});
        $("#name").css({border:"1px solid red"});
        return false;
    }
}
//Date validation

function validDate()
{
    
        var dob = $("#dob").val();
        var today = new Date();
        var birthDate = new Date(dob);
        var age = today.getFullYear() - birthDate.getFullYear();
        var monthDiff = today.getMonth() - birthDate.getMonth();
        console.log(age)
        
        // If the birth month is after the current month or if the birth month is the same as the current month 
        // but the day of the birth month is after the current day
        // if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        //     age--;
        // }
    
        if (dob === "") {
            $("#dobErr").text("Please Enter Dob");
            $("#dobErr").css({color: "red"});
            $("#dob").css({border: "1px solid red"});
            $("#dob").focus();
            return false;
        } else if (age < 18) {
            $("#dobErr").text("Age should be above 18 years.");
            $("#dobErr").css({color: "red"});
            $("#dob").css({border: "1px solid red"});
            return false;
        } else {
            $("#dobErr").text("");
            $("#dob").css({border: "1px solid green"});
            return true;
        }
    
    


}
//email validation
function validEmail(){

    let email = $("#email").val();
    
    let atIndex = email.indexOf("@");
    if (email.trim() === "") {
        $("#emailErr").text( "Please Enter Email");
        $("#emailErr").css({color:"red"});
        $("#email").css({border:"1px solid red"});
        $("#email").focus();
       
        return false;
     }

     else if (atIndex === -1 || email.indexOf(".") === -1) {
        $("#emailErr").text( "Please Enter valid Email");
        $("#emailErr").css({color:"red"});
        $("#email").css({border:"1px solid red"});
        return false;
      } else {
        var domain = email.substring(atIndex + 1);
        if (/^\d/.test(domain)) {
            $("#emailErr").text( "Numbers are not allowed immediately after '@'");
            $("#emailErr").css({color:"red"});
            $("#email").css({border:"1px solid red"});
          return false;
        } else {
            $("#emailErr").text( " ");
            $("#email").css({border:"1px solid green"});
          return true;
        }
      }

}
//mobile validation

function validMobile(){
    var mobile = document.getElementById("mobile").value;
  

  if (mobile === "") {
    $("#mobErr").text( "Please Enter Mobile");
    $("#mobErr").css({color:"red"});
    $("#mobile").css({border:"1px solid red"});
    $("#mobile").focus();
    return false;
  } else {
    if (mobile.length === 10 && (mobile.startsWith('9') || mobile.startsWith('8') || mobile.startsWith('7') || mobile.startsWith('6'))) {
      $("#mobErr").text( " ");
      $("#mobile").css({border:"1px solid green"});
      return true;
    } else {
      $("#mobErr").text( "Number should start with 9, 8, 7, or 6 and should be 10 digits long");
      $("#mobErr").css({color:"red"});
      $("#mobile").css({border:"1px solid red"});
      return false;
    }
  }
}

//gender validations

function validGender() {
    var gen = $("input[name='radio-stacked']:checked").val();
    if (gen === undefined) {
        $("#genErr").text("Please Select Gender");
        $("#genErr").css({color:"red"});
        return false; 
    } else {
        $("#genErr").text("");
        return true; 
    }
}


//country validation

function validCountry()
{  
    var country = $("#inputCountry").val();
  if (country === "") {
    $("#countryErr").text( "Please Select  Country");
    $("#countryErr").css({color:"red"});
    $("#inputCountry").css({border:"1px solid red"})

    return false

  }

  else {
    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "green"
    return true
  }


}
//password validation

function validPassword()
{
    let password = $("#password").val();
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
  
    const specialChars = "!@#$%^&*()_-+=<>,.?/:;{}[]|";
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
  
      else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      }
  
      else if (char >= '0' && char <= '9') {
        hasNumber = true;
      }
  
      else if (specialChars.includes(char)) {
        hasSpecialChar = true;
      }
    }
  
  
    if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
  
      $("#pssErr").text( "");
      $("#password").css({border:"1px solid green"} );
      return true;
    } else {
  
        $("#pssErr").text("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        $("#password").css({border:"1px solid red"} );
        $("#pssErr").css({color:"red"})
        $("#password").focus();
      return false;
    }
  
}
//revalid password
function revalidPassword()
{
    let password = $("#password2").val();
    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecialChar = false;
  
    const specialChars = "!@#$%^&*()_-+=<>,.?/:;{}[]|";
    for (let i = 0; i < password.length; i++) {
      const char = password[i];
  
      if (char >= 'A' && char <= 'Z') {
        hasUppercase = true;
      }
  
      else if (char >= 'a' && char <= 'z') {
        hasLowercase = true;
      }
  
      else if (char >= '0' && char <= '9') {
        hasNumber = true;
      }
  
      else if (specialChars.includes(char)) {
        hasSpecialChar = true;
      }
    }
  
  
    if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
  
      $("#pserr2").text( "");
      $("#password2").css({border:"1px solid green"} );
      return true;
    } else {
  
        $("#pserr2").text("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        $("#password2").css({border:"1px solid red"} );
        $("#pserr2").css({color:"red"})
        $("#password2").focus();
      return false;
    }
  
}
function matchPassword() {
    let password = $("#password").val();
    let password2 = $("#password2").val();
  
    if (password == password2) {
      $("#pssErr").innerHTML = "";
      return true;
  
    }
    else {
        
      return false;
  
  
    }
  
  
  }
  //terms and conditions
  function validCheckbox() {
    var isChecked = $('input[type="checkbox"]').is(":checked");

    if (!isChecked) {
        $("#checkErr").text("Please agree to the terms and conditions.");
        $("#checkErr").css({color:"red"});
        $("input[type='checkbox']").css("border", "1px solid red");
        return false;
    } else {
        $("#checkErr").text("");
        $("input[type='checkbox']").css("border", "2px solid green");
        return true;
    }
}

  //show password

  $(document).ready(function() {
    $("#togglePassword").click(function() {
      var x = $("#password");
      if (x.attr("type") === "password") {
        x.attr("type", "text");
      } else {
        x.attr("type", "password");
      }
    });
  
    $("#togglePassword2").click(function() {
      var y = $("#password2");
      if (y.attr("type") === "password") {
        y.attr("type", "text");
      } else {
        y.attr("type", "password");
      }
    });
  });
  