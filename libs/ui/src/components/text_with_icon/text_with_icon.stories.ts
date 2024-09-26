import { Meta, StoryFn } from '@storybook/vue3';
import TextWithIcon from './text_with_icon.vue';

export default {
  title: 'Components/TextWithIcon',
  component: TextWithIcon,
  argTypes: {
    text: {
      control: 'text',
      description: 'The text displayed next to the icon.',
    },
    icon: {
      control: 'text',
      description: 'The icon to display. Can be HTML, image URL, or FontAwesome class.',
    },
    iconType: {
      control: { type: 'select', options: ['html', 'image', 'fontawesome'] },
      description: 'The type of the icon: "html", "image", or "fontawesome".',
    },
    href: {
      control: 'text',
      description: 'If provided, the component becomes a link.',
    },
    isSelected: {
      control: 'boolean',
      description: 'Indicates if the link is selected.',
    },
    linkColor: {
      control: 'color',
      description: 'Defines the default color of the text or link. Default is gray.',
    },
    selectedColor: {
      control: 'color',
      description: 'Defines the color of the link when selected. Default is light blue.',
    },
    iconPosition: {
      control: { type: 'select', options: ['left', 'right'] },
      description: 'Defines the position of the icon: "left" or "right".',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**TextWithIcon** es un componente flexible que muestra un ícono junto con un texto. Puede comportarse como un enlace si se le proporciona un \`href\` y cambiar su estilo si está seleccionado (\`isSelected\`). También permite posicionar el ícono a la izquierda o derecha del texto.

### Props:
- **text**: El texto que se mostrará junto al ícono.
- **icon**: Representación del ícono, puede ser un código HTML, una URL de imagen o una clase de FontAwesome.
- **iconType**: Define el tipo de ícono: \`html\`, \`image\`, \`fontawesome\`.
- **href**: Si se proporciona, el componente se convierte en un enlace.
- **isSelected**: Si es \`true\`, el enlace se mostrará como seleccionado con un color especial.
- **linkColor**: Define el color del texto o enlace por defecto, dependiendo del contexto.
- **selectedColor**: Define el color del enlace cuando está seleccionado.
- **iconPosition**: Posición del ícono: \`left\` o \`right\`.

### Ejemplo de uso:
\`\`\`vue
<TextWithIcon
  text="Mi Perfil"
  icon="<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><circle cx='12' cy='7' r='4' /><path d='M5.5 21h13a2.5 2.5 0 0 0 2.5 -2.5v-1.5a5 5 0 0 0 -5 -5h-8a5 5 0 0 0 -5 5v1.5a2.5 2.5 0 0 0 2.5 2.5' /></svg>"
  iconType="html"
  linkColor="#6b7280"
  selectedColor="#66aaff"
  iconPosition="left"
/>
\`\`\`
        `,
      },
    },
  },
} as Meta;

// Template base para las historias
const Template: StoryFn = (args) => ({
  components: { TextWithIcon },
  setup() {
    return { args };
  },
  template: '<TextWithIcon v-bind="args" />',
});

// Historia por defecto
export const Default = Template.bind({});
Default.args = {
  text: 'Mi Perfil',
  icon: `<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-user' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><circle cx='12' cy='7' r='4' /><path d='M5.5 21h13a2.5 2.5 0 0 0 2.5 -2.5v-1.5a5 5 0 0 0 -5 -5h-8a5 5 0 0 0 -5 5v1.5a2.5 2.5 0 0 0 2.5 2.5' /></svg>`,
  iconType: 'html',
  isSelected: false,
  linkColor: '#6b7280',
  selectedColor: '#66aaff',
  iconPosition: 'left',
};

// Historia con icono a la derecha
export const IconRight = Template.bind({});
IconRight.args = {
  text: 'Configuración',
  icon: 'fas fa-cog',
  iconType: 'fontawesome',
  isSelected: false,
  linkColor: '#6b7280',
  selectedColor: '#66aaff',
  iconPosition: 'right',
};

// Historia como enlace seleccionado
export const SelectedLink = Template.bind({});
SelectedLink.args = {
  text: 'Idioma',
  icon: 'fas fa-globe',
  iconType: 'fontawesome',
  href: '#',
  isSelected: true,
  linkColor: '#6b7280',
  selectedColor: '#66aaff',
  iconPosition: 'left',
};

// Historia con diferentes colores de enlace
export const CustomColors = Template.bind({});
CustomColors.args = {
  text: 'Soporte',
  icon: 'fas fa-life-ring',
  iconType: 'fontawesome',
  href: '#',
  isSelected: false,
  linkColor: '#ff6f61', // Color personalizado
  selectedColor: '#ff3333', // Color seleccionado personalizado
  iconPosition: 'left',
};
