const XMLH = new XMLHttpRequest();

XMLH.addEventListener('load', () => {
    console.log(XMLH.response);
}); // *Shows backend

XMLH.open('GET','https://supersimplebackend.dev');
XMLH.send();