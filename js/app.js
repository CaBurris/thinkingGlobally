
/* NOTES---
const myHeading = document.getElementsByTagName("h1")[0];
const myButton = document.getElementById("myButton");
const myTextInput = document.getElementById("myTextInput");

myButton.addEventListener('click', () => {
    myHeading.style.color = myTextInput.value;
});

*/

const myList = document.getElementsByTagName('li');

for (let i = 0; i < myList.length; i += 1) {
    myList[i].style.color = 'purple';
}

const errorNotPurple = document.getElementsByClassName('error-not-purple');

for (let i = 0; i < errorNotPurple.length; i += 1) {
    errorNotPurple[i].style.color = 'red';
}
