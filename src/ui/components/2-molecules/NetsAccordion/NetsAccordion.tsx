import * as React from "react";
import "./NetsAccordion.scss";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const NetsAccordion = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Information om pakken</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Information omkring pakke og alle fordelene:
            <br />
            <ul>
              <li>Transaktionsgebyr: Fra 0,69 % pr. transaktion.</li>
              <li>
                Analytics PRO: Sammenlign din forretning med andre i din
                branche.
              </li>
              <li>Abonnement på bonruller: Modtag 20 bonruller i kvartalet</li>
              <li>
                Udbetaling: Hver anden dag på alle de internationale kortbrands
                – og med Dankort er der daglig udbetaling
              </li>
              <li>Kundeservice: 24/7</li>
              <li>
                Ombytningsservice på din terminal: På din adresse inden for 4
                timer.
              </li>
              <li>
                Gratis kundeindsigt: App og portal med adgang til dine salgs- og
                transaktionsdata
              </li>
              <li>
                Indløsningsaftale der giver dig mulighed for at modtage
                betalinger med de mest populære kort
              </li>
              <li>Bindingsperiode: 36 måneder</li>
            </ul>
            <p>
              *Intervaller er vejledende og afhænger af dit specifikke kortmix –
              og Dankort er særskilt
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Hvad vil du gøre for klimaet?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Gør noget godt for os alle:
            <p>
              Som en del af de produkter du køber, går 1% af dit køb til at
              kompensere for det klimaaftryk produkter har og vil lave i
              fremtiden. Se mere omkring
              <Link to="/green-goal">vores grønne mål</Link> .
            </p>
            <ul>
              <li>
                Mulighed for at kompensere mere end 1% for at nutralisere mere
                CO2
              </li>
              <li>Juster nemt og hurtigt</li>
              <li>
                Få gratis tilpasning af dit produkt med i købet, hvis du
                kompensere mere end 5%
              </li>
            </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Tilpas efter din visuelle identitet</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>
              Det er vigtig for os, at de produkter de køber passer ind i din
              visuelle identitet, så det passer med resten af din virksomhed.
              Derfor har du nu mulighed for at lave en række ændringer til dine
              produkter.
            </p>
            <br />
            <p>
              Hvis du kompensere for 5% eller mere for at kompensere for dit CO2
              aftryk, får man gratis tilpasning af dit produkt med i købtet
            </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};