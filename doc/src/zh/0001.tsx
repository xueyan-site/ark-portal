import React from 'react'
import { Article, Segment } from 'xueyan-react-markdown'

const MARK1 = `
将 ReactDom.createPortal 功能封装成组件，便于调用。

\`\`\`ts
class Portal extends Component<PortalProps> {}
\`\`\`

## PortalProps

| 属性 | 名称 | 类型 | 说明 |
| - | - | - | - |
| children | 子节点 | \`React.ReactNode\` |  |
| container | 挂载点 | \`Element\` = document.body | |
`

export default function Main() {
  return (
    <Article>
      <Segment>{MARK1}</Segment>
    </Article>
  )
}
