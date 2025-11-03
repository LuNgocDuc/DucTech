import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data, setData] = useState()

    // Mock Data
    const mockBrands = ["All", "Sony", "Dell", "Samsung", "Apple", "Asus", "Nike"];

    // fetching all products from api

    const fetchAllProducts = async() => {
        try {
            const res = await axios.get('https://api.escuelajs.co/api/v1/products')
            console.log(res);
            const productsData = res.data
            setData(productsData)

        } catch (error) {
            console.log(error)
        }
    }

    const getUniqueCategory = (data, property) => {
        let newVal = data?.map((curElem) => {
            return curElem[property]?.name
        })
        const filteredValues = newVal?.filter(item => item !== undefined && item !== null);
        newVal = ["All", ...new Set(filteredValues)]
        return newVal
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
    const brandOnlyData = mockBrands
    return <DataContext.Provider value={{data, setData, fetchAllProducts, categoryOnlyData, brandOnlyData }} >
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext)