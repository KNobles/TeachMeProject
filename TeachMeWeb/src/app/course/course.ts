export class Course {
  private _idCourse: number;
  private _courseName: string;


  constructor(courseName: string) {
    this._courseName = courseName;
  }

  get idCourse(): number {
    return this._idCourse;
  }

  set idCourse(value: number) {
    this._idCourse = value;
  }

  get courseName(): string {
    return this._courseName;
  }

  set courseName(value: string) {
    this._courseName = value;
  }

}
