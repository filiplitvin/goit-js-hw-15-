import Handlebars from "handlebars";
import templateSource from "bundle-text:../notes.hbs";
import * as storage from "../helpers/storage.js";
import "./form.js";
const bookmarkInput = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

let bookmarks = storage.load("bookmarks") || [];

const template = Handlebars.compile(templateSource);

const markup = () => {
  bookmarkList.innerHTML = template({ bookmarks });

  const deleteBtn = document.querySelector("[data-delete]");
  deleteBtn && deleteBtn.addEventListener("click", handleRemove);
};

const handleAdd = () => {
  const url = bookmarkInput.value;
  bookmarks.push(url);
  storage.save("bookmarks", bookmarks);
  bookmarkInput.value = "";
  markup();
};

const handleRemove = () => {
  bookmarks = [];
  storage.remove("bookmarks");
  markup();
};

addBtn.addEventListener("click", handleAdd);

markup();
