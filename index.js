function scuberGreetingForFeet(n) {
  // Write your code here!
  if (n <= 400) {
    return 'This one is on me!'

  } else if (n < 2000 && n > 400) {
    return "That will be twenty bucks."
  }
  else if (n > 2000 && n < 2500) {
    return "I will gladly take your thirty bucks."

  }
  else if (n > 2500) {
    return "No can do."
  }

}

function ternaryCheckCity(cit) {
  // Write your code here!
  if (cit == "NYC") {
    return 'Ok, sounds good.'
  } else return "No go."
}

function switchOnCharmFromTip(y) {
  // Write your code here!
  if (y == "generous") {
    return "Thank you so much."
  } if (y == 'not as generous')
    return "Thank you."
  else return "Bye."
}