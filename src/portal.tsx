import React, { Component } from 'react'
import { createPortal } from 'react-dom'

export interface PortalProps {
  /** 子节点 */
  children: React.ReactNode
  /** 挂载点 */
  container?: Element
}

export class Portal extends Component<PortalProps> {
  container: Element

  constructor(props: PortalProps) {
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
