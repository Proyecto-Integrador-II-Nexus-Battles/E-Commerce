import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = [{
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
   {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  }

];
  res.render("index", {datos});
};


export const defaultR2 = (req, res) => {
  const datos = [{
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
  {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  },
   {
    nombre: "Home",
    poder: "Hello World",
    vida: "si",
    defensa: "si",
    ataque: "si",
    dano: "si",
    imagen: "/img/cedric.jpg"
  }

];
  res.render("vistaDetallada", {datos});
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};
