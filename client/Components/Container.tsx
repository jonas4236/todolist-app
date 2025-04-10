import React from "react"
import { ReactNode } from "react"

interface ContainerProps {
  children: ReactNode
  className?: string
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-[1140px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container
