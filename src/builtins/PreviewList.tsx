import React from 'react'

interface IProps {
  list: any[]
}

const PreviewList:React.FC<IProps> = (props) => {
  return <pre className="code-block">{ JSON.stringify(props.list, null, 2) }</pre>
}

export default PreviewList
