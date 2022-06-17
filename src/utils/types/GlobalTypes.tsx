export type childrenProps = {
  children: JSX.Element| JSX.Element[]
}

export type headerProps = {
  header: {
    logo: {
      name: "Portfólio",
      link: "#"
    },
    menu: [
      {
        name: "Início",
        link: "#home"
      },
      {
        name: "Sobre",
        link: "#about"
      },
      {
        name: "Habilidades",
        link: "#skills"
      },
      {
        name: "Projetos",
        link: "#projetos"
      },
      {
        name: "Contato",
        link: "#contact"
      },
    ]
  }
}

export type iconsProps = {
  icons: [
    {
      slug: "linkedin",
      name: "Linkedin",
      link: "",
      color: ""
    },
    {
      slug: "github",
      name: "Github",
      link: "",
      color: ""
    },
    {
      slug: "codepen",
      name: "Codepen",
      link: "",
      color: ""
    },
    {
      slug: "email",
      name: "Email",
      link: "",
      color: ""
    },
    {
      slug: "whatsapp",
      name: "WhatApp",
      link: "",
      color: ""
    }
  ]
}
