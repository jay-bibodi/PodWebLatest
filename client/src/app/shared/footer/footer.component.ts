import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-footer-cmp',
    templateUrl: 'footer.component.html'
})

export class FooterComponent {
    test: Date = new Date();
    @Input() pathOfPodcastId:any;

    ngOnInit(){
        console.log(this.pathOfPodcastId);
    }
}
