// const numbers = [10, 85, 21, 5, 8, 4, 100, 45, 125];

// let minNum = numbers[0];
// let maxNum = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   let x = Math.min(x, numbers[i]);
//   let y = Math.max(y, numbers[i]);
// }

// console.log(x);

// const me = {
//   Name: "Asadbek",
//   Age: 20,
//   Status: "Student",
//   greeting: function () {
//     return `Salom men ${me.Name} yoshim ${me.Age} da va men ${me.Status} man`;
//   },
// };

// console.log(me.greeting());

// for (i = 1, x = 1; x <= 5; x++) {
//   i = i * x;
//   console.log(i);
// }

// box.innerHTML = `<p>${i}</p>`;

const form = document.querySelector(".form"),
  myName = document.querySelector(".name"),
  relationship = document.querySelector(".relationship"),
  number = document.querySelector(".number"),
  button = document.querySelector(".btn"),
  span = document.querySelectorAll(".span"),
  box = document.querySelector(".box-two");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!myName.value) {
    span[0].textContent = `Iltimos malumot kiriting`;
    myName.classList.add("border");
  } else {
    span[0].textContent = ``;
    myName.classList.remove("border");
  }

  if (!relationship.value) {
    span[1].textContent = `Iltimos malumot kiriting`;
    relationship.classList.add("border");
  } else {
    span[1].textContent = ``;
    relationship.classList.remove("border");
  }

  if (!number.value) {
    span[2].textContent = `Iltimos malumot kiriting`;
    number.classList.add("border");
  } else {
    span[2].textContent = ``;
    number.classList.remove("border");
  }

  const contact = document.createElement("div");
  contact.classList.add("contact");

  newBox = document.createElement("div");
  newBox.classList.add("add__box");

  nameSpan = document.createElement("span");
  nameSpan.textContent = `Name: ${myName.value}`;
  newBox.appendChild(nameSpan);

  relationshipSpan = document.createElement("span");
  relationshipSpan.textContent = `Relationship: ${relationship.value}`;
  newBox.appendChild(relationshipSpan);

  numberSpan = document.createElement("span");
  numberSpan.textContent = `Number: ${number.value}`;
  newBox.appendChild(numberSpan);

  contact.appendChild(newBox);

  newButton = document.createElement("button");
  newButton.classList.add("btn-one");
  newButton.textContent = `Deleted`;
  contact.appendChild(newButton);

  box.appendChild(contact);

  newButton.addEventListener("click", () => {
    box.removeChild(contact);
  });
});

const number1 = [1, 3, -6, -7, 5.8, 6.5, 8, 4.2, -3, -5, -9.8, 2.2, -3.2];

function round(i) {
  for (i = 0; i < number1.length; i++) {
    if (number1[i] < 0) {
      number1[i] = number1[i] * -1;
      number1[i] = Math.round(number1[i]);
    } else {
      number1[i] = Math.round(number1[i]);
    }
  }

  return number1;
}

console.log(round());
