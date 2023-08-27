import axios from "axios";

export class ProfileService {
  private URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example='

  async getByFilter(filter: string = 'all') {
    return axios.get(this.URL + filter)
  }
}