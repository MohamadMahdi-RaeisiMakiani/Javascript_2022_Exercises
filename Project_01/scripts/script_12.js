console.log("Hello Mr. Raeisi!");

const allCodes = document.querySelectorAll("code");

for (let item of allCodes) {
	item.innerHTML = `&lt;${item.innerHTML}&gt;`;
}

const updateBackpack = (update) => {
	let divSelection_1 = document.querySelector("section");
	divSelection_1.innerHTML = markup(backpack);
	console.info(update);
};

const backpack = {
	name: "Everyday Backpack",
	volume: 30,
	color: "grey",
	PocketNum: 15,
	strapLength: {
		left: 26,
		right: 26,
	},
	lidOpen: false,
	toggleLid: function (lidStatus) {
		this.lidOpen = lidStatus;
		updateBackpack("Lid status changed.");
	},
	newStrapLength: function (lengthLeft, lengthRight) {
		this.strapLength.left = lengthLeft;
		this.strapLength.right = lengthRight;
		updateBackpack("strap lenghts updated.");
	},
};

const markup = (backpack) => {
	return `
        <div id="jsBox-joined">
            <h3>${backpack.name}</h3>
            <ul>
                <li>Volume: ${backpack.volume}</li>
                <li>Color: ${backpack.color}</li>
                <li>Number of Pockets: ${backpack.PocketNum}</li>
                <li>Strap Lengths: L= ${backpack.strapLength.left} R= ${
		backpack.strapLength.right
	}</li>
                <li>Top Lid: ${backpack.lidOpen ? "Open" : "Closed"}</li>
            </ul>
        </div>`;
};

const textJoiner = document.createElement("section");
textJoiner.innerHTML = markup(backpack);
document.body.appendChild(textJoiner);
