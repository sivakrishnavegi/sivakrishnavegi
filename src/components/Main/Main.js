import React from 'react'
import {
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavItem,
    MDBNavLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBMask,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBView,
    MDBContainer,
    MDBFormInline,
    MDBAnimation,
    MDBCard
  } from 'mdbreact';

 import Projects from '../Projects/Projects' 
import './Main.css'
import Timeline from '../timeline/Timeline'
const Main = () => {
    return (
      <>
          <div>
                 <MDBView>
          <MDBMask className='white-text gradient' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '10rem' }}
            className='d-flex justify-content-center white-text align-items-center'
          >
            <MDBRow>
              <MDBCol md='6' className='text-center text-md-left mt-xl-5 mb-5'>
                <MDBAnimation type='fadeInLeft' delay='.3s'>
                  <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                  who is siva krishna vegi
                  </h1>
                  <hr className='hr-light' />
                  <h6 className='mb-4'>
                  Siva Krishna Vegi is MCA post graduate from Lovely Professional University native of vizag.The beautiful city which is know as city of destiny where my destiny began on 26th march 1998.i love designig websites because its fun and pasion too.i'm the blogger of filmfxstudio.com and wait one more thing "Self Respect is Everthing never let yourself down" :)
                  </h6>
                  <MDBBtn color='white'>Download cv</MDBBtn>
                  <MDBBtn outline color='white'>
                  View Projects
                  </MDBBtn>
                </MDBAnimation>
              </MDBCol>

              <MDBCol md='6' xl='5' className='mt-xl-5'>
                <MDBAnimation type='fadeInRight' delay='.3s'>
                  <img
                    src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                    alt=''
                    className='img-fluid'
                  />
                </MDBAnimation>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      <Projects/>
      <Timeline />
      <MDBContainer className="text-center"> 
        <h1>Find us on Social Media</h1>
      <MDBRow className='py-5'>
        <MDBCol md='4' className='text-center'> 
        <div class="fb-page" data-href="https://www.facebook.com/sivakrishna.vegi.offical/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/sivakrishna.vegi.offical/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/sivakrishna.vegi.offical/">Siva krishna vegi</a></blockquote></div>
        </MDBCol>
        <MDBCol md='4' className='text-center'>
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            <a href="https://twitter.com/hashtag/HAPPYCHRISTMASARIYANA?src=hash&amp;ref_src=twsrc%5Etfw">#HAPPYCHRISTMASARIYANA</a>
             <br />May God bless you with lots of happiness ♥️ 🌲🎁 
             <a href="https://twitter.com/hashtag/ChristmasEve?src=hash&amp;ref_src=twsrc%5Etfw">#ChristmasEve</a> <a href="https://t.co/MffZeCKoxO">https://t.co/MffZeCKoxO</a></p>&mdash; siva krishna vegi 🇮🇳 (@sivakrishnavegi) <a href="https://twitter.com/sivakrishnavegi/status/1342109392418684931?ref_src=twsrc%5Etfw">December 24, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        </MDBCol>
        <MDBCol md='4' className='text-center'>
        <div id="github-card"
     data-username="sivakrishnavegi">
        </div>
      </MDBCol>
        </MDBRow>
      </MDBContainer>
        </div>
       <MDBContainer>
         <MDBCard>
           <MDBRow>
             <MDBCol md="6">
             <div id="map-within-card-2" class="map-container rounded-left" id="MapCard">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d486416.746941072!2d82.98239708607812!3d17.738473385366245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1575307188778!5m2!1sen!2sin" frameborder="0"
               allowfullscreen></iframe>
          </div>

             </MDBCol>
             <MDBCol md="6" className="mx-auto align-self-center py-4">
             <h6 class="font-weight-bold grey-text text-uppercase small">Reach Me</h6>
          <h5 class="font-weight-normal mb-4">Jalandhar, Punjab</h5>
          <p class="text-muted font-weight-light">you know Law Gate LPU<br /> PUNJAB, 144411</p>
          <p class="text-muted font-weight-light mb-0">Email: sivakrishnavegi@yahoo.com, support@filmfxstudio.com</p>
               
               </MDBCol>
           </MDBRow>
         </MDBCard>
         </MDBContainer>
         <MDBContainer>

  <div class="container my-5 py-5 z-depth-1">
 

 
 <section class="px-md-5 mx-md-5 text-center dark-grey-text">

   <h2 class="font-weight-bold">Follow me on:</h2>

   
   <a href="https://www.facebook.com/sivakrishnavegi1" class="mx-1" role="button"><i class="fab fa-facebook-f"></i></a>
   <a href="https://twitter.com/sivakrishnavegi" class="mx-1" role="button"><i class="fab fa-twitter"></i></a>
   <a href="https://in.linkedin.com/in/siva-krishna-vegi" class="mx-1" role="button"><i class="fab fa-linkedin-in"></i></a>
   <a href="https://www.instagram.com/sivakrishnavegi/" class="mx-1" role="button"><i class="fab fa-instagram"></i></a>



 </section>
 


</div>

         </MDBContainer>
       </>

  )
}

export default Main
