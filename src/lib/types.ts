export interface IProject {
  id: string
  name: string
  image: string
  description?: string
  links?: { link: string; title: string }[]
  color?: string
}
