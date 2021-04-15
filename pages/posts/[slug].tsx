import { GetStaticPaths, GetStaticProps } from "next";
import { Entry } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Container, Image, Label } from "semantic-ui-react";
import { ContentfulClient } from "services/contentfulClient";
import BlogHeader from "components/Headers/BlogHeader";

interface Posts {
  post: any;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = ContentfulClient();
  const res = await client.getEntries({ content_type: "blogPost" });
  const paths = res.items.map((item: Entry<any>) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Posts> = async ({ params }) => {
  try {
    if (!params)
      return {
        props: {
          post: null,
        },
      };
    const client = ContentfulClient();
    const { items } = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": params.slug,
    });
    return {
      props: {
        post: items[0],
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        post: null,
      },
    };
  }
};

export default function SinglePost({ post }: Posts) {
  const { title, tags, featuredImage, postData } = post.fields;
  console.log(post.fields);

  return (
    <div>
      <Image
        src={"https:" + featuredImage.fields.file.url}
        size="large"
        alt={title}
        centered
      />
      <BlogHeader title={title} icon={"bullhorn"}></BlogHeader>
      <div>
        {tags.map((tag: string) => (
          <Label key={tag} tag>
            {tag}
          </Label>
        ))}
      </div>
      <Container textAlign="justified">
        {documentToReactComponents(postData)}
      </Container>
    </div>
  );
}
