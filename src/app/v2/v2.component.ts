import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-v2',
  templateUrl: './v2.component.html',
  styleUrls: ['./v2.component.scss']
})
export class V2Component {
  public featureGroups: Array<any>;
  public featureGroupsFlat: Array<any> = [];

  constructor(private appService: AppService) {
    this.appService.getData().subscribe(x => {
      this.featureGroups = x;
      console.log(x);
    })
  }
}
