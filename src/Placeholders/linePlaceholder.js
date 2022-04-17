import React from "react"
import ContentLoader from "react-content-loader"

const linePlaceholder = (props) => (
  <ContentLoader
    speed={2}
    width={1000}
    height={7}
    viewBox="0 0 1000 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-2" y="5" rx="3" ry="3" width="700" height="6" />
  </ContentLoader>
)

export default linePlaceholder