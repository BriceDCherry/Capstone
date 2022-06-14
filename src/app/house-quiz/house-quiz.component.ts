import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-house-quiz',
  templateUrl: './house-quiz.component.html',
  styleUrls: ['./house-quiz.component.scss']
})
export class HouseQuizComponent implements OnInit {
  name: string=""
  constructor() { }

  ngOnInit(): void {
  }

  sort() {}

}
