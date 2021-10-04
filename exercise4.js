
// Exercise #4

// Select the section with a container id without using querySelector.
const sectionContainer1 = document.getElementById("container")

// Select the section with a container id using querySelector.
const sectionContainer2 = document.querySelector('#container');

// Select all the items list with a class of "second".
// const class2nd = document.getElementsByClassName("second");
const class2nd = document.querySelectorAll('.second');

// Select a list item with a class of third, but only the list item inside of the ol tag.
const class3rd = document.querySelector('ol > li.third');

// Give the text "Hello!" to the section with a container id.
sectionContainer1.append('Hello!');

// Add the main class to the div with a footer class.
document.querySelector("div.footer").classList.add("main");

// Remove the main class on the div with a footer class.
document.querySelector("div.footer").classList.remove("main");

// Create a new li element. 
const newEl = document.createElement('li');

// Give the li the text "four". 
newEl.append('four');
newEl.className = "four"; 

// Append the li to the ul element.
document.querySelector("ul").append(newEl);


//Add on to Exercise #4
//Loop over all the li inside the ol tag and give them a background "green" color.

const colorChange = () => {
    const ol_list = document.querySelectorAll('ol');

    for (i = 0; i < ol_list.length; i++) {
        ol_list[i].style.backgroundColor = "green";
    }
}

//Remove the div with a footer class.
document.querySelector('div.footer').remove();


// For testing
// const test = () => {
    // const test = ;
    // test.style.color = "red";

    // for (i = 0; i < test.length; i++) {
    //     test[i].style.color = "red";
    //     test[i].style.fontSize = "20px";
    //     test[i].style.fontFamily = "Sans-serif";
    // }
// }