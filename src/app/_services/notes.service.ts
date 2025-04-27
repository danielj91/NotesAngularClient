import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';
import { Note } from '../_models/note';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  private readonly baseUrl = environment.apiUrl + '/notes';

  constructor(private httpClient: HttpClient) {}

  getAllNotes() {
    return this.httpClient.get<Note[]>(this.baseUrl);
  }

  getNoteById(id: number) {
    return this.httpClient.get<Note>(`${this.baseUrl}/${id}`);
  }

  createNote(note: Note) {
    return this.httpClient.post(this.baseUrl, note);
  }

  updateNote(note: Note) {
    return this.httpClient.put(`${this.baseUrl}/${note.id}`, note);
  }

  deleteNoteById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
