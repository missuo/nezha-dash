"use client"

import { useEffect, useState } from "react"

const baseTextStyles =
  "text-[13px] font-light tracking-tight text-neutral-600/50 dark:text-neutral-300/50"

export default function Footer() {
  const [isMac, setIsMac] = useState(true)

  useEffect(() => {
    setIsMac(/macintosh|mac os x/i.test(navigator.userAgent))
  }, [])

  return (
    <footer className="mx-auto flex w-full max-w-5xl items-center justify-end">
      <p className={`mt-1 ${baseTextStyles}`}>
        <kbd className="pointer-events-none mx-1 inline-flex h-4 select-none items-center gap-1 rounded border bg-muted px-1.5 font-medium font-mono text-[10px] text-muted-foreground opacity-100">
          {isMac ? <span className="text-xs">⌘</span> : "Ctrl "}K
        </kbd>
      </p>
    </footer>
  )
}
