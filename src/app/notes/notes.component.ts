import { Component, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { Note } from '../_models/note';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'app-notes',
  imports: [MatListModule, MatButtonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css',
})
export class NotesComponent implements OnInit {
  noteList: Note[] = [];
  selectedNote: Note | null = null;

  constructor(private notesService: NotesService) {}

  ngOnInit(): void {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.getAllNotes().subscribe((notes) => {
      this.noteList = notes;
    });
  }

  onSelectedNote(note: Note) {
    this.selectedNote = note;
  }
}
