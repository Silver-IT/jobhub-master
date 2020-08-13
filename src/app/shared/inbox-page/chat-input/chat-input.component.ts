import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { UserRole } from '../../../core/models/auth';

@Component({
  selector: 'job-hub-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  @Output() send: EventEmitter<string> = new EventEmitter<string>();

  form: FormGroup = this.fb.group({
    message: ['', Validators.required]
  });

  // TODO: handle this with directive
  role = this.authService.user.role;
  UserRole = UserRole;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    this.send.emit(this.form.get('message').value);
    this.form.get('message').reset();
  }

}
