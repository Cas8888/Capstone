const username = document.getElementById ('subject');
const loginForm = document.getElementById ('form1');
const invalidSubject = document.getElementById ('invalidsubject');

username.addEventListener ('input', function(e) {

const pattern = /^[0-9]+$/;
const currentValue = e.target.value;
const valid = pattern.test(currentValue);

if(valid) {
invalidSubject.style.display = 'block'
} else {
invalidSubject.style.display = 'none'
}

})


