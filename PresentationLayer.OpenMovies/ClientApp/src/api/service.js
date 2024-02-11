import axios from 'axios';

class Service {
    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_API_URI,
            // withCredentials: true
        });
    };

    GetNumOfMovies = async (limit) => {
        try {
            const numOfMovies = await this.service.get(`/movies/get_num_movies`);
            return numOfMovies.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetInTheatersData = async (limit) => {
        try {
            const inTheatersData = {
                upcoming: await this.GetComingSoon(limit),
                topRated: await this.GetTopRated(limit),
                popular: await this.GetMostPopular(limit),
                mostRecent: await this.GetMostRecent(limit)
            };
            return inTheatersData;
        } catch (error) {
            console.log(error);
        }
    }

    GetDiscoverSectionData = async (results) => {
        try {
            const discoverSectionMovies = {
                accion: await this.GetByGenreId(1, results),
                aventura: await this.GetByGenreId(8, results),
                cienciaFiccion: await this.GetByGenreId(4, results),
                terror: await this.GetByGenreId(13, results),
            };
            return discoverSectionMovies;
        } catch (error) {
            console.log(error);
        }
    }

    GetHotSectionData = async (limit) => {
        try {
            const hotSectionData = {
                today: await this.GetToday(limit),
                thisWeek: await this.GetThisWeek(limit),
                last30Days: await this.GetLast30days(limit),
            };
            console.log("SERVICE HOTSECTION:", hotSectionData);
            return hotSectionData;
        }
        catch (error) {
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

    GetByGenreId = async (id, results) => {
        try {
            const response = await this.service.get(`/movies/get_by_category?genreId=${id}&results=${results}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetToday = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_today?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetThisWeek = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_this_week?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }

    GetLast30days = async (limit) => {
        try {
            const response = await this.service.get(`/movies/get_last_30_days?limit=${limit}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}

const defaultRequestFunctions = new Service();
export default defaultRequestFunctions;