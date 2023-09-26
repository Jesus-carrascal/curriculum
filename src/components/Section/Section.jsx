import './Section.scss';
import descarga from '../../assets/descarga.jfif'


const Section = ({ section }) => (
        <section className='section'>
            <div className='section_info'>
                <h1>{section.name}</h1>
                <h2 className='section_title'>{section.profession}</h2>  
                <ul>
                <h1>Contacto</h1>
                    <li>
                    <i className="bi bi-telephone-fill"></i> <a href="https://api.whatsapp.com/send?phone=573122396588 " className='section_link'>{section.celular}</a>
                    </li>
                    <li>
                    <i className="bi bi-envelope-at"></i> <a href="mailto:jesucarrascalj@gmail.com" className='section_link'>{section.email}</a>
                    </li>
                    
                </ul>
                <h3>Perfil</h3>
                        <span >{section.des}</span> 
                    
            </div>
            <div className='section_image'>
                <img src={descarga} alt =""/>
            </div>
        </section>
    ); 


export default Section;