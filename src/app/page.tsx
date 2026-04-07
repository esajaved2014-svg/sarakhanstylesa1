import {
  Badge,
  Heading,
  Text,
  Button,
  Row,
  RevealFx,
  Column,
  Schema,
  Meta,
} from "@once-ui-system/core";
import { home, about, person, baseURL } from "@/resources";
import styles from "./page.module.scss";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    path: home.path,
    image: home.image,
  });
}

export default function Home() {
  return (
    <Column
      maxWidth="m"
      fitHeight
      gap="8"
      paddingTop="12"
      paddingBottom="8"
      horizontal="center"
    >
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth horizontal="center" fitHeight>
        <Column maxWidth="s" horizontal="center" align="center" gap="20">
          {home.featured.display && (
            <RevealFx
              fillWidth
              horizontal="center"
              paddingTop="8"
              paddingBottom="4"
              paddingLeft="12"
            >
              <Badge
                background="brand-alpha-weak"
                paddingX="12"
                paddingY="4"
                onBackground="neutral-strong"
                textVariant="label-default-s"
                arrow={false}
                href={home.featured.href}
              >
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <Column fillWidth horizontal="center" align="center" gap="32">
            <RevealFx translateY="4" fillWidth horizontal="center">
              <Heading wrap="balance" variant="display-strong-l">
                {home.headline}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.2} fillWidth horizontal="center">
              <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
                {home.subline}
              </Text>
            </RevealFx>
          </Column>
          <RevealFx delay={0.35} horizontal="center" paddingLeft="12">
            <Row gap="12" wrap horizontal="center">
              <Button
                className={styles.galleryGlass}
                data-border="rounded"
                href="/gallery"
                variant="primary"
                size="m"
                weight="default"
                arrowIcon
              >
                View gallery
              </Button>
              <Button
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                {about.label}
              </Button>
            </Row>
          </RevealFx>
        </Column>
      </Column>
    </Column>
  );
}
