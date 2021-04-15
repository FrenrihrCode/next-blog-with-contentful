import Link from "next/link";
import { Card, Icon, Image, Label } from "semantic-ui-react";

interface CardPost {
  fields: {
    title: string;
    slug: string;
    tags: string[];
    thumbnail: any;
  };
}

export default function PostCard({ fields }: CardPost) {
  const { title, slug, tags, thumbnail } = fields;
  return (
    <Card centered fluid>
      <Image
        src={"https:" + thumbnail.fields.file.url}
        wrapped
        ui={false}
        alt={fields.title}
      />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description textAlign="right">
          <Label as="a" color="black" tag>
            {tags[0]}
          </Label>
        </Card.Description>
      </Card.Content>
      <Card.Content textAlign="right" extra>
        <Link href={"/posts/" + slug}>
          <a>
            Ver más
            <Icon name="chevron right"></Icon>
          </a>
        </Link>
      </Card.Content>
    </Card>
  );
}
