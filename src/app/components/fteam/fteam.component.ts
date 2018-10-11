import { Component, OnInit } from '@angular/core';
import { FteamService } from 'src/app/services/fteam.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-fteam',
  templateUrl: './fteam.component.html',
  styleUrls: ['./fteam.component.css']
})
export class FteamComponent implements OnInit {

  constructor(private service: FteamService) { }
  data$: Observable<any>;

  ngOnInit() {
    this.data$ = this.service.getPlayers();
  }

}
