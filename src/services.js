import axios from 'axios'

export const getTopNews = (country) => axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_KEY}`)



export const getByCategory =(country,category) => axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.REACT_APP_KEY}`)