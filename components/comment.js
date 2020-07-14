import React, { Component } from "react"
import Disqus from "disqus-react"

const Comment = (props) => {
  const disqusShortname = "wdwiramadhan"
  const disqusConfig = {
    url: "https://wdwiramadhan.now.sh",
    identifier: props.slug,
    title:  props.title
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