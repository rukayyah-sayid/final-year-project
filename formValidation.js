function formValidation(e) {
  function formValidation(e) {
  var message = document.querySelector(".msg");
  var emailAddress = document.getElementById("emailAddress").value;
  var message1 = document.querySelector(".msg1");
  var phoneNo = document.getElementById("phone").value;
  var message2 = document.querySelector(".msg2");
  var sessions = document.getElementById("session").value;
  var message3 = document.querySelector(".msg3");
  var department = document.getElementById("dept").value;
  var message4 = document.querySelector(".msg4");
  var supervisor = document.getElementById("supervisor").value;
  var message5 = document.querySelector(".msg5");
  var courseName = document.getElementById("course").value;
  var message6 = document.querySelector(".msg6");
  var projectTopic = document.getElementById("topic").value;
  var message7 = document.querySelector(".msg7");
  var projectType = document.getElementById("projectType").value;
  var message8 = document.querySelector(".msg8");
  var projectBrief = document.getElementById("projectBrief").value;
  var message9 = document.querySelector(".msg9");

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

  if (emailAddress == "" || emailAddress == null || emailAddress.length < 1) {
    message1.innerHTML = "Enter email address";
    document.getElementById("emailAddress").classList.add('invalid');;
  }
  else {
    document.getElementById("emailAddress").classList.remove('invalid');
    message1.innerHTML = "";
  }

  if (phoneNo == "" || phoneNo == null || phoneNo.length != 11) {
    message2.innerHTML = "Phone number should be 11 characters";
    document.getElementById("phoneNo").classList.add('invalid');
  }
  else {
    document.getElementById("phoneNo").classList.remove('invalid');
    message2.innerHTML = "";
  }

  if (sessions == null || sessions == "") {
    message3.innerHTML = "This field is required";
    document.getElementById("sessions").classList.add('invalid');
  }
  else {
    document.getElementById("sessions").classList.remove('invalid');
    message3.innerHTML = "";
  }

  if (department == "" || department == null) {
    message4.innerHTML = "Fill in your department name please";
    document.getElementById("department").classList.add('invalid');
  }
  else {
    document.getElementById("department").classList.remove('invalid');
    message4.innerHTML = "";
  }

  if (supervisor == "" || supervisor == null) {
    message5.innerHTML = "Fill in your supervisor's name please";
    document.getElementById("supervisor").classList.add('invalid');
  }
  else {
    document.getElementById("supervisor").classList.remove('invalid');
    message5.innerHTML = "";
  }

  if (courseName == "" || courseName == null) {
    message6.innerHTML = "Fill in the name of the course you are offering please";
    document.getElementById("courseName").classList.add('invalid');
  }
  else {
    message6.innerHTML = "";
    document.getElementById("courseName").classList.remove('invalid');
  }

  if (projectTopic == "" || projectTopic == null) {
    message7.innerHTML = "Fill in your project topic please";
    document.getElementById("projectTopic").classList.add('invalid');
  }
  else {
    message7.innerHTML = "";
    document.getElementById("projectTopic").classList.remove('invalid');
  }

  if (projectType == "" || projectType == null) {
    message8.innerHTML = "Fill in your project type please";
    document.getElementById("projectType").classList.add('invalid');
  }
  else {
    message8.innerHTML = "";
    document.getElementById("projectType").classList.remove('invalid');
  }

  if (projectBrief == "" || projectBrief == null) {
    message9.innerHTML = "Give a descriotion of your project please";
    document.getElementById("projectBrief").classList.add('invalid');
  }
  else {
    message9.innerHTML = "";
    document.getElementById("projectBrief").classList.remove('invalid');
  }


  if (supervisors == "Rukayya Sayeed" || supervisors != "Abdulaziz Abdurrahman Ayo" || supervisors != "Fatima Aminu") {
    message5.innerHTML = "Fill in your supervisor's name please";
    document.getElementById("supervisors").classList.add('invalid');
  }

  else {
    document.getElementById("supervisors").classList.remove('invalid');
    message5.innerHTML = "";
  }

  if (course == "" || course == null) {
    message6.innerHTML = "Fill in the name of the course you are offering please";
    document.getElementById("course").classList.add('invalid');
  }
  else {
    message6.innerHTML = "";
    document.getElementById("course").classList.remove('invalid');
  }

  if (topic == "" || topic == null) {
    message7.innerHTML = "Fill in your project topic please";
    document.getElementById("topic").classList.add('invalid');
  }
  else {
    message7.innerHTML = "";
    document.getElementById("topic").classList.remove('invalid');
  }

  if (projectType != "Type of Project...") {
    message8.innerHTML = "Fill in your project type please";
    document.getElementById("projectType").classList.add('invalid');
  }
  else {
    message8.innerHTML = "";
    document.getElementById("projectType").classList.remove('invalid');
  }

  if (projectBrief == "" || projectBrief == null) {
    message9.innerHTML = "Give a descriotion of your project please";
    document.getElementById("projectBrief").classList.add('invalid');
  }
  else {
    message9.innerHTML = "";
    document.getElementById("projectBrief").classList.remove('invalid');
  }


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
