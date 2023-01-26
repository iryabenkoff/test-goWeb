const refs = {
  input: document.querySelectorAll('.form__input'),
  form: document.querySelector('.form__form'),
  placeholder: document.querySelectorAll('.form__placeholder'),
  formWorning: document.querySelector('.form__worning'),
};

// input

function handleInput(e) {
  const namePlaceholder = refs.placeholder[0];
  const emailPlaceholder = refs.placeholder[1];
  const {
    elements: { name, email },
  } = e.currentTarget;

  if (name.value.length > 0) {
    namePlaceholder.classList.add('x');
  } else {
    namePlaceholder.classList.remove('x');
  }

  if (email.value.length > 0) {
    emailPlaceholder.classList.add('x');
  } else {
    emailPlaceholder.classList.remove('x');
  }
}

refs.form.addEventListener('input', handleInput);

// submit

function handleSubmit(e) {
  const { formWorning } = refs;
  const {
    elements: { name, email },
  } = e.currentTarget;

  if (name.value === '' || email.value === '') {
    e.preventDefault();
    formWorning.style.opacity = '1';
  } else {
    formWorning.style.opacity = '0';
  }

  if (name.value && email.value) {
    e.currentTarget.reset();
  }
}

refs.form.addEventListener('submit', handleSubmit);
