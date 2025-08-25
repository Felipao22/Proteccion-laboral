import { useState } from "react";
import { useEffect } from "react";
import apiClient from "../../utils/client";

export const useFetchCities = () => {
const [selectedCities, setSelectedCities] = useState(null)
useEffect(() => {
    const fetchCity = async () => {
      try {
        const res = await apiClient.get('/cities');
        const orderCities = res.data.toSorted((a,b) => {
          if (a.nombre > b.nombre) return 1;
    if (b.nombre > a.nombre) return -1;
    return 0;
        })
        setSelectedCities(orderCities);
      } catch (error) {
        NotificationFailure(error.response);
      }
    };

    fetchCity();
  },[])
  return selectedCities;
}
