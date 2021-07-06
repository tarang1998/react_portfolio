import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion , faMobile , faPencilAlt , faThumbsUp} from '@fortawesome/free-solid-svg-icons'



function Services() {
 

  return (
    <div className='services'>
        <h3>services</h3>

        <h2>What We Offer</h2>

        <div className='row'>

            <div className = 'column'>
                
                <span>
                    <FontAwesomeIcon icon={faMobile} />
                </span>
                <h4>Responsive</h4>
                <p>Looks great on any screen Size!</p>
            </div>

            <div>
                <span>
                    <FontAwesomeIcon icon={faPencilAlt} />
                </span>
                <h4>Redesigned</h4>
                <p>Freshly redisgned for bootstrap 4.</p>
            </div>

            <div>
                <span>
                    <FontAwesomeIcon icon={faThumbsUp} />
                </span>
                <h4>Favourite</h4>
                <p>Loved by millions</p>
            </div>

            <div>
                <span>
                    <FontAwesomeIcon icon={faQuestion} />
                </span>
                <h4>Question</h4>
                <p>Ask a doubt?</p>
            </div>

        </div>
    </div >
  );
}

export default Services;
