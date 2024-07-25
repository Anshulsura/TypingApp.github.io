let typeContent = document.querySelector('.typeContent p');

let typeContentInput = document.querySelector('.typeContent input');

let userError = document.querySelector('.mistakes');

let cpm = document.querySelector('.cpm');

let time;

let maxTime = 60;
let timeLeft = maxTime;

let letterIndex = 0;
let isTyping =0;
let mistakes =0;

const loadPera = () =>{
    typeContentInput.focus();
    let realData = Math.floor(Math.random()*pera.length);
    pera[realData].split('').forEach((element,index) =>{
        let span = `<span>${element}</span>`;
        
        typeContent.innerHTML += span ;
    })
}
loadPera();

typeContentInput.addEventListener('input' ,(e) =>{
    let userInput = e.target.value.split('')[letterIndex];
        let spanData = typeContent.querySelectorAll('span');
    

    if(!isTyping){
        time = setInterval(timeLoad ,1000);
        isTyping = true;
    }

    if(letterIndex < spanData.length -1){
        if(userInput === null){
            console.log(`oops`);
        }else{
            if(spanData[letterIndex].innerText === userInput){
                spanData[letterIndex].classList.add('success')
            }else{
                spanData[letterIndex].classList.add('error')
                mistakes++
            }
        }

        letterIndex++;
        spanData.forEach(element =>{
            element.classList.remove('blink')
        })
        spanData[letterIndex].classList.add('blink');
        userError.innerHTML = `Mistakes : ${mistakes}`
        cpm.innerHTML =`CPM : ${letterIndex - mistakes}`
    }else{
}
})

const timeLoad = () =>{
    if(timeLeft > 0){
        timeLeft--
        document.querySelector('.timeLeft').innerHTML =`Time left : ${timeLeft}s`
        
        let wpmData = Math.round((letterIndex - mistakes) / 5 / (maxTime - timeLeft) * 60);

        document.querySelector('.wpm').innerHTML = `WPM : ${wpmData}`
    }
}

document.querySelector('.details button').addEventListener('click', ()=>{
    typeContent.innerHTML = ''
    loadPera()
})
