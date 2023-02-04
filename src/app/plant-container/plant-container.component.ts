import {Component, Input, OnInit} from '@angular/core';
import Plant from "../Plant";

@Component({
  selector: 'app-plant-container',
  templateUrl: './plant-container.component.html',
  styleUrls: ['./plant-container.component.scss'],
})
export class PlantContainerComponent implements OnInit {

  @Input('plant') plant!: Plant;

  constructor() { }

  ngOnInit() {}


}
