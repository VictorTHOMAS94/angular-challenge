import { Injectable } from '@angular/core'
import { GameConsole } from '../game-console.interface'

@Injectable({
  providedIn: 'root'
})
export class GameConsoleService {
  list(): GameConsole[] {
    return [
      {
        name: 'Playstation 4',
        sales2017: 20,
        sales2018: 18,

        // moyenne par semaine
        salesperWeek2017: 0,
        salesperWeek2018: 0,
        salesperWeek2019: 0
      },
      {
        name: 'X Box One',
        sales2017: 7.62,
        sales2018: 6.96,

        // moyenne par semaine
        salesperWeek2017: 0,
        salesperWeek2018: 0,
        salesperWeek2019: 0
      },
      {
        name: 'Switch',
        sales2017: 0,
        sales2018: 16.33,
        
        // moyenne par semaine
        salesperWeek2017: 0,
        salesperWeek2018: 0,
        salesperWeek2019: 0
      }
    ]
  }
}
