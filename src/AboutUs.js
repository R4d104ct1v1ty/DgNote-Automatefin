import {Link} from 'react-router-dom'
import ov from './Resources/About\ Us/Our\ vision.jpg';
import om from './Resources/About\ Us/Our\ Mission.jpg'
import VerticalCard from './VerticalCard';
import integrity from './Resources/About\ Us/Integrity_laptop.png'
import empowerment from './Resources/About\ Us/Empowerment-laptop.png'
import innovation from './Resources/About\ Us/innovation-laptop.png'
import adaptability from './Resources/About\ Us/adaptability-laptop.png'
import excellence from './Resources/About\ Us/excellence-laptop.png'
import community from './Resources/About\ Us/community-laptop.png'
import collaboration from './Resources/About\ Us/collaboration-laptop.png'
import cod from './Resources/About\ Us/diversity-laptop.png'
import gm from './Resources/About\ Us/growth-mindset-laptop.png'

const AboutUs = () => {
    return ( 
        <div className="aboutus">
            <div className="au-hero">
                <h3>Welcome to AutomateFin, where we’re all about turning your financial dreams into reality!</h3>
            </div>
            <div className="au-info" style={{marginTop: '60px', marginLeft: '20px', width: '75%', margin:'auto'}}>
                <h3 style={{color: '#02A650'}}>About Us</h3>
                <p style={{marginTop: '30px', textAlign: 'left', marginBottom: '0',fontSize: '20px'}}>
                Welcome to AutomateFin, where we’re all about turning your financial dreams into reality! Whether you’re an individual
aiming for personal milestones or a business eyeing expansion, we’ve got your back.
                </p>
                <p style={{textAlign: 'left', marginBottom: '0'}}>
                Picture this: you, effortlessly cruising towards your goals with our tailored personal loans, designed for your
convenience and peace of mind. Need a little extra boost for your business ambitions? Our business working capital
financing solutions are your ticket to smooth sailing, keeping your operations afloat and propelling your growth.
                </p>
                <p style={{textAlign: 'left', marginBottom: '0'}}>
                Who’s our crowd? Well, it’s you, the go-getters, the dreamers, and the doers! Whether you’re an individual seeking
support or a business hungry for growth, AutomateFin is your partner in progress.
                </p>
                <p style={{textAlign: 'left', marginBottom: '40px'}}>
                But wait, there's more! Behind the scenes, we've assembled a crack team of financial wizards and friendly faces.
From savvy advisors to loan gurus, our crew is dedicated to making your journey not just successful, but downright
enjoyable. With their expertise and passion, you're not just a client, you're part of the AutomateFin family.
                </p>
                <Link to=''><button style={{border: 'none', backgroundColor: '#0270A7', color:'#fff', padding: '5px 8px 5px', borderRadius: '3px'}}>Get In Touch</button></Link>
            </div>
            <div className='au-mv' style={{marginTop: '60px', backgroundColor: '#F3F3F3'}}>
                <div className='services' style={{display:'flex', margin:'auto', justifyContent:'center', backgroundColor: '#F3F3F3'}}>
                <VerticalCard image={ov} title='Our Vision' content="
        At AutomateFin, we envision a world where financial empowerment is within reach for everyone. We see a future
        where individuals and businesses alike can confidently pursue their aspirations, unburdened by financial barriers."  mg='5'/>
                <VerticalCard image={om} title='Our Mission' content="
                Our mission is to revolutionize the way people and businesses approach finance. Through innovative solutions,
                personalized guidance, and unwavering support, we strive to empower our clients to take control of their financial
                destiny, unlocking a world of possibilities and paving the way for a brighter future" mg='5'/>
                </div>
            </div>
            <div className='au-val' style={{marginTop: '60px'}}>
                <h3 style={{color: '#02A650'}}>Our Values</h3>
                <p style={{textAlign: 'left', width: '70%', margin: 'auto', marginTop: '30px', fontSize: '20px'}}>
                At AutomateFin, our values guide everything we do. With integrity at our core, we empower individuals and
businesses through innovation and collaboration. We hold ourselves to the highest standards of excellence, always
striving to make a positive impact in the communities we serve.
                </p>
                <div className='au-val-icons'>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={integrity} alt="" />
                            <h5>Integrity</h5>
                            <span style={{textAlign:'left'}}>We believe in honesty and transparency in all our interactions.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={empowerment} alt="" />
                            <h5>Empowerment</h5>
                            <span>We strive to empower individuals and businesses to take control of their financial futures.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={innovation} alt="" />
                            <h5>Innovation</h5>
                            <span>We continuously seek new ways to simplify and enhance the financial experience for our
customers.</span>
                        </div>
                    </div>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={adaptability} alt="" />
                            <h5>Adaptability</h5>
                            <span>We embrace change and adapt to evolving needs, ensuring that we remain responsive and
flexible in our approach to serving our customers and communities.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={excellence} alt="" />
                            <h5>Excellence</h5>
                            <span>We are committed to delivering exceptional service and results, setting high standards for
ourselves.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={community} alt="" />
                            <h5>Community</h5>
                            <span>We are dedicated to giving back and making a positive impact in the communities we serve.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='au-oc' style={{marginTop: '60px', marginBottom: '100px'}}>
                <h3 style={{color: '#02A650'}}>Our Culture</h3>
                <p style={{textAlign: 'left', width: '70%', margin: 'auto', marginTop: '30px', fontSize: '20px'}}>At AutomateFin, our culture thrives on collaboration, growth, and diversity. We believe in the power of teamwork,
embracing challenges with a growth mindset, and celebrating the unique perspectives of every individual. Together,
we foster an environment where innovation flourishes, and every team member is valued for their contributions</p>
                <div>
                    <div style={{display: 'flex', margin: 'auto', justifyContent: 'center'}}>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={collaboration} alt="" />
                            <h5>Collaboration</h5>
                            <span>At AutomateFin, collaboration is key. We believe in working together as a team, sharing ideas and
expertise to achieve common goals.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={gm} alt="" />
                            <h5>Growth Mindset</h5>
                            <span>We foster a culture of continuous learning and development, encouraging our team members to
embrace challenges and pursue growth opportunities.</span>
                        </div>
                        <div style={{width: '250px', margin: '30px'}}>
                            <img src={cod} alt="" />
                            <h5>Celebration of Diversity</h5>
                            <span>We celebrate diversity in all its forms, recognizing the unique perspectives and
contributions of every individual within our organization.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AboutUs;