const body = document.body
const studentNames = document.querySelector(".students")
const table = document.querySelector("body")
const thead = document.querySelector("thead")
const tbody = document.querySelector("tbody")
const trOfThead = document.querySelector(".trOfThead")
const trOfTbody = document.querySelector(".trOfTbody")
const students = [
    {
        name: "Max",
        class: 5,
        scores: {
            math: 3,
            english: 5,
            literature: 4,
        }
    },
    {
        name: "Mark",
        class: 7,
        scores: {
            music: 5,
            dance: 5,
            piano: 4,
        }
    },
    {
        name: "Steven",
        class: 4,
        scores: {
            motherTongue: 2,
            english: 2,
            math: 4,
        }
    }
]

for (let student of students) {
    const studentName = document.createElement("h1")
    studentName.innerText = student.name
    studentNames.appendChild(studentName)
    
    studentName.addEventListener("click", function() {
       trOfTbody.innerHTML = ""
       trOfThead.innerHTML = ""
        for(let subjects in student.scores) {
            const th  = document.createElement("th")
            th.innerText  = subjects
            trOfThead.appendChild(th)

            const td = document.createElement("td")
            td.innerText = student.scores[subjects]
            trOfTbody.appendChild(td)
            
        }
    })
}