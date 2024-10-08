<script setup lang="ts">
// Types
import { DropdownOption, FilePicker } from '@ventura/ui';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { Dropdown } from '@ventura/ui';

const dropdownOptions: DropdownOption[] = [
  {
    label: 'Option 1',
    value: 1,
  },
  {
    label: 'Option 2',
    value: 2,
  },
  {
    label: 'Option 3',
    value: 3,
  },
  {
    label: 'Option 4',
    value: 4,
  },
  {
    label: 'Option 5',
    value: 5,
  },
  {
    label: 'Option 6',
    value: 6,
  },
  {
    label: 'Option 7',
    value: 7,
  },
  {
    label: 'Option 8',
    value: 8,
  },
  {
    label: 'Option 9',
    value: 9,
  },
  {
    label: 'Option 10',
    value: 10,
  },
];
</script>

<template>
  <div class="p-10">
    <FilePicker/>
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-2 card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block text-dark-4">Entidad</span>
            <span class="font-bold block"
              >Asociación <br />
              Empleados</span
            >
          </h3>
        </div>
      </div>

      <div class="col-span-2 card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block text-dark-4">Fecha de Ingreso</span>
            <span class="font-bold block">01/08/20</span>
          </h3>
        </div>
      </div>

      <div class="col-span-2 card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block">Porcentaje</span>
            <span class="font-bold block">5.00</span>
          </h3>
          <div class="mt-4">
            <span class="text-xs">
              <span class="text-success">
                <FontAwesomeIcon
                  class="mr-2"
                  :icon="['fas', 'fa-arrow-trend-up']"
                />
                1.3%
              </span>
              Up from last week
            </span>
          </div>
        </div>
      </div>

      <div class="col-span-2 card--main card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block text-dark-4">Lorem Ipsum</span>
            <span class="font-bold block">Lorem Ipsum</span>
          </h3>
        </div>
      </div>

      <div class="col-span-2 card--success card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block text-dark-4">Lorem Ipsum</span>
            <span class="font-bold block">Lorem Ipsum</span>
          </h3>
        </div>
      </div>

      <div class="col-span-2 card--dark-2 card">
        <div class="card__content">
          <h3 class="text-xs space-y-1">
            <span class="block text-dark-4">Lorem Ipsum</span>
            <span class="font-bold block">Lorem Ipsum</span>
          </h3>
        </div>
      </div>

      <div class="col-span-3 card card">
        <div class="card__content space-y-4">
          <div class="flex items-center space-x-4">
            <div class="icon-pill--main">
              <FontAwesomeIcon :icon="['fas', 'fa-user']" />
            </div>
            <div class="text-xs">
              <span class="block font-bold">Puesto</span>
              <span class="block text-dark-4"
                >Jefe de Sistemas Informáticos</span
              >
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="card--main">
              <div
                class="card__content flex flex-col items-center justify-center text-xs space-y-2"
              >
                <span class="block">Estado de Contrato</span>
                <span class="block font-bold">Activo</span>
              </div>
            </div>

            <div class="card--main">
              <div
                class="card__content flex flex-col items-center justify-center text-xs space-y-2"
              >
                <span class="block">Horario Establecido</span>
                <span class="block font-bold text-center"
                  >CH, L-J, 7:30 - 4:30 V, 7:30 - 4:00</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 card card">
        <div class="card__content space-y-4">
          <div class="flex items-center space-x-4">
            <div class="icon-pill">
              <FontAwesomeIcon :icon="['fas', 'fa-user']" />
            </div>
            <div class="text-xs">
              <span class="block font-bold">Puesto</span>
              <span class="block text-dark-4"
                >Ingeniero Sistemas Informáticos</span
              >
            </div>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div class="card--dark-2">
              <div
                class="card__content flex flex-col items-center justify-center text-xs space-y-2"
              >
                <span class="block">Estado de Contrato</span>
                <span class="block font-bold">Activo</span>
              </div>
            </div>

            <div class="card--dark-2">
              <div
                class="card__content flex flex-col items-center justify-center text-xs space-y-2"
              >
                <span class="block">Horario Establecido</span>
                <span class="block font-bold text-center"
                  >CH, L-J, 7:30 - 4:30 V, 7:30 - 4:00</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-3 card card">
        <div class="card__content space-y-4">
          <div class="flex items-start space-x-4">
            <div class="text-xs grow space-y-2">
              <div>
                <span class="block text-dark-4">Forma de Pago</span>
                <span class="block font-medium">Transferencia</span>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="block text-dark-4">Banco</span>
                  <span class="block font-medium">Banco de Costa Rica</span>
                </div>
                <div>
                  <span class="block text-dark-4">Moneda</span>
                  <span class="block font-medium">Colones</span>
                </div>
              </div>
            </div>
            <div class="icon-pill">
              <FontAwesomeIcon :icon="['fas', 'fa-colon-sign']" />
            </div>
          </div>
        </div>
        <div class="card__footer text-xs">
          <span class="block text-dark-4">Cuenta</span>
          <span class="block font-medium">CR02015202001159781714</span>
        </div>
      </div>

      <div class="col-span-3 card card">
        <div class="card__content space-y-4">
          <div class="flex items-start space-x-4">
            <div class="text-xs grow space-y-2">
              <div>
                <span class="block text-dark-4">Forma de Pago</span>
                <span class="block font-medium">Transferencia</span>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="block text-dark-4">Banco</span>
                  <span class="block font-medium">Banco de Costa Rica</span>
                </div>
                <div>
                  <span class="block text-dark-4">Moneda</span>
                  <span class="block font-medium">Dólares</span>
                </div>
              </div>
            </div>
            <div class="icon-pill">
              <FontAwesomeIcon :icon="['fas', 'fa-dollar-sign']" />
            </div>
          </div>
        </div>
        <div class="card__footer text-xs">
          <span class="block text-dark-4">Cuenta</span>
          <span class="block font-medium">CR02015202001159781714</span>
        </div>
      </div>

      <div class="col-span-7 card card">
        <div class="card__content flex items-center space-x-4">
          <div class="icon-pill--main">
            <FontAwesomeIcon :icon="['fas', 'fa-dollar-sign']" />
          </div>
          <div class="grow grid grid-cols-4 gap-6 text-xs">
            <div>
              <span class="block text-dark-4">Concepto</span>
              <span class="block font-medium">Salario Base Contrato</span>
            </div>
            <div>
              <span class="block text-dark-4">Moneda</span>
              <span class="block font-medium">Colones</span>
            </div>
            <div>
              <span class="block text-dark-4">Porcentaje</span>
              <span class="block font-medium">100%</span>
            </div>
            <div>
              <span class="block text-dark-4">Unidad de Pago</span>
              <span class="block font-medium">Mensual</span>
            </div>
          </div>
          <div class="card--main">
            <div class="card__content text-xs pr-8 py-1">
              <span class="block">Valor</span>
              <span class="block font-medium">2,243,951.86</span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-start-1 col-span-3 space-y-4">
        <select id="normal" name="normal" class="select">
          <option value="1">Lorem</option>
          <option value="3">Ipsum</option>
        </select>

        <select id="styled" name="styled" class="select--main">
          <option value="1">Lorem</option>
          <option value="3">Ipsum</option>
        </select>

        <div class="select--with-icon">
          <FontAwesomeIcon :icon="['fas', 'fa-dollar-sign']" />
          <select id="styled" name="styled" class="select">
            <option value="1">Lorem</option>
            <option value="3">Ipsum</option>
          </select>
        </div>

        <div class="select--with-icon">
          <FontAwesomeIcon :icon="['fas', 'fa-dollar-sign']" />
          <select id="styled" name="styled" class="select--main">
            <option value="1">Lorem</option>
            <option value="3">Ipsum</option>
          </select>
        </div>
      </div>

      <div class="col-span-3 space-y-4">
        <Dropdown
          :options="dropdownOptions"
          :value="dropdownOptions[3]"
          @on-option-selected="
            (option) => {
              console.log(option);
            }
          "
        />

        <Dropdown
          :options="dropdownOptions"
          :icon="['fas', 'fa-dollar-sign']"
          @on-option-selected="
            (option) => {
              console.log(option);
            }
          "
        />
      </div>
    </div>

    <div class="grid grid-cols-12 gap-4 py-4">
      <input type="text" class="col-span-2" />
      <input type="password" class="col-span-2" />
      <input type="date" class="col-span-2" />
      <input type="number" class="col-span-2" />
    </div>

    <div class="mt-8 grid grid-cols-4 md:grid-cols-6 xl:grid-cols-12 gap-4">
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />
      <div class="bg-gray-200 p-4" />

      <div class="col-span-2 bg-gray-400 p-4" />
      <div class="col-span-2 bg-gray-400 p-4" />
      <div class="col-span-2 bg-gray-400 p-4" />
      <div class="col-span-2 bg-gray-400 p-4" />
      <div class="col-span-2 bg-gray-400 p-4" />
      <div class="col-span-2 bg-gray-400 p-4" />

      <div class="col-span-4 md:col-span-6 xl:col-span-4 bg-gray-600 p-4" />
      <div class="col-span-4 md:col-span-6 xl:col-span-4 bg-gray-600 p-4" />
      <div class="col-span-4 md:col-span-6 xl:col-span-4 bg-gray-600 p-4" />
    </div>

    <div class="mt-8 space-y-10">
      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main btn--small">Small</button>
          <button class="btn--main btn--small" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn btn--small">Small</button>
          <button class="btn btn--small" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error btn--small">Small</button>
          <button class="btn--error btn--small" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning btn--small">Small</button>
          <button class="btn--warning btn--small" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--info btn--small">Small</button>
          <button class="btn--info btn--small" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--success btn--small">Small</button>
          <button class="btn--success btn--small" disabled>Disabled</button>
        </div>
      </div>

      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main">Medium</button>
          <button class="btn--main" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn">Medium</button>
          <button class="btn" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error">Medium</button>
          <button class="btn--error" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning">Medium</button>
          <button class="btn--warning" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--info">Medium</button>
          <button class="btn--info" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--success">Medium</button>
          <button class="btn--success" disabled>Disabled</button>
        </div>
      </div>

      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main btn--large">Large</button>
          <button class="btn--main btn--large" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn btn--large">Large</button>
          <button class="btn btn--large" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error btn--large">Large</button>
          <button class="btn--error btn--large" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning btn--large">Large</button>
          <button class="btn--warning btn--large" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--info btn--large">Large</button>
          <button class="btn--info btn--large" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--success btn--large">Large</button>
          <button class="btn--success btn--large" disabled>Disabled</button>
        </div>
      </div>
    </div>

    <div class="mt-8 space-y-10">
      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main btn--small btn--outline">Small</button>
          <button class="btn--main btn--small btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn btn--small btn--outline">Small</button>
          <button class="btn btn--small btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error btn--small btn--outline">Small</button>
          <button class="btn--error btn--small btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning btn--small btn--outline">Small</button>
          <button class="btn--warning btn--small btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--info btn--small btn--outline">Small</button>
          <button class="btn--info btn--small btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--success btn--small btn--outline">Small</button>
          <button class="btn--success btn--small btn--outline" disabled>
            Disabled
          </button>
        </div>
      </div>

      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main btn--outline">Medium</button>
          <button class="btn--main btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn btn--outline">Medium</button>
          <button class="btn btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error btn--outline">Medium</button>
          <button class="btn--error btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning btn--outline">Medium</button>
          <button class="btn--warning btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--info btn--outline">Medium</button>
          <button class="btn--info btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--success btn--outline">Medium</button>
          <button class="btn--success btn--outline" disabled>Disabled</button>
        </div>
      </div>

      <div class="mx-auto grid grid-cols-6 gap-4">
        <div class="space-y-2">
          <button class="btn--main btn--large btn--outline">Large</button>
          <button class="btn--main btn--large btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn btn--large btn--outline">Large</button>
          <button class="btn btn--large btn--outline" disabled>Disabled</button>
        </div>

        <div class="space-y-2">
          <button class="btn--error btn--large btn--outline">Large</button>
          <button class="btn--error btn--large btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--warning btn--large btn--outline">Large</button>
          <button class="btn--warning btn--large btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--info btn--large btn--outline">Large</button>
          <button class="btn--info btn--large btn--outline" disabled>
            Disabled
          </button>
        </div>

        <div class="space-y-2">
          <button class="btn--success btn--large btn--outline">Large</button>
          <button class="btn--success btn--large btn--outline" disabled>
            Disabled
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
