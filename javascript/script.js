const pcLaunch = [];
const userLaunch = [];
const plays = [0, 0]; //indice 0 per PLAYER indice 1 per COMPUTER
for (let i = 0; i < 3; i++) {
  let winner;

  let pcCurrent = Math.floor(Math.random() * 6) + 1;
  console.log("Il computer ha lanciato", pcCurrent);
  pcLaunch.push(pcCurrent);

  let userCurrent = Math.floor(Math.random() * 6) + 1;
  console.log("Hai lanciato", userCurrent);
  userLaunch.push(userLaunch);
  if (userCurrent === pcCurrent && plays[0] === 1 && plays[1] === 1) {
    i--;
  } else if (userCurrent > pcCurrent) {
    plays[0] += 1;
  } else {
    plays[1] += 1;
  }

  if (plays[0] === 2 || plays[1] === 2) {
    i++;
  }

  console.log("USER:", plays[0], " PC:", plays[1]);
}

if (plays[0] > plays[1]) {
  console.log("HAI VINTO");
} else {
  console.log("HAI PERSO");
}
