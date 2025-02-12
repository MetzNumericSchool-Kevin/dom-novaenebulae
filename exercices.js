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

const boxes = document.querySelectorAll("#boites_magique .boite");

const redButton = document.querySelector("#btn_change_red");
const blueButton = document.querySelector("#btn_change_blue");
const greenButton = document.querySelector("#btn_change_green");

redButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = "red";
});

blueButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = "blue";
	boxes[1].style.backgroundColor = "blue";
});

greenButton.addEventListener("click", () => {
	boxes[0].style.backgroundColor = "green";
	boxes[1].style.backgroundColor = "green";
	boxes[2].style.backgroundColor = "green";
});

// Exercice 6 : Aventurier, voici ma boutique ! :

const potions = [
	{
		nom: "Potion de soin",
		description: "Cette potion rouge vif a une odeur de fraise des bois. Un seul gorgée et vos blessures se referment comme par magie ! Effets secondaires possibles: cheveux roses pendant 24h.",
		prix: 10,
	},
	{
		nom: "Potion de sommeil",
		description:
			"Un liquide bleu nuit qui sent la lavande et les rêves. Une goutte et vous dormirez comme un bébé dragon ! Attention: ne pas utiliser si vous devez combattre un troll dans les prochaines 8 heures.",
		prix: 50,
	},
];

function displayPotionList(potions) {
	const potionList = document.querySelector("#liste_potions");

	potionList.innerHTML = "";

	for (const potion of potions) {
		const potionListTemplate = document.querySelector("#template_potion").content.cloneNode(true);

		potionListTemplate.querySelector(".nom_potion").textContent = potion.nom;
		potionListTemplate.querySelector(".prix_potion").textContent = potion.prix;
		potionListTemplate.querySelector(".description_potion").textContent = potion.description;

		potionList.appendChild(potionListTemplate);
	}
}

displayPotionList(potions);

// Exercice 7 : Plus de potions, nous avons besoin de plus de potions ! :

const form = document.querySelector(".form");

form.addEventListener("submit", (click) => {
	click.preventDefault();

	const formData = new FormData(form);

	addPotion(formData);
});

function addPotion(formData) {
	newPotion = {
		nom: formData.get("nom"),
		description: formData.get("description"),
		prix: formData.get("prix"),
	};

	potions.push(newPotion);

	displayPotionList(potions);
}
