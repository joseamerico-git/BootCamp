import {
  Component,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  quantidade: number = 0;
  constructor() {}
  ngOnDestroy(): void {
    console.log("goodbye my friend!")
  }
  adicionar(){
    this.quantidade+=1;
  }
  decrementar(){
    this.quantidade-=1;
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
}
