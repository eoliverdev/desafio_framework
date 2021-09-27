export interface Post {
  userId: number
  id: number
  title: string
  body: string
}
export interface Message {
  userId: number
  id: number
  title: string
  body: string
}
export interface Modal {
  message: {
    userId: number
    id: number
    title: string
    body: string
  }
}
