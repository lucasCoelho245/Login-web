import {Component, Input, input} from '@angular/core';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-default-login-layout',
  standalone: true,
  imports: [],
  templateUrl: './default-login-layout.component.html',
  styleUrl: './default-login-layout.component.scss'
})
export class DefaultLoginLayoutComponent {
@Input() public title: String = "";
@Input() public primaryBtnText: String = "";
@Input() public secundaryBtnText: String = "";
}
