const btn = document.querySelector('.btn')

const inputFirstName = document.querySelector('[placeholder="First Name"]')
const inputLastName = document.querySelector('[placeholder="Last Name"]')
const inputEmail = document.querySelector('[placeholder="Email Address"]')
const inputPassword = document.querySelector('[placeholder="Password"]')

const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')

const reg =
	/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const showError = () => {
	if (inputFirstName.value == '') {
		firstName.classList.add('active')
	} else {
		firstName.classList.remove('active')
	}
	lastNameFn()
	emailFn()
	passwordFn()
}

function lastNameFn() {
	if (inputLastName.value == '') {
		lastName.classList.add('active')
	} else {
		lastName.classList.remove('active')
	}
}

function emailFn() {
	if (inputEmail.value == '') {
		email.classList.add('active')
		validateEmail()
	} else {
		email.classList.remove('active')
		console.log('ok')
	}
}

function validateEmail() {
	if (inputEmail.value.match(reg)) {
		email.classList.remove('active')
	} else {
		email.classList.add('active')
	}
}

function passwordFn() {
	if (inputPassword.value == '') {
		password.classList.add('active')
	} else {
		password.classList.remove('active')
	}
}

btn.addEventListener('click', showError)
