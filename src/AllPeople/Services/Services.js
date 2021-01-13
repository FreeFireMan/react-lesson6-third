export default class ServicesOfSW {

     url = 'https://swapi.dev/api/people';

    async getHeroById (id) {
        return await fetch(this.url + `/${id}`).then(value => value.json())
    }
}