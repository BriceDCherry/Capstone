import { Injectable } from '@angular/core';
import { House } from './models/House';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type HouseRepsonse = {
  houses: House[];
}

interface NewPerson {
  name: string,
  title: string,
  house: string,
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const housesEndpoint = environment.housesEndpoint
const peopleEndpoint = environment.peopleEndpoint

@Injectable({
  providedIn: 'root'
})
export class HouseService {
  house: House[] = [{
    name: "Gryffindor",
    imageUrl: "https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg",
    details: "House details",
  }, {
    name: "Gryffindor",
    imageUrl: "https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg",
    details: "House details",
  }, {
    name: "Gryffindor",
    imageUrl: "https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg",
    details: "House details",
  }, {
    name: "Gryffindor",
    imageUrl: "https://i.pinimg.com/originals/44/d4/5f/44d45f5786e8371255e8332e8bc456c5.jpg",
    details: "House details", 
  }]

  constructor(private http: HttpClient) {

  }

  fetchHouses() {
    return this.http.get<HouseRepsonse>(housesEndpoint)
  }

  addPerson(person: NewPerson) {
    return this.http.post(`${peopleEndpoint}`, person, httpOptions).subscribe()
  }

}
