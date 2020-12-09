var bao = bao || {};

bao.studio = (() => {
  let SECTIONS = {
    Home    : 'index',
    Courses : 'courses',
    About   : 'about', 
  };

  function getNavbar({section, level, logo = '🖳', sections = SECTIONS} = {}) {
    let bar = '<nav class="navbar navbar-expand-md navbar-light bg-light">' +
      `  <span class="navbar-brand">${logo}</span>` + 
      '  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"' +
      ' aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
      '    <span class="navbar-toggler-icon"></span>' +
      '  </button>' + 
    
      '  <div class="collapse navbar-collapse" id="navbarSupportedContent">' + 
      '    <ul class="navbar-nav mr-auto">';

    Object.keys(sections).forEach(k => {
      let active = section === k ? ' active' : '',
          prefix = section !== k || level > 0 ? '../'.repeat(level) : '',
          link = `${prefix}${sections[k]}.html`;

      bar += `      <li class="nav-item"><a class="nav-link${active}" href="${link}">${k}</a></li>`;
    });

    bar += '    </ul></div></nav>';

    return bar;
  }

  function addChapterNavbar(book) {
    $('#header').append(bao.studio.getNavbar({
      logo     : book.logo,
      sections : book.sections,
      section  : 'Contents', 
      level    : 1
    }));
  }

  function disableUnfinishedLinks() {
    $('.toc .chapter a[href="#"]').removeAttr('href');
  }

  function expandToc() {
    $(document).on('click', '.toc-toggle', function() {
      let $btn = $(this);
      $btn.parent().find('h4.section').toggle('show');
      $btn.text($btn.text() == '+' ? '-' : '+');
    });

    $(document).on('click', '.toc-toggle-all a', function() {
      let $btn = $(this);

      if ($btn.text().includes('+')) {
        $btn.text('- Collapse All');
        $('.toc-toggle').text('-');
        $('.toc .section').show();
      } else {
        $btn.text('+ Expand All');
        $('.toc-toggle').text('+');
        $('.toc .section').hide();
      }
    });
  }

  function initVue() {
    Vue.component('toc-chapter', {
      props: ['chapter'],
      template: '<div class="toc-chapter">' +
                '  <h3 class="chapter"><a :href="chapter.url">{{ chapter.name }}</a></h3>' +
                '  <span class="toc-toggle">+</span>' +
                '  <template v-for="sec in chapter.sections">' +
                '    <slot :section="sec"></slot>' +
                '  </template>' +
                '</div>',
    });

    Vue.component('toc-section', {
      props: ['section'],
      template: '<h4 class="section">{{ section.name }}</h4>'
    });
  }

  return {
    addChapterNavbar       : addChapterNavbar,
    disableUnfinishedLinks : disableUnfinishedLinks,
    expandToc              : expandToc,
    getNavbar              : getNavbar,
    initVue                : initVue,
  };
})();
