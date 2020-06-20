let weekday = true,
    inSummer = true;

if (weekday && !inSummer) {
  console.log("Let's go to school.");
} else {
  console.log("Let's play");
}

if (!weekday || inSummer) {
  console.log("Let's play");
} else {
  console.log("Let's go to school.");
}
