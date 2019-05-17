import { Component, OnInit } from '@angular/core';
import { Iinjuries } from '../iinjuries';
import { DataServiceService } from '../data-service.service';
import { IplayerData } from '../iplayer-data';

@Component({
  selector: 'app-content-area',
  templateUrl: './content-area.component.html',
  styleUrls: ['./content-area.component.css']
})
export class ContentAreaComponent implements OnInit {
  injuriesArray: IplayerData[] = [];
  urlPlayerInjuries = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/player_injuries.json';

  teamSelected: any;
  playerResult: Iinjuries;
  playerInfo: any;
  teamName = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getUrl(this.urlPlayerInjuries).subscribe(x => {
      console.log('ngOnInit() SAYS: this x->', x);
      for (let pInjuries of x.playerinjuries.playerentry) {
        const playerInfo: IplayerData = {
          
          LastName: pInjuries.player.LastName,
          FirstName: pInjuries.player.FirstName,
          Position: pInjuries.player.Position,
          injury: pInjuries.injury,
          Name: pInjuries.team.Name, // Team
          Abbreviation: pInjuries.team.Abbreviation,
        };
        this.injuriesArray.push(playerInfo);
        console.log(playerInfo);
      }
    });
  }

  getPlayerInfo() {
    if (this.teamSelected) {
      // tslint:disable-next-line: max-line-length
      this.urlPlayerInjuries = `https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/player_injuries.json${this.teamSelected}f8428026-0f5b-475b-96c5-b217bd`;
      this.dataService.getUrl(this.urlPlayerInjuries).subscribe(
        rsp => {
          this.playerResult = rsp;
          this.playerInfo = this.playerResult;
          this.teamName =
            this.playerInfo.pInjuries.team.Abbreviation;
          console.log(this.playerInfo.pInjuries.team.Abbreviation);
        }
      );
    }
  }
  playerInfoBtn() {
    this.getPlayerInfo();
    console.log('button is clickable');
  }
}
