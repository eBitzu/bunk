import { Component, Input, OnInit } from '@angular/core';
interface Player {
  picked: boolean;
  id: number;
  name?: string;
  standby?: boolean;
}
@Component({
  selector: 'app-football-pitch',
  templateUrl: './football-pitch.component.html',
  styleUrls: ['./football-pitch.component.css']
})
export class FootballPitchComponent implements OnInit {
  @Input()
  data: any[];
  @Input()
  system: string;
  team = {
    gk: [],
    def: [],
    mid: [],
    att: [],
    coach: []
  };
  listSelection = {
    showGKList: false,
    showDefList: false,
    showMidList: false,
    showAttList: false,
  };
  lines = {
    defFull: false,
    midFull: false,
    attFull: false,
  };
  teamSystem: string[];
  pitch = {
    goalkeeper: {id: null, picked: false},
    def: [],
    mid: [],
    att: [],
  };
  constructor() {}

  ngOnInit() {
    this.pitch.goalkeeper = { picked: false, id: null };
    if (!!this.data.length) {
      this.data.map(el => {
        if (el.role !== 'PLAYER') {
          this.team.coach.push(el);
        }
        switch (el.position) {
          case 'Attacker':
            this.team.att.push({ ...el, picked: false });
            break;
          case 'Midfielder':
            this.team.mid.push({ ...el, picked: false });
            break;
          case 'Defender':
            this.team.def.push({ ...el, picked: false });
            break;
          case 'Goalkeeper':
            this.team.gk.push({ ...el, picked: false });
            break;

          default:
            break;
        }
      });
    }
    if (!!this.system.length) {
      this.teamSystem = this.system.split('-');
      const [defNr, midNr, attNr] = this.teamSystem;
      for (let i = 0; i < parseInt(defNr, 10); i++) {
        this.pitch.def.push({ picked: false, id: null, standby: false });
      }
      for (let i = 0; i < parseInt(midNr, 10); i++) {
        this.pitch.mid.push({ picked: false, id: null, standby: false });
      }
      for (let i = 0; i < parseInt(attNr, 10); i++) {
        this.pitch.att.push({ picked: false, id: null, standby: false });
      }
    }
  }
  handlePlayerPick(position: string, player: Player) {
    if (position === 'gk') {
      this.handleGoalkeeper();
      return;
    }
    const pos = position.toLowerCase();
    if (player.picked) {
      const found = this.team[pos].find(({id}) => id === player.id);
      found.picked = false;
      player.picked = false;
      player.id = null;
      this.lines[`${pos}Full`] = false;
      return;
    }
    player.standby = true;
    this.listSelection[`show${position}List`] = true;

  }

  handleGoalkeeper() {
    const pGK = this.pitch.goalkeeper;
    if (pGK.picked) {
      pGK.picked = false;
      const gk = this.team.gk.find(({ id }) => id === pGK.id);
      gk.picked = false;
      return;
    }
    this.listSelection.showGKList = true;
  }
  handleGkSelection(gk: Player) {
    if (!this.listSelection.showGKList) {
      return;
    }
    const pGK = this.pitch.goalkeeper;
    this.listSelection.showGKList = false;
    gk.picked = true;
    pGK.picked = true;
    pGK.id = gk.id;
  }
  handlePlayerSelection(ply: Player, pos: string) {
    if (!this.listSelection[`show${pos}List`]) {
      return;
    }
    if (ply.picked) {
      return;
    }
    const lPos = pos.toLowerCase();
    this.listSelection[`show${pos}List`] = false;
    ply.picked = true;
    const found = this.pitch[lPos].find(({standby}) => standby);
    found.standby = false;
    found.id = ply.id;
    found.picked = true;
    this.checkLine(lPos);
  }
  checkLine(line: string) {
    const found = this.pitch[line].find(({picked}) => !picked);
    this.lines[`${line}Full`] = !found;
    return !found;
  }
}
