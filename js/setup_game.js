"use strict";

var fireballSize = 22;
var getFireballSpeed = (isMovingLeft) => isMovingLeft ? 2 : 5;
var wizardSpeed =3;
var wizardWidth = 70;
var getWizardHeight = () => 1.337 * wizardWidth;
var getWizardX = (gameFieldWidth) => (gameFieldWidth - wizardWidth) / 2;
var getWizardY = (gameFieldHeight) => gameFieldHeight / 3;