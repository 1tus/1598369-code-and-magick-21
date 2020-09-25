'use strict';

const WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
const WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
const WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
const WIZARDS_LENGTH = 4;

let userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
let similarListElement = document.querySelector('.setup-similar-list');
let similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

let getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

let getRandomBoolean = () => {
  return Boolean(Math.round(Math.random()));
};

let getRandomArrElement = (arr) => {
  return arr[getRandomInt(0, arr.length)];
};

let getNewWizard = () => {
  let nameSwap = getRandomArrElement(WIZARD_NAMES) + ' ' + getRandomArrElement(WIZARD_SURNAMES);
  if (getRandomBoolean()) {
    nameSwap = getRandomArrElement(WIZARD_SURNAMES) + ' ' + getRandomArrElement(WIZARD_NAMES);
  }
  return {
    name: nameSwap,
    coatColor: getRandomArrElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomArrElement(WIZARD_EYES_COLORS)
  };
};

let wizards = [];
for (let i = 0; i < WIZARDS_LENGTH; i++) {
  wizards[i] = getNewWizard();
}

let renderWizard = (wizard) => {
  let wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

let fragment = document.createDocumentFragment();

for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
