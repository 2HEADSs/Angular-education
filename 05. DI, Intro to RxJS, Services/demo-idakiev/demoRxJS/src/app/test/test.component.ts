import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TestComponent implements OnInit, OnChanges {


  @Input() users!: { name: string }[];


  constructor(

    private cdRef: ChangeDetectorRef
  ) {
    this.cdRef.detach()
  }

  ngOnChanges(): void {
    if (this.users.length > 4) {
      this.cdRef.detectChanges();
    }
  }

  ngOnInit(): void {
    this.cdRef.detectChanges()
  }

}
