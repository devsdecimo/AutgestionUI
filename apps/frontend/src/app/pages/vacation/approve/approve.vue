<script setup lang="ts">
//Data
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { Alert } from '@ventura/ui';

const route = useRoute();
const router = useRouter();

const requestData = {
  requestNumber : route.params.id,
  startDate: '2024-09-01',
  endDate: '2024-09-05',
  days: 4,
  typeOfPolicy: {
    active: true,
    title: 'Vacaciones de Ley',
    balance:{
      accumulated: '0.00',
      consumed: '0.00',
      requested: '0.00',
      adjustment: '0.00',
      available: '0.00',
      availableWithReservation: '0.00',
    }
  },
}

const employeeData = {
    name: 'Jorge Trejos Castro',
    code: '111111263',
    position: 'Goodpack Administrativo'
}

const form = ref({
  requestNumber: route.params.id,
  reason:'',
  response: null
})

const showConfirmationMessage = ref(false)

// Función que se ejecuta al enviar el formulario
const handleSubmit = () => {
  console.log(form.value);
  showConfirmationMessage.value = true;
  setTimeout(() => {
    showConfirmationMessage.value = false;
    router.push('/vacations/resolutions')
  }, 3000);
};



</script>

<template>
  <!-- container botones -->
  <div class="submenu-container">
    <a href="/vacations/request" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.vacationRequest') }}
    </a>
    <a href="/vacations/year-report" class="submenu-container__item btn--small btn--outline">
      {{ $t('vacation.submenuLabels.yearReport') }}
    </a>
    <a href="/vacations/resolutions" class="submenu-container__item btn--small">
      {{ $t('vacation.submenuLabels.resolution') }}
    </a>
  </div>
  <div class="main-container">
    <section>
      <h2 class="general-title pb-8">{{$t('vacationApprove.title')}}</h2>
      <div class="lg:card pb-8">
        <div>
          <div class="card--main p-4 mb-8 lg:mb-0 lg:px-10 xl:px-20 2xl:px-40" >
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-2">
              <div>
                <span class="general-title">{{employeeData.name}}</span>
                <h4 class="general-text">{{employeeData.code}}</h4>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationApprove.balanceHeaders.policy')}}</h4>
                <span class="general-title">{{requestData.typeOfPolicy.title}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationApprove.balanceHeaders.accumulated')}}</h4>
                <span class="general-title">{{requestData.typeOfPolicy.balance.accumulated}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationApprove.balanceHeaders.enjoyed')}}</h4>
                <span class="general-title">{{requestData.typeOfPolicy.balance.consumed}}</span>
              </div>
              <div>
                <h4 class="general-text">{{$t('vacationApprove.balanceHeaders.available')}}</h4>
                <span class="general-title">{{requestData.typeOfPolicy.balance.available}}</span>
              </div>
            </div>
          </div>
          <div class="p-0 lg:p-20">
            <h3 class="general-title mb-8">{{$t('vacationApprove.subtitle')}}</h3>
            <div class="mobile-card">
              <form class="input-form" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div class="flex flex-col">
                    <label>{{$t('vacationApprove.formLabels.typeOfPolicy')}}</label>
                    <input type="text" :value="requestData.typeOfPolicy.title" readonly>
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationApprove.formLabels.days')}}</label>
                    <input type="text" :value="requestData.days" readonly>
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationApprove.formLabels.startDate')}}</label>
                    <input type="date" :value="requestData.startDate" readonly>
                  </div>
                  <div class="flex flex-col">
                    <label>{{$t('vacationApprove.formLabels.endDate')}}</label>
                    <input type="date" :value="requestData.endDate" readonly>
                  </div>
                  <div class="flex flex-col lg:col-span-2">
                    <label>{{$t('vacationApprove.formLabels.reason')}}</label>
                    <input type="text" v-model="form.reason">
                  </div>
                  <div class="col-start-1 lg:col-start-2 mx-8 lg:mx-0 mb-6 lg:mt-0 flex flex-col lg:flex-row justify-end gap-6">
                    <button type="submit" @click="form.response=false" class="btn--main  btn--small lg:col-start-2 font-semibold">{{$t('vacationApprove.btnLabels.reject')}}</button>
                    <button type="submit" @click="form.response=true" class="btn--main  btn--small lg:col-start-2 font-semibold">{{$t('vacationApprove.btnLabels.approve')}}</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- Modal de confirmación -->
  <div class="fixed bottom-0 right-0">
    <Alert v-if="showConfirmationMessage" type="success" :title="form.response?$t('vacationApprove.alertLabels.approvedTitle'):$t('vacationApprove.alertLabels.rejectedTitle')" :content="$t('vacationApprove.alertLabels.redirectText')"></Alert>
  </div>
</template>

<style scoped lang="postcss">
.mobile-card{
  @media screen and (max-width:1024px){
    @apply card p-4;
  }
}
.card--main{
  span,h4{
    @apply text-white !important;
  }
}

</style>
