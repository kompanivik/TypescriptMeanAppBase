import {Component, OnInit} from 'angular2/core'

@Component({
    templateUrl: 'app/components/home/HomeComponent.html',
    selector: 'home'
})
export class HomeComponent implements OnInit{
    public titleName: string;
    constructor(){
        this.titleName = "Hello from home"
    }
    
    ngOnInit() { }
}