// function formValidation(e) {
  function formValidation(e) {
  var message = document.querySelector(".msg");
  var fullName = document.getElementById("fullName").value;
  var message1 = document.querySelector(".msg1");
  var surName = document.getElementById("surName").value;
  var message2 = document.querySelector(".msg2");
  var lastName = document.getElementById("lastName").value;
  var message3 = document.querySelector(".msg3");
  var emailAddress = document.getElementById("emailAddress").value;
  var message4 = document.querySelector(".msg4");
  var password = document.getElementById("myInput").value;
  var message5 = document.querySelector(".msg5");
  var cpassword = document.getElementById("myInput1").value;
  var message6 = document.querySelector(".msg5");
  var dept = document.getElementById("dept").value;
  var message7 = document.querySelector(".msg6");
  var faculty = document.getElementById("faculty").value;
  // var message8 = document.querySelector(".msg7");
  // var projectBrief = document.getElementById("faculty").value;
  // var message9 = document.querySelector(".msg9");

  // var password = document.getElementById("password").value;
  // var message10 = document.querySelector(".msg10");
  // var confirmPassword = document.getElementById("cpassword").value;
  // var message11 = document.querySelector(".msg11");


  if (fullName == null || fullName == "") {
    message.innerHTML = "Your full name is required";
    document.getElementById("fullName").classList.add('invalid');
  }
  else {
    document.getElementById("fullName").classList.remove('invalid');
    message.innerHTML = "";
  }

  if (surName == "" || surName == null || surName.length < 1) {
    message1.innerHTML = "Enter surname";
    document.getElementById("surName").classList.add('invalid');;
  }
  else {
    document.getElementById("surName").classList.remove('invalid');
    message1.innerHTML = "";
  }

  if (lastName == "" || lastName == null || lastName.length < 1) {
    message2.innerHTML = "Enter Last Name";
    document.getElementById("lastName").classList.add('invalid');;
  }
  else {
    document.getElementById("lastName").classList.remove('invalid');
    message2.innerHTML = "";
  }

  // if (phoneNo == "" || phoneNo == null || phoneNo.length != 11) {
  //   message2.innerHTML = "Phone number should be 11 characters";
  //   document.getElementById("phoneNo").classList.add('invalid');
  // }
  // else {
  //   document.getElementById("phoneNo").classList.remove('invalid');
  //   message2.innerHTML = "";
  // }

  if (emailAddress == null || emailAddress == "") {
    message3.innerHTML = "This field is required";
    document.getElementById("emailAddress").classList.add('invalid');
  }
  else {
    document.getElementById("emailAddress").classList.remove('invalid');
    message3.innerHTML = "";
  }

  if (password == "" || password == null) {
    message4.innerHTML = "Fill in your department name please";
    document.getElementById("password").classList.add('invalid');
  }
  else {
    document.getElementById("password").classList.remove('invalid');
    message4.innerHTML = "";
  }

  if (cpassword == "" || cpassword == null) {
    message5.innerHTML = "Fill in your supervisor's name please";
    document.getElementById("cpassword").classList.add('invalid');
  }
  else {
    document.getElementById("cpassword").classList.remove('invalid');
    message5.innerHTML = "";
  }

  if (dept == "" || dept == null) {
    message6.innerHTML = "Fill in the name of the course you are offering please";
    document.getElementById("dept").classList.add('invalid');
  }
  else {
    message6.innerHTML = "";
    document.getElementById("dept").classList.remove('invalid');
  }

  if (faculty == "" || faculty == null) {
    message7.innerHTML = "Fill in your project topic please";
    document.getElementById("faculty").classList.add('invalid');
  }
  else {
    message7.innerHTML = "";
    document.getElementById("faculty").classList.remove('invalid');
  }

  // if (projectType == "" || projectType == null) {
  //   message8.innerHTML = "Fill in your project type please";
  //   document.getElementById("projectType").classList.add('invalid');
  // }
  // else {
  //   message8.innerHTML = "";
  //   document.getElementById("projectType").classList.remove('invalid');
  // }

  // if (projectBrief == "" || projectBrief == null) {
  //   message9.innerHTML = "Give a descriotion of your project please";
  //   document.getElementById("projectBrief").classList.add('invalid');
  // }
  // else {
  //   message9.innerHTML = "";
  //   document.getElementById("projectBrief").classList.remove('invalid');
  // }


  // if (supervisors == "Rukayya Sayeed" || supervisors != "Abdulaziz Abdurrahman Ayo" || supervisors != "Fatima Aminu") {
  //   message5.innerHTML = "Fill in your supervisor's name please";
  //   document.getElementById("supervisors").classList.add('invalid');
  // }

  // else {
  //   document.getElementById("supervisors").classList.remove('invalid');
  //   message5.innerHTML = "";
  // }

  // if (course == "" || course == null) {
  //   message6.innerHTML = "Fill in the name of the course you are offering please";
  //   document.getElementById("course").classList.add('invalid');
  // }
  // else {
  //   message6.innerHTML = "";
  //   document.getElementById("course").classList.remove('invalid');
  // }

  // if (topic == "" || topic == null) {
  //   message7.innerHTML = "Fill in your project topic please";
  //   document.getElementById("topic").classList.add('invalid');
  // }
  // else {
  //   message7.innerHTML = "";
  //   document.getElementById("topic").classList.remove('invalid');
  // }

  // if (projectType != "Type of Project...") {
  //   message8.innerHTML = "Fill in your project type please";
  //   document.getElementById("projectType").classList.add('invalid');
  // }
  // else {
  //   message8.innerHTML = "";
  //   document.getElementById("projectType").classList.remove('invalid');
  // }

  // if (projectBrief == "" || projectBrief == null) {
  //   message9.innerHTML = "Give a descriotion of your project please";
  //   document.getElementById("projectBrief").classList.add('invalid');
  // }
  // else {
  //   message9.innerHTML = "";
  //   document.getElementById("projectBrief").classList.remove('invalid');
  // }


  // if (confirmPassword == "" || confirmPassword == null) {
  //   message11.innerHTML = "fill in this field please";
  //   document.getElementById("confirmPassword").classList.add('invalid');
  //   // return false;
  // }

  // else {
  //   message11.innerHTML = "";
  //   document.getElementById("confirmPassword").classList.remove('invalid');
  // }

  // if (password == "" || password == null) {
  //   message10.innerHTML = "fill in this field please";
  //   document.getElementById("password").classList.add('invalid');
  // }

  // else {
  //   message10.innerHTML = "";
  //   document.getElementById("password").classList.remove('invalid');
  // }

  // if (password.length != confirmPassword.length || password.value != confirmPassword.value) {
  //   message11.innerHTML = "passwords do not match";
  //   document.getElementById("password").classList.add('invalid');
  //   document.getElementById("confirmPassword").classList.add('invalid');
  //   // return false;
  //   // return false;
  // }
  // else {
  //   message10.innerHTML = "";
  //   message11.innerHTML = "";
  //   document.getElementById("password").classList.remove('invalid');
  //   document.getElementById("cpassword").classList.remove('invalid');
  //   }
}
// }