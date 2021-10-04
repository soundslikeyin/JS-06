// Exercise #3
const countLink = () => {
    const linkNum = document.querySelectorAll('a').length;
    const firstLink = document.querySelector('a').getAttribute('href');
    const lastLink = document.querySelectorAll('a')[linkNum - 1].getAttribute('href');
    window.alert(linkNum);
    window.alert(firstLink);
    window.alert(lastLink);
}
