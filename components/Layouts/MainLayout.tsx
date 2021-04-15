import Link from "next/link";
import { ReactNode, useState } from "react";
import {
  Button,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState<boolean>(false);
  const handleSideBar = () => {
    setVisible(!visible);
  };

  return (
    <div className="layout">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          <Link href="/">
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
          </Link>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
        <Sidebar.Pusher dimmed={visible}>
          <>
            <Segment as="header">
              <Button
                icon="sidebar"
                size="huge"
                floated="right"
                color="black"
                onClick={handleSideBar}
                circular
              />
              <Header as="h1" icon textAlign="center">
                <Icon name="users" circular />
                <Header.Content>Group Name</Header.Content>
              </Header>
            </Segment>
            <main className="page-content">{children}</main>
            <Segment as="footer" inverted vertical>
              <Grid divided inverted stackable padded>
                <Grid.Row>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="About" />
                    <List link inverted>
                      <List.Item as="a">Sitemap</List.Item>
                      <List.Item as="a">Contact Us</List.Item>
                      <List.Item as="a">Religious Ceremonies</List.Item>
                      <List.Item as="a">Gazebo Plans</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={3}>
                    <Header inverted as="h4" content="Services" />
                    <List link inverted>
                      <List.Item as="a">Banana Pre-Order</List.Item>
                      <List.Item as="a">DNA FAQ</List.Item>
                      <List.Item as="a">How To Access</List.Item>
                      <List.Item as="a">Favorite X-Men</List.Item>
                    </List>
                  </Grid.Column>
                  <Grid.Column width={7}>
                    <Header as="h4" inverted>
                      Footer Header
                    </Header>
                    <p>
                      Copyright &copy; {new Date().getFullYear()} Group Name
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </div>
  );
}
