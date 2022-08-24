export interface ITarea {
  readonly titulo: string;
  readonly completada: boolean;
  
  toggleCompletada: () => void;
};

export default class Tarea implements ITarea {

  constructor(
    private _titulo: string = '',
    private _completada: boolean = false
  ) {}

  get titulo() { return this._titulo; }
  get completada() { return this._completada; }

  toggleCompletada(): void {
    this._completada = !this._completada;
  }
} 