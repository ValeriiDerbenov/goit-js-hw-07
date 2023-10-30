import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const imageMarkup = createImageListMarkup(galleryItems);
galleryContainer.insertAdjacentHTML("beforeend", imageMarkup);

function createImageListMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
		<li class="gallery__item">
<a class="gallery__link" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>
		`;
    })
    .join("");
}

const links = galleryContainer.querySelectorAll(".gallery__link");

galleryContainer.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  if (event.target.nodeName === "IMG") {
    const instance = basicLightbox.create(
      `<img src="${event.target.dataset.source}" width="800" height="600">`
    );

    instance.show();
  }
  event.stopPropagation();
}
