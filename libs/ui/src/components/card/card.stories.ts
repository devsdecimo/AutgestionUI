import Card from './card.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: `Este componente sirve para crear una card con un listado de datos, cada uno de los cuales tiene un titulo y un contenido.`,
      },
    },
  },
  argTypes: {
    skin: {
      control: { type: 'select' },
      options: ['primary', 'withHeader', 'withRightIcon', 'inactive'],
    },
    icon: { control: 'text' },
    iconType: { control: { type: 'select'}, options: ['html', 'image', 'fontawesome'] } ,
    title: { control: 'text'},

  },
} as Meta;

const Template: StoryFn = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<Card v-bind="args"></Card>',
});

export const Primary = Template.bind({});
Primary.args = {
  skin: 'primary',
};

export const WithHeaderFontAwesome = Template.bind({});
WithHeaderFontAwesome.args = {
  skin: 'withHeader',
};

export const WithHeaderHTML = Template.bind({});
WithHeaderHTML.args = {
  skin: 'withHeader',
  iconType: 'html',
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-map-pin m-auto" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="11" r="3" />
      <path d="M12 2a7 7 0 0 0 7 7c0 4 -7 13 -7 13s-7 -9 -7 -13a7 7 0 0 0 7 -7" />
    </svg>
  `,

};

export const WithHeaderImage = Template.bind({});
WithHeaderImage.args = {
  skin: 'withHeader',
  iconType: 'image',
  icon: 'https://via.placeholder.com/24', // Ruta de imagen
};

export const WithRightIconFontAwesome = Template.bind({});
WithRightIconFontAwesome.args = {
  skin: 'withRightIcon',
};

export const WithRightIconHTML = Template.bind({});
WithRightIconHTML.args = {
  skin: 'withRightIcon',
  iconType: 'html',
  icon: `
    <svg xmlns="http://www.w3.org/2000/svg" class="icon-tabler icon-tabler-map-pin m-auto" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      <circle cx="12" cy="11" r="3" />
      <path d="M12 2a7 7 0 0 0 7 7c0 4 -7 13 -7 13s-7 -9 -7 -13a7 7 0 0 0 7 -7" />
    </svg>
  `,
};

export const WithRightIconImage = Template.bind({});
WithRightIconImage.args = {
  skin: 'withRightIcon',
  iconType: 'image',
  icon: 'https://via.placeholder.com/24', // Ruta de imagen
};

export const Inactive = Template.bind({});
Inactive.args = {
  skin: 'inactive',
};
