import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faLinkedin from '@fortawesome/fontawesome-free-brands/faLinkedin'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">What This Is</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>This Is Not a Webinar is a recurring conversation series — part salon, part confessional, part coup-in-planning — for students, researchers, and curious humans who suspect that the way we learn, publish, and perform has gone badly wrong. It grew out of an impromptu Zoom call on May 24, 2025, convened by Leo Anthony Celi (MIT Critical Data) with a cohort of high schoolers, undergraduates, medical students, and recent graduates spread across Atlanta, Dallas, Houston, Vienna, Vancouver, and Harizawa, Ethiopia.</p>
          <p>The name is the thesis. Webinars are what happen when you want to look productive. This is something else: unscripted, emotionally honest, and structurally allergic to the incentive systems it's trying to dismantle. The intended output is rewired participants, not polished publications.</p>
          <blockquote>"We don't want to boil the ocean. We want to fry it."</blockquote>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Problem</h2>
          <p>AI has made it trivially easy to produce papers, websites, and polished deliverables. This would be a gift if those things were what we actually needed more of. They are not. The real crisis is that research and learning have been captured by the metrics used to measure them — citations, h-indices, elite affiliations, summer program checkboxes — until the act of discovering something true and useful for its own sake has become almost eccentric.</p>
          <p>One participant cited a researcher who went from 100 citations to 17,000 in a single year using AI self-citation. This is not an outlier. It is the destination of a road we've been on for decades. The question this series asks is not how to fix the metrics — it's how to stop needing them.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">What We Do</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p>Each session assigns one participant or small group to bring a topic — not a polished presentation, not a literature review — just honest thoughts. The conversation that follows is what Celi calls <em>heartstorming</em> and <em>soulstorming</em>: experience and emotion as the primary inputs, not cleverness. Sessions draw on storytelling, process art, and perspectives from indigenous and non-Western knowledge traditions that have long practiced what we're only now trying to articulate.</p>
          <h3>Topics for the series</h3>
          <ul>
            <li>Reimagining the CV — what it looks like when you're not chasing glory</li>
            <li>Your best teacher — storytelling as a form of neural rewiring</li>
            <li>Process over product — what process art teaches us about research</li>
            <li>Being a double agent — navigating broken systems without becoming them</li>
            <li>Relational accountability — what indigenous communities know that we don't</li>
            <li>Purpose at 17 — why midlife crises are symptoms of deferred meaning</li>
            <li>What would we do if papers didn't exist?</li>
            <li>Who's not in the room — designing inclusion before launching the series</li>
          </ul>
          <h3>Who's in the room (first session)</h3>
          <p>Quang Bui · Arjun Desikan · Elizabeth Louie · Samuel Paik-Heintz · Nik Jaiswal · Ashwin · Agastya Munnangi · Milit Patel · Sparsh Roy · Eunchan Hwang · Adhvik · Azzy Xiang. Convened by Leo Anthony Celi, MIT Critical Data.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Get Involved</h2>
          <span className="image main"><img src="/static/images/pic04.jpg" alt="" /></span>
          <p>The people who need this most will not be the last to be invited. If you're a student, researcher, or curious human who suspects learning has gone badly wrong, there will be a way in.</p>
          <p><strong>More info coming soon.</strong></p>
          <ul className="icons">
            <li><a href="https://www.instagram.com/mitcriticaldata/" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="https://www.linkedin.com/company/mitcriticaldata/" target="_blank" rel="noopener">
              <FontAwesomeIcon icon={faLinkedin} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main