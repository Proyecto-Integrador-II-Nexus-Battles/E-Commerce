import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  //const __filename = fileURLToPath(import.meta.url);
  //const __dirname = path.dirname(__filename);
  const datos = {
    title: "Carro de Compras",
    description: "Carro de Compras",
  };
  res.render("index", { datos });
};

export const defaultR2 = (req, res) => {
  res.render("admin_main_page");
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};

export const defaultR4 = (req, res) => {
  res.render("register");
};
