import axios from 'axios';

class Service {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            // withCredentials: true
        });
    };

    // Router [GET] Most popular Movies
    GetMostPopular = async (id) => {
        try {
            const response = await this.service.get(`/movies/get_most_popular?language=es&results=15`);
            console.log("yeeep")
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    // Router [GET] Most refent Movies
    GetMostRecent = async (id) => {
        try {
            const response = await this.service.get(`/movies/get_most_recent?language=es&status=Released&limit=15`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetTopRated = async (id) => {
        try {
            const response = await this.service.get(`/movies/get_top_rated?limit=15`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetComingSoon = async (id) => {
        try {
            const response = await this.service.get(`/movies/get_comingsoon?limit=15`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}

const defaultRequestFunctions = new Service();
export default defaultRequestFunctions;