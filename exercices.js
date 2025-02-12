// Exercice 1 : Quel est le titre de la boutique :

const mainTitle = document.querySelector("h1");

console.log(mainTitle.textContent);

// Exercice 2 : Des informations manquent ! :

const descriptionDiv = document.getElementById("description_boutique");

const descriptionElement = document.createElement("p");
descriptionElement.textContent = "Pour cela, il vous suffit de cliquer sur une des potions de la liste ci-dessous pour l'acheter.";
descriptionDiv.appendChild(descriptionElement);

// Exercice 3 : Roger, enfoiré ! :

const blagueRoger = document.getElementById("blague_de_roger_le_sorcier");
blagueRoger.remove();

// Exercice 4 : Archibald n'est pas là, appelons le ! :

const callButton = document.getElementById("call_archibald");
callButton.addEventListener("click", () => {
	alert("🧙‍♂️ J'arrive, j'arrive Aventurier !");
});

// Exercice 5 : Faisons un peu de magie : 

const boxes = document.querySelectorAll('#boites_magique .boite')

const redButton = document.querySelector('#btn_change_red');
const blueButton = document.querySelector("#btn_change_blue");
const greenButton = document.querySelector("#btn_change_green");

redButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = 'red';
})

blueButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = "blue";
	boxes[1].style.backgroundColor = "blue";
});


greenButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = "green";
	boxes[1].style.backgroundColor = "green";
	boxes[2].style.backgroundColor = "green";
});

