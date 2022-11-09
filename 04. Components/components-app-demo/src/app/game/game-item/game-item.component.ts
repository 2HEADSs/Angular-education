import { Component, OnDestroy, OnInit, Input, OnChanges, SimpleChanges, DoCheck } from "@angular/core";

export interface Game {
    title?: string,
    price: number,
    img: string,
    raiting: number
    //price? - can exist or not
}

@Component({
    selector: 'su-game-item',
    templateUrl: 'game-item.component.html'
})

export class GameItemComponent implements OnInit, OnDestroy, OnChanges, DoCheck {
    @Input() sourceGame: Game;

    ngOnInit(): void {
        console.log('Game item Component Created!');
    }

    ngDoCheck(): void { 
        console.log('Game item Component Checking!');

    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log('Game item input changes!', changes);

    }

    ngOnDestroy(): void {
        console.log('Game item Component Destroyed!');
    }
}