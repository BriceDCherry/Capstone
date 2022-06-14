import { Component, OnInit } from '@angular/core';
import { HouseService } from '../house.service';
import {House} from '../models/House';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.scss']
})
export class HouseListComponent implements OnInit {


  houses: House[] = []

  constructor(private houseService: HouseService) {}
  
  
  ngOnInit(): void {
    this.houseService.fetchHouses().subscribe(response => {
      this.houses = response.houses
      console.log(response.houses)
    })
  }
}
