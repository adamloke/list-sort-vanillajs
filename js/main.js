// array with day trips
const trips = [
  {
    image: "https://via.placeholder.com/300x150?text=Item 1",
    title: "Item 1",
    url: "#",
    value: 4.9,
    time: 5.2,
    cost: 10,
    category: ["beach", "foodie"],
    lead: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 2",
    title: "Item 2",
    url: "#",
    value: 2.5,
    time: 8.0,
    cost: 80,
    category: ["hiking", "dogs"],
    lead: "If you haven't seen Game of Thrones, go watch it right now. If you have then you'll totally get why this Hodor themed lorem ipsum generator is just brilliant.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 3",
    title: "Item 3",
    url: "#",
    value: 3.4,
    time: 6.5,
    cost: 5,
    category: ["family", "foodie", "dogs"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 4",
    title: "Item 4",
    url: "#",
    value: 4.5,
    time: 0.5,
    cost: 70,
    category: ["beach", "foodie", "family"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 5",
    title: "Item 5",
    url: "#",
    value: 4.2,
    time: 1.0,
    cost: 15,
    category: ["foodie"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 6",
    title: "Item 6",
    url: "#",
    value: 3.8,
    time: 1.1,
    cost: 40,
    category: ["hiking", "family"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 7",
    title: "Item 7",
    url: "#",
    value: 1.4,
    time: 9.5,
    cost: 6,
    category: ["beach", "foodie"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 8",
    title: "Item 8",
    url: "#",
    value: 4.2,
    time: 2.3,
    cost: 9,
    category: ["beach", "foodie"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
  {
    image: "https://via.placeholder.com/300x150?text=Item 9",
    title: "Item 9",
    url: "#",
    value: 1.4,
    time: 4.5,
    cost: 45,
    category: ["beach", "family"],
    lead: "In case you don't read Twitter, the news, or just can't get enough of The Apprentice host's legendary oration, try this Trump lorem ipsum generator on for size.",
    text: "some body text here",
  },
]

// ------- FITLER CARDS ------ //

let filteredArray = []
// loops through trips array to see if selectedCategory exist in each object
function filterTripsByCategory(category) {
  if (category === "all") {
    return trips
  }
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].category.indexOf(category) > -1) {
      filteredArray.push(trips[i])
    }
  }
  return filteredArray
}

// remove current cards, filter by category, insert result
function filterSelectedCategory(e) {
  let selectedCategory = e.target.dataset.value // selected category
  document.getElementById("cardlist").innerHTML = []
  filteredArray = []
  filterTripsByCategory(selectedCategory) // filter trips
  if (selectedCategory === "all") {
    checkSorting(trips) // insert default trips array
  } else {
    checkSorting(filteredArray) // insert new filtered array
  }
}

// add and remove active class on btn click
let filterGroup = document.getElementById("filterSelect")
let filterButtons = filterGroup.getElementsByClassName("btn")
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active")
    current[0].className = current[0].className.replace(" active", "")
    this.className += " active"
  })
}

// eventlistener filter buttons
let filterSelect = document.getElementsByClassName("btn")
for (let i = 0; i < filterSelect.length; i++) {
  filterSelect[i].addEventListener("click", filterSelectedCategory)
}

// ------ SORT CARDS ---- //

// check current sorting
function checkSorting(arr) {
  let x = document.getElementById("sortSelect")
  let sorter = x.value // current value of dropdown

  switch (sorter) {
    case "value":
      arr.sort((a, b) => a.value - b.value).reverse()
      return (document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join("")}`)
      break
    case "time":
      arr.sort((a, b) => a.time - b.time)
      return (document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join("")}`)
      break
    case "cost":
      arr.sort((a, b) => a.cost - b.cost)
      return (document.getElementById("cardlist").innerHTML = `${arr.map(createCards).join("")}`)
      break
    default:
  }
}

// create sorting
function createSorting() {
  let sorter = this.value //selected sorting
  let arr = Array.from(document.getElementById("cardlist").children)
  switch (sorter) {
    case "value":
      arr.sort((a, b) => a.dataset.value - b.dataset.value).reverse()
      for (let i = 0; i < arr.length; i++) {
        let parent = arr[i].parentNode
        let removeChild = parent.removeChild(arr[i])
        parent.appendChild(removeChild)
      }
      break
    case "time":
      arr.sort((a, b) => a.dataset.time - b.dataset.time)
      for (let i = 0; i < arr.length; i++) {
        let parent = arr[i].parentNode
        let removeChild = parent.removeChild(arr[i])
        parent.appendChild(removeChild)
      }
      break
    case "cost":
      arr.sort((a, b) => a.dataset.cost - b.dataset.cost)
      for (let i = 0; i < arr.length; i++) {
        let parent = arr[i].parentNode
        let removeChild = parent.removeChild(arr[i])
        parent.appendChild(removeChild)
      }
      break
    default:
  }
}

// sorting dropdown onchange event
document.getElementById("sortSelect").onchange = createSorting

// ----- ADD CARDS ------ //

// default sort descending values (most popular day trips)
trips.sort((a, b) => a.value - b.value).reverse()
document.getElementById("cardlist").innerHTML = `${trips.map(createCards).join("")}`

// add category pills
function tag(tag) {
  return `${tag
    .map((tag) => {
      return `
    <button class="tag">${tag}</button>
    `
    })
    .join("")}
  `
}

// add category as class name
function addClass(tag) {
  return `${tag
    .map((tag) => {
      return `
      ${tag}
      `
    })
    .join("")}
    `
}

// create cards
function createCards(trips) {
  return `
    <div class="category ${trips.category ? addClass(trips.category) : ""} card__200" data-value="${trips.value}" data-time="${trips.time}" data-cost="${trips.cost}">
      <img class="card-img" src="${trips.image}" alt="image">
      <div class="card-body">
      <div class="card-tags">${trips.category ? tag(trips.category) : ""}</div>
        <h4>${trips.title}</h4>
        <div class="card-row">
          <div class="card-row-rank">
            <p>Rating:</p>
            <strong>${trips.value}</strong>
          </div>
          <div class="card-row-time">
          <p>Time:</p>
            <strong>${trips.time} hr</strong>
          </div>
          <div class="card-row-cost">
          <p>Cost:</p>
            <strong>${trips.cost} €</strong>
          </div>
        </div>
        <div class="card-text">
          <p>${trips.lead}</p>
        </div>
      </div>
      </div>
`
}
