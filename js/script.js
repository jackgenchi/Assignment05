window.addEventListener('load', init) // handle load event
function init () {
    const $ = (id) => document.getElementById(id); //helper function
    let test = $('empForm'); // load full form object to test
    test.addEventListener('submit', (e) => { //event listener on event "submit"
        for (let i of e.target) {
            if(i.id === "submit")
                break;
            console.log(i.id + ": " + i.value);
        } //iterate through all form array elements
        e.preventDefault(); //prevent default behavior
    });
}