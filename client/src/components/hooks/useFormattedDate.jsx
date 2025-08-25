import{ useCallback } from 'react';

// Definimos el hook personalizado formatDate
export default function useFormatDate() {
  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1; // Los meses en JavaScript comienzan desde 0, por lo que se suma 1
    const year = date.getFullYear();

    // Formatear los componentes de la fecha como cadenas de dos dígitos
    const formattedDay = String(day).padStart(2, '0');
    const formattedMonth = String(month).padStart(2, '0');

    return `${formattedDay}/${formattedMonth}/${year}`;
  }, []);

  return formatDate;
}