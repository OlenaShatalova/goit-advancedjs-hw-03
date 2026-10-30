import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import icon from './img/icon.svg';

const form = document.querySelector('.form');

const toastOptions = {
  timeout: 5000,
  position: 'topRight',
  iconUrl: icon,
};

form.addEventListener('submit', onSearchSubmit);

function onSearchSubmit(event) {
  event.preventDefault();

  const query = form.elements['search-text'].value.trim();

  if (!query) {
    iziToast.show({
      ...toastOptions,
      message: 'Please enter a search query!',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
      if (hits.length === 0) {
        iziToast.show({
          ...toastOptions,
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      createGallery(hits);
    })
    .catch(error => {
      iziToast.show({
        ...toastOptions,
        message: `Something went wrong: ${error.message}`,
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
}
