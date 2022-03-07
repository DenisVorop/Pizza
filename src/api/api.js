import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: '/pizzas',
});

export const sortPizzasAPI = {
    async sortPizzas(category, sortBy) {
        const response = await instance
            .get(`?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`);
        return response.data;;
    }
}
