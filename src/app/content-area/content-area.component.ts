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

  dateObj: number = Date.now();
  // date and time

  injuriesArray: IplayerData[] = [];
  // Array of all injured players from all teams from the IplayerData interface that was created 
  // to pick particular info wanted
  playerInjuriesArray: IplayerData[] = [];
  // Array of injuried players from a specific team after the array of all teams were filtered out
  urlPlayerInjuries = 'https://api.mysportsfeeds.com/v1.2/pull/mlb/2019-regular/player_injuries.json';

  playerResult: Iinjuries;
  // Iinjuries interface data
  playerInfo: any;
  teamName = '';

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.getUrl(this.urlPlayerInjuries).subscribe(x => {
      console.log('ngOnInit() SAYS: this x->', x);
      for (const pInjuries of x.playerinjuries.playerentry) {
        const playerInfo: IplayerData = {
          LastName: pInjuries.player.LastName,
          FirstName: pInjuries.player.FirstName,
          Position: pInjuries.player.Position,
          injury: pInjuries.injury,
          Name: pInjuries.team.Name, // Team
          Abbreviation: pInjuries.team.Abbreviation,
          City: pInjuries.team.City,
        };
        this.injuriesArray.push(playerInfo);
      //  console.log(playerInfo);
      }
    });
  }

  getTeamInj(team: string) { // We send in the abbreviation from the click event in html.
    this.playerInjuriesArray = [];
    for (const t of this.injuriesArray) { // Doing a for loop where t is the object from injuries array
      if (team === t.Abbreviation) {
        console.log(t); // This is where you would pull the firstname and lastname and anything else.
        this.playerInjuriesArray.push(t);
      }
    }
  }
}
