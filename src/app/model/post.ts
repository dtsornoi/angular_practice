export class Post {
  id?: string;
  heading?: string;
  message?: string;
  isActive?: boolean;

  constructor(id?: string, heading?: string, message?: string, isActive?:boolean) {
    this.id = id;
    this.heading = heading;
    this.message = message;
    this.isActive = false;
  }
}
