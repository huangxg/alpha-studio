var bao = bao || {};

bao.studio.courses = (() => {
  var list = [
    {
      title : "Introduction to HTML",
      logo  : "img/html5.svg",
      code  : "101",
      hours : 8
    }, {
      title : "Introduction to CSS",
      logo  : "img/css3.svg",
      code  : "102",
      hours : 8
    }, {
      title : "Introduction to JavaScript",
      logo  : "img/html5.svg",
      code  : "201",
      hours : 8
    }, {
      title : "Intermidate JavaScript",
      logo  : "img/html5.svg",
      code  : "202",
      hours : 8
    }
  ];

  function initVue() {
    Vue.component('course-row', {
      props: ['course'],
      template: '<tr>' + 
                  '<td class="logo-small"><img :src="course.logo"></td>' + 
                  '<td>{{ course.code }}</td>' +
                  '<td>{{ course.title }}</td>' + 
                  '<td>{{ course.hours }}</td>' + 
                '</tr>'
    });

  }

  return {
    initVue : initVue,
    list    : list
  };
})();
