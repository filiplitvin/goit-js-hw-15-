import Handlebars from "handlebars";
import templateSource from "bundle-text:../notes.hbs";
const bookmarkInput = document.querySelector("#bookmarkInput");
const addBtn = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

let bookmarks = [];

const template = Handlebars.compile(templateSource);

const markup = () => {
  bookmarkList.innerHTML = template({ bookmarks });
};

const handleAdd = () => {
  const url = bookmarkInput.value;
  bookmarks.push(url);
  bookmarkInput.value = "";
  markup();
};

addBtn.addEventListener("click", handleAdd);

markup();
