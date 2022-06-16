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
  edit: boolean=false
  constructor(private houseService: HouseService) {}

  ngOnInit(): void {
    this.houseService.getPeople().subscribe(response => {
      return this.people = response.peopleList
    })
  }
  editPerson(person: Person) {
    this.houseService.editPerson(person).subscribe()
    this.toggleEdit()
  }

  toggleEdit() {
    this.edit = !this.edit
  }

  deletePerson(person: Person) {
    this.houseService.deletePerson(person.id).subscribe(() => {
      this.people = this.people.filter(p => p.id !== person.id)
    })
  }

}
