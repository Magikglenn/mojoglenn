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
  conference?: string
  date?: string
  message?: string
}

const Email = ({
  nom = '',
  entreprise = '',
  email = '',
  telephone = '',
  conference = '',
  date = '',
  message = '',
}: Props) => (
  <Html lang="fr" dir="ltr">
    <Head />
    <Preview>Nouvelle demande — Conférence Glenn Le Bourhis</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Nouvelle demande — Conférence</Heading>
        <Text style={text}>
          Une nouvelle demande de conférence a été envoyée depuis la page Conférences.
        </Text>
        <Hr style={hr} />
        <Section>
          <Text style={row}><strong>Nom :</strong> {nom}</Text>
          <Text style={row}><strong>Entreprise :</strong> {entreprise}</Text>
          <Text style={row}><strong>Email :</strong> {email}</Text>
          <Text style={row}><strong>Téléphone :</strong> {telephone || 'Non renseigné'}</Text>
          <Text style={row}><strong>Conférence souhaitée :</strong> {conference || 'À préciser'}</Text>
          <Text style={row}><strong>Date envisagée :</strong> {date || 'Non renseignée'}</Text>
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
  subject: 'Nouvelle demande — Conférence Glenn Le Bourhis',
  displayName: 'Conférences — Demande de contact',
  to: 'connexion@glenn.bzh',
  previewData: {
    nom: 'Marie Dupont',
    entreprise: 'Acme',
    email: 'marie@acme.fr',
    telephone: '06 12 34 56 78',
    conference: 'STORYTELLING',
    date: 'Septembre 2026',
    message: 'Nous souhaitons organiser une conférence pour notre équipe commerciale.',
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
