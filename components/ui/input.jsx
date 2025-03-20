import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex field-sizing-content min-h-12 w-full border-b-[1.5px] border-[#000] text-[16px] pl-0 bg-transparent py-2 transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-b focus-visible:ring-0 focus-visible:ring-transparent disabled:cursor-not-allowed disabled:opacity-50 text-base shadow-xs focus-visible:ring-0",
        className
      )}
      {...props} />
  );
}

export { Input }
