var bao = bao || {};

bao.studio = bao.studio || {};

bao.studio.pynotes = (() => {
  let logo = 'Py';
  let sections = {
    Home     : 'index',
    Contents : 'contents',
    About    : 'about', 
  };

  let chapters = [
    { 
      name: 'The way of programming', url: '#',
      sections: [
        { name: 'What is a program?' },
        { name: 'Running Python' },
        { name: 'The first program' },
        { name: 'Arithmetic operators' },
        { name: 'Values and types' },
        { name: 'Formal and natural languages' },
      ]
    }, {
      name: 'Variables, expressions and statements', url: '#',
      sections: [
        { name: 'Assignment statements' },
        { name: 'Variable names' },
        { name: 'Expressions and statements' },
        { name: 'Script mode' },
        { name: 'Order of operations' },
        { name: 'String operations' },
        { name: 'Comments' },
      ]
    }, {
      name: 'Fuctions', url: '#',
      sections: [
        { name: 'Function calls' }, 
        { name: 'Math functions' }, 
        { name: 'Composition' }, 
        { name: 'Adding new functions' }, 
        { name: 'Definitions and uses' }, 
        { name: 'Flow of execution' }, 
        { name: 'Parameters and arguments' }, 
        { name: 'Variables and parameters are local' }, 
        { name: 'Stack diagrams' }, 
        { name: 'Fruitful functions and void functions' }, 
        { name: 'Why functions?' }, 
      ]
    }, {
      name: 'Case study: interface design', url: '#',
      sections: [
        { name: 'The turtle module' },
        { name: 'Simple repetition' },
        { name: 'Encapsulation' },
        { name: 'Generalization' },
        { name: 'Interface design' },
        { name: 'Refactoring' },
        { name: 'A development plan' },
        { name: 'docstring' },
      ]
    }, {
      name: 'Conditionals and recursion', url: '#',
      sections: [
        { name: 'Floor division and modulus' }, 
        { name: 'Boolean expressions' }, 
        { name: 'Logical operators' }, 
        { name: 'Conditional execution' }, 
        { name: 'Alternative execution' }, 
        { name: 'Chained conditionals' }, 
        { name: 'Nested conditionals' }, 
        { name: 'Recursion' }, 
        { name: 'Stack diagrams for recursive functions' }, 
        { name: 'Infinite recursion' }, 
        { name: 'Keyboard input' }, 
      ]
    }, {
      name: 'Fruitful functions', url: '#',
      sections: [ 
        { name: 'Return values' },
        { name: 'Incremental development' },
        { name: 'Composition' },
        { name: 'Boolean functions' },
        { name: 'More recursion' },
        { name: 'Leap of faith' },
        { name: 'One more example' },
        { name: 'Checking types' },
      ] 
    }, {
      name: 'Iteration', url: '#',
      sections: [
        { name: 'Reassignment' },
        { name: 'Updating variables' },
        { name: 'The while statement' },
        { name: 'break' },
        { name: 'Square roots' },
        { name: 'Algorithms' },
      ]
    }, {
      name: 'Strings', url: '#',
      sections: [
        { name: 'What is a string?' },
        { name: 'Traversing a string' },
        { name: 'String operations' },
        { name: 'Strings are immutable' },
        { name: 'Searching' },
        { name: 'Looping and counting' },
        { name: 'String methods' },
        { name: 'The in operator' },
        { name: 'String comparison' },
      ]
    }, {
      name: 'Case study: word play', url: '#',
      sections: [
        { name: 'Reading word lists' },
        { name: 'Search' },
        { name: 'Looping with indices' },
      ]
    }, {
      name: 'Lists', url: '#',
      sections: [
        { name: 'What is a list?' },
        { name: 'Traversing a list' },
        { name: 'List operations' },
        { name: 'Map, filter and reduce' },
        { name: 'Deleting elements' },
        { name: 'Lists and strings' },
        { name: 'Objects and values' },
        { name: 'Aliasing' },
        { name: 'List arguments' },
      ]
    }, {
      name: 'Dictionaries', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Tuples', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Case study: data structure selection', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Files', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Classes and objects', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Classes and functions', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Classes and methods', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Inheritance', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Goodies', url: '#',
      sections: [
        { name: '' },
      ]
    }, {
      name: 'Resources and Tools', url: '#',
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
