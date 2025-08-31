import * as React from "react"

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ ...props }, ref) => {
    return (
      <input
        ref={ref}
        className="border px-3 py-2 rounded-2xl w-full focus:ring-2 focus:ring-blue-500 outline-none"
        {...props}
      />
    )
  }
)
Input.displayName = "Input" 