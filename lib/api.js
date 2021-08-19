const API_URL = process.env.WORDPRESS_API_URL;

export async function getAllPostsForHome() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
          query HomePagesQuery {
            posts {
              nodes {
                slug
                title
                date
                excerpt
                featuredImage {
                  node {
                    sourceUrl
                  }
                }
                categories {
                  nodes {
                    name
                    slug
                  }
                }
              }
            }
          }
          `,
    }),
  });

  const json = await res.json();
  return json;
}

export async function getSinglePost(context) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query SinglePostQuery($id: ID!, $idType: PostIdType!) {
        post(id: $id, idType: $idType) {
          title
          slug
          date
          excerpt
          content
          featuredImage {
            node {
              sourceUrl
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
      `,
      variables: {
        id: context.params.slug,
        idType: "SLUG",
      },
    }),
  });

  const json = await res.json();
  return json;
}

export async function getAllPostWithSlug() {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
      query AllPostsQuery {
        posts {
          nodes {
            slug
            title
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            categories {
              nodes {
                name
                slug
              }
            }
          }
        }
      }
      `,
    }),
  });

  const json = await res.json();
  const posts = json.data.posts.nodes;

  return posts;
}
