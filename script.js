screen = document.getElementById("screen")
const addText = (t) => {
    if (screen.innerText.slice(-1) == t && ["+", "-", "*", "/"].includes(t)) {
        console.log("INVALID OPERATION!")
    } else {
        screen.innerText = screen.innerText + t
    }
}
const clearText = () => {
    screen.innerText = ""
}
const addOperator = (t) => {
}
const getAnswer = async () => {
    try {
        resp = await fetch("https://newton.vercel.app/api/v2/simplify/" + String(encodeURIComponent(screen.innerText)))
        .then((res) => {
            return res.json()
        }).then((x) => {
            answer = x.result
            if (answer.includes("/")) {
                answer = answer.slice(0, answer.indexOf("/")) / answer.slice(answer.indexOf("/") + 1)
            }
            screen.innerHTML = answer;
        })
    } catch (error) {
        
        screen.innerHTML = "INVALID OPERATION!";
    }
    

}

const backspace = () => {
    screen.innerText = screen.innerText.slice(0, screen.innerText.length - 1)
}