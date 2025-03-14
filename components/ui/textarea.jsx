import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-b-[1.5px] border-[#000] text-[16px] placeholder:text-muted-foreground focus-visible:border-b-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-16 w-full rounded-0 bg-transparent px-3 py-2 pl-0 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[1px] disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline-none",
        className
      )}
      {...props} />
  );
}

export { Textarea }
