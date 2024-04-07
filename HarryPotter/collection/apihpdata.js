// va chercher une information via l'api avec fetch
function fetchHarrypotter(perso) {
    return fetch("https://hp-api.lainocs.fr/characters/"+ perso).then(r => r.json())
}
// va cherche les 30 personnage dans l'api 
async function displayHarrypotter() {
    let persos = ["Harry-Potter", "Ron-Weasley", "Draco-Malfoy", "Hermione-Granger", "Minerva-McGonagall", "Severus-Snape", "Albus-Dumbledore", "Lord-Voldemort", "Sirius-Black", "Bellatrix-Lestrange", "Neville-Longbottom", "Cedric-Diggory", "Gregory-Goyle", "Vincent-Crabbe", "Gilderoy-Lockhart", "Luna-Lovegood", "Cho-Chang", "Lucius-Malfoy", "Doloress-Umbridge", "Alastor-Moody", "Nymphadora-Tonks", "Remus-Lupin", "Fred-Weasley", "George-Weasley", "Ginny-Weasley", "Quirinus-Quirrel", "Rubeus-Hagrid", "Peter-Pettigrew", "Viktor-Krum", "Fleur-Delacour"]
// affiche les données se trouvant dans l'api 
    for (i=0; i<30; i++) {
        const data = await fetchHarrypotter(persos[i])
        console.log(data)
        document.getElementById(persos[i]).innerHTML = `
        <h1>${data.name}</h1>
        <img src="${data.image}" alt="${data.name}"/>
        `
    }
}
// affichage
displayHarrypotter()