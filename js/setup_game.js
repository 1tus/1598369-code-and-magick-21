/* exported fireballSize */
/* exported getFireballSpeed */
/* exported wizardSpeed */
/* exported getWizardHeight */
/* exported getWizardX */
/* exported getWizardY */

"use strict";

const fireballSize = 22;
const getFireballSpeed = (isMovingLeft) => isMovingLeft ? 2 : 5;
const wizardSpeed = 3;
const wizardWidth = 70;
const getWizardHeight = () => 1.337 * wizardWidth;
const getWizardX = (gameFieldWidth) => (gameFieldWidth - wizardWidth) / 2;
const getWizardY = (gameFieldHeight) => gameFieldHeight / 3;
