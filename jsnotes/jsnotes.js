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
        { name: 'Comments' },
        { name: 'Debugging' },
      ]
    }, {
      name: 'Variables', url: 'variables/variables.html',
      sections: [
        { name: 'What is a variable?' }, 
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
      name: 'Numbers', url: 'numbers/numbers.html',
      sections: [
        { name: 'Big and small numbers' }, 
        { name: 'Number bases' }, 
        { name: 'Rounding' }, 
      ]
    }, {
      name: 'Strings', url: 'strings/strings.html',
      sections: [
        { name: 'Creating strings' }, 
        { name: 'Escaping symbols' }, 
        { name: 'Concatenating strings' }, 
        { name: 'String templates' },
        { name: 'String length' },
        { name: 'Character and substring' },
        { name: 'Start and end' },
        { name: 'Changing string' },
      ]
    }, {
      name: 'Objects', url: 'objects/objects.html',
      sections: [
        { name: 'What is an object?' },
        { name: 'Accessing object properties' },
        { name: 'Iterating object properties' },
        { name: 'Object destructing' },
        { name: '"this" keyword' },
      ]
    }, {
      name: 'Arrays', url: 'arrays/arrays.html',
      sections: [
        { name: 'Creating arrays' },
        { name: 'Accessing array items' },
        { name: 'Adding and removing array items' },
        { name: 'Converting between string and array' },
        { name: 'Array destructing' }
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
      name: 'Loops', url: 'loops/loops.html',
      sections: [
        { name: 'for loop' },
        { name: 'while and do loops' },
        { name: 'break and continue' },
      ]
    }, {
      name: 'More arrays', url: 'more_arrays/more_arrays.html',
      sections: [
        { name: 'forEach' },
        { name: 'map' },
        { name: 'reduce' },
        { name: 'find and filter' },
        { name: 'every and some' },
      ]
    }, {
      name: 'Functions', url: 'functions/functions.html',
      sections: [
        { name: 'What is a function?' },
        { name: 'Built-in functions' },
        { name: 'Anonymous functions' },
        { name: 'Parameters and return value' },
        { name: 'Function scope' },
      ]
    }, {
      name: 'More objects', url: 'more_objects/more_objects.html',
      sections: [
        { name: 'Object references' },
        { name: 'Cloning objects' },
        { name: 'Merging objects' },
        { name: 'Constructor' },
        { name: 'Prototype' },
      ]
    }, {
      name: 'More functions', url: 'more_functions/more_functions.html',
      sections: [
        { name: 'Rest parameters' },
        { name: 'Spread operator' },
        { name: 'Named parameters' },
        { name: 'Testing arguments' },
        { name: 'Catching exceptions' },
        { name: 'Throwing exceptions' },
      ]
    }, {
      name: 'Classes', url: 'classes/classes.html',
      sections: [
        { name: 'Constructor' },
        { name: 'Getter and setter' },
        { name: 'Static fields and methods' },
        { name: 'Subclass' },
      ]
    }, {
      name: 'Date and time', url: 'date/date.html',
      sections: [
        { name: 'Creating date' },
        { name: 'Getters and setters' },
        { name: 'Static methods' },
        { name: 'Formating dates' },
      ]
    }, {
      name: 'Events', url: 'events/events.html',
      sections: [
        { name: 'What are events?' },
        { name: 'Event handler' },
        { name: 'Event listeners' },
        { name: 'Form Events' },
      ]
    }, {
      name: 'More events', url: 'more_events/more_events.html',
      sections: [
        { name: 'Event objects' },
        { name: 'Preventing default behavior' },
        { name: 'Event bubbling and capturing' },
      ]
    }, {
      name: 'Best Practices', url: 'best_practices/best_practices.html',
      sections: [
        { name: 'Source files' },
        { name: 'Formatting' },
        { name: 'Language features' },
        { name: 'Naming' },
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
