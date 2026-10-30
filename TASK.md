# ДЗ goit-advancedjs-hw-03 — HTTP-запити, пошук зображень (Pixabay)

Здача: посилання на репозиторій + GitHub Pages + zip репозиторію.
Вимоги: Vite-збірка, Axios, Prettier, у консолі живої сторінки немає помилок, попереджень і `console.log`.

## Структура
- `src/js/pixabay-api.js` — `getImagesByQuery(query)`: HTTP-запит через Axios, повертає `response.data`.
- `src/js/render-functions.js` — екземпляр SimpleLightbox і функції:
  - `createGallery(images)`: розмітка карток, додавання в галерею за одну операцію, `lightbox.refresh()`. Нічого не повертає.
  - `clearGallery()`, `showLoader()`, `hideLoader()`. Нічого не повертають.
- `src/main.js` — уся логіка: сабміт форми, перевірки, нотифікації iziToast.

## Поведінка
- Форма `.form` з `input[name="search-text"]` і кнопкою Search. Порожній рядок не відправляється.
- Параметри запиту: `key`, `q`, `image_type=photo`, `orientation=horizontal`, `safesearch=true`.
- Перед запитом: очистити галерею, показати лоадер (css-loader).
- Після відповіді: сховати лоадер, відмалювати картки або показати тост
  "Sorry, there are no images matching your search query. Please try again!".
- Картка: `webformatURL`, `largeImageURL` (посилання для SimpleLightbox), `tags` (alt), `likes`, `views`, `comments`, `downloads`.
- Клік по картинці відкриває велику версію в SimpleLightbox.
- Запит обробляється через `then()` / `catch()`, сторінка не «падає» при помилці.
