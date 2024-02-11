import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { searchImg } from './js/pixabay-api';
import { checkUp, noMatch } from './js/render-functions';
import { imgTemplate } from './js/render-functions';
import { imgRender } from './js/render-functions';
import { gallery } from './js/render-functions';

export const refs = {
  formEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
};

refs.loader.style.display = 'none';

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();
  const search = e.target.elements.text.value.trim();
  refs.loader.style.display = 'block';

  if (!search) {
    checkUp();
    return;
  }
  searchImg(search).then(data => {
    if (data.hits.length === 0) {
      noMatch();
      refs.galleryEl.innerHTML = '';
    } else {
      imgRender(data);
      gallery.on('show.simplelightbox');
      gallery.refresh();
    }
  });

  e.target.reset();
}
