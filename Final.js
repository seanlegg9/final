let p = 0;
let order = document.forms.order;
let size = document.forms.order.elements.size;
// let pep = document.forms.order.elements.pep;
// let itasau = document.forms.order.elements.itasau;
// let slisau = document.forms.order.elements.slisau;
// let beef = document.forms.order.elements.beef;
// let sal = document.forms.order.elements.sal;
// let chi = document.forms.order.elements.chi;
// let bac = document.forms.order.elements.bac;
// let ham = document.forms.order.elements.ham;
// let philsteak = document.forms.order.elements.philsteak;
// let mush = document.forms.order.elements.mush;
// let oni = document.forms.order.elements.oni;
// let grepep = document.forms.order.elements.grepep;
// let blaoli = document.forms.order.elements.blaoli;
// let jal = document.forms.order.elements.jal;
// let rrp = document.forms.order.elements.rrp;
// let tom = document.forms.order.elements.tom;
// let greoli = document.forms.order.elements.greoli;
// let pine = document.forms.order.elements.pine;
// let cheche = document.forms.order.elements.cheche;
// let provche = document.forms.order.elements.provche;
// let feta = document.forms.order.elements.feta;
// let sauce = document.forms.order.elements.sauce;

order.onsubmit = function(event) {
    event.preventDefault()
    if (size = "small") {
        p = p + 5.99
    } else if (size = "medium") {
        p = p + 7.99
    } else {
        p = p + 10.99
    }
    if (document.querySelector('.sauce:checked') !== null) { // Lets me chcek if a specific object is in a class. In this case, if sauce is checked.
        p = p + 0.25
    }
    let c = document.querySelectorAll("input:checked").length // New: This allows me to easily see how many objects are in a certain style. In this case, boxes that are checked.
    c = c * 0.5
    let pricetaxless = p + c;
    let tax = pricetaxless * .029
    let fullprice = pricetaxless + tax
    console.log(pricetaxless)
    console.log(tax)
    console.log(fullprice)
}