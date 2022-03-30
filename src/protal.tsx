import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export interface ProtalProps {
  /** 子节点 */
  children: React.ReactNode
  /** 挂载点 */
  container?: Element
}

export class Protal extends Component<ProtalProps> {
  container: Element

  constructor(props: ProtalProps) {
    super(props)
    this.container = props.container || document.body
  }

  render() {
    return createPortal(
      this.props.children,
      this.container
    )
  }
}
