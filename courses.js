var bao = bao || {};

bao.studio.courses = (() => {
  var list = [
    {
      id   : "101",
      name : "Introduction to HTML",
      url  : "hnotes/index.html",
      logo : "img/html5.svg",
      hours: 8
    }, {
      id   : "102",
      name : "Introduction to CSS",
      url  : "hnotes/index.html",
      logo : "img/css3.svg",
      hours: 8
    }, {
      id  : "201",
      name : "Introduction to JavaScript",
      logo  : "img/html5.svg",
      hours : 8
    }, {
      id  : "202",
      name : "Intermidate JavaScript",
      logo  : "img/html5.svg",
      hours : 8
    }
  ];

  return {
    list : list
  };
})();
