export interface IUser {
  userName: string
  email: string
  about?: string
  perfilImage?: string
  headerImage?: string
  courses?: Array<string>
}