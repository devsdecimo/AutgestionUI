import SideMenu from './side_menu.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/SideMenu',
  component: SideMenu,
  argTypes: {
    initialCollapsed: {
      control: { type: 'boolean' },
      description: 'Determina si el menú comienza colapsado.',
      defaultValue: false,
    },
    isResponsive: {
      control: { type: 'boolean' },
      description: 'Define si el menú debe ser responsive.',
      defaultValue: true,
    },
    links: {
      control: 'object',
      description: 'Lista de enlaces del menú con texto, icono y enlace.',
    },
    logoSrc: {
      control: 'text',
      description: 'Ruta de la imagen del logo superior.',
      defaultValue: 'https://via.placeholder.com/150x50', // Imagen de ejemplo para el logo superior
    },
    smallLogoSrc: {
      control: 'text',
      description: 'Ruta de la imagen del logo en el menú colapsado.',
      defaultValue: 'https://via.placeholder.com/50', // Imagen de ejemplo para el logo pequeño
    },
    footerLogoSrc: {
      control: 'text',
      description: 'Ruta de la imagen del logo inferior.',
      defaultValue: 'https://via.placeholder.com/100x30', // Imagen de ejemplo para el logo inferior
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
          El \`SideMenu\` es un componente de menú lateral que utiliza FontAwesome para mostrar íconos junto con texto. 
          Puede colapsar o expandirse, y adaptarse a diferentes tamaños de pantalla.
          
          ### Props
          - **initialCollapsed**: Determina si el menú comienza colapsado.
          - **isResponsive**: Define si el menú debe ser responsive.
          - **links**: Lista de enlaces del menú con texto, icono y enlace.
          - **logoSrc**: Ruta de la imagen del logo superior.
          - **smallLogoSrc**: Ruta de la imagen del logo en el menú colapsado.
          - **footerLogoSrc**: Ruta de la imagen del logo inferior.
        `,
      },
    },
  },
} as Meta<typeof SideMenu>;

const Template: StoryFn<typeof SideMenu> = (args) => ({
  components: { SideMenu },
  setup() {
    return { args };
  },
  template: '<SideMenu v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  initialCollapsed: false,
  isResponsive: true,
  logoSrc: 'https://via.placeholder.com/150x50',
  smallLogoSrc: 'https://via.placeholder.com/50',
  footerLogoSrc: 'https://via.placeholder.com/100x30',
  links: [
    { text: 'General', icon: ['fas', 'home'], href: '#', isSelected: true },
    { text: 'Mi Perfil', icon: ['fas', 'user'], href: '#', isSelected: false },
    { text: 'Acciones', icon: ['fas', 'clipboard'], href: '#', isSelected: false },
    { text: 'Vacaciones', icon: ['fas', 'plane'], href: '#', isSelected: false },
    { text: 'Permisos', icon: ['fas', 'calendar-check'], href: '#', isSelected: false },
    { text: 'Salarios', icon: ['fas', 'money-bill'], href: '#', isSelected: false },
    { text: 'Gestiones', icon: ['fas', 'tasks'], href: '#', isSelected: false },
    { text: 'Tiempo', icon: ['fas', 'clock'], href: '#', isSelected: false },
  ],
};

export const Collapsed = Template.bind({});
Collapsed.args = {
  initialCollapsed: true,
  isResponsive: true,
  logoSrc: 'https://via.placeholder.com/150x50',
  smallLogoSrc: 'https://via.placeholder.com/50',
  footerLogoSrc: 'https://via.placeholder.com/100x30',
  links: [
    { text: 'General', icon: ['fas', 'home'], href: '#', isSelected: true },
    { text: 'Mi Perfil', icon: ['fas', 'user'], href: '#', isSelected: false },
    { text: 'Acciones', icon: ['fas', 'clipboard'], href: '#', isSelected: false },
    { text: 'Vacaciones', icon: ['fas', 'plane'], href: '#', isSelected: false },
    { text: 'Permisos', icon: ['fas', 'calendar-check'], href: '#', isSelected: false },
    { text: 'Salarios', icon: ['fas', 'money-bill'], href: '#', isSelected: false },
    { text: 'Gestiones', icon: ['fas', 'tasks'], href: '#', isSelected: false },
    { text: 'Tiempo', icon: ['fas', 'clock'], href: '#', isSelected: false },
  ],
};