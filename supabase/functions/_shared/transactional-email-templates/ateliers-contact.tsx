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
  nom?: string
  entreprise?: string
  email?: string
  telephone?: string
  format?: string
  message?: string
}

const Email = ({
  nom = '',
  entreprise = '',
  email = '',
  telephone = '',
  format = '',
  message = '',
}: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle demande — Les Ateliers du Futur</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouvelle demande — Les Ateliers du Futur</Heading>
        <Text style={text}>
          Une nouvelle demande de devis a été envoyée depuis la page Ateliers du Futur.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={row}><strong>Nom :</strong> {nom}</Text>
          <Text style={row}><strong>Entreprise :</strong> {entreprise}</Text>
          <Text style={row}><strong>Email :</strong> {email}</Text>
          <Text style={row}><strong>Téléphone :</strong> {telephone || 'Non renseigné'}</Text>
          <Text style={row}><strong>Format souhaité :</strong> {format || 'À préciser'}</Text>
        </Section>
        <Hr style={hr} />
        <Heading as="h2" style={h2}>Message</Heading>
        <Text style={messageStyle}>{message}</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: 'Nouvelle demande — Les Ateliers du Futur',
  displayName: 'Ateliers du Futur — Demande de contact',
  to: 'connexion@glenn.bzh',
  previewData: {
    nom: 'Marie Dupont',
    entreprise: 'Acme',
    email: 'marie@acme.fr',
    telephone: '06 12 34 56 78',
    format: 'Journée complète',
    message: 'Nous aimerions organiser un atelier pour notre comité de direction.',
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
const messageStyle: React.CSSProperties = { fontSize: '14px', lineHeight: '22px', whiteSpace: 'pre-wrap' }
const hr: React.CSSProperties = { borderColor: '#e5e5e5', margin: '20px 0' }
