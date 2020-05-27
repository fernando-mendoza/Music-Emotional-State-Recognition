const net = new brain.recurrent.LSTM();


const trainingData = [
    { input: "Myke Towers - Diosa", output: "Estado: Love-Happy"},
    { input: "Myke Towers, Farruko, Arcangel, Sech & Zion - Si Se Da Remix", output: "Estado: Love-Happy"},
    { input: "Arcangel x Sech - Sigues Con Él", output: "Estado: Love-Sad"},
    { input: "ROSALÍA, Ozuna - Yo x Ti, Tu x Mi", output: "Estado: Love"},
    { input: "Travis Scott - HIGHEST IN THE ROOM(Remix) ft. ROSALÍA, Lil Baby", output: "Estado: Party"},
    { input: "DJ Snake - Taki Taki ft. Selena Gomez, Ozuna, Cardi B", output: "Estado: Party"},
    { input: "Jhay Cortez, J. Balvin, Bad Bunny - No Me Conoce (Remix)", output: "Estado: Sad"},
    { input: "Anuel AA, Daddy Yankee, Karol G, Ozuna & J Balvin - China", output: "Estado: Happy-Party"},
    { input: "DJ Snake, J. Balvin, Tyga - Loco Contigo", output: "Estado: Happy-Love"},
    { input: "Black Eyed Peas, J Balvin - RITMO", output: "Estado: Party"},
    { input: "Black Eyed Peas, Ozuna, J. Rey Soul - MAMACITA", output: "Estado: Party"},
    { input: "J Balvin - Amarillo", output: "Estado: Party"},
    { input: "Feid, Justin Quiles - Porfa", output:"Estado: Sad"},
    { input: "Myke Towers, Maluma & Farruko - La Playa Remix", output: "Estado: Happy-Party"},
    { input: "Soltera Remix - Lunay X Daddy Yankee X Bad Bunny", output: "Estado: Party"},
    { input: "Bad Bunny feat. Drake - Mia", output: "Estado: Party"},
    { input: "Callaíta - Bad Bunny", output: "Estado: Happy-Party"},
    { input: "Camilo, Pedro Capó - Tutu", output: "Estado: Happy"},
    { input: "Camilo - Favorito", output: "Estado: Happy-Emotional"},
    { input: "Camilo, Evaluna Montaner - Por Primera Vez", output: "Estado: Happy-Emotional"},
    { input: "Mau y Ricky, Manuel Turizo, Camilo - Desconocidos", output: "Estado: Happy"}
]; 

net.train(trainingData, {
    iterations: 400,
    errorThresh: 0.011
});
console.log(net.run("Arcangel-Me prefieres a mi"));