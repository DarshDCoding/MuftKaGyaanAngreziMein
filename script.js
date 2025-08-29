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

getAdviceBtn.addEventListener('click', ()=>{
    let newAdvice = ""

    fetch('https://api.adviceslip.com/advice')
.then(res => res.json())
.then(data =>{
    newAdvice = data.slip.advice
    adviceNum = data.slip.id
    
    adviceNoElement.innerText = `ADVICE #${adviceNum}`;
    adviceElement.innerText = `"${newAdvice}"`
})
.catch (err =>{
    adviceNoElement.innerText = "Darsh's Advice";
    adviceElement.innerText = '"Believe in yourself... (Try later for better advice)."'
}
) 
})

