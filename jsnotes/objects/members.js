let cat = {
  name: 'Ginger',
  age: 3,
  skills: ['sleeping', 'being cute'],
  introduction: function() {
    return "I'm Ginger, nice to meet you.";
  },
};

cat.name;
cat['age'];
cat.skills[0];
cat.introduction();

cat.name = 'Ginger the Best';
cat.skills.push('chasing mouse');
