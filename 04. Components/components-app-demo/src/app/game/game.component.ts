import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number
    //price? - can exist or not
}

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    games: Game[]=[
        {title:'Minecraft', price: 10},
        {title:'Candy Crush', price: 0},
        {title:'Counter Strike', price: 120},
    ]
}