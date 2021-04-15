import { Header, Icon } from "semantic-ui-react";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

export default function BlogHeader({
  title,
  subtitle,
  icon,
}: {
  title: string;
  icon: SemanticICONS;
  subtitle?: string;
}) {
  return (
    <div>
      <Header as="h1" textAlign="center">
        <Icon name={icon} />
        {title}
      </Header>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
}
