/*
*   Efeito Typed:
*/

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function typeSentence(sentence, elementId) {
    console.log("aqui");
    var letters = sentence.split("");
    for (var i = 0; i<letters.length; i++) {
        await waitForMs(100);
        document.getElementById(elementId).innerHTML += letters[i];
    }
}

async function deleteSentence(elementId) {
    var sentence = document.getElementById(elementId).innerHTML;
    var letters = sentence.split("");
    var initialLength = letters.length;
    for (var i = 0; i<initialLength; i++) {
        await waitForMs(100);
        letters.pop();
        document.getElementById(elementId).innerHTML = letters.join("");
    }
}

async function carousel(elementId, words) {
    var i = 0
    while(true) {
        await typeSentence(words[i], elementId);
        await waitForMs(1500);
        await deleteSentence(elementId);
        await waitForMs(500);
        i++;
        if (i >= words.length) {
            i = 0;
        }
    }
}

/*
* Efeito classe ativa:
*/

document.addEventListener("DOMContentLoaded", () => {
    carousel("hero-typed", ["inovação.", "tecnologia.", "desafios."]);
    console.log("domloaded")
    var links = Array.from(document.getElementsByClassName("offcanvas-item"));
    links.forEach(link => {
        link.addEventListener('click', function () {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');        
        });
    });
})