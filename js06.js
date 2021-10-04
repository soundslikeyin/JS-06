// Exercise #1

const js_style = () => {
    const text = document.querySelector('#text');
    text.style.color = "red";
    text.style.fontSize = "20px";
    text.style.fontFamily = "Sans-serif";
}


// Exercise #2
    const getFormvalue = () => {
        const fname = document.forms["form1"]["fname"].value;
        const lname = document.forms["form1"]["lname"].value;
        window.alert(fname +" "+ lname);
    }

// Exercise #3
    const countLink = () => {
        const linkNum = document.querySelectorAll('a').length;
        const firstLink = document.querySelector('a').getAttribute('href');
        const lastLink = document.querySelectorAll('a')[linkNum-1].getAttribute('href');
        window.alert(linkNum);
        window.alert(firstLink);
        window.alert(lastLink);
    }

