'use strict';

const FILE_TYPES = [`gif`, `jpg`, `jpeg`, `png`];
const fileChooser = document.querySelector(`.upload input[type=file]`);
const preview = document.querySelector(`.setup-user-pic`);

const insertBlobUrlImg = (file, imageObject) => {
  imageObject.src = URL.createObjectURL(file);
  imageObject.addEventListener(`load`, () => {
    URL.revokeObjectURL(imageObject.src);
  });
};

fileChooser.addEventListener(`change`, () => {
  const file = fileChooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if (matches) {
    insertBlobUrlImg(file, preview);
  }
});
