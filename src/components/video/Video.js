import './video.css'
import videoBg from '../../images/6130551-hd_1920_1080_30fps.mp4'
function Video() {
    return <div className="main">
        <div className='overlay'></div>
        <video src={videoBg} autoPlay loop muted />
        <div className='content'>
                <h2 className='text-2xl sm:text-5xl'>Welome To MEDArt</h2>
        </div>
  </div>;
}

export default Video;
