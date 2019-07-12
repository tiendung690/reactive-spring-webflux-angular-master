export class Customer {
  id: string;
  name: string;
  age: number;
  active: boolean;

  constructor(id?: string, name?: string, age?: number, active?: boolean) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.active = active;
  }
}
