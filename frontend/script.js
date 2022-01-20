/* const data = [
    "Gergely Kiss",
    "Krisztián Bui",
    "Buczkó Balázs",
    "András Varga",
    "Borbála Teréz Kovács"
];
 */

const data = [
    {
        name:"Gergely Kiss",
        favoriteFood: "csirke/rizs"
    },
    {
        name:"András Varga",
        favoriteFood: "brassói"
    },
    {
        name:"Buczkó Balázs",
        favoriteFood: "kolbászos rájás pizza"
    },
    {
        name:"Krisztián Bui",
        favoriteFood: "banán"
    },
    {
        name:"Borbála Teréz Kovács",
        favoriteFood: "avokádó"
    },
]
function loadEvent() {
    console.log ("Az oldal betöltődött");

    const root = document.querySelector("#root")

    for (const frontendStudent of data) {
        root.insertAdjacentHTML("beforeend", `
            <section>
                <h1>${frontendStudent.name}</h1>
                <p>${frontendStudent.favoriteFood}</p>
            </section> 
        `)        
    }
}
window.addEventListener ("load", loadEvent);