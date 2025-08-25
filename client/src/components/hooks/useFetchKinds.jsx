import { useEffect } from "react"
import { useState } from "react"
import apiClient from "../../utils/client"

export const useFetchKinds = () => {
    const [kinds, setKinds] = useState(null)

    useEffect(() => {
        const fetchKinds = async() => {
            try {
                const res = await apiClient.get('/kind');
                setKinds(res.data);
              } catch (error) {
                NotificationFailure(error.response);
              }
        }
        fetchKinds();
    },[])
    return kinds;
}