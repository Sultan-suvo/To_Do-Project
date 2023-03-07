let count = 0;
document.getElementById("input-btn").addEventListener("click", function () {
    count += 1
    const myInputValue = document.getElementById("input-value").value;

    const parent = document.getElementById("content-container");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
    <td>${myInputValue}</td>
    <td>
    <button class='btn-danger delete-btn'>Delete</button>
    <button class='btn-primary'>Done</button>
    </td>
    `
    parent.appendChild(tr)
    document.getElementById("input-value").value = ''


    const buttons = document.querySelectorAll(".delete-btn");
    for (const button of buttons) {
        button.addEventListener("click",function(event){
            event.target.parentNode.parentNode.style.display='none'
        })
    }
})

document.getElementById("clear-btn").addEventListener("click", function(event){
    event.target.parentNode.style.display='none'
})

