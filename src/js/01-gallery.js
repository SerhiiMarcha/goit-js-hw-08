// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


const galleryElement = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<li class="gallery__item">
  <a 
  class="gallery__link" 
  href="${original}"
  >
    <img 
    class="gallery__image" 
    src="${preview}" 
    alt="${description}" 
    />
  </a>
</li>`;
  })
  .join("");

galleryElement.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  captions: true,
  captionsData: "alt",
  captionSelector: "img",
  captionPosition: "bottom",
  captionDelay: 250,
});