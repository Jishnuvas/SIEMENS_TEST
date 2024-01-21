import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { ShareDataService } from '../share-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'siemes-app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatButtonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  registrationForm!: FormGroup;
  userData: any = [];

  constructor(private fb: FormBuilder,private shareData: ShareDataService,private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(): void {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      addresses: this.fb.array([this.createAddressGroup()]),
    });
  }

  get username(): any {
    return this.registrationForm?.get('username');
  }
  get email(): any {
    return this.registrationForm?.get('email');
  }

  get addressForms(): FormArray {
    return this.registrationForm?.get('addresses') as FormArray;
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      city: ['', []],
      state: ['', []],
      pincode: ['', []],
    });
  }

  addAddress(): void {
    this.addressForms.push(this.createAddressGroup());
  }

  deleteAddress(index: number): void {
    this.addressForms.removeAt(index);
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      if(this.userData?.length === 0 || this.userData.some((ele:any)=> ele.username !== this.registrationForm.value.username)){
        this.userData.push(this.registrationForm.value);
        this.shareData.setUserData(this.userData);
        this.registrationForm.reset();
        this.initializeForm();
      }
    }
  }
}