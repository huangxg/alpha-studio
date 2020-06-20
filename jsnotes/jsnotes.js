var bao = bao || {};

bao.studio = bao.studio || {};

bao.studio.jsnotes = (() => {
  let logo = 'JS';
  let sections = {
    Home     : 'index',
    Contents : 'contents',
    About    : 'about', 
  };

  let chapters = [
    { 
      name: 'Introduction', url: 'intro/intro.html',
      sections: [
        { name: 'Hello JavaScript' },
        { name: 'Basic concepts' },
        { name: 'Methodology' },
        { name: 'History' },
      ]
    }, {
      name: 'Get started', url: 'start/start.html',
      sections: [
        { name: 'Script locations' },
        { name: 'Debugging' },
      ]
    }, {
      name: 'Variables', url: 'variables/variables.html',
      sections: [
        { name: 'What are variables?' }, 
        { name: 'Variable types' },
        { name: 'Dynamic typing' },
        { name: 'Variable declaration and Scopes' },
      ]
    }, {
      name: 'Operators', url: 'operators/operators.html',
      sections: [
        { name: 'Arithmetic operators' },
        { name: 'Increment and decrement operators' },
        { name: 'Assignment operators' },
        { name: 'Comparison operators' },
        { name: 'Logical operators' },
        { name: 'Operator precedence' },
      ]
    }, {
      name: 'Strings', url: 'strings/strings.html',
      sections: [
        { name: 'Creating strings' }, 
        { name: 'Single or double quotes?' }, 
        { name: 'Escaping symbols' }, 
        { name: 'Concatenating strings' }, 
        { name: 'String templates' },
      ]
    }, {
      name: 'More strings', url: 'more_strings/more_strings.html',
      sections: [ 
        { name: 'String length' },
        { name: 'Character and substring' },
        { name: 'Start and end' },
        { name: 'Changing string' },
      ] 
    }, {
      name: 'Arrays', url: 'arrays/arrays.html',
      sections: [
        { name: 'Creating arrays' },
        { name: 'Accessing array items' },
        { name: 'Adding and removing array items' },
        { name: 'Converting between string and array' }
      ]
    }, {
      name: 'Conditions', url: 'conditions/conditions.html',
      sections: [
        { name: 'if condition' },
        { name: 'else branch' },
        { name: 'Conditions with logical operators' },
        { name: 'Nested conditions' },
        { name: 'switch condition' },
      ]
    }, {
      name: 'Loops', url: '#',
      sections: [
        { name: 'for loop' },
        { name: 'while and do loops' },
        { name: 'break and continue' },
      ]
    }, {
      name: 'More arrays', url: '#',
      sections: [
        { name: 'forEach' },
        { name: 'map' },
        { name: 'reduce' },
        { name: 'find and filter' },
        { name: 'every and some' },
      ]
    }, {
      name: 'Functions', url: '#',
      sections: [

      ]
    }, {
      name: 'Events', url: '#',
      sections: [

      ]
    }, {
      name: 'Objects', url: '#',
      sections: [

      ]
    }, {
      name: 'Best Practices', url: '#',
      sections: [
        { name: 'Page structure' },
        { name: 'Naming' },
        { name: 'Colors and images' },
      ]
    }, {
      name: 'Resources and Tools', url: 'tools/tools.html',
      sections: [
        { name: 'Resources' },
        { name: 'Tools' },
      ]
    }
  ];

  function addChapterNavbar() {
    $('#header').append(bao.studio.getNavbar({
      logo     : logo,
      sections : sections,
      section  : 'Contents', 
      level    : 1
    }));
  }

  return {
    logo     : logo,
    sections : sections,
    chapters : chapters,
    addChapterNavbar : addChapterNavbar
  };
})();
