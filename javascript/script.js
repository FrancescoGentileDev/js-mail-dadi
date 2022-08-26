const pcLaunch = [];
const userLaunch = [];
const plays = [0, 0]; //indice 0 per PLAYER indice 1 per COMPUTER
let round = 0; //numero di round giocati
let percent = 50; //percentuale della barra
const button = document.getElementById("diceLauncher");
const barGreen = document.getElementById("barGreen");


button.addEventListener("click", function () {
  let pcCurrent = Math.floor(Math.random() * 6) + 1;
  console.log("Il computer ha lanciato", pcCurrent);
  pcLaunch.push(pcCurrent);

  let userCurrent = Math.floor(Math.random() * 6) + 1;
  console.log("Hai lanciato", userCurrent);
  userLaunch.push(userLaunch);

  if (userCurrent === pcCurrent) {
    round--; //IN CASO DI PAREGGIO E' PREVISTO UN ALTRO LANCIO
  }
  else if (userCurrent > pcCurrent) {//valutazione dei lanci
    percent += 25;
    barGreen.style.width = percent + "%";

    plays[0] += 1;
  }
  else {
    percent -= 25;
    barGreen.style.width = percent + "%";
    plays[1] += 1;
  }



  if (plays[0] === 2 || plays[1] === 2) {
    ++round; //IN CASO DI NETTA VITTORIA LA PARTITA NON ARRIVA A 3 QUINDI AUMENTA I ROUND
    if (plays[0] === 2) {
      percent += 25;//AGGIORNAMENTO DELLA BARRA
      barGreen.style.width = percent + "%";
    } else {
      percent -= 25;
      barGreen.style.width = percent + "%";
    }
  }




  console.log("USER:", plays[0], " PC:", plays[1]);


  if (round >= 2) {//CHIUSURA DELLA PARTITA 
    console.log("Abbiamo un vincitore");
    button.setAttribute("disabled", "");

    const announcement = document.getElementById("result");
    const text = document.createElement("h1");
    let result = "loose";
      
    if (plays[0] > plays[1]) {
      result= "victory";
      }
      
    text.classList.add(result);
    text.append(result);
    announcement.append(text);
      

  } else {
    round++;
  }






  document.getElementById("diceUser").innerHTML = userCurrent;
  document.getElementById("dicePc").innerHTML = pcCurrent;
  document.getElementById("userScore").innerHTML = plays[0];
  document.getElementById("pcScore").innerHTML = plays[1];
});