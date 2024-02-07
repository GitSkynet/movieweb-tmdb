import axios from 'axios';

class Service {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            // withCredentials: true
        });
    };

    GetInTheatersData = async (limit) => {
        try {
            const inTheatersData = {
                upcoming: await this.GetMostPopular(limit),
                topRated: await this.GetTopRated(limit),
                popular: await this.GetMostPopular(limit),
                mostRecent: await this.GetMostRecent(limit)
            };

            console.log("inTheatersData:", inTheatersData);
            return inTheatersData;
        } catch (error) {
            console.log(error);
        }
    }

    GetMostPopular = async (limit) => { 
        try {
            const response = await this.service.get(`/movies/get_most_popular_intheaters?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetMostRecent = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_most_recent_intheaters?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetTopRated = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_top_rated_intheaters?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetComingSoon = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_comingsoon_intheaters?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

}

const defaultRequestFunctions = new Service();
export default defaultRequestFunctions;