import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class Searchapi {
  base_api = 'https://www.omdbapi.com/?apikey=cdc5c613';

  constructor(private http: HttpClient) {
  }

  onSearch(search_values: { name: string, year: number, type: string }) {
    return this.http.get(this.base_api, {
      params: {
        's': search_values.name,
        'y': search_values.year ? search_values.year.toString() : null,
        'type': search_values.type ? search_values.type : null
      }
    });
  }

  onDetailbyId(id) {
    return this.http.get(this.base_api, {
      params: {
        'i': id,
      }
    });
  }
}
