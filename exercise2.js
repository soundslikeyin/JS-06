
// Exercise #2
const getFormvalue = () => {
    const fname = document.forms["form1"]["fname"].value;
    const lname = document.forms["form1"]["lname"].value;
    window.alert(fname + " " + lname);
}
