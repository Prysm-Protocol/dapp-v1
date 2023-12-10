import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export type CardProps = HTMLProps<HTMLDivElement> & {
  as?: string
  bgOpacity?: number
}

export const Card = ({
  children,
  className,
  bgOpacity = 0.6,
  as: Component = 'div',
  ...props
}: CardProps) =>
  createElement(
    Component,
    {
      ...props,
      style: {
        '--bg-opacity': bgOpacity
      },
      className: classNames(
        className,
        'bg-stone-100 ring-4 shadow-lg shadow-indigo-300/10 ring-indigo-300/20 rounded-md backdrop-blur ',
        `!bg-opacity-[var(--bg-opacity)]`
      )
    },
    children
  )

export default Card
