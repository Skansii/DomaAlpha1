'use client';

import React from 'react';
import { 
  Container, 
  Box, 
  Typography, 
  Breadcrumbs, 
  Paper, 
  Divider, 
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button
} from '@mui/material';
import Link from 'next/link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaymentIcon from '@mui/icons-material/Payment';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function TermsPage() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const lastUpdated = 'January 15, 2023';

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ mb: 4 }}>
        <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
          <Link href="/" passHref>
            <Typography color="inherit" sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}>
              Home
            </Typography>
          </Link>
          <Typography color="text.primary">Terms & Conditions</Typography>
        </Breadcrumbs>
      </Box>

      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        Terms & Conditions
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Last updated: {lastUpdated}
      </Typography>
      <Typography variant="body1" sx={{ mb: 6, maxWidth: 800 }}>
        Please read these terms and conditions carefully before using DOMA Design's services. 
        By accessing or using our website, products, or services, you agree to be bound by these terms.
      </Typography>

      <Paper elevation={2} sx={{ p: 4, mb: 6 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <GavelIcon sx={{ mr: 2, color: 'primary.main', fontSize: 28 }} />
          <Typography variant="h5" component="h2">
            Vertragsübersicht
          </Typography>
        </Box>
        <Typography variant="body1" paragraph>
          Diese Allgemeinen Geschäftsbedingungen ("AGB") regeln Ihre Beziehung mit DOMA Design ("Unternehmen", "wir", "uns" oder "unser") 
          und Ihre Nutzung unserer Website, Anwendungen, Produkte und Dienstleistungen (zusammen die "Dienste"). Durch die Nutzung unserer Dienste 
          erkennen Sie an, dass Sie diese AGB gelesen und verstanden haben und damit einverstanden sind, an diese gebunden zu sein.
        </Typography>
        <Typography variant="body1" paragraph>
          Wir können diese AGB jederzeit ändern. Wenn wir dies tun, werden wir die geänderten AGB auf dieser Seite veröffentlichen und oben 
          auf dieser Seite das Datum angeben, an dem die AGB zuletzt überarbeitet wurden. Sie verstehen und stimmen zu, dass Ihre weitere 
          Nutzung des Dienstes, nachdem wir solche Änderungen vorgenommen haben, Ihre Annahme der neuen AGB darstellt.
        </Typography>
      </Paper>

      <Box sx={{ mb: 6 }}>
        <Accordion 
          expanded={expanded === 'panel1'} 
          onChange={handleChange('panel1')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PrivacyTipIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">1. Nutzung der Dienste</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Unsere Dienste sind für den persönlichen und gewerblichen Gebrauch im Zusammenhang mit Küchen- und Schrankdesign, 
              -kauf und -installation bestimmt. Sie dürfen unsere Dienste nicht für illegale oder unbefugte Zwecke nutzen oder 
              gegen Gesetze in Ihrer Rechtsordnung verstoßen.
            </Typography>
            <Typography variant="body1" paragraph>
              Sie sind für die Wahrung der Vertraulichkeit Ihres Kontos und Passworts sowie für die Beschränkung des Zugangs 
              zu Ihrem Computer verantwortlich, und Sie erklären sich damit einverstanden, die Verantwortung für alle Aktivitäten 
              zu übernehmen, die unter Ihrem Konto oder Passwort stattfinden.
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie können unsere Design-Tools verwenden, um Küchen- und Schranklayouts für Ihre persönlichen oder beruflichen Projekte zu erstellen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie können Designs, die mit unseren Design-Tools erstellt wurden, für nicht-kommerzielle Zwecke speichern, drucken und teilen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie können über unsere Dienste Angebote anfordern, Bestellungen aufgeben und Ihre Einkäufe verfolgen.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              Wir behalten uns das Recht vor, nach eigenem Ermessen den Service zu verweigern, Konten zu kündigen, Inhalte zu entfernen 
              oder zu bearbeiten oder Bestellungen zu stornieren.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel2'} 
          onChange={handleChange('panel2')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <VerifiedUserIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">2. Geistige Eigentumsrechte</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Der Dienst und seine ursprünglichen Inhalte, Funktionen und Funktionalität sind und bleiben das ausschließliche 
              Eigentum von DOMA Design und seinen Lizenzgebern. Der Dienst ist durch Urheberrechte, Markenrechte und andere 
              Gesetze der Vereinigten Staaten und anderer Länder geschützt.
            </Typography>
            <Typography variant="body1" paragraph>
              Unsere Marken und unsere Handelsaufmachung dürfen nicht im Zusammenhang mit Produkten oder Dienstleistungen 
              ohne vorherige schriftliche Zustimmung von DOMA Design verwendet werden.
            </Typography>
            <Typography variant="body1" paragraph>
              Designs, die mit unseren Design-Tools erstellt wurden, unterliegen den folgenden Eigentumsbestimmungen:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie behalten das Eigentum an den spezifischen Design-Layouts, die Sie mit unseren Tools erstellen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  DOMA Design behält das Eigentum an allen Vorlagen, Designelementen und Softwarefunktionen, die zum Erstellen von Designs verwendet werden.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie gewähren DOMA Design eine nicht-exklusive, lizenzgebührenfreie Lizenz zur Verwendung von mit unseren Tools erstellten Designs 
                  für Marketing, Schulung und Verbesserung unserer Dienste, gegebenenfalls mit entsprechender Zuschreibung.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel3'} 
          onChange={handleChange('panel3')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <PaymentIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">3. Preisgestaltung und Zahlung</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Alle Preise für Produkte und Dienstleistungen werden in US-Dollar angezeigt und können ohne vorherige Ankündigung 
              geändert werden. Obwohl wir uns bemühen, genaue Preisinformationen bereitzustellen, können Preisfehler auftreten. 
              Wir behalten uns das Recht vor, Fehler zu korrigieren und Informationen jederzeit ohne vorherige Ankündigung zu 
              ändern oder zu aktualisieren.
            </Typography>
            <Typography variant="body1" paragraph>
              Zahlungsbedingungen für Produkte und Dienstleistungen:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Für Sonderanfertigungen von Schränken ist eine Anzahlung von 50% erforderlich, um mit der Produktion zu beginnen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Der Restbetrag ist vor dem Versand oder der Lieferung zu zahlen.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Für Designdienstleistungen ist die Zahlung zum Zeitpunkt der Erbringung der Dienstleistungen fällig, sofern in einer 
                  schriftlichen Vereinbarung nichts anderes angegeben ist.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Designgebühren können gemäß Ihrer Vereinbarung auf Schrankkäufe angerechnet werden.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              Wir akzeptieren Zahlungen per Kreditkarte, Banküberweisung und andere zum Zeitpunkt des Kaufs angegebene Methoden. 
              Indem Sie eine Zahlungsmethode angeben, bestätigen Sie, dass Sie zur Nutzung der Zahlungsmethode berechtigt sind, 
              und autorisieren uns, Ihre Zahlungsmethode für alle getätigten Bestellungen zu belasten.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel4'} 
          onChange={handleChange('panel4')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <LocalShippingIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">4. Versand und Lieferung</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Lieferzeiten sind nur Schätzungen und beginnen ab dem Datum der Auftragsbestätigung. DOMA Design ist nicht 
              verantwortlich für Lieferverzögerungen, die außerhalb unserer Kontrolle liegen, einschließlich, aber nicht 
              beschränkt auf Verzögerungen durch Versandunternehmen, Herstellerverzögerungen oder Naturkatastrophen.
            </Typography>
            <Typography variant="body1" paragraph>
              Versand- und Lieferbedingungen:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Das Verlustrisiko und das Eigentumsrecht für Artikel, die von unserer Website gekauft wurden, gehen bei Übergabe 
                  der Artikel an den Spediteur auf Sie über.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Sie sind dafür verantwortlich, alle Produkte bei der Lieferung zu inspizieren und eventuelle Schäden oder 
                  Unstimmigkeiten auf dem Lieferschein zu vermerken.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Schäden oder Unstimmigkeiten, die nicht auf dem Lieferschein vermerkt sind, müssen DOMA Design innerhalb 
                  von 48 Stunden nach der Lieferung gemeldet werden.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Für Lieferungen an abgelegene Orte können zusätzliche Gebühren anfallen.
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel5'} 
          onChange={handleChange('panel5')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5bh-content"
            id="panel5bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">5. Garantie und Rücksendungen</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              DOMA Design-Produkte werden mit einer eingeschränkten lebenslangen Garantie für den privaten Gebrauch und einer 
              10-jährigen Garantie für den gewerblichen Gebrauch geliefert, die Material- und Verarbeitungsfehler bei normaler 
              Nutzung und Wartung abdeckt.
            </Typography>
            <Typography variant="body1" paragraph>
              Garantie- und Rückgabebedingungen:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Maßgefertigte Produkte können nicht zurückgegeben werden, es sei denn, sie sind defekt oder beschädigt.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Lagerartikel in neuem, unbenutztem Zustand können innerhalb von 30 Tagen mit Originalverpackung und Quittung 
                  zurückgegeben werden, vorbehaltlich einer Wiedereinlagerungsgebühr.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Garantieansprüche müssen mit Kaufnachweis, einer Beschreibung des Defekts und Fotos des defekten Produkts 
                  eingereicht werden.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" fontSize="small" />
                </ListItemIcon>
                <ListItemText>
                  Die Garantie deckt keine Schäden ab, die durch unsachgemäße Installation, Missbrauch, Vernachlässigung oder 
                  Exposition gegenüber extremen Temperatur- oder Feuchtigkeitsbedingungen entstehen.
                </ListItemText>
              </ListItem>
            </List>
            <Typography variant="body1" paragraph>
              Die Haftung von DOMA Design beschränkt sich auf die Reparatur oder den Ersatz des defekten Produkts nach unserem 
              Ermessen. Wir sind nicht verantwortlich für Installations-, Ausbau- oder Wiedereinbaukosten im Zusammenhang mit 
              Garantieansprüchen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel6'} 
          onChange={handleChange('panel6')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6bh-content"
            id="panel6bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">6. Haftungsbeschränkung</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              IN KEINEM FALL HAFTEN DOMA DESIGN, SEINE FÜHRUNGSKRÄFTE, DIREKTOREN, MITARBEITER ODER VERTRETER IHNEN GEGENÜBER 
              FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE, BESONDERE, STRAFBARE ODER FOLGESCHÄDEN, DIE SICH AUS (I) FEHLERN, IRRTÜMERN 
              ODER UNGENAUIGKEITEN VON INHALTEN, (II) PERSONEN- ODER SACHSCHÄDEN JEGLICHER ART, DIE SICH AUS IHREM ZUGANG ZU 
              UND DER NUTZUNG UNSERES DIENSTES ERGEBEN, (III) UNBEFUGTEM ZUGRIFF AUF ODER NUTZUNG UNSERER SICHEREN SERVER 
              UND/ODER ALLER DARIN GESPEICHERTEN PERSÖNLICHEN INFORMATIONEN UND/ODER FINANZIELLEN INFORMATIONEN, (IV) JEDER 
              UNTERBRECHUNG ODER BEENDIGUNG DER ÜBERTRAGUNG ZU ODER VON UNSEREM DIENST, (V) BUGS, VIREN, TROJANISCHEN PFERDEN 
              ODER ÄHNLICHEM, DIE VON DRITTEN AN ODER DURCH UNSEREN DIENST ÜBERTRAGEN WERDEN KÖNNEN, UND/ODER (VI) FEHLERN ODER 
              AUSLASSUNGEN IN INHALTEN ODER FÜR VERLUSTE ODER SCHÄDEN JEGLICHER ART, DIE INFOLGE IHRER NUTZUNG VON INHALTEN 
              ENTSTEHEN, DIE ÜBER DEN DIENST GEPOSTET, PER E-MAIL VERSANDT, ÜBERTRAGEN ODER ANDERWEITIG VERFÜGBAR GEMACHT WERDEN, 
              UNABHÄNGIG DAVON, OB SIE AUF GARANTIE, VERTRAG, UNERLAUBTER HANDLUNG ODER EINER ANDEREN RECHTSTHEORIE BASIEREN UND 
              OB DAS UNTERNEHMEN ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE ODER NICHT.
            </Typography>
            <Typography variant="body1" paragraph>
              DIE VORSTEHENDE HAFTUNGSBESCHRÄNKUNG GILT IM VOLLEN GESETZLICH ZULÄSSIGEN UMFANG IN DER ANWENDBAREN 
              GERICHTSBARKEIT. SIE ERKENNEN INSBESONDERE AN, DASS DOMA DESIGN NICHT FÜR BENUTZEREINREICHUNGEN ODER 
              DIFFAMIERENDES, BELEIDIGENDES ODER ILLEGALES VERHALTEN VON DRITTEN HAFTET UND DASS DAS RISIKO VON SCHÄDEN 
              ODER VERLETZUNGEN AUS DEM VORGENANNTEN AUSSCHLIESSLICH BEI IHNEN LIEGT.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel7'} 
          onChange={handleChange('panel7')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7bh-content"
            id="panel7bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">7. Geltendes Recht und Streitbeilegung</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              Diese Bedingungen unterliegen den Gesetzen des Bundesstaates Oregon, Vereinigte Staaten, und werden in 
              Übereinstimmung mit diesen ausgelegt, ohne Berücksichtigung von Kollisionsnormen.
            </Typography>
            <Typography variant="body1" paragraph>
              Jede Streitigkeit, die sich aus oder im Zusammenhang mit dem Gegenstand dieser Bedingungen ergibt, wird 
              endgültig durch ein Schiedsverfahren in Portland, Oregon, unter Verwendung der englischen Sprache gemäß 
              den Schiedsregeln und -verfahren der Judicial Arbitration and Mediation Services, Inc. (JAMS) in der 
              jeweils gültigen Fassung, durch einen Handelsschiedsrichter mit umfassender Erfahrung in der Beilegung 
              von Streitigkeiten über geistiges Eigentum und Handelsverträge beigelegt, der aus der entsprechenden 
              Liste der JAMS-Schiedsrichter gemäß den Schiedsregeln und -verfahren von JAMS ausgewählt wird.
            </Typography>
            <Typography variant="body1" paragraph>
              Die obsiegende Partei in einem Schiedsverfahren oder Rechtsstreit hat Anspruch auf Erstattung ihrer 
              Anwaltskosten und -gebühren durch die unterlegene Partei.
            </Typography>
            <Typography variant="body1" paragraph>
              Ungeachtet des Vorstehenden können wir einstweilige oder andere billige Rechtsbehelfe zum Schutz unserer 
              geistigen Eigentumsrechte vor jedem zuständigen Gericht beantragen.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion 
          expanded={expanded === 'panel8'} 
          onChange={handleChange('panel8')}
          sx={{ mb: 2 }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel8bh-content"
            id="panel8bh-header"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <GavelIcon sx={{ mr: 2, color: 'primary.main' }} />
              <Typography variant="h6">8. Verschiedene Bestimmungen</Typography>
            </Box>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" paragraph>
              <strong>Gesamte Vereinbarung:</strong> Diese Bedingungen stellen die gesamte Vereinbarung zwischen Ihnen und DOMA Design 
              bezüglich der Nutzung des Dienstes dar und ersetzen alle früheren Vereinbarungen zwischen Ihnen und DOMA Design in Bezug 
              auf Ihre Nutzung des Dienstes.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Verzicht und Salvatorische Klausel:</strong> Das Versäumnis von DOMA Design, ein Recht oder eine Bestimmung 
              dieser Bedingungen auszuüben oder durchzusetzen, stellt keinen Verzicht auf dieses Recht oder diese Bestimmung dar. 
              Sollte eine Bestimmung dieser Bedingungen von einem zuständigen Gericht für ungültig befunden werden, vereinbaren die 
              Parteien dennoch, dass das Gericht sich bemühen sollte, den Absichten der Parteien, wie sie in der Bestimmung zum 
              Ausdruck kommen, Wirkung zu verleihen, und die anderen Bestimmungen dieser Bedingungen bleiben in vollem Umfang in Kraft.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Abtretung:</strong> Diese Bedingungen und alle hierin gewährten Rechte und Lizenzen dürfen von Ihnen nicht 
              übertragen oder abgetreten werden, können aber von DOMA Design ohne Einschränkung abgetreten werden. Jede versuchte 
              Abtretung unter Verletzung dieser Bedingungen ist nichtig.
            </Typography>
            <Typography variant="body1" paragraph>
              <strong>Mitteilungen:</strong> Alle Mitteilungen oder sonstigen Kommunikationen, die von DOMA Design im Rahmen dieser 
              Bedingungen bereitgestellt werden, einschließlich solcher, die Änderungen dieser Bedingungen betreffen, erfolgen: 
              (i) per E-Mail oder (ii) durch Veröffentlichung auf dem Dienst. Bei Mitteilungen per E-Mail gilt das Datum des Eingangs 
              als das Datum, an dem diese Mitteilung übermittelt wird.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      <Divider sx={{ my: 6 }} />

      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h5" gutterBottom>
          Have Questions About Our Terms?
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
          If you have any questions about these Terms & Conditions, please contact our legal department.
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button 
            variant="contained" 
            color="primary" 
            component={Link}
            href="/contact"
            endIcon={<ArrowForwardIcon />}
          >
            Contact Us
          </Button>
          <Button 
            variant="outlined" 
            component={Link}
            href="/privacy"
            endIcon={<ArrowForwardIcon />}
          >
            View Privacy Policy
          </Button>
        </Box>
      </Box>
    </Container>
  );
} 