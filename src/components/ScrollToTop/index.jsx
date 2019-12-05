import React from 'react'

export default ({ children, location }) => {
//   React.useEffect(() => window.scrollTo({ top: 0, behavior: "smooth" }))
  React.useEffect(() => window.scrollTo({ top: 0 }))
  return children
}