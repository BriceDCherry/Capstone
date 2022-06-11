import { Injectable } from '@angular/core';
import { House } from './models/House';


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
}
