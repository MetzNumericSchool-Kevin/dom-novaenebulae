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
