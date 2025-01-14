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
