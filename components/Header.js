import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            <FontAwesomeIcon icon={faGem} transform="grow-18" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>This Is Not a Webinar</h1>
                <p>An initiative for people who are done pretending learning is a ladder.<br />
                A conversation series from <a href="https://criticaldata.mit.edu">MIT Critical Data</a>.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>What This Is</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>The Problem</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>What We Do</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Get Involved</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
