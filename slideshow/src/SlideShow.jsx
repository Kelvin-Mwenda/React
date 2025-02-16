import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { slideImages } from '../data/slideImages.js';

const SlideShow = () => {
  return(
    <>
      <Slide autoplay transitionDuration={500}>
        {slideImages.map((slideImage, index)=>{
          <div key={index}>
            <div style={{height: '100vh', backgroundImage: `url(${slideImage.url})`}}>
              <div style={{padding: 20, width:200, borderBottomRightRadius:'20px',boxShadow: '40px 5px 0 rgba(0,0,0,0.2', backgroundColor: 'rgba(255,255,255,0.8)'}}>
                <h1>{slideImage.caption}</h1>
              </div>
            </div>
          </div>
        })}
      </Slide>
    </>
  )
}


export default SlideShow;