export class Course {
  private _idCourse: number;
  private _label: string;


  constructor(courseName: string="course") {
    this._label = courseName;
  }

  public deserializable(json: any) : Course {
    Object.assign(this, json);
    return this;
  }

  public serialize() : any {
    return {
      label: this._label
    };
  }

  get idCourse(): number {
    return this._idCourse;
  }

  set idCourse(value: number) {
    this._idCourse = value;
  }

  get label(): string {
    return this._label;
  }

  set label(value: string) {
    this._label = value;
  }



}
