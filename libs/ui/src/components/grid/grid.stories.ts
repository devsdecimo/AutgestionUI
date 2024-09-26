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
      description: 'Defines the number of columns in the grid for medium screens. Default is 8.',
    },
    columnsSm: {
      control: { type: 'number', min: 1, max: 12 },
      description: 'Defines the number of columns in the grid for small screens. Default is 4.',
    },
    gap: {
      control: { type: 'text' },
      description: 'Defines the gap between grid items. Default is 0.',
    },
    breakpointMd: {
      control: { type: 'text' },
      description: "Defines the breakpoint for medium screens. Default is '1024px'.",
    },
    breakpointSm: {
      control: { type: 'text' },
      description: "Defines the breakpoint for small screens. Default is '768px'.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
**Grid** es un contenedor de diseño flexible que organiza sus elementos hijos en un sistema de cuadrícula con un número configurable de columnas y un espacio variable entre los elementos.

### Props:
- **columns**: Define el número de columnas en la cuadrícula. Rango: \`1\` a \`12\`. Valor predeterminado: \`12\`.
- **columnsMd**: Número de columnas para pantallas medianas. Rango: \`1\` a \`12\`. Valor predeterminado: \`8\`.
- **columnsSm**: Número de columnas para pantallas pequeñas. Rango: \`1\` a \`12\`. Valor predeterminado: \`4\`.
- **gap**: Espacio entre elementos de la cuadrícula. Ejemplo: \`1rem\`, \`8px\`.
- **breakpointMd**: Define el punto de ruptura para pantallas medianas. Predeterminado: \`1024px\`.
- **breakpointSm**: Define el punto de ruptura para pantallas pequeñas. Predeterminado: \`768px\`.

### Ejemplo básico de uso:
\`\`\`html
<Grid :gap="'1rem'" :columns="12">
  <GridItem colSpan="1">
    <div class="box">Item 1</div>
  </GridItem>
  <GridItem colSpan="2">
    <div class="box">Item 2</div>
  </GridItem>
  <GridItem colSpan="3">
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
const Template: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args">
      <!-- Span de 1 a 12, con diferentes colores para cada tamaño -->
       <GridItem v-for="i in 12" :key="'span-' + 1" :colSpan="1">
        <div class="box" :style="{ background: getColor(1) }">Span {{ 1 }}</div>
      </GridItem>
      <GridItem v-for="i in 12" :key="'span-' + i" :colSpan="i">
        <div class="box" :style="{ background: getColor(i) }">Span {{ i }}</div>
      </GridItem>
    </Grid>
  `,
  methods: {
    getColor(index: number) {
      const colors = [
        '#cce7ff', '#b3d8ff', '#99c9ff', '#80baff', '#66aaff', '#4d9bff', '#338cff', '#197dff', '#006eff', '#005fcc', '#004f99', '#003f66'
      ];
      return colors[index - 1] || '#000';
    },
  },
});

// Historia por defecto que muestra todos los tamaños de `colSpan` de 1 a 12
export const Default = Template.bind({});
Default.args = {
  columns: 12,
  columnsMd: 8,
  columnsSm: 4,
  gap: '1rem',
  breakpointSm: '768px',
  breakpointMd: '1024px',
};

// Historia con uso de offsets en los elementos
export const WithOffsets: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args">
      <GridItem colSpan="2" offsetLeft="2">
        <div class="box" style="background: #ffcccc">Span 2 + Offset 2</div>
      </GridItem>
      <GridItem colSpan="3" offsetLeft="3">
        <div class="box" style="background: #ff9999">Span 3 + Offset 3</div>
      </GridItem>
      <GridItem colSpan="4" offsetLeft="4">
        <div class="box" style="background: #ff6666">Span 4 + Offset 4</div>
      </GridItem>
    </Grid>
  `,
});

// Historia con un grid adaptativo para diferentes tamaños de pantalla
export const ResponsiveGrid: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args">
      <!-- Items para 12 columnas -->
      <GridItem colSpan="4">
        <div class="box" style="background: #ffeb99">Span 4 (12 col)</div>
      </GridItem>
      <GridItem colSpan="4">
        <div class="box" style="background: #ffe066">Span 4 (12 col)</div>
      </GridItem>
      <GridItem colSpan="4">
        <div class="box" style="background: #ffd633">Span 4 (12 col)</div>
      </GridItem>
      <!-- Items para 8 columnas (medium screen) -->
      <GridItem colSpan="2">
        <div class="box" style="background: #cce7ff">Span 2 (8 col)</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #b3d8ff">Span 2 (8 col)</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #99c9ff">Span 2 (8 col)</div>
      </GridItem>
      <GridItem colSpan="2">
        <div class="box" style="background: #80baff">Span 2 (8 col)</div>
      </GridItem>
      <!-- Items para 4 columnas (small screen) -->
      <GridItem colSpan="1">
        <div class="box" style="background: #66aaff">Span 1 (4 col)</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #4d9bff">Span 1 (4 col)</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #338cff">Span 1 (4 col)</div>
      </GridItem>
      <GridItem colSpan="1">
        <div class="box" style="background: #197dff">Span 1 (4 col)</div>
      </GridItem>
    </Grid>
  `,
});
ResponsiveGrid.args = {
  columns: 12,
  columnsMd: 8,
  columnsSm: 4,
  gap: '1rem',
  breakpointSm: '768px',
  breakpointMd: '1024px',
};

// Historia con un gap grande para observar la separación entre elementos
export const LargeGap: StoryFn = (args) => ({
  components: { Grid, GridItem },
  setup() {
    return { args };
  },
  template: `
    <Grid v-bind="args">
      <GridItem colSpan="2">
        <div class="box" style="background: #ccffcc">Span 2</div>
      </GridItem>
      <GridItem colSpan="4">
        <div class="box" style="background: #99e699">Span 4</div>
      </GridItem>
      <GridItem colSpan="6">
        <div class="box" style="background: #66cc66">Span 6</div>
      </GridItem>
    </Grid>
  `,
});
LargeGap.args = {
  columns: 12,
  columnsMd: 8,
  columnsSm: 4,
  gap: '2rem',
  breakpointSm: '768px',
  breakpointMd: '1024px',
};
