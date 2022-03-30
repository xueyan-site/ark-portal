import React from 'react'
import { Portal } from 'xueyan-react-portal'

export default function Main() {
  return (
    <div style={{ width: '200px', height: '200px', backgroundColor: '#f93' }}>
      <Portal>
        <div
          style={{ 
            width: '200px',
            height: '200px',
            backgroundColor: '#39f'
          }}
        />
      </Portal>
    </div>
  )
}
