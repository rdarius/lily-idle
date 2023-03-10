import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent implements OnInit {

  @Input('fill') fill: number = 0;
  @Input('progressBarText') progressBarText: string = '';
  @Input('progressBarTextRight') progressBarTextRight: string = '';
  @Input('backgroundColor') backgroundColor: string = '#1a1a1a';
  @Input('fillColor') fillColor: string = '#2dd36f';
  @Input('backgroundFontColor') backgroundFontColor: string = '#2dd36f';
  @Input('fillFontColor') fillFontColor: string = '#1a1a1a';

  constructor() { }

  ngOnInit() {}

  getFill(): number {
    if (this.fill < 0) return 0;
    if (this.fill > 100) return 100;
    return this.fill;
  }

}
