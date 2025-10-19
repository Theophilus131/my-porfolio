import stlyes from './TheoStyles.module.css';
import image from '../../assets/profilePicture.jpg';
import themeIcon from '../../assets/Sun Icons.png';
import twitter from '../../assets/Twitter-x  (1).png';
import github from '../../assets/Github Icons (2).png';
import linkdin from '../../assets/linkden  .png';
import CV from '../../assets/Theophilus-Danladi-Umar(1).pdf'

export const Theo = () => {
  return (
   <section id='theo' className={stlyes.container}>

   <div className= {stlyes.colorModeContainer}>
        <img className={stlyes.theo} 
        src={image} alt="profile picture" />

        <img className={stlyes.colorMode} 
        src={themeIcon} alt="color mode icon" />

   </div>

   <div className={stlyes.info}>
    <h1>Theophilus 
        <br />
        Danladi
        <br />
        Umar
    </h1>

    <h2>Software Engineer</h2>

    <span>
        <a href="https://twitter.com/" target="_blank"> 
        <img src={twitter} alt="twitter icon" />
        </a>

        <a href="https://github.com/" target="_blank"> 
        <img src={github} alt="Git hub icon" />
        </a>

        <a href="https://linkdin.com/" target="_blank"> 
        <img src={linkdin} alt="Linkdin icon" />
        </a>

    </span>

     <p className={stlyes.description}>I build full-stack web applications using React on the frontend and Java on the backend. I focus on creating responsive, user-friendly interfaces and robust backend systems that scale. I enjoy turning complex 
        problems into clean, efficient code.</p>

        <a href={CV}  download>
            <button className='hover'>
                Resume

            </button>

        </a>


   </div>
   
    
   
   </section>
  )
}

export default Theo;