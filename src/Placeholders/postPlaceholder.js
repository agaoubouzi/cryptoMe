import React from "react"
import ContentLoader from "react-content-loader"

const PostPlaceholder = (props) => (
  <ContentLoader
    speed={.5}
    width={900}
    height={150}
    viewBox="0 0 900 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="6" y="3" rx="3" ry="3" width="261" height="136" />
    <rect x="286" y="2" rx="3" ry="3" width="261" height="136" />
    <rect x="565" y="1" rx="3" ry="3" width="261" height="136" />
    <rect x="965" y="0" rx="3" ry="3" width="261" height="136" />
  </ContentLoader>
)

export default PostPlaceholder