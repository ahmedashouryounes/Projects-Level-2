(async function fetchTodoList() {
    myUl = document.getElementById('myUl')
    const response = await fetch("http://jsonplaceholder.typicode.com/albums");
    const data = await response.json();
    da = data.slice(0, 10)
    da.forEach(item => {
        var li = document.createElement('li')
        li.innerText = item.title
        var delBtn = document.createElement('button')
        delBtn.innerText = 'x'
        delBtn.classList.add('del-btn')
        delBtn.onclick = function () {
            li.remove(this)
        }
        myUl.appendChild(li)
        li.appendChild(delBtn)
    })
})()

var myInput = document.getElementById('myInput')
var addBtn = document.getElementById('addBtn')

addBtn.onclick = function () {
    var li = document.createElement('li')
    li.innerText = myInput.value
    var delBtn = document.createElement('button')
    delBtn.innerText = 'x'
    delBtn.classList.add('del-btn')
    if (!myInput.value.trim()) delBtn.style.marginLeft = 'auto'
    delBtn.onclick = function () {
        li.remove(this)
    }
    myUl.appendChild(li)
    li.appendChild(delBtn)
    myInput.value = ''
}
