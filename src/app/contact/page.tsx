import {
  Button,
  Column,
  Heading,
  Text,
  Meta,
  Schema,
  Row,
  RevealFx,
  IconButton,
  Line,
  Tag,
  SmartLink,
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import React from "react";
import styles from "./page.module.scss";

const MONTREAL_MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89442.04769309172!2d-73.7184146!3d45.5019188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3338211abc77!2sMontreal%2C%20QC!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca";

const MONTREAL_MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=Montreal%2C%20Quebec%2C%20Canada";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function ContactPage() {
  return (
    <Column fillWidth maxWidth="l" horizontal="center" paddingY="16" gap="32" className={styles.heroGlow}>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <RevealFx fillWidth horizontal="center">
        <Column fillWidth horizontal="center" align="center" gap="12" maxWidth="s">
          <Tag size="l" prefixIcon="globe" onBackground="brand-medium">
            Montréal · Québec
          </Tag>
          <Heading wrap="balance" variant="display-strong-l" align="center">
            Let&apos;s connect
          </Heading>
          <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-m" align="center">
            {person.name} — {person.role}
          </Text>
          <Line maxWidth={32} marginTop="8" />
        </Column>
      </RevealFx>

      <RevealFx translateY="12" delay={0.08} fillWidth>
        <Row
          fillWidth
          gap="32"
          s={{ direction: "column", gap: "24" }}
          horizontal="center"
          vertical="stretch"
        >
          <Column flex={1} gap="20" maxWidth={44} horizontal="center">
            <Column
              fillWidth
              gap="16"
              padding="24"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Heading as="h2" variant="display-strong-xs">
                Based in Montreal
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                Local to the city or shopping from elsewhere in North America — reach out for fits,
                fabrics, and designs that feel right for you.
              </Text>
            </Column>

            <Column
              fillWidth
              gap="16"
              padding="24"
              radius="l"
              border="brand-alpha-medium"
              background="brand-alpha-weak"
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Heading as="h2" variant="display-strong-xs">
                Custom from Pakistan
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                I work with trusted makers in Pakistan so you can order{" "}
                <strong>custom cultural clothing</strong> tailored to your measurements and style.
              </Text>
            </Column>

            <Column
              fillWidth
              gap="16"
              padding="24"
              radius="l"
              border="neutral-alpha-medium"
              background="neutral-alpha-weak"
              style={{
                backdropFilter: "blur(var(--static-space-1))",
              }}
            >
              <Heading as="h2" variant="display-strong-xs">
                Shipping — North America
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-weak">
                <strong>Shipping is available across North America.</strong> Timelines and rates depend
                on each order — message me and we&apos;ll sort the details together.
              </Text>
            </Column>
          </Column>

          <Column flex={1} maxWidth={44} fillWidth horizontal="center" gap="16">
            <Column fillWidth gap="12" horizontal="center">
              <Heading as="h2" variant="display-strong-xs" align="center">
                Find Montreal
              </Heading>
              <Text variant="body-default-s" onBackground="neutral-weak" align="center">
                Approximate area — tap through to Google Maps for directions.
              </Text>
            </Column>
            <div className={styles.mapWrap}>
              <iframe
                title="Map of Montreal, Quebec"
                src={MONTREAL_MAP_EMBED}
                className={styles.mapFrame}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <Row horizontal="center">
              <SmartLink href={MONTREAL_MAP_LINK} size="s">
                Open in Google Maps
              </SmartLink>
            </Row>
          </Column>
        </Row>
      </RevealFx>

      <RevealFx translateY="16" delay={0.18} fillWidth horizontal="center">
        <Column
          fillWidth
          maxWidth={48}
          horizontal="center"
          align="center"
          gap="20"
          padding="32"
          radius="l"
          border="neutral-alpha-medium"
          background="page"
          shadow="l"
        >
          <Line maxWidth={40} />
          <Heading as="h2" variant="display-strong-s" align="center">
            Contact me
          </Heading>
          <Row gap="12" wrap horizontal="center" fitWidth paddingTop="8">
            {social.map(
              (item) =>
                item.link && (
                  <React.Fragment key={item.name}>
                    <Row s={{ hide: true }}>
                      <Button
                        href={item.link}
                        prefixIcon={item.icon}
                        label={item.name}
                        size="m"
                        weight="default"
                        variant="primary"
                      />
                    </Row>
                    <Row hide s={{ hide: false }}>
                      <IconButton
                        href={item.link}
                        icon={item.icon}
                        size="xl"
                        variant="primary"
                        tooltip={item.name}
                      />
                    </Row>
                  </React.Fragment>
                ),
            )}
          </Row>
        </Column>
      </RevealFx>
    </Column>
  );
}
