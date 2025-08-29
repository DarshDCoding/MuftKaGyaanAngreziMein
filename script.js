console.log("Radhe Radhe...")

// https://api.adviceslip.com
// fetch('https://api.adviceslip.com/advice')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch (err => console.log(err)) // this works........


// Let's get elements
const adviceNoElement = document.getElementById("advice-no");
const adviceElement = document.getElementById("advice");
const getAdviceBtn = document.getElementById("get-advice");


function typeAdviceText(text, element, speed = 30) {
    element.innerHTML = '';
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            // Use &nbsp; for spaces so they are visible during typing
            const char = text.charAt(i) === ' ' ? '&nbsp;' : text.charAt(i);
            element.innerHTML += char;
            i++;
            setTimeout(typeChar, speed);
        } else {
            // After typing, restore normal text for selection/copying
            element.innerText = text;
        }
    }
    typeChar();
}

getAdviceBtn.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
        .then(res => res.json())
        .then(data => {
            const newAdvice = data.slip.advice;
            const adviceNum = data.slip.id;
            adviceNoElement.innerText = `ADVICE #${adviceNum}`;
            typeAdviceText(`"${newAdvice}"`, adviceElement);
        })
        .catch(err => {
            adviceNoElement.innerText = "Darsh's Advice";
            typeAdviceText('"Believe in yourself... (Try later for better advice)."', adviceElement);
        });
});

