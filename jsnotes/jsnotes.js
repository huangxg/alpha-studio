var bao = bao || {};

bao.studio = bao.studio || {};

bao.studio.jsnotes = (() => {
  var logo = 'JS';
  var sections = {
    Home     : 'index',
    Contents : 'contents',
    About    : 'about', 
  };

  var chapters = [
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
      name: 'Variables', url: '#',
      sections: [
        { name: 'What are variables?' }, 
        { name: 'Declaring and initializing' },
        { name: 'Declaration types' },
        { name: 'Dynamic typing' }
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
