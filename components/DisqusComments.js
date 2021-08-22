import { DiscussionEmbed } from "disqus-react";
const DisqusComments = ({ post }) => {
  const disqusShortname = "https-taufikisme-vercel-app";
  const disqusConfig = {
    url: `https://taufikisme.vercel.app/${post.slug}`,
    identifier: post.postId.toString(), // Single post id
    title: post.title, // Single post title
  };
  return (
    <div>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};
export default DisqusComments;
