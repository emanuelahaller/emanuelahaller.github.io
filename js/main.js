function header_navbar_function() {
    var x = document.getElementById("header_navbar");
    if (x.className === "row navbar") {
        x.className += " responsive";
    } else {
        x.className = "row navbar";
    }
    var x = document.getElementById("main_header");
    if (x.className === "sticky-header") {
        x.className += " responsive";
    } else {
        x.className = "sticky-header";
    }
}

function read_more_fct_1() {
    var x = document.getElementById("read_more_text_1")
    if (x.className === "read_more_text") {
        x.className += " responsive"
    } else {
        x.className = "read_more_text"
    }
}