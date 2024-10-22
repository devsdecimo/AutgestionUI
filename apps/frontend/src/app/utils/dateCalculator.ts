import { watch } from 'vue';

export function useDateCalculator(formData, freeDaysOfWeek = [6, 0], freeDates = []) {

  // Función para generar las fechas festivas con el año actual si no se especifica uno
  const getFreeDatesWithCurrentYear = (dates) => {
    const currentYear = new Date().getFullYear();
    return dates.map(dateStr => {
      // Si el formato es 'dd/mm', agregar el año actual
      if (dateStr.length === 5) {  // Formato 'dd/mm'
        const [day, month] = dateStr.split('/');
        // Verificar que ambas partes existan antes de formatear
        if (day && month) {
          return new Date(`${currentYear}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
        }
      }
      // Si es 'dd/mm/yyyy', convertir directamente a Date
      const [day, month, year] = dateStr.split('/');
      if (day && month && year) {
        return new Date(`${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`);
      }
      // Si no se puede procesar correctamente, devolver null
      return null;
    }).filter(date => date !== null); // Filtrar fechas inválidas
  };

  // Generar las fechas festivas usando el año actual si no se especifica
  const processedFreeDates = getFreeDatesWithCurrentYear(freeDates);

  // Función para verificar si un día es libre
  const isFreeDay = (date, freeDaysOfWeek, freeDates) => {
    const dayOfWeek = date.getDay();
    
    // Convertir la fecha actual a 'YYYY-MM-DD' para comparación
    const dateString = date.toISOString().split('T')[0]; // Convertir a 'YYYY-MM-DD'

    // Verificar si el día es un fin de semana o parte de las fechas libres específicas
    return freeDaysOfWeek.includes(dayOfWeek) || freeDates.some(freeDate => {
      const freeDateString = freeDate.toISOString().split('T')[0];
      return freeDateString === dateString;
    });
  };

  // Función para sumar días, saltando los días no laborables
  const addDaysSkippingFreeDays = (startDate, days, freeDaysOfWeek, freeDates) => {
    const currentDate = new Date(startDate);
    let totalDays = 0;

    // Avanza por cada día hasta alcanzar el número total de días
    while (totalDays < days) {
      currentDate.setDate(currentDate.getDate() + 1); // Avanza al siguiente día
      if (!isFreeDay(currentDate, freeDaysOfWeek, freeDates)) {
        totalDays++;
      }
    }

    return currentDate;
  };

  const calculateEndDate = (startDate, days) => {
    if (!startDate || !days) return null;

    const finalDate = addDaysSkippingFreeDays(new Date(startDate), days, freeDaysOfWeek, processedFreeDates);
    return finalDate;
  };

  const calculateDays = (startDate, endDate) => {
    if (!startDate || !endDate) return 0;

    let daysBetween = 0;
    const currentDate = new Date(startDate);

    while (currentDate < new Date(endDate)) {
      currentDate.setDate(currentDate.getDate() + 1); // Avanza un día

      if (!isFreeDay(currentDate, freeDaysOfWeek, processedFreeDates)) {
        daysBetween++;
      }
    }

    return daysBetween;
  };

  // Observa cambios en la cantidad de días y ajusta la fecha final
  watch(() => formData.days, (newDays) => {
    if (formData.startDate && newDays) {
      formData.endDate = calculateEndDate(formData.startDate, newDays);
    }
  });

  // Observa cambios en la fecha final y ajusta la cantidad de días
  watch(() => formData.endDate, (newEndDate) => {
    if (formData.startDate && newEndDate) {
      formData.days = calculateDays(formData.startDate, newEndDate);
    }
  });

  return { calculateEndDate, calculateDays };
}
