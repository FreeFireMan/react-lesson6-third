export default class ServicesOfSW {

     url = 'https://swapi.dev/api/people';

     getHeroById (id) {
        return fetch(this.url + `/${id}`).then(value => value.json())
    }
}
export const servicesOfSW = new ServicesOfSW();
