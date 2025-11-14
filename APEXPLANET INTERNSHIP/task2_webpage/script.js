document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // prevent actual form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  // Email regex pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (name === '' || email === '' || message === '') {
    status.textContent = '❌ All fields are required!';
    return;
  }

  if (!email.match(emailPattern)) {
    status.textContent = '❌ Please enter a valid email address!';
    return;
  }

  // If passed all checks
  status.style.color = 'green';
  status.textContent = '✅ Message sent successfully!';
  // Reset form after success (optional)
  document.getElementById('contactForm').reset();
});
