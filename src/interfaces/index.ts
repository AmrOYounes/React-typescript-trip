export interface IFormData {
  email: string;
  password: string;
}

export interface IFormInput {
  label: string;
  type: string;
  name: keyof IFormData;
  id: string;
}
