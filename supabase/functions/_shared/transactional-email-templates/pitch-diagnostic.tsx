/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface Props {
  email?: string
  pitch?: string
  sentAt?: string
}

const Email = ({ email = '', pitch = '', sentAt = '' }: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouveau pitch à diagnostiquer — Atelier Pitch Décisif</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouveau pitch à diagnostiquer</Heading>
        <Text style={text}>
          Une nouvelle demande de diagnostic gratuit a été envoyée depuis la page Atelier Pitch Décisif.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={row}><strong>Email :</strong> {email}</Text>
          <Text style={row}><strong>Envoyé le :</strong> {sentAt}</Text>
        </Section>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Pitch reçu</Heading>
        <Text style={pitchStyle}>{pitch}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Nouveau pitch à diagnostiquer — Atelier Pitch Décisif',
  displayName: 'Atelier Pitch Décisif — Diagnostic gratuit',
  to: 'connexion@glenn.bzh',
  previewData: {
    email: 'prospect@example.com',
    pitch: 'Notre startup révolutionne...',
    sentAt: new Date().toISOString(),
  },
} satisfies TemplateEntry

const main: React.CSSProperties = {
  backgroundColor: '#ffffff',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  color: '#1a1a1a',
}
const container: React.CSSProperties = { padding: '32px 24px', maxWidth: '600px' }
const h1: React.CSSProperties = { fontSize: '22px', fontWeight: 700, color: '#1600ff', margin: '0 0 16px' }
const h2: React.CSSProperties = { fontSize: '16px', fontWeight: 700, margin: '16px 0 8px' }
const text: React.CSSProperties = { fontSize: '14px', lineHeight: '22px', color: '#3c3949' }
const row: React.CSSProperties = { fontSize: '14px', lineHeight: '22px', margin: '4px 0' }
const pitchStyle: React.CSSProperties = { fontSize: '14px', lineHeight: '22px', whiteSpace: 'pre-wrap' }
const hr: React.CSSProperties = { borderColor: '#e5e5e5', margin: '20px 0' }
