import { Component, OnInit } from '@angular/core';
import {PlayerService} from "../player.service";
import {ConfigService} from "../config.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  constructor(private readonly playerService: PlayerService, private readonly configService: ConfigService) { }

  ngOnInit() {}

  public getHat() {
    return this.configService.getHatByIndex(this.playerService.profilePicture.hat);
  }
  public getGlasses() {
    return this.configService.getGlassesByIndex(this.playerService.profilePicture.glasses);
  }
  public getHoodie() {
    return this.configService.getHoodieByIndex(this.playerService.profilePicture.hoodie);
  }
  public getPants() {
    return this.configService.getPantsByIndex(this.playerService.profilePicture.pants);
  }
  public getShoes() {
    return this.configService.getShoesByIndex(this.playerService.profilePicture.shoes);
  }

}
