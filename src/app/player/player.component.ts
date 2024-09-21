import { CommonModule } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'] // Fixed typo: 'styleUrl' should be 'styleUrls'
})
export class PlayerComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() playerActive: boolean = false;

  constructor() { }

  ngOnInit(): void {

  }

}
