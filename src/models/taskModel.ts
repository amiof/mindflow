import {Realm} from "realm"

export type TAssignDate='Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'|'Sunday'|"unAssign"

export class Task extends Realm.Object<Task> {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isDone!: boolean;
  createdAt!: Date;
  assignDate!:TAssignDate;


  static schema = {
    name: 'Task',
    primaryKey: '_id',
    properties: {
      _id: 'objectId',
      description: 'string',
      isDone: 'bool',
      assignDate:'string',
      createdAt: 'date',
    },
  } as const;
}
