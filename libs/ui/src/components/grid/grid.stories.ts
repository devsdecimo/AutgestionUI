import { Meta, StoryFn } from '@storybook/vue3';
import Grid from './grid.vue';
import GridItem from '../grid_item/grid_item.vue';

export default {
  title: 'Components/Grid',
  component: Grid,
  subcomponents: { GridItem },
  argTypes: {
    columns: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Defines the number of columns in the grid. Default is 12.',
    },
    columnsMd: {
      control: { type: 'number', min: 1, max: 12 },
      description:
        'Defines the number of columns in the grid for medium screens. Default is 8.',
    },
    columnsSm: {
      control: { type: 'number', min: 1, max: 12 },
      description:
        'Defines the number of columns in the grid for small screens. Default is 4.',
    },
    gap: {
      control: { type: 'text' },
      description: 'Defines the gap between grid items. Default is 0.',
    },
    breakpointMd: {
      control: { type: 'text' },
      description:
        "Defines the breakpoint for medium screens. Default is '768px'.",
    },
    breakpointSm: {
      control: { type: 'text' },
      description:
        "Defines the breakpoint for small screens. Default is '480px'.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
\`Grid\` es un contenedor de diseño flexible que organiza sus elementos hijos en un sistema de cuadrícula con un número configurable de columnas y un espacio variable entre los elementos.

### Props:
- **columns**: Define el número de columnas en la cuadrícula. Rango es \`1\` a \`12\`. Valor por defecto es \`12\`.
- **columns_md**: Define el número de columnas en la cuadrícula para pantallas medianas. Rango es \`1\` a \`12\`. Valor por defecto es \`8\`.
- **columns_sm**: Define el número de columnas en la cuadrícula para pantallas pequeñas. Rango es \`1\` a \`12\`. Valor por defecto es \`4\`.
- **gap**: Define el espacio entre los elementos de la cuadrícula en unidades \`rem\`. Rango es \`0\` a \`5\`. Valor por defecto es \`0\`.

### Ejemplo de uso:
\`\`\`html
<Grid :gap="1rem" :columns="12">
  <GridItem colSpan="1">
    <div class="box">Item 1</div>
  </GridItem>
  <GridItem colSpan="1">
    <div class="box">Item 2</div>
  </GridItem>
  <GridItem colSpan="1">
    <div class="box">Item 3</div>
  </GridItem>
</Grid>
\`\`\`
        `,
      },
    },
  },
} as Meta;

// Template base
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template: StoryFn = (args: any) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args" >
      <GridItem colSpan="1">
        <div class="box" style="background: #cce7ff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #b3d8ff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #99c9ff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #80baff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #66aaff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #4d9bff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #338cff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #197dff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #006eff">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #005fcc">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #004f99">Span 1</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #003f66">Span 1</div>
      </GridItem>

      <GridItem colSpan="2">
        <div class="box" style="background: #ffcccc">Span 2</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #ff9999">Span 2</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #ff6666">Span 2</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #ff3333">Span 2</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #ff1a1a">Span 2</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #e60000">Span 2</div>
      </GridItem>

      <GridItem colSpan="3">
        <div class="box" style="background: #ccffcc">Span 3</div>
      </GridItem>
      <GridItem colSpan="3">
        <div class="box" style="background: #99e699">Span 3</div>
      </GridItem>
      <GridItem colSpan="3">
        <div class="box" style="background: #66cc66">Span 3</div>
      </GridItem>
      <GridItem colSpan="3">
        <div class="box" style="background: #33b333">Span 3</div>
      </GridItem>

      <GridItem colSpan="4">
        <div class="box" style="background: #fff2b3">Span 4</div>
      </GridItem>
      <GridItem colSpan="4">
        <div class="box" style="background: #ffdb4d">Span 4</div>
      </GridItem>
      <GridItem colSpan="4">
        <div class="box" style="background: #ffc107">Span 4</div>
      </GridItem>

      <GridItem colSpan="5">
        <div class="box" style="background: #d1b3ff">Span 5</div>
      </GridItem>
      <GridItem colSpan="5">
        <div class="box" style="background: #a64dff">Span 5</div>
      </GridItem>

      <GridItem colSpan="6">
        <div class="box" style="background: #ffd9b3">Span 6</div>
      </GridItem>
      <GridItem colSpan="6">
        <div class="box" style="background: #ff8533">Span 6</div>
      </GridItem>

      <GridItem colSpan="7">
        <div class="box" style="background: #ff99cc">Span 7</div>
      </GridItem>
      <GridItem colSpan="8">
        <div class="box" style="background: #66ffff">Span 8</div>
      </GridItem>
      <GridItem colSpan="9">
        <div class="box" style="background: #cc9966">Span 9</div>
      </GridItem>
      <GridItem colSpan="10">
        <div class="box" style="background: #ccff33">Span 10</div>
      </GridItem>
      <GridItem colSpan="11">
        <div class="box" style="background: #40e0d0">Span 11</div>
      </GridItem>
      <GridItem colSpan="12">
        <div class="box" style="background: #b3b300">Span 12</div>
      </GridItem>
    </Grid>
  `,
});

// Default Story
export const Default = Template.bind({});
Default.args = {
  columns: 12,
  columnsMd: 8,
  columnsSm: 4,
  gap: '1rem',
  breakpointSm: '768px',
  breakpointMd: '1024px',
};

// Grid con offsets
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const WithOffsets = (args: any) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args">
       <GridItem colSpan="1" offsetLeft="1">
        <div class="box" style="background: #cce7ff">Span 1 +<br>Offset 1</div>
      </GridItem>
      <GridItem colSpan="3" offsetLeft="2">
        <div class="box" style="background: #b3d8ff">Span3 + Offset 2</div>
      </GridItem>
      <GridItem colSpan="4" offsetLeft="4">
        <div class="box" style="background: #99c9ff">Span 4 + Offset 4</div>
      </GridItem>
      <GridItem colSpan="5" offsetLeft="7">
        <div class="box" style="background: #80baff">Span 5 + Offset7</div>
      </GridItem>
    </Grid>
  `,
});
