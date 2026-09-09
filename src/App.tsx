import { useState, useEffect } from "react"
import Encoder from "@/imports/Encoder首页-1/index"
import OSDDrawer from "./OSDDrawer"

function isOSDButton(el: Element): boolean {
  let node: Element | null = el
  for (let depth = 0; depth < 8; depth++) {
    if (!node) break
    for (const child of Array.from(node.children)) {
      if (child.tagName === "P" && child.textContent?.trim() === "OSD Overlay") return true
    }
    if (node.textContent?.trim() === "OSD Overlay" && node.tagName === "P") return true
    node = node.parentElement
  }
  return false
}

export default function App() {
  const [osdOpen, setOsdOpen] = useState(false)

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (isOSDButton(e.target as Element)) {
        e.preventDefault()
        setOsdOpen(true)
      }
    }
    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="size-full overflow-auto bg-[#121212]">
      <Encoder />
      <OSDDrawer open={osdOpen} onClose={() => setOsdOpen(false)} />
    </div>
  )
}
