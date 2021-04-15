import { GetStaticProps } from "next";
import { Grid } from "semantic-ui-react";
import PostCard from "components/Cards/PostCard";
import { ContentfulClient } from "services/contentfulClient";

interface Posts {
  posts: any[];
}

export const getStaticProps: GetStaticProps<Posts> = async () => {
  try {
    const client = ContentfulClient();
    const res = await client.getEntries({ content_type: "blogPost" });
    return {
      props: {
        posts: res.items,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        posts: [],
      },
    };
  }
};

export default function Home({ posts }: Posts) {
  return (
    <Grid centered container>
      {posts.map((post: any) => (
        <Grid.Column key={post.sys.id} mobile={16} tablet={8} computer={4}>
          <PostCard fields={post.fields}></PostCard>
        </Grid.Column>
      ))}
    </Grid>
  );
}
