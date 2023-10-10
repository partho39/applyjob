function validateForm() {
  // Get form inputs
  var jobType = document.getElementById('job-type').value;
  var fullName = document.getElementById('full-name').value;
  var email = document.getElementById('email').value;
  var phoneNumber = document.getElementById('phone-number').value;
  var gender = document.getElementById('gender').value;
  var age = document.getElementById('age').value;
  var district = document.getElementById('district').value;
  var upazila = document.getElementById('upazila').value;
  var termsCheckbox = document.getElementById('acceptTerms');

  // Validate job type
  if (jobType === '') {
    alert('Please select a job type');
    return false;
  }

  // Validate full name
  if (fullName === '') {
    alert('Please enter your full name');
    return false;
  }

  // Validate email
  if (email === '') {
    alert('Please enter your email');
    return false;
  }

  // Validate phone number
  if (phoneNumber === '') {
    alert('Please enter your phone number');
    return false;
  }

  // Validate gender
  if (gender === '') {
    alert('Please select your gender');
    return false;
  }

  // Validate age
  if (age === '') {
    alert('Please enter your age');
    return false;
  }

  // Validate district
  if (district === '') {
    alert('Please select a district');
    return false;
  }

  // Validate upazila
  if (upazila === '') {
    alert('Please select an upazila');
    return false;
  }

  // Validate terms checkbox
  if (!termsCheckbox.checked) {
    alert('Please accept the terms and conditions');
    return false;
  }

  return true; // Form is valid
}
