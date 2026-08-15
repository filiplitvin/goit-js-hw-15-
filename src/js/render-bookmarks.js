import Handlebars from "handlebars";
import templateBookmarks from "bundle-text:../notes.hbs";

export const createBookmarksMarkup = Handlebars.compile(templateBookmarks);

export const renderBookmarks = (container, list) => {
  container.innerHTML = createBookmarksMarkup({ bookmarks: list });
};
