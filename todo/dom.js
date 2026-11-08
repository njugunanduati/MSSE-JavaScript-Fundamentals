const $h2 = document.querySelector("h2")
const $list = document.querySelector("#my-list")
const $addButton = document.querySelector("#addBtn")
$addButton.addEventListener("click", addItem)
let $items = $list.getElementsByTagName("li")
let $buttons = $list.getElementsByTagName("button")
let num = $items.length

function addItem(){
    let $input = document.querySelector("#myInput")
    let $item = document.createElement("li")
    $item.textContent = $input.value
    $item.addEventListener("click", strikeItem)
    addButton($item)
    $input.value = ""
    $list.append($item)
    num += 1
    update()
}

function addButton(item) {
    let btn = document.createElement("button")
    btn.textContent = "X"
    item.append(btn)
    btn.addEventListener("click", removeItem)
}

function removeItem() {
    this.parentNode.remove()
    update()
}

function strikeItem() {
    this.classList.toggle("strike")
    update()
}

for (const button of $buttons) {
    button.addEventListener("click", removeItem)
}

for (const item of $items) {
    item.addEventListener("click", strikeItem)
}

function update() {
    $h2.textContent = `Ken's To Do List (${num} left!)`
}
$h2.textContent = `Ken's To Do List (${num} left!)`