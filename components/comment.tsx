import React from "react"
import Disqus from "disqus-react"

type Props = {
 slug : string,
 title : string
}

const Comment = ({slug, title} : Props) => {
  const disqusShortname = "wdwiramadhan"
  const disqusConfig = {
    url: "https://wdwiramadhan.now.sh",
    identifier: slug,
    title:  title
  }
  return (
    <div className="max-w-3xl mx-auto">
      <Disqus.DiscussionEmbed
        shortname={disqusShortname}
        config={disqusConfig}
      />
    </div>
  )
}

export default Comment