import Handlebars from "handlebars";
import templateSource from "bundle-text:../notes.hbs";
import * as storage from "../helpers/storage.js";
import "./form.js";
import { renderBookmarks } from "./render-bookmarks.js";
const BOOKMARKS_KEY = "bookmarks";

const addBtn = document.querySelector("#addBookmarkBtn");
const listContainer = document.querySelector("#bookmarkList");
const urlInput = document.querySelector("#bookmarkInput");

let bookmarkList = storage.load(BOOKMARKS_KEY) || [];

renderBookmarks(listContainer, bookmarkList);
//=======================================================
const handleAdd = (event) => {
  event.preventDefault();

  const url = urlInput.value;
  if (!url) return;

  const bookmark = {
    id: crypto.randomUUID(),
    url: url,
  };

  bookmarkList.push(bookmark);
  storage.save(BOOKMARKS_KEY, bookmarkList);

  renderBookmarks(listContainer, bookmarkList);
  urlInput.value = "";
};

addBtn.addEventListener("click", handleAdd);
//========================================================
const handleActions = (event) => {
  const target = event.target;
  const item = target.closest("[data-id]");

  if (item) {
    const id = item.dataset.id;
    const index = bookmarkList.findIndex((item) => item.id === id);

    bookmarkList.splice(index, 1);
    storage.save(BOOKMARKS_KEY, bookmarkList);
    renderBookmarks(listContainer, bookmarkList);
  }
};

listContainer.addEventListener("click", handleActions);
