import { useEffect } from "react";
import apiClient from "../../utils/client";
import { useState } from "react";

export const useFetchUsers = () => {
    const [selectedUser, setSelectedUser] = useState(null)
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const res = await apiClient.get('/user');
            setSelectedUser(res.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchUserData();
      }, []);
return selectedUser;
}