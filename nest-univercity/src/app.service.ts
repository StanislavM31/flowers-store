import { Injectable } from '@nestjs/common';

export const data = [
  {
    id: 1,
    name: "Object One",
    description: "This is the description for object one."
  },
  {
    id: 2,
    name: "Object Two",
    description: "This is the description for object two."
  },
  {
    id: 3,
    name: "Object Three",
    description: "This is the description for object three."
  },
  {
    id: 4,
    name: "Object Four",
    description: "This is the description for object four."
  }
];
export interface iUser {
  id?: number,
  name: string,
  description: string
}

@Injectable()
export class AppService {

  getAllItem(): iUser[] {
    if (!data.length) throw new Error('The database is empty')
    return data;
  }
  postItem(obj: iUser): iUser[] {
    this.isValidUser(obj);
    if (!obj.id || !obj.name || !obj.description) throw new Error('Incorrect values are introduced')
    const dbLength = data.length;
    const newId: number = data.length + 1;
    data.push({ id: newId, ...obj })
    if (dbLength === data.length) throw new Error(" Error on Adding");

    return data;
  }
  putItem(obj: Partial<iUser>, id: string): iUser[] {
    if (!obj.id || !obj.name || !obj.description) throw new Error('Incorrect values are introduced')
    const index = data.findIndex((el) => el.id === +id)
    data[index] = { ...data[index], ...obj }
    return data;
  }
  deleteItem(id: string): iUser[] {
    /* if (!obj.id || !obj.name || !obj.description) throw new Error('Incorrect values are introduced') */
    const index = data.findIndex((el) => el.id === +id)
    data.splice(index, 1)
    return data;
  }
  patchItem(obj: Partial<iUser>, id: string): iUser[] {
    const index = data.findIndex((el) => el.id === +id)
    if (index === -1) {
      throw new Error('no such id item')
    } else {
      data[index] = { ...data[index], ...obj }
      return data;
    }
  }

  isValidUser(obj: any) {
    if (obj.name && !isNaN(obj.name)) throw new Error("no name ?");
    if (obj.description && !isNaN(+obj.description)) throw new Error("description is not ");
    
  }

}


