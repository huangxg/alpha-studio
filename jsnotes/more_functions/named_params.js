function nameTag( 
    { firstName, middleName, lastName }, 
    { title = 'Dr.', organization, country = 'U.S.A.' }
) {
  return `${title} ${firstName} ${middleName} ${lastName}\n${organization}, ${country}`;
}

console.log(nameTag(
    { firstName: 'Alpha', middleName: 'X', lastName: 'Huang' },
    { organization: 'Alpha Studio' }
));

function betterNameTag(
  { firstName, middleName, lastName }, 
  { title = 'Dr.', organization = 'Independent', country = 'U.S.A.' } = {}
) {
  return `${title} ${firstName} ${middleName} ${lastName}\n${organization}, ${country}`;
}
console.log(betterNameTag(
  { firstName: 'Alpha', middleName: 'X', lastName: 'Huang' }
));
