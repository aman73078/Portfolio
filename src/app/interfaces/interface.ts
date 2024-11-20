import { SafeHtml } from "@angular/platform-browser"

export interface IconModel {
  label: string,
  svg: SafeHtml,
  skillLevel: string
}

export interface IconList {
  iconListA : IconModel[],
  iconListB : IconModel[],
  otherSkillsIcon : IconModel[]
}
