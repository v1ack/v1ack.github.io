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
    id: "watchfaceEditor",
    name: "watchfaceEditor",
    image: "/wf-editor.png",
    description: "Online watchface editor for Amazfit Bip and Amazfit Cor",
    color: "rgb(35, 150, 243)",
    externalLink: "/watchfaceEditor",
  },
]
