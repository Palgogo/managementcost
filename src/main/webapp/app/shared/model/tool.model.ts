export interface ITool {
  id?: number;
  name?: string;
  description?: string;
}

export class Tool implements ITool {
  constructor(public id?: number, public name?: string, public description?: string) {}
}
