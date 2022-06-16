import { Injectable } from '@angular/core';
import { House } from './models/House';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

type HouseRepsonse = {
  houses: House[];
}

type LocationResponse = {
  country: string,
	ip: string
}

type PersonResponse = {
  peopleList: Person
}

interface NewPerson {
  name: string,
  title: string,
  house: string,
  location: string
}

export interface Person {
  id: number,
  name: string,
  title: string,
  house: string,
  location: string,
}

interface PeopleResponse{
  peopleList: Person[]
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

  getPeople() {
    return this.http.get<PeopleResponse>(peopleEndpoint)
  }

  getLocation() {
    return this.http.get<LocationResponse>("https://api.country.is/")
  }

  editPerson(person: Person) {
    return this.http.put<PersonResponse>(`${peopleEndpoint}/${person.id}`, person)
  }

  deletePerson(id: number) {
    return this.http.delete(`${peopleEndpoint}/${id}`)
  }
}
