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
  @Input('backgroundColor') backgroundColor: string = '#1a1a1a';
  @Input('fillColor') fillColor: string = '#2dd36f';

  constructor() { }

  ngOnInit() {}

}
