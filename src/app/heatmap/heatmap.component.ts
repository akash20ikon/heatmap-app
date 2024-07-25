import { Component, OnInit } from '@angular/core';
import { HeatmapService } from '../core/globalRef/provider/heatmap/heatmap.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-heatmap',
  templateUrl: './heatmap.component.html',
  styleUrls: ['./heatmap.component.scss']
})
export class HeatmapComponent implements OnInit {
  public dates = ['','','','','','','','','','','','','','','','','','','','','','','','','','','',''];
  public heatmap;
  public dataMonth: string;

  constructor(public heatmapService: HeatmapService) { }

  ngOnInit(): void {
    this.getHeatMapData();
  }

  /**
   * @method getHeatMapData
   * @description This method will get the dynamic data from backend(As this is demo so from static
   * -mock folder the data is coming but updating the data there this method will handle the calculation and 
   * UI without fail).
   * the frequency calculation assumption are - 
   *  1 - The data I am considering is a month data with timestamp of each day assuming if the dates
   *      are duplicate then the data in second occurence is upadted one which logic is handled by 
   *      backend team.
   * 2 - The frequency is being calculated in three different ranges i.e. low, mid and high.
   * 3 - class interval - ( Maximum Intensity - Minimum Intensity ) / 3 - This formula will give the 
   *     range values that I have used to count the frequencies of intensity.
   * 4 - Using logic to accordingly bind the data with the UI and three diff color combination for 
   *     diff frequiencies.
   * Time Complexity - O(n) - the array object is fully looped through two times
   */

  private getHeatMapData() {
    let url = environment.api.getHeatMap?environment.api.getHeatMap:'';
    this.heatmapService.getData(url).subscribe((response: any) => {
      this.dataMonth = response.dataMonth;
      this.heatmap = response.heatmap;
      let intensities = [];
      // console.log(this.heatmap);
      this.heatmap.forEach((data) => {
        intensities.push(data.intensity);
      });
      let maxIntensity = Math.max(...intensities);
      let minIntensity = Math.min(...intensities);
      let classInterval = Math.floor((maxIntensity-minIntensity)/3);
      let minRange = minIntensity + classInterval;
      let midRange = minRange + classInterval;
      // console.log(minRange, midRange, minIntensity, maxIntensity);
      this.heatmap.forEach((data) => {
        if(data.intensity >= minIntensity && data.intensity <= minRange) {
          this.dates[parseInt(data.timestamp.slice(0, 2))-1] = 'L-'+data.timestamp;
        } else if(data.intensity > minRange && data.intensity <= midRange) {
          this.dates[parseInt(data.timestamp.slice(0, 2))-1] = 'M-'+data.timestamp;
        } else if(data.intensity > midRange && data.intensity <= maxIntensity) {
          this.dates[parseInt(data.timestamp.slice(0, 2))-1] = 'H-'+data.timestamp;
        }
      });
      // console.log(this.dates)
    });
  }

}
