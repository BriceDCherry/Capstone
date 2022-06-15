import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import { Person } from '../house.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {
  people: Person[] = []
  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getPeople().subscribe(response => {
      return this.people = response.peopleList
    })
  }
  

}
