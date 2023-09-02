import { galleryItems } from "./gallery-items.js";
// Change code below this line

const container = document.querySelector(".gallery");

const markupImg = createMarkupImg(galleryItems);

container.insertAdjacentHTML("beforeend", markupImg);
container.addEventListener("click", handleClick);

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

function handleClick(event) {
  event.preventDefault();

  if (event.target === event.currentTarget) {
    return;
  }

  const targetEl = event.target.closest(".js-item");
  //   console.log(event.target);
  //   console.log(targetEl);

  const handleCloseModal = (event) => {
    if (event.code === "Escape") {
      modal.close();
    }
  };

  const modal = basicLightbox.create(
    `<div class="modal">
         <img
            src="${event.target.dataset.source}"
            alt="${event.target.alt}"
            width="1000"
          />
        </div>`,
    {
      onShow: () => {
        window.addEventListener("keydown", handleCloseModal);
        modal.element().querySelector("img").onclick = modal.close;
      },
      onclose: () => {
        window.removeEventListener("keydown", handleCloseModal);
      },
    }
  );

  modal.show();
}

console.log(galleryItems);
