import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HouseService } from '../house.service';

interface Person {
  id: number,
  name: string,
  title: string,
  house: string
}

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
  id!: string;
  router: Router
  people!: Person[]
  person?: Person
  constructor(private houseService: HouseService, private route: ActivatedRoute, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id") || ""

    this.houseService.getPeople().subscribe(response => {
      this.people = response.peopleList;
      this.person = this.people.find(person => person.id === +this.id)
      if (this.people === undefined) {
        this.router.navigate(['/404'])
      }
    })

  }

}
