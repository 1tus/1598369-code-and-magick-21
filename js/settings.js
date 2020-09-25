'use strict';

let fireballSize = 22;
let getFireballSpeed = (isMovingLeft) => isMovingLeft ? 2 : 5;
let wizardSpeed = 3;
let wizardWidth = 70;
let getWizardHeight = () => 1.337 * wizardWidth;
let getWizardX = (gameFieldWidth) => (gameFieldWidth - wizardWidth) / 2;
let getWizardY = (gameFieldHeight) => gameFieldHeight / 3;
