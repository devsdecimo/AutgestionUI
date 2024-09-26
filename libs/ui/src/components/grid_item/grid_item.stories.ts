import { Meta, StoryFn } from '@storybook/vue3';
import Grid from '../grid/grid.vue';
import GridItem from '../grid_item/grid_item.vue';

export default {
  title: 'Components/GridItem',
  component: GridItem,
  subcomponents: { Grid },
  argTypes: {
    colSpan: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Defines how many columns the item spans. Default is 1.',
    },
    colSpanMd: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Defines how many columns the item spans on medium screens. Default is 2.',
    },
    colSpanSm: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Defines how many columns the item spans on small screens. Default is 4.',
    },
    offsetLeft: {
      control: { type: 'number', min: 0, max: 11 },
      description: 'Defines the number of columns to offset the item from the left. Default is 0.',
    },
    offsetRight: {
      control: { type: 'number', min: 0, max: 11 },
      description: 'Defines the number of columns to offset the item from the right. Default is 0.',
    },
    order: {
      control: { type: 'number' },
      description: 'Defines the order of the grid item within the grid. Default is 0.',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**GridItem** es un componente que representa un elemento dentro de la cuadrícula. Se utiliza en conjunto con el componente \`Grid\` para organizar su disposición en columnas, con opciones para desplazamiento y orden.

### Props:
- **colSpan**: Define cuántas columnas ocupa el elemento. Rango: \`1\` a \`12\`. Valor predeterminado: \`1\`.
- **colSpanMd**: Cuántas columnas ocupa el elemento en pantallas medianas. Predeterminado: \`2\`.
- **colSpanSm**: Cuántas columnas ocupa el elemento en pantallas pequeñas. Predeterminado: \`4\`.
- **offsetLeft**: Número de columnas que desplaza el elemento desde la izquierda. Rango: \`0\` a \`11\`. Valor predeterminado: \`0\`.
- **offsetRight**: Número de columnas que desplaza el elemento desde la derecha. Rango: \`0\` a \`11\`. Valor predeterminado: \`0\`.
- **order**: Define el orden del elemento dentro del grid. Valor predeterminado: \`0\`.

### Ejemplo de uso:
\`\`\`html
<Grid :columns="12" :gap="'1rem'">
  <GridItem colSpan="2" offsetLeft="1">
    <div class="box">Item 1 (Span 2, Offset 1)</div>
  </GridItem>
  <GridItem colSpan="3" offsetRight="2">
    <div class="box">Item 2 (Span 3, Offset Right 2)</div>
  </GridItem>
  <GridItem colSpan="6">
    <div class="box">Item 3 (Span 6)</div>
  </GridItem>
</Grid>
\`\`\`
        `,
      },
    },
  },
} as Meta;

// Template base para GridItem
const Template: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid :columns="12" :gap="'1rem'">
      <GridItem v-bind="args">
        <div class="box" :style="{ background: '#99c9ff' }">GridItem<br>Span {{ args.colSpan }}<br>Offset Left {{ args.offsetLeft }}<br>Offset Right {{ args.offsetRight }}</div>
      </GridItem>
    </Grid>
  `,
});

// Historia por defecto para mostrar diferentes combinaciones de propiedades
export const Default = Template.bind({});
Default.args = {
  colSpan: 6,
  colSpanMd: 4,
  colSpanSm: 2,
  offsetLeft: 0,
  offsetRight: 0,
  order: 0,
};

// Varias combinaciones de span y offsets
export const MultipleItems: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid :columns="12" :gap="'1rem'">
      <GridItem colSpan="3" offsetLeft="1">
        <div class="box" style="background: #ffcccc">Span 3 + Offset 1</div>
      </GridItem>
      <GridItem colSpan="4" offsetLeft="4">
        <div class="box" style="background: #ff9999">Span 4 + Offset 4</div>
      </GridItem>
      <GridItem colSpan="5" offsetLeft="6">
        <div class="box" style="background: #ff6666">Span 5 + Offset 6</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #ffe066">Span 2 (no offset)</div>
      </GridItem>
      <GridItem colSpan="2" offsetRight="2">
        <div class="box" style="background: #ffd633">Span 2 + Offset Right 2</div>
      </GridItem>
    </Grid>
  `,
});

// Historia para pantallas pequeñas y medianas
export const ResponsiveGridItems: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid :columns="12" :columnsMd="8" :columnsSm="4" :gap="'1rem'">
      <GridItem colSpan="4" colSpanMd="3" colSpanSm="2">
        <div class="box" style="background: #cce7ff">Span 4<br>(3 col md, 2 col sm)</div>
      </GridItem>
      <GridItem colSpan="6" colSpanMd="4" colSpanSm="2" offsetLeft="1">
        <div class="box" style="background: #b3d8ff">Span 6<br>(4 col md, 2 col sm) + Offset 1</div>
      </GridItem>
      <GridItem colSpan="2" colSpanMd="1" colSpanSm="1">
        <div class="box" style="background: #99c9ff">Span 2<br>(1 col md/sm)</div>
      </GridItem>
    </Grid>
  `,
});
ResponsiveGridItems.args = {
  colSpan: 4,
  colSpanMd: 3,
  colSpanSm: 2,
  offsetLeft: 0,
  offsetRight: 0,
  order: 0,
};

// Historia para mostrar el orden de los elementos en el grid
export const OrderedGridItems: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid :columns="12" :gap="'1rem'">
      <GridItem colSpan="3" order="3">
        <div class="box" style="background: #ffcccc">Order 3</div>
      </GridItem>
      <GridItem colSpan="3" order="1">
        <div class="box" style="background: #ff9999">Order 1</div>
      </GridItem>
      <GridItem colSpan="3" order="2">
        <div class="box" style="background: #ff6666">Order 2</div>
      </GridItem>
      <GridItem colSpan="3" order="0">
        <div class="box" style="background: #ff3333">Order 0</div>
      </GridItem>
    </Grid>
  `,
});
