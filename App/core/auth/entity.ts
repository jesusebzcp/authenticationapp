export interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  location: {
    lat: number;
    lng: number;
  };
  _id: string;
}
export interface AuthContext {
  loading: boolean;
  user: User | null;
}
