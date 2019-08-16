function horizontalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'bottom') return 'flex-end'
  if (align === 'left' || align === 'top') return 'flex-start'
  if (align === 'between') return 'space-between'
}

function verticalAlign (align) {
  if (align === 'center') return 'center'
  if (align === 'right' || align === 'top') return 'flex-start'
  if (align === 'left' || align === 'bottom') return 'flex-end'
  if (align === 'between') return 'space-between'
}

// 统一布局为 flex 布局
export default function layout (props) {
  const obj = {}
  if (props.column) {
    obj.fd = 'column'
    if (props.horizontalAlign) {
      obj.ai = verticalAlign(props.horizontalAlign)
    }
    if (props.verticalAlign) {
      obj.jc = verticalAlign(props.verticalAlign)
    }
  } else {
    if (props.horizontalAlign) {
      obj.jc = horizontalAlign(props.horizontalAlign)
    }
    if (props.verticalAlign) {
      obj.ai = horizontalAlign(props.verticalAlign)
    }
  }
  return obj
}
