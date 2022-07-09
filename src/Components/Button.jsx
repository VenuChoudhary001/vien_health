import React from 'react'

const Button = ({style,action,placeholder,icon}) => {
    
  return (
    <>
      <button onClick={action} className={style}>{placeholder}
      {icon && <img alt='' src={icon} />}
      </button>
    </>
  )
}

export default Button