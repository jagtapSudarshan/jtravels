import * as React from "react"

export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-2xl shadow hover:bg-blue-700 disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  )
}