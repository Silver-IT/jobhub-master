import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ProjectAccessoryType, projectOptions } from '../../../core/models/project';
import { Idea, MaterialType } from '../../../core/models/idea-board';
import { IdeaBoardService } from '../../../core/services/idea-board.service';
import { ToastrService } from '../../../core/services/toastr.service';

@Component({
  selector: 'job-hub-idea-set-category-dialog',
  templateUrl: './idea-set-category-dialog.component.html',
  styleUrls: ['./idea-set-category-dialog.component.scss']
})
export class IdeaSetCategoryDialogComponent implements OnInit {

  projectOptions = projectOptions;
  form: FormGroup;
  idea: Idea;
  isSaving = false;

  get files(): FormArray {
    return this.form.get('files') as FormArray;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { files: string[], idea: Idea },
    private dialogRef: MatDialogRef<IdeaSetCategoryDialogComponent>,
    private fb: FormBuilder,
    private ideaBoardService: IdeaBoardService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.idea = this.data.idea;
    this.buildIdeaUploadForm();
  }

  async save() {
    try {
      this.isSaving = true;
      if (this.idea) {
        const res = await this.ideaBoardService.editIdea(this.idea.id, this.form.value.files[0]).toPromise();
        this.dialogRef.close(res);
      } else {
        const ideas = await this.ideaBoardService.bulkAdd(this.form.value).toPromise();
        this.dialogRef.close(ideas);
      }
    } catch (e) {
      this.toastr.error(e, 'Sorry, failed to submit your request. Please try again.');
    } finally {
      this.isSaving = false;
    }
  }

  private buildIdeaUploadForm() {
    if (this.idea) {
      this.form = this.fb.group({
        files: this.fb.array([this.buildIdeaForm(this.idea.url, this.data.idea.projectType, this.idea.materialTypes)])
      });
    } else {
      this.form = this.fb.group({
        files: this.fb.array(this.data.files.map(url => this.buildIdeaForm(url)))
      });
    }
  }

  private buildIdeaForm(url: string, projectType?: ProjectAccessoryType, materialTypes?: MaterialType[]) {
    return this.fb.group({
      projectType: [projectType || '', Validators.required],
      materialTypes: [materialTypes || [], Validators.required],
      url: [url, Validators.required]
    });
  }

}
