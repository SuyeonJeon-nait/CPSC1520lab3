//Task 1 – Show the JavaScript Resources
const showResources = document.querySelector('#resources');

let isShowResources = false;
document.querySelector('#show-resources').addEventListener('click', (e) => {
    if (isShowResources === true) {
        isShowResources = false;
        showResources.classList.add('d-none');
    } else {
        isShowResources = true;
        showResources.classList.remove('d-none');
    }
});

//Task 2 Making the links bold.
const styleFont = document.querySelector('#resources');
styleFont.addEventListener('mouseover', textBold);

function textBold(e) { 
    console.log(e.target);
    e.target.classList.add('fw-bold');
}

//Task 3 – Remove the bold font from the links
styleFont.addEventListener('mouseout', backToNormal);
function backToNormal(e) { 
    console.log(e.target);
    e.target.classList.remove('fw-bold');
}

//Task 4 – Italicize a clicked item. 
styleFont.addEventListener('click', makeItalicize);
function makeItalicize(e) { 
    console.log(e.target);
    e.target.classList.add('fst-italic');
}

//Task 5 – Remove Italic
styleFont.addEventListener('mouseout', removeItalicize);
function removeItalicize(e) { 
    console.log(e.target);
    e.target.classList.remove('fst-italic');
}