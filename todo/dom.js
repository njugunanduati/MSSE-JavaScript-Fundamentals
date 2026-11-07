const $h2 = document.querySelector("h2")

const $list = document.querySelector("#my-list")

const addItem = (text) => {
    let $item = document.createElement("li")
    $item.textContent = text
    $list.append($item)
}
addItem("Eat")

let $items = $list.getElementsByTagName("li")
let $count = $items.length
$h2.textContent = `Ken's To Do List (${$count} left!)`

const removeItem = (index) => {
    $items[index].remove()
}


const strikeItem = (index) => {
    $items[index].setAttribute("class", "strike")
    $count -= 1
    $h2.textContent = `Ken's To Do List (${$count} left!)`
}

$h2.textContent = `Ken's To Do List (${$count} left!)`