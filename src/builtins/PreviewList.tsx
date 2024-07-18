import React from 'react'
import classnames from 'classnames';

interface IProps {
  list: any[],
  className?: string
}

const PreviewList:React.FC<IProps> = (props) => {
  return <pre className={classnames('code-block', props?.className)}>{ JSON.stringify(props.list, null, 2) }</pre>
}

export default PreviewList
