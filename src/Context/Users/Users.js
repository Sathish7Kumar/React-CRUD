import React,{useState,useEffect} from 'react'
import axios from "axios";

export const UsersContext = React.createContext();

export const UsersProvider = ({children}) => {
    const [UsersData, setUsersData] = useState([]);
    const BaseURL = `https://61696b9a09e030001712c374.mockapi.io`;

    useEffect(() => {
        const fetchUserData = async () => {
            await axios.get(`${BaseURL}/Users`)
            .then(response => setUsersData(response.data) )
        }
        fetchUserData();
        return () => {
            <></>
        }
    }, [BaseURL])
    return(
        <UsersContext.Provider value={[UsersData, setUsersData,BaseURL]}>
            {children}
        </UsersContext.Provider>
    )
}
