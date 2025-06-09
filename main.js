const itens = []

function addItem () {
  const itemName = document.querySelector("#item").value

  console.log(itemName)

  const item = {
    name: itemName,
    checked: false
  }

  itens.push(item)

  document.querySelector("#item").value = ""
  showItensList

}

function showItensList() {
    const sectionList = document.querySelector(".list")
    sectionList.textContent = ""

    itens.map((item, index) => {
      sectionList.innerHTML += `

       <div class="item">
        <div>
            <input type="checkbox" name="list" id="item-${index}"${item.checked && "checked"}>
            <div class="custon-checkbox"onclick="checkItem('${item.name}')">
                <img src="./assets/checked.svg" alt="checked">
            </div>
            <label for="item-${index}"onclick="checkItem('${item.name}')">${item.name}</label>
        </div>

        <button onclick="removeItem('${item.name}')">
            <img src="./assets/trash-icon.svg" alt="trash icon">
        </button>
    </div>
      
      `
    })
  }

  function removeItem (itemName) {
   const itemIndex = itens.findIndex((item) => item.name === itemName)
   const divWarning = document.querySelector(".warning")
   divWarning.classList.remove("hide-warning")

   setTimeout(() => {
     divWarning.classList.add("hide-warning")
     }, 4000)

  if(itemIndex !== 1) {
  items.splice(itemIndex, 1)

  showItensList()
  }
}
  
function addHideWarningClass() {
  document.querySelector(".warning").classList.add("hide-warning")
}

function checkItem(itemName) {
      const item = items.find((item) => item.name === item.name)
     item.checked = !item.checked
     showItemsList()
    }