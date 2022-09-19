window.onload = sendApiRequest()

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple`);
    console.log(response)
    let data = await response.json()
    console.log(data)
    useApiData(data)
}

//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with 
function useApiData(data){
    //Categories
    document.querySelector("#category").innerHTML = `Category: ${data.results[0].category}`
    document.querySelector("#difficulty").innerHTML = `Difficulty: ${data.results[0].difficulty}`
    document.querySelector("#question").innerHTML = `Question: ${data.results[0].question}`

    //Answers to Questions
    document.querySelector("#answer1").innerHTML = data.results[0].correct_answer
    document.querySelector("#answer2").innerHTML = data.results[0].incorrect_answers[0]
    document.querySelector("#answer3").innerHTML = data.results[0].incorrect_answers[1]
    document.querySelector("#answer4").innerHTML = data.results[0].incorrect_answers[2]

    let correctButton = document.querySelector("#answer1")
    let incorrectButton2 = document.querySelector("#answer2")
    let incorrectButton3 = document.querySelector("#answer3")
    let incorrectButton4 = document.querySelector("#answer4")

    incorrectButton2.addEventListener("click",()=>{
        alert("Wow...slow down. That answer is incorrect.")
    })

    incorrectButton3.addEventListener("click",()=>{
        alert("This answer is incorrect.")
    })
    
    incorrectButton4.addEventListener("click",()=>{
        alert("You tried your hardest...and could have done better.")
    })

    correctButton.addEventListener("click",()=>{
        alert("Correct! YOU ARE SO SMART")
        window.location.reload()
    })
}