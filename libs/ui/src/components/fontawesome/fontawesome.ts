import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons'; 
import { fab } from '@fortawesome/free-brands-svg-icons';

// Importa el componente FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Añade todos los iconos a la biblioteca
library.add(fas, far, fab);

export { FontAwesomeIcon };