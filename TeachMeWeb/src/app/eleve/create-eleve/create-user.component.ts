import {Component, EventEmitter, OnInit} from '@angular/core';
import {Eleve} from '../eleve';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  private _eleveTmp: Eleve = new Eleve;
  private _eleveCreated: EventEmitter<Eleve> = new EventEmitter();
  private _isHidden: boolean;

  constructor() { }

  ngOnInit() {
  }
  TypeFormulaire () {
    this._isHidden = ! this._isHidden;
  }
  get isHidden(): boolean {
    return this._isHidden;
  }

  get eleveTmp(): Eleve {
    return this._eleveTmp;
  }

  createEleve() {
    this._eleveCreated.next(this.eleveTmp);
  }

  reset() {
    this._eleveTmp = new Eleve;
  }

  getUserCreated(): EventEmitter<Eleve> {
    return this._eleveCreated;
  }

}
