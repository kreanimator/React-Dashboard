import { Box, useTheme } from "@mui/system";
import Header from "../../components/Header";
import  Accordion  from "@mui/material/Accordion";
import  AccordionSummary  from "@mui/material/AccordionSummary";
import AccordionDetails  from "@mui/material/AccordionDetails";
import  ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Typography } from "@mui/material";


const FAQ= ()=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle = "Frequently Asked Questions Page"/>
        {/* First question*/}
        <Accordion defaultExpanded>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                An important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                A frequently asked questions (FAQ) list is often used in articles, websites,
                 email lists, and online forums where common questions tend to recur, for example
                  through posts or queries by new users related to common knowledge gaps.
                   The purpose of a FAQ is generally to provide information on frequent questions or concerns;
                    however, the format is a useful means of organizing information, and text consisting of questions 
                    and their answers may thus be called a FAQ regardless of whether the questions are actually frequently asked.
                </Typography>
            </AccordionDetails>
        </Accordion>
                {/* Second question*/}
                <Accordion defaultExpande>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                Second important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Since the acronym FAQ originated in textual media, its pronunciation varies. 
                FAQ can be pronounced as an initialism, "F-A-Q", or as an acronym, "FAQ".
                 Web designers often label a single list of questions as a "FAQ", such as on Google Search,
                  while using "FAQs" to denote multiple lists of questions such as on United States Treasury sites.
                 Use of "FAQ" to refer to a single frequently asked question, in and of itself, is less common.
                </Typography>
            </AccordionDetails>
        </Accordion>
                {/* Third question*/}
                <Accordion defaultExpande>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                Third important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                While the name may be recent, the FAQ format itself is quite old. For example, Matthew Hopkins wrote
                 The Discovery of Witches in 1648 as a list of questions and answers, introduced as "Certain Queries answered".
                  Many old catechisms are in a question-and-answer (Q&A) format. Summa Theologica, written by Thomas Aquinas in the second half 
                  of the 13th century,
                 is a series of common questions about Christianity to which he wrote a series of replies. Plato's dialogues are even older.
                </Typography>
            </AccordionDetails>
        </Accordion>
                {/* Fourth question*/}
                <Accordion defaultExpande>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                Fourth important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                The "FAQ" is an Internet textual tradition originating from the technical limitations of early mailing lists from NASA in the early 1980s. 
                The first FAQ developed over several pre-Web years, starting from 1982 when storage was expensive.
                </Typography>
            </AccordionDetails>
        </Accordion>
                {/* Fifth question*/}
                <Accordion defaultExpande>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                Fifth important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                On ARPANET's SPACE mailing list, the presumption was that new users would download archived past messages through FTP. 
                In practice this rarely happened, and the users tended to post questions to the mailing list instead of searching its archives.
                </Typography>
            </AccordionDetails>
        </Accordion>
                {/* Sixth question*/}
                <Accordion defaultExpande>
            <AccordionSummary expandIcon = {<ExpandMoreIcon />}>
                <Typography color = {colors.greenAccent[500]} variant = "h5">
                An other important question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Repeating the "right" answers became tedious, and went against developing netiquette. A series of different measures were set up by loosely affiliated groups of computer system administrators,
                 from regularly posted messages to netlib-like query email daemons. 
                </Typography>
            </AccordionDetails>
        </Accordion>
    </Box>
}
export default FAQ;
