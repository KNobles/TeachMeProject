import {Course} from "../../course/course";
import {Tutor} from "../../user/tutor";

export class Announcement{

  private _id:number;
  private _title:string;
  private _description:string;
  private _fee:number;
  private _idCourse: number
  private _idTutor:number;

  constructor(title: string="", description: string="", fee: number=0, course: number=-1, tutor: number=-1, id: number=-1){
    this._title=title;
    this._description=description;
    this._fee=fee;
    this._idCourse=course;
    this._idTutor=tutor;
    this._id=id;
  }

  get idTutor(): number {
    return this._idTutor;
  }

  set idTutor(value: number) {
    this._idTutor = value;
  }
  get idCourse(): number {
    return this._idCourse;
  }

  set idCourse(value: number) {
    this._idCourse = value;
  }
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get fee(): number {
    return this._fee;
  }

  set fee(value: number) {
    this._fee = value;
  }
  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  public serialize() : any {
    return {
      id: this._id,
      idTutor: this._idTutor,
      idCourse: this._idCourse,
      title: this._title,
      description: this._description,
      fee: this._fee
    };
  }



}
