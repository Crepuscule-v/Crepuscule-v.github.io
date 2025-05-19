// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-gallery",
          title: "Gallery",
          description: "Welcome to my photography gallery! I will share some of my photos from time to time.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/gallery/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "gallery-jul-2024",
          title: 'Jul. 2024',
          description: "&amp;nbsp; Shanghai, China",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/beijing/";
            },},{id: "gallery-jul-2024",
          title: 'Jul. 2024',
          description: "&amp;nbsp; Shanghai, China",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/nanjing/";
            },},{id: "gallery-jul-2024",
          title: 'Jul. 2024',
          description: "&amp;nbsp; Shanghai, China",
          section: "Gallery",handler: () => {
              window.location.href = "/gallery/shanghai/";
            },},{id: "news-i-received-the-ph-d-offer-from-prof-dongdong-she-hkust",
          title: '🎉🎉 I received the Ph.D offer from Prof. Dongdong She, HKUST!',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
