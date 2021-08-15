import type { IProject } from "$lib/types"

export const projects: IProject[] = [
  {
    id: "docsView",
    name: "Docs View",
    image: "/docsview.svg",
    link: true,
    description:
      "Tizen app for Samsung Galaxy Watch, Samsung Galaxy Watch Active, Samsung Gear S3 that allows you to open PDFs, markdown and txt",
    color: "#1caeec",
  },
  {
    id: "svelte-virtual-scroll-list",
    name: "svelte-virtual-scroll-list",
    image: "/virtual-scroll-icon.png",
    externalLink: "/svelte-virtual-scroll-list",
    description: "Virtualized scrolling for big lists for Svelte",
    color: "#eee",
  },
  {
    id: "fa-schedule",
    name: "University schedule",
    image: "/fa-schedule.png",
    externalLink: "https://schedule.fa.ru",
    description: "Calendar service for Financial University schedule",
    color: "#FEDED9",
  },
  {
    id: "fa-bot",
    name: "Schedule chat-bot",
    image: "/fa-bot.png",
    externalLink: "https://bot.fa.ru",
    description: "VK bot for Financial University schedule",
    color: "#d9f7fe",
  },
  {
    id: "watchfaceEditor",
    name: "watchfaceEditor",
    image: "/wf-editor.png",
    description: "Online watchface editor for Amazfit Bip and Amazfit Cor",
    color: "rgb(35, 150, 243)",
    externalLink: "/watchfaceEditor",
  },
]
