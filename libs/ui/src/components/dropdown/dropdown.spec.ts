import { mount } from '@vue/test-utils';
import Dropdown from './dropdown.vue'; // Asegúrate de que la ruta sea correcta

describe('Dropdown.vue', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];

  it('renders placeholder when no option is selected', () => {
    const wrapper = mount(Dropdown, {
      props: {
        options,
        icon: 'fa-icon', 
        iconType: 'fontawesome'
      }
    });

    expect(wrapper.text()).toContain('Selecciona una opción');
  });

  
  it('toggles dropdown menu when button is clicked', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        options,
        icon: 'fa-icon', 
        iconType: 'fontawesome'
      }
    });

    expect(wrapper.find('.dropdown-menu').exists()).toBe(false);

    await wrapper.find('.dropdown-button').trigger('click');
    expect(wrapper.find('.dropdown-menu').exists()).toBe(true);

    await wrapper.find('.dropdown-button').trigger('click');
    expect(wrapper.find('.dropdown-menu').exists()).toBe(false);
  });

  it('selects an option and emits event', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        options,
        modelValue: '',
        icon: 'fa-icon', 
        iconType: 'fontawesome'
      }
    });

    await wrapper.find('.dropdown-button').trigger('click');
    await wrapper.findAll('li').at(1)?.trigger('click'); // Seleccionar la segunda opción

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['2']); // Valor de la opción seleccionada
  });

  it('displays the selected option label', async () => {
    const wrapper = mount(Dropdown, {
      props: {
        options,
        modelValue: '3',
        icon: 'fa-icon', 
        iconType: 'fontawesome'
      }
    });

    expect(wrapper.text()).toContain('Option 3'); // La opción seleccionada debería mostrarse
  });
});
