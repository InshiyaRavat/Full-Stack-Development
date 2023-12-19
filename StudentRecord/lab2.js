var StudentInfo=[{
    sname : '',
    semail : '',
    scontact : ''
}]

function showStudent(){

    var name = document.getElementById("sname").value
    var email = document.getElementById("semail").value
    var contact = document.getElementById("scontact").value

    var student = {
        sname : name,
        semail : email,
        scontact : contact
    }

    StudentInfo.push(student)

    const table = document.getElementById("tableid")
    while(table.hasChildNodes()){
        table.removeChild(table.firstChild)
    }
    let trh= document.createElement("tr")

    let th = document.createElement("th")
    th.textContent = "Student Name"

    let th2 = document.createElement("th")
    th2.textContent = "Student Email"

    let th3 = document.createElement("th")
    th3.textContent = "Student Contact"

    let thbtn = document.createElement("th")
    thbtn.textContent = "Remove"

    trh.appendChild(th)
    trh.appendChild(th2)
    trh.appendChild(th3)
    trh.appendChild(thbtn)
    table.appendChild(trh)


    for(let student of StudentInfo){
            let tr = document.createElement("tr")

            let td1 = document.createElement("td")
            td1.textContent = student.sname
            td1.className = "highlightName"
            console.log("1")

            let td2 = document.createElement("td")
            td2.className = "highlightEmail"
            td2.textContent = student.semail

            let td3 = document.createElement("td")
            td3.className = "highlightContact"
            td3.textContent = student.scontact

            let removeBtn = document.createElement("button")
            removeBtn.textContent = "remove student"
            removeBtn.onclick = function (){
                table.removeChild(tr)
            }

            tr.appendChild(td1)
            tr.appendChild(td2)
            tr.appendChild(td3)
            tr.appendChild(removeBtn)
            table.appendChild(tr)
    }

}

function highlightNameFunc(){
    console.log("name high")
    var els = document.getElementsByClassName("highlightName")
    for ( el of els){
        el.style.color = "red"
    }
}

function highlightEmailFunc(){
    var els = document.getElementsByClassName("highlightEmail")
    console.log("email high")
    for ( el of els){
        el.style.color = "blue"
    }
}

function highlightContactFunc(){
    var els = document.getElementsByClassName("highlightContact")
    console.log("contat high")
    for ( el of els){
        el.style.color = "green"
    }
}
