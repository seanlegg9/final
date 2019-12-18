let p = 0;
let order = document.forms.order;
let size = document.forms.order.elements.size;
Pepperoni.style.visibility='hidden'
SausageSlice.style.visibility='hidden'
Sausage.style.visibility='hidden'
Beef.style.visibility='hidden'
Salami.style.visibility='hidden'
Chicken.style.visibility='hidden'
Bacon.style.visibility='hidden'
Pineapple.style.visibility='hidden'
Olives.style.visibility='hidden'
order.oninput = function() {
    if (document.querySelector('.itasau:checked') !== null) { // New: Lets me chcek if a specific object is in a class. In this case, if pepperoni is checked.
        Sausage.style.visibility='visible'
    } else {
        Sausage.style.visibility='hidden'
    }
    if (document.querySelector('.slisau:checked') !== null) { 
        SausageSlice.style.visibility='visible'
    } else {
        SausageSlice.style.visibility='hidden'
    }
    if (document.querySelector('.beef:checked') !== null) { 
        Beef.style.visibility='visible'
    } else {
        Beef.style.visibility='hidden'
    }
    if (document.querySelector('.sal:checked') !== null) { 
        Salami.style.visibility='visible'
    } else {
        Salami.style.visibility='hidden'
    }
    if (document.querySelector('.chi:checked') !== null) { 
        Chicken.style.visibility='visible'
    } else {
        Chicken.style.visibility='hidden'
    }
    if (document.querySelector('.bac:checked') !== null) {
        Bacon.style.visibility='visible'
    } else {
        Bacon.style.visibility='hidden'
    }
    if (document.querySelector('.pine:checked') !== null) { 
        Pineapple.style.visibility='visible'
    } else {
        Pineapple.style.visibility='hidden'
    }
    if (document.querySelector('.oli:checked') !== null) { 
        Olives.style.visibility='visible'
    } else {
        Olives.style.visibility='hidden'
    }
    if (document.querySelector('.pep:checked') !== null) {  // New: Lets me chcek if a specific object is in a class. In this case, if pepperoni is checked.
        Pepperoni.style.visibility='visible'
    } else {
        Pepperoni.style.visibility='hidden'
    }
}
order.onsubmit = function(event) {
    event.preventDefault()
    if (size.value == "small") {
        p = p + 5.99
    } else if (size.value == "medium") {
        p = p + 7.99
    } else {
        p = p + 10.99
    }
    let c = document.querySelectorAll("input:checked").length // New: This allows me to easily see how many objects are in a certain style. In this case, boxes that are checked.
    c = c * 0.5
    let pricetaxless = p + c;
    let tax = pricetaxless * .029
    tax = tax.toFixed(2) // New: Rounds numbers for me. In this case, the tax.
    tax = parseFloat(tax) // New: When the number is rounded, it becomes a string. This command makes it into a float again.
    let fullprice = pricetaxless + tax 
    fullprice = fullprice.toFixed(2)
    pizzataxless.append(pricetaxless)
    pizzatax.append(tax)
    pizzafull.append(fullprice)
}