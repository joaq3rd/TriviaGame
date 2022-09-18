window.onload = sendApiRequest()

//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple`);
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

    correctButton.addEventListener("click",()=>{
        alert("Correct! YOU ARE SO SMART")
        sendApiRequest()
    })
}