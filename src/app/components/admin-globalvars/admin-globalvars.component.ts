import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import { Router } from '@angular/router';

//table imports
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';
import { GlobalvarsService } from 'src/app/services/globalvars/globalvars.service';
import { GlobalVariable } from 'src/app/models/globalvariable.interface';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TextEditorComponent } from '../text-editor/text-editor.component';
import { UploadFilesComponent } from '../upload-files/upload-files.component';
import { UploadFilesService } from 'src/app/services/upload/upload-files.service';

@Component({
  selector: 'app-admin-globalvars',
  templateUrl: './admin-globalvars.component.html',
  styleUrls: ['./admin-globalvars.component.scss']
})
export class AdminGlobalvarsComponent implements OnInit {

  @ViewChild(TextEditorComponent) textEditor:any;
  @ViewChild(UploadFilesComponent) uploadFiles:any;

  displayedColumns: string[] = ['variable', 'value', 'modify'];
  dataSource = new MatTableDataSource<any>();
  editorables: string[] = ['disable_email_text', 'accept_email_text', 'apply_email_text', 'deactivate_email_text', 'activation_email_text', 'registration_email_text', 'billing_email'];
  uploadables: string[] = ['statement_file', 'application_file_16-', 'application_file_16+'];
  value: any = null;
  selected_element: any = null;
  constructor(private router: Router, private http: HttpClient, private globalVarsService: GlobalvarsService) {
    globalVarsService.getAllVariable().subscribe((response)=>{
      this.dataSource = response;
    })
   }

  ngOnInit(): void {
  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  modify(element: any) {
    console.log("Módosítás:");
    this.selected_element = element;
    document.getElementById("modify_area")!.style.display = "block";
    if(this.editorables.indexOf(element.variable) > -1) {
      this.textEditor.textEditor.content = element.value;
      document.getElementById("modify_file")!.style.display = "none";
      document.getElementById("modify_oneliner")!.style.display = "none";
      document.getElementById("text-editor")!.style.display = "block";
    }
    else {
      if(this.uploadables.indexOf(element.variable)>-1){
        document.getElementById("text-editor")!.style.display = "none";
        document.getElementById("modify_file")!.style.display = "block";
        document.getElementById("modify_oneliner")!.style.display = "none";
      }else{
        this.value = element.value;
        document.getElementById("text-editor")!.style.display = "none";
        document.getElementById("modify_file")!.style.display = "none";
        document.getElementById("modify_oneliner")!.style.display = "inline-block";
      }

    }
  }

  cancel() {
    this.value = "";
    this.textEditor.textEditor.content = "";
    document.getElementById("modify_area")!.style.display = "none";
    document.getElementById("modify_oneliner")!.style.display = "none";
    document.getElementById("text-editor")!.style.display = "none";
    this.selected_element = null;
  }

  save() {
    if(this.value==null || this.value == "") {
      this.value = this.textEditor.textEditor.content;
      if(this.value==null || this.value == ""){
        this.value = "https://erdosprogram.hu:8443/api/files/"+this.uploadFiles.progressInfos[0].fileName;
        if(this.value == null || this.value == "") {
          return;
        }
      }

    }
    this.globalVarsService.update({method: "PUT", variable: this.selected_element.variable, value: this.value}).subscribe(()=>{
      this.value = null;
      this.globalVarsService.getAllVariable().subscribe((response)=>{
        this.dataSource = response;
        this.uploadFiles.progressInfos = null;
        this.cancel();
      })
    });
  }
}
