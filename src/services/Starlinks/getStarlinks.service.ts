import api from '../api';

export async function getStarlinksService (){
    try{
        const response = await api.get('https://api.spacexdata.com/v4/starlink')
        return response;
    } catch(error){
        console.log('error');
        console.log(error);
    }
}