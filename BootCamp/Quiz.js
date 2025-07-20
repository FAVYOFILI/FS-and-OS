const QuizData = [
     { Question: "What is the full meaning of JS?",
       Options: ["Javascript", "Javes", "Jets", "Joges"],
       Answer: "Javascript",
     },

 {     Question: "Which is a programming language?", 
       Options: ["Jagaban", "Javascript", "Javas", "All of the above"],
       Answer: "Javascript",
     },
 {     Question: "What does the H in HTML represent?",
       Options: ["Hype", "Hyperlink", "Hyper", "Hyperlink"], 
       Answer: "Hyper", 
},
{      Question: "What does the H in HTML represent?",
       Options: ["Hype", "Hyperlink", "Hyper", "Hyperlink"],
     Answer: "Hyper", },
    ];

let currentquestion = 0;

const question = document.getElementById("Question");
const options= document.getElementById("Options");
const result = document.getElementById("result");


function Loadquestion() 
{   const q = QuizData[currentquestion];
    question.textContent = q.Question; options.innerHTML = "";
    q.Options.forEach((option) => { const btn = document.createElement("button");
     btn.textContent = option; 
     btn.onclick = () => ConfirmAnswer (option); 
     const li = document.createElement("li");li.appendChild(btn); options.appendChild(li);});
result.textContent = "";}

function ConfirmAnswer(selected) 
{ const Correct = QuizData[currentquestion].Answer; 
    if(selected === Correct)
     {
         result.textContent = "Correct!"; result.style.color = "green";
      } else {
        result.textContent = Wrong! Correct answer is ${Correct}; result.style.color = "red";
     }

setTimeout(() => { currentquestion++;if (currentquestion < QuizData.length) 
    { Loadquestion(); } else { QuizEnd(); 

    }}, 3000);}

function QuizEnd()
 { question.textContent = "Quiz Completed!";
     options.innerHTML = ""; result.textContent = "";}
     Loadquestion();