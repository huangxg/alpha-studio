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
      title: 'Introduction', link: 'intro/intro.html',
      sections: [
        { title: 'Hello JavaScript' },
        { title: 'Basic concepts' },
        { title: 'Methodology' },
        { title: 'History' },
      ]
    }, {
      title: 'Get started', link: 'start/start.html',
      sections: [
        { title: 'Script locations' },
        { title: 'Node.js' },
      ]
    }, {
      title: 'Best Practices', link: '#',
      sections: [
        { title: 'Page structure' },
        { title: 'Naming' },
        { title: 'Colors and images' },
      ]
    }, {
      title: 'Resources and Tools', link: 'tools/tools.html',
      sections: [
        { title: 'Resources' },
        { title: 'Tools' },
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
