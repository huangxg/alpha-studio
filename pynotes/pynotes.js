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
        { name: 'What is a dictionary?' },
        { name: 'A collection of counters' },
        { name: 'Traversing a dictionary' },
        { name: 'Reverse lookup' },
        { name: 'Dictionaries and lists' },
        { name: 'Memos' },
        { name: 'Global variables' },
      ]
    }, {
      name: 'Tuples', url: '#',
      sections: [
        { name: 'What is a tuple?' },
        { name: 'Tupple assignment' },
        { name: 'Tuples as return values' },
        { name: 'Variable-length arument tuples' },
        { name: 'Lists and tuples' },
        { name: 'Dictionaries and tuples' },
        { name: 'Sequencies of sequencies' },
      ]
    }, {
      name: 'Case study: data structure selection', url: '#',
      sections: [
        { name: 'Word frequency analysis' },
        { name: 'Random numbers' },
        { name: 'Word histogram' },
        { name: 'Most common words' },
        { name: 'Optional parameters' },
        { name: 'Dictionary substraction' },
        { name: 'Random words' },
        { name: 'Markov analysis' },
        { name: 'Data structures' },
      ]
    }, {
      name: 'Files', url: '#',
      sections: [
        { name: 'Persistence' },
        { name: 'Reading and writing' },
        { name: 'Format operator' },
        { name: 'Filenames and paths' },
        { name: 'Catch exceptions' },
        { name: 'Databases' },
        { name: 'Pickling' },
        { name: 'Pipes' },
        { name: 'Writing modules' },
      ]
    }, {
      name: 'Classes and objects', url: '#',
      sections: [
        { name: 'Customized types' },
        { name: 'Attributes' },
        { name: 'Rectangles' },
        { name: 'Instances and return values' },
        { name: 'Objects are mutable' },
        { name: 'Copying' },
      ]
    }, {
      name: 'Classes and functions', url: '#',
      sections: [
        { name: 'Time' },
        { name: 'Pure functions' },
        { name: 'Modifiers' },
        { name: 'Prototyping vs planning' },
      ]
    }, {
      name: 'Classes and methods', url: '#',
      sections: [
        { name: 'Object-oriented features' },
        { name: 'Printing objects' },
        { name: 'The init method' },
        { name: 'The __str__ method' },
        { name: 'Operator overloading' },
        { name: 'Type-based dispatch' },
        { name: 'Polymorphism' },
      ]
    }, {
      name: 'Inheritance', url: '#',
      sections: [
        { name: 'Card objects' },
        { name: 'Class attributes' },
        { name: 'Comparing cards' },
        { name: 'Decks' },
        { name: 'Printing the deck' },
        { name: 'Add, remove, shuffle and sort' },
        { name: 'Inheritance' },
        { name: 'Class diagrams' },
      ]
    }, {
      name: 'Goodies', url: '#',
      sections: [
        { name: 'Conditional expressions' },
        { name: 'List compressions' },
        { name: 'Generator expressions' },
        { name: 'any and all' },
        { name: 'Sets' },
        { name: 'Counters' },
        { name: 'defaultdict' },
        { name: 'Named tuples' },
        { name: 'Gathering keyword args' },
      ]
    }, {
      name: 'Resources and Tools', url: 'tools/tools.html',
      sections: [
        { name: 'Resources' },
        { name: 'Tools' },
      ]
    }
  ];

  return {
    logo     : logo,
    sections : sections,
    chapters : chapters
  };
})();
