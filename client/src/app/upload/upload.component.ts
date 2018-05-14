import { Component, Input, OnChanges, OnInit, EventEmitter, Output, ViewChild, ViewEncapsulation  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Upload } from './model/Upload';
import { UploadService } from './upload.service';


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    @Input() upload: Upload;
    @Output() created: EventEmitter<Upload> = new EventEmitter<Upload>();
    @Output() updated: EventEmitter<Upload> = new EventEmitter<Upload>();
    @ViewChild("uploader") uploader: any;
    
    uploadForm: FormGroup;

    constructor(private uploadService: UploadService) { }

    get nome() { return this.uploadForm.get('nome'); }
    get pdf() { return this.uploadForm.get('pdf'); }


    ngOnInit() {
        this.uploadForm = new FormGroup({
            nome: new FormControl(null),
            pdf: new FormControl(null)
        }, { updateOn: 'submit' });
    }
    onSubmit() {
        if (this.uploadForm.valid) {
            this.uploadService.createUpload(this.prepareSaveUpload()).subscribe((upload) => this.created.emit(upload));
        }
    }

    prepareSaveUpload(): FormData {
        const formModel = this.uploadForm.value;

        let formData = new FormData();
        formData.append("nome", formModel.nome);
        formData.append("pdf", formModel.pdf);
    console.log(formData)
        return formData;
    }
    fileChange(files: FileList) {
        console.log(files);
        if (files && files[0].size > 0) {
            this.uploadForm.patchValue({
                pdf: files[0]
            });
        }
    }
}
