import { Component } from '@angular/core'
import { GameConsole } from './game-console.interface'
import { GameConsoleService } from './services/game-console.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'Angular Challenge'
  timesMoreFun = 4

  gameConsoles: GameConsole[] = this.gameConsoleService.list()
  mostSoldGameConsole: string
  lessSoldGameConsole: string

  constructor(private gameConsoleService: GameConsoleService) {
    var playSale = 0
    var xboxSale = 0
    var switchSale = 0
    var playCnt = 0
    var xboxCnt = 0
    var switchCnt = 0
    var weekPerYear = 52

// Ventes moyennes par semaine 2018 : Ventes unitaires 2018 / nombre de semaines par an
// Ventes moyennes par semaine 2019 : Ventes moyennes par semaine 2018 - (Ventes moyennes par semaine 2017 - Ventes moyennes par semaine 2018) (calcule en fonction de la progression de vente)


    for (var count = 0; count < 3 ; count++) {
      if (this.gameConsoles[count].name == "Playstation 4") {
        this.gameConsoles[count].salesperWeek2017 = this.gameConsoles[count].sales2017 / weekPerYear
        this.gameConsoles[count].salesperWeek2018 = this.gameConsoles[count].sales2018 / weekPerYear
        this.gameConsoles[count].salesperWeek2019 = this.gameConsoles[count].salesperWeek2018 - (this.gameConsoles[count].salesperWeek2017 - this.gameConsoles[count].salesperWeek2018)
        playSale = this.gameConsoles[count].sales2017 + this.gameConsoles[count].sales2018
        playCnt = count
      }
      if (this.gameConsoles[count].name == "X Box One") {
        this.gameConsoles[count].salesperWeek2017 = this.gameConsoles[count].sales2017 / weekPerYear
        this.gameConsoles[count].salesperWeek2018 = this.gameConsoles[count].sales2018 / weekPerYear
        this.gameConsoles[count].salesperWeek2019 = this.gameConsoles[count].salesperWeek2018 - (this.gameConsoles[count].salesperWeek2017 - this.gameConsoles[count].salesperWeek2018)
        xboxSale = this.gameConsoles[count].sales2017 + this.gameConsoles[count].sales2018
        xboxCnt = count
      }
      if (this.gameConsoles[count].name == "Switch") {
        this.gameConsoles[count].salesperWeek2017 = this.gameConsoles[count].sales2017 / weekPerYear
        this.gameConsoles[count].salesperWeek2018 = this.gameConsoles[count].sales2018 /weekPerYear
        this.gameConsoles[count].salesperWeek2019 = this.gameConsoles[count].salesperWeek2018 - (this.gameConsoles[count].salesperWeek2017 - this.gameConsoles[count].salesperWeek2018)
        switchSale = this.gameConsoles[count].sales2017 + this.gameConsoles[count].sales2018
        switchCnt = count
      }
    }

    ///////// calcule mostSoldGameConsole

    if (xboxSale > playSale && xboxSale > switchSale) {
        this.mostSoldGameConsole = this.gameConsoles[xboxCnt].name
    }
    if (playSale > xboxSale && playSale > switchSale) {
        this.mostSoldGameConsole = this.gameConsoles[playCnt].name
    }    
    if (switchSale > playSale && switchSale > xboxSale) {
        this.mostSoldGameConsole = this.gameConsoles[switchCnt].name
    }

    ///////// calcule lessSoldGameConsole

    if (xboxSale < playSale && xboxSale < switchSale) {
      this.lessSoldGameConsole = this.gameConsoles[xboxCnt].name
    }
    if (playSale < xboxSale && playSale < switchSale) {
        this.lessSoldGameConsole = this.gameConsoles[playCnt].name
    }    
    if (switchSale < playSale && switchSale < xboxSale) {
        this.lessSoldGameConsole = this.gameConsoles[switchCnt].name
    }
    
  }
}
