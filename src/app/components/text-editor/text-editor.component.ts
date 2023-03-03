import { Component, OnInit } from '@angular/core';
import { TextEditor } from '../../text-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {
  
  textEditor : TextEditor
  constructor() { 
      this.textEditor = new TextEditor()
  }

  ngOnInit(): void {
    
  }

}
