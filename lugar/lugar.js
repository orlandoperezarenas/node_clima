const axios = require('axios')


const getLugarLatLon = async(direccion) => {


    const url = encodeURI(direccion);
    console.log(url);


    const instance = axios.create({
        baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${url}&appid=f823b305a560bd2d2843ddaf7d80fb1c`,
    });

    const resp = await instance.get();
    if (resp.data.coord.length === 0) {
        throw new Error(`No hay direccion para direccion:${direccion}`);
    }
    const data = resp.data.coord;

    return {

        lat: data.lat,
        lng: data.lon

    }

};

module.exports = {
    getLugarLatLon
}