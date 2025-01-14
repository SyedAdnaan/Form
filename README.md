<!DOCTYPE html>
<html lang="en">
<head>
<!-- basic -->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- mobile metas -->
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="viewport" content="initial-scale=1, maximum-scale=1">
<!-- site metas -->
<title>Contact</title>
<meta name="keywords" content="">
<meta name="description" content="">
<meta name="author" content=""> 
<!-- bootstrap css -->
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<!-- style css -->
<link rel="stylesheet" type="text/css" href="./style.css">
<!-- Responsive-->
<link rel="stylesheet" href="css/responsive.css">
<!-- fevicon -->
<link rel="icon" href="images/fevicon.png" type="image/gif" />
<!-- Scrollbar Custom CSS -->
<link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css">
<!-- Tweaks for older IEs-->
<link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
<!-- owl stylesheets --> 
<link rel="stylesheet" href="css/owl.carousel.min.css">
<link rel="stylesheet" href="css/owl.theme.default.min.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.css" media="screen">
<link rel="stylesheet" href="css/bootstrap.min.css">
<link rel="stylesheet" href="css/animate.css">
</head>
<body>
<div class="container-fluid">
  <h1 class="what_taital">Contact us</h1>
  <p class="amet_text">Get in touch!<br>Use the form below to drop us an e-mail<br>We'd love to hear from you.</p>
  <div class="contact_section2">
    <div class="row">
      <div class="col-md-6 padding_left_0">
        <div class="mail_section">
          <form id="contactForm">
            <input type="text" class="mail_text_1" id="name" placeholder="Name" name="Name">
            <input type="text" class="mail_text_1" id="phone" placeholder="Phone Number" name="Phone Number">
            <input type="email" class="mail_text_1" id="email" placeholder="Email" name="Email">
            <textarea class="massage_text" id="message" placeholder="Message" rows="5" name="Message"></textarea>

            <!-- Error messages -->
            <div id="nameError" class="error-message" style="display:none;"></div>
            <div id="emailError" class="error-message" style="display:none;"></div>
            <div id="phoneError" class="error-message" style="display:none;"></div>
            <div id="messageError" class="error-message" style="display:none;"></div>

            <div class="send_bt">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
      <div class="col-md-6 padding_0">
        <div class="map-responsive">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927767.385494806!2d46.16168435943056!3d24.723743944814256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2sRiyadh%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1736700645850!5m2!1sen!2sin" width="600" height="400" frameborder="0" style="border:0; width: 100%;" allowfullscreen=""></iframe>
        </div>
      </div>
    </div>
  </div>
</div>
<script>
  document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();  // Prevent form from submitting normally

  // Clear previous errors
  const errorElements = document.querySelectorAll('.error-message');
  errorElements.forEach(el => el.style.display = 'none');

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  // Validation flags
  let isValid = true;

  // Name validation
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    document.getElementById('nameError').style.display = 'block';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '' || !emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Valid email is required';
    document.getElementById('emailError').style.display = 'block';
    isValid = false;
  }

  // Phone validation
  const phonePattern = /^[0-9]{10}$/;
  if (phone === '' || !phonePattern.test(phone)) {
    document.getElementById('phoneError').textContent = 'Valid phone number is required';
    document.getElementById('phoneError').style.display = 'block';
    isValid = false;
  }

  // Message validation
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    document.getElementById('messageError').style.display = 'block';
    isValid = false;
  }

  // If form is valid, send the data via AJAX to the server
  if (isValid) {
    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message
    };

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'scripts/send-email.php', true); // Pointing to the PHP script
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
      if (xhr.status === 200) {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset(); // Optionally reset the form
      } else {
        alert('Error occurred. Please try again.');
      }
    };
    xhr.send(JSON.stringify(formData));
  }
});

</script>
</body>
</html>
