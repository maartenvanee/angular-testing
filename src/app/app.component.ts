import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    public title = 'Angular Testing';
    public points = 1;

    public plus() {
        this.points++;
    }
    public reset() {
        this.points = 0;
    }
}


