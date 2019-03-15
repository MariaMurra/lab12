/*eslint-env browser*/

var i, h2, div, h2Elements, faqs;
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var openClose = function (currentlySelected) {
    "use strict";
    //GET THE CURRENTLY CLICKED HEADING
    h2 = currentlySelected.currentTarget;
    // GET THE H2 TAG'S SIBLING DIV TAG TO SHOW OR HIDE
    div = h2.nextElementSibling;
    //GET THE ARRAY OF H2 ELEMENTS
    h2Elements = faqs.getElementsByTagName("h2");
    //LOOP THROUGH ARRAY OF H2 ELEMENTS
    for (i = 0; i < h2Elements.length; i += 1) {
        //IF THE H2 ELEMENT IN THE ARRAY DOEsN"T EQUAL THE CURRENTLY CLICKED H2 THEN HIDE ALL CLASS ATTRIBUTES FOR THE H2 AND CHILD DIVS.
        if (h2Elements[i] !== currentlySelected.currentTarget) {
            h2Elements[i].removeAttribute("class");
            h2Elements[i].nextElementSibling.removeAttribute("class");
        }
    }
    //TOGGLE PLUS AND MINUS IMAGES IN H2 BY ADDING OR REMOVING A CLASS
    if (h2.hasAttribute("class")) {
        h2.removeAttribute("class");
    } else {
        h2.setAttribute("class", "minus");
    }
    //TOGGLE DIV VISIBILITY BY ADDING OR REMOVING A CLASS
    if (div.hasAttribute("class")) {
        div.removeAttribute("class");
    } else {
        div.setAttribute("class", "open");
    }
};

window.addEventListener("load", function () {
    "use strict";
    //GET MAIN ACCORDION
    faqs = $("faqs");
    //GEt THE H2 ELEMENTS OUT OF THE ACCORDION
    h2Elements = faqs.getElementsByTagName("h2");
    //ATTACH EVENT HANDLERS TO EACH H2 ELEMENT
    for (i = 0; i < h2Elements.length; i += 1) {
        h2Elements[i].addEventListener("click", openClose);
    }
    //SET FOCUS ON FIRST H2 ELEMENT'S <a> TAG
    h2Elements[0].firstChild.focus();
});