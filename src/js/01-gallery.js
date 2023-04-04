import SimpleLightbox from "simplelightbox";
import '../css/common.css';
import '../css/01-gallery.css';

// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";


const galleryList = document.querySelector(".gallery");
const itemsMarkup = createGalleryItems(galleryItems);

galleryList.insertAdjacentHTML("beforeend", itemsMarkup);

let lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryItems(items) {
  return items
    .map(
      ({ preview, original, description }) =>
        `<li class = "gallery__item">
<a class = "gallery__link" href="${original}">
  <img 
  class = "gallery__image" 
  src="${preview}" 
  alt="${description}"
  >

</a>
</li>`
    )
    .join("");
};