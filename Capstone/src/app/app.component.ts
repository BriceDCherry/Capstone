import { Component, OnInit } from '@angular/core';
import { HouseService } from './house.service';
import {House} from './models/House';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  houses: House[] = []

  constructor(private houseService: HouseService) {}
  
  
  ngOnInit(): void {
    this.houses = this.houseService.house
  }
}
