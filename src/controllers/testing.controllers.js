import path from "path";
import { fileURLToPath } from "url";

export const defaultR = (req, res) => {
  const datos = {
    title: "Home",
    message: "Hello World",
  };
  res.render("index");
};

export const defaultR2 = (req, res) => {
  res.render("admin_main_page");
};

export const defaultR3 = (req, res) => {
  res.render("user_review");
};
