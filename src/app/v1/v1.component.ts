import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-v1',
  templateUrl: './v1.component.html',
  styleUrls: ['./v1.component.scss']
})
export class V1Component {
  public featureGroups: Array<any>;
  public featureGroupsFlat: Array<any> = [];

  constructor(private appService: AppService) {
    this.appService.getData().subscribe(x => {
      this.featureGroups = x;
      console.log(x);
    });
  }

  public toggleSectionGroup(featureGroup: any): void {
    featureGroup.visible = !featureGroup.visible;
  }

  // private flatFeatureGroups(): void {

  //   this.featureGroups
  //     .forEach(featureGroup => featureGroup.features
  //       .forEach((features: any) => this.featureGroupsFlat.push(...features.featureValues))
  //     )

  //   console.log(this.featureGroupsFlat);
  // }
}
