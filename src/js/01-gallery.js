// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const containerGallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li> <a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}" loading="lazy" width="300"></a> </li>`
  )
  .join('');

containerGallery.insertAdjacentHTML('beforeend', markup);

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});
