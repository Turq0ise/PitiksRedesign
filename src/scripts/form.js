let getFormItems = document.getElementsByClassName("form-item");
for(let i = 0; i < getFormItems.length; i++) {
    let loopItem = getFormItems.item(i);
    loopItem.children.item(1).addEventListener("focus", elem => {
        elem.target.style.outline = "none";
        elem.target.previousElementSibling.style.top = "-1.6rem";
        elem.target.previousElementSibling.style.border = "var(--border)";
    });
    loopItem.children.item(1).addEventListener("blur", elem => {
        if(!elem.target.value) {
            elem.target.previousElementSibling.style.border = "";
            return elem.target.previousElementSibling.style.top = "";
        };
    });
};

let getContactForm = document.getElementById("contact-form");
getContactForm.addEventListener("submit", e => {
    e.preventDefault();
    const form = e.target;
    let data = new FormData(form);
    
    fetch(form.action, {
        method: "POST",
        body: data
    }).then(
        formSuccess(e)
    );
});

function formSuccess(e) {
    let elem = e.target;
    for(let i = 0; i < elem.length; i++) {
        elem[i].value = "";
    }
    alert("Success");
}