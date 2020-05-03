import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import { toast } from 'react-toastify';


const onCopy = () => {
  toast('🦄 Copied to clipboard!', {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    draggable: true,
  });
}

export default ({text, children}: {text: string, children?: React.ReactNode}) => {
  return (
    <CopyToClipboard text={text}
      onCopy={onCopy}>
      {children}
    </CopyToClipboard>
  )
}
