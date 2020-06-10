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
      ]
    }, {
      name: 'Operators', url: '#',
      sections: [
        { name: 'Operators' },
        { name: 'Expressions' },
        { name: 'Statements' }
      ]
    }, {
      name: 'Strings', url: '#',
      section: [

      ]
    }, {
      name: 'Conditions', url: '#',
      section: [

      ]
    }, {
      name: 'Loops', url: '#',
      section: [

      ]
    }, {
      name: 'Functions', url: '#',
      section: [

      ]
    }, {
      name: 'Events', url: '#',
      section: [

      ]
    }, {
      name: 'Objects', url: '#',
      section: [

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
