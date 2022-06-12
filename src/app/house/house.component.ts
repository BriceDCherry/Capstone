import { Component, Input } from "@angular/core";

@Component({
  selector: "app-house",
  templateUrl: "./house.component.html",
  styleUrls: ["./house.component.scss"]
})
export class HouseComponent {
  @Input() name!: string;
  @Input() details!: string;
  @Input() imageUrl!: string;
  

}
