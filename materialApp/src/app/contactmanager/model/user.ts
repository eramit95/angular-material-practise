import { Note } from './note'
export class User {    
    id: number;
    name: string;
    avatar: string;
    bio: string;
    notes: Note[] = [];
}
