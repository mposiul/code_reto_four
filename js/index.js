'use strict';

import foods from './modules/foods_expresso.js';

const documentReady = () => {
    foods();
};

document.addEventListener('DOMContentLoaded', documentReady);