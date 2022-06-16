import { Component, OnInit } from '@angular/core';
import { HouseService } from "../house.service"



@Component({
  selector: 'app-house-quiz',
  templateUrl: './house-quiz.component.html',
  styleUrls: ['./house-quiz.component.scss']
})
export class HouseQuizComponent implements OnInit {
  name: string=""
  title: string=""
  randomizer: number=0
  house: string=""
  location: string=""
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.houseService.getLocation().subscribe(response => this.location = response.country)
  }

  sort() {
    this.randomizer = Math.floor((Math.random()*100+1))
    if (this.randomizer > 0 && this.randomizer < 20) {
      this.house = "Muggle"
    } else if (this.randomizer >= 20 && this.randomizer < 40) {
      this.house = "Hufflepuff"
    } else if (this.randomizer >= 40 && this.randomizer < 60) {
      this.house = "Ravenclaw"
    } else if (this.randomizer >= 60 && this.randomizer < 80) {
      this.house = "Slytherin"
    } else if (this.randomizer >= 80 && this.randomizer < 100) {
      this.house = "Gryffindor"
    } 
    const newPerson = {
      name: this.name,
      title: this.title,
      house: this.house,
      location: this.location
    } 
    alert(`You are a ${newPerson.house}`)
    this.houseService.addPerson(newPerson)
  }

}
