import SimpleLightbox from 'simplelightbox';

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'title',
  captionDelay: 250,
  loop: false,
});