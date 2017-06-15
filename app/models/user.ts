export class User {

  constructor(id: number, username: string, password: string, role: string, firstName: string, lastName: string,
  email:string, details:string) { }

  get username(): string {
    return this.username;
  }

  get role(): string {
    return this.role;
  }

  get id(): number {
    return this.id;
  }
  
  get firstName(): string {
    return this.firstName;
  }
  get lastName(): string {
    return this.lastName;
  }
  get email(): string {
    return this.email;
  }
  get details(): string {
    return this.details;
  }
}