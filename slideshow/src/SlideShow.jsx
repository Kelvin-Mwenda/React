import { slideImages } from './data/slideImages';
import {Fade} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css';

const SlideShow = () => {
  return(
    <>
      <Fade autoplay transitionDuration={1000} arrows={true}            // Show arrows
      indicators={true}        // Show dots (optional)
      duration={2000}          // How long each slide stays
      pauseOnHover={true}>
        {slideImages.map((slideImage, index)=>{
          return(
            <div key={index} className="parent-container">
              <div className="fade-slide" style={{height: '100vh', backgroundImage: `url(${slideImage.url})`}}>
                <div className="slide-caption" style={{padding: 20, width:200, borderBottomRightRadius:'20px'}}>
                  <h2>{slideImage.caption}</h2>
                </div>
              </div>
            </div>
          )
        })}
      </Fade>
    </>
  )
}

export default SlideShow;