import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'reactstrap'
import ReactMarkdown from 'react-markdown'
import deathRollBanner from '../img/death_roll_banner.jpg';
import './MarkdownContentPage.css'

const MarkdownContentPage = (props) => {

  const [markdown, setMarkdown] = useState("")
  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(props.markdownFile)
      .then(response => response.text())
      .then(data => setMarkdown(data));

    // empty dependency array means this effect will only run once
    // eslint-disable-next-line
  }, []);

  return (
    <div className="Md">
      <header>
        <img src={deathRollBanner} className="img-fluid Md-banner" alt="Death Roll Simulator banner" />
      </header>
      <Container>
        <Row>
          <Col>
            <ReactMarkdown
              className="Md-content"
              // allowDangerousHtml={true}
              children={markdown}>
            </ReactMarkdown>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default MarkdownContentPage;