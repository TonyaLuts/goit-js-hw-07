import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const container = document.querySelector(".gallery");
const markupImg = createMarkupImg(galleryItems);

container.insertAdjacentHTML("beforeend", markupImg);
container.addEventListener("click", hendleImgClick);

function createMarkupImg(array) {
  return array
    .map(({ preview, original, description }) => {
      //   console.log(img.description);
      return `<li class="gallery__item js-item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`;
    })
    .join("");
}

function hendleImgClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const targetEl = event.target.closest(".js-item");
  //   console.log(event.target);
  //   console.log(targetEl);

  const instance = basicLightbox.create(`<div class="modal">
     <img
        src="${event.target.dataset.source}"
        alt="${event.target.alt}"
      />
    </div>`);

  instance.show();
}
