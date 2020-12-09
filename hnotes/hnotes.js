var bao = bao || {};

bao.studio = bao.studio || {};

bao.studio.hnotes = (() => {
  let logo = '🕸';
  let sections = {
    Home     : 'index',
    Contents : 'contents',
    About    : 'about', 
  };

  let chapters = [
    { 
      name: 'Introduction', url: 'intro/intro.html',
      sections: [
        { name: 'Hello HTML' },
        { name: 'Basic concepts' },
        { name: 'Methodology' },
        { name: 'History' },
      ]
    }, {
      name: 'Structures', url: 'structures/structures.html',
      sections: [
        { name: 'Top structures' },
        { name: 'Paragraphs' },
        { name: 'Headings' },
      ]
    }, {
      name: 'Text', url: 'text/text.html',
      sections: [
        { name: 'Highlights' },
        { name: 'Quotes' },
        { name: 'Verbatim' },
        { name: 'Superscripts and subscripts' },
      ]
    }, {
      name: 'Lists', url: 'lists/lists.html',
      sections: [
        { name: 'Unordered list' },
        { name: 'Ordered list' },
        { name: 'Description list' },
        { name: 'Nested list' },
      ]
    }, {
      name: 'Links', url: 'links/links.html',
      sections: [
        { name: 'Absolute and relative links' },
        { name: 'Anchor' },
        { name: 'Targets' },
        { name: 'Email link' }
      ]
    }, {
      name: 'Images', url: 'images/images.html',
      sections: [
        { name: 'Basics' },
        { name: 'Sizes' },
        { name: 'Positions' },
        { name: 'File formats' },
      ]
    }, {
      name: 'Tables', url: 'tables/tables.html',
      sections: [
        { name: 'Basics' },
        { name: 'Captions and headings' },
        { name: 'Borders and spacing' },
        { name: 'Alignments' },
        { name: 'Spanning' },
      ]
    }, {
      name: 'Media', url: 'media/media.html',
      sections: [
        { name: 'Audios' },
        { name: 'Videos' },
      ]
    }, {
      name: 'CSS', url: 'css/css.html',
      sections: [
        { name: 'CSS locations' },
        { name: 'Selectors' },
        { name: 'Box model' },
        { name: 'Colors' },
      ]
    }, {
      name: 'Text Styles', url: 'text_styles/text_styles.html',
      sections: [
        { name: 'Fonts' },
        { name: 'Font decorations' },
        { name: 'Spacing' },
        { name: 'Alignments' },
      ]
    }, {
      name: 'List Styles', url: 'list_styles/list_styles.html',
      sections: [
        { name: 'List bullets' },
        { name: 'List numbers' },
        { name: 'List positions' },
      ]
    }, {
      name: 'Image Styles', url: 'image_styles/image_styles.html',
      sections: [
        { name: 'Image sizes' },
        { name: 'Image positions' },
        { name: 'Image as backgound' },
      ]
    }, {
      name: 'Table Styles', url: 'table_styles/table_styles.html',
      sections: [
        { name: 'Elements' },
        { name: 'Borders' },
        { name: 'Spacing' },
      ]
    }, {
      name: 'Layouts', url: 'layouts/layouts.html',
      sections: [
        { name: 'Box positions' },
        { name: 'Floats' },
        { name: 'Fixed width page' },
        { name: 'Responsive page' },
      ]
    }, {
      name: 'Best Practices', url: 'best_practices/best_practices.html',
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

  return {
    logo     : logo,
    sections : sections,
    chapters : chapters
  };
})();
