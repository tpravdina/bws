function isCorrectEmail() {
  const emailRegex = /\S+@\S+\.\S+/;
  const emai = document.getElementById('formEmail').value;
  const result = emailRegex.test(emai);
  return result;
}

function isCorrectName() {
  const nameRegex = /^[a-zA-Z ]{4,}$/;
  const name = document.getElementById('formName').value;
  const result = nameRegex.test(name);
  return result;
}

function isCorrectMessage() {
  const message = document.getElementById('formMessage').value;
  return message.length > 0 && message.length < 251;
}

function validateField(elem, isCorrectField) {
  document.getElementById(elem).style.visibility = 'hidden';
  if (!isCorrectField()) {
    document.getElementById(elem).style.visibility = 'visible';
  }
}

// eslint-disable-next-line import/prefer-default-export
export function validateForm() {
  document
    .getElementById('formEmail')
    .addEventListener('focusout', () => {
      validateField('emailHint', isCorrectEmail);
    });
  document
    .getElementById('formName')
    .addEventListener('focusout', () => {
      validateField('nameHint', isCorrectName);
    });
  document
    .getElementById('formMessage')
    .addEventListener('focusout', () => {
      validateField('messageHint', isCorrectMessage);
    });

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (isCorrectEmail() && isCorrectName() && isCorrectMessage()) {
      const formData = new FormData(this);
      fetch('http://localhost:3000', {
        method: 'post',
        body: formData,
      })
        .then((response) => response.text)
        .then(() => {
          document.getElementById('contactForm').reset();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });
}
