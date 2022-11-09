import { Component } from "@angular/core";

interface Game {
    title: string,
    price: number,
    img: string,
    raiting: number
    //price? - can exist or not
}

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})

export class GameComponent {
    shouldPriceBeGreen: boolean;
    // shouldShowAdditionalContent?: boolean = false;
    games: Game[] = [
        {
            title: 'Minecraft',
            price: 10,
            img: 'https://image.api.playstation.com/vulcan/img/cfn/11307uYG0CXzRuA9aryByTHYrQLFz-HVQ3VVl7aAysxK15HMpqjkAIcC_R5vdfZt52hAXQNHoYhSuoSq_46_MT_tDBcLu49I.png',
            raiting: 1
        },
        {
            title: 'Candy Crush', price: 0,
            img: 'https://play-lh.googleusercontent.com/gU9NKwpgLDYA6LIYK4dnkAkVyqNHUfTIqklEiNuO4oZ2OCpWQhQdqhnDh8Yb9B8SWIM',
            raiting: 5
        },
        {
            title: 'Counter Strike',
            price: 120,
            img: 'https://cdn-images.win.gg/resize/w/1000/format/webp/type/progressive/fit/cover/path/wp/uploads/2021/08/the-complete-list-of-nvidia-settings-for-high-csgo-fps-in-2021.jpg',
            raiting: 10
        },
    ]

    handleExpandContentClick(): void {
        this.shouldPriceBeGreen = this.shouldPriceBeGreen ? false : true
    }
}