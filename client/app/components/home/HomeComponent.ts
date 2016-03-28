import {Component, OnInit} from 'angular2/core'

@Component({
    template: '<h1>{{titleName}}</h1>',
    selector: 'home'
})
export class HomeComponent implements OnInit{
    public titleName: string;
    constructor(){
        this.titleName = "Hello from home"
    }
    
    ngOnInit() { }
}