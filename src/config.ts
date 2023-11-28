export const SITE = {
  title: "Bluevine Design Documentation",
  description: "Documentation for Bluevine's Platform UI and Native Mobile UI",
  defaultLanguage: "en_US",
  twitter: "",
  github: "",
  linkedin: "",
};

export const OPEN_GRAPH = {
  image: {
    src: "",
    alt: "",
  },
  twitter: "",
};

export const platformUISidebar = [
  { text: "Introduction", link: "/platform-ui/introduction" },
  
  { text: "Foundations", header: true },
  { text: "Colors", link: "/platform-ui/foundations/colors" },
  { text: "Typography", link: "/platform-ui/foundations/typography" },
  { text: "Shadows", link: "/platform-ui/foundations/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/platform-ui/components/buttons" },
  { text: "Input", link: "/platform-ui/components/input" },
  { text: "Status pills", link: "/platform-ui/components/status-pill" },
  { text: "Table", link: "/platform-ui/components/table" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/platform-ui/patterns/introduction" },

];

export const nativeMobileUISidebar = [
  { text: "Introduction", link: "/native-mobile-ui/introduction" },

  { text: "Foundations", header: true },
  { text: "Colors", link: "/native-mobile-ui/foundations/colors" },
  { text: "Typography", link: "/native-mobile-ui/foundations/typography" },
  { text: "Shadows", link: "/native-mobile-ui/foundations/shadows" },

  { text: "Components", header: true },
  { text: "Buttons", link: "/native-mobile-ui/components/buttons" },

  { text: "Patterns", header: true },
  { text: "Introduction", link: "/native-mobile-ui/patterns/introduction" },

];

export const productCopySidebar = [
  { text: "Introduction", link: "/product-copy/introduction" },
  { text: "Guidelines", link: "/product-copy/guidelines" },
  { text: "Style Guide", link: "/product-copy/style-guide" },

];

export const topNav =[
  { text: "Platform UI", link: "/platform-ui/introduction" , section: "platform-ui" },
  { text: "Native Mobile UI", link: "/native-mobile-ui/introduction", section: "native-mobile-ui" },
  { text: "Product Copy", link: "/product-copy/introduction", section: "product-copy" },
]
