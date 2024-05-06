import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class User extends Model {
  static find() {
    throw new Error('Method not implemented.');
  }
  @Column
  firstName: string;

  @Column
  username: string;

  @Column
  email: string;

  @Column
  password: string;
}
