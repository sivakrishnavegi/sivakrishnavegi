import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText} from 'mdbreact';

const Projects = () => {
    const projecjsList = [
        { id: '01',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'Dairy Website',description:'React website',languagesUsed:'html' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '02',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'News API',description:'React JS,News API',languagesUsed:'html' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '03',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'Login Page',description:'Basic Login Page Demo',languagesUsed:'html' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '04',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'SignUp Page',description:'Multiple Signup Methods',languagesUsed:'html' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '05',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'DashBoard',description:'Professional Dashboard example for School Magement System',languagesUsed:'html' ,BtnURL:'https://vskdevsms.netlify.app'},
        { id: '06',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'CV Design',description:'a NEW Era Of Digital cv Template ',languagesUsed:'html' ,BtnURL:'https://vskdev.netlify.app'},
      ];
    return (
        <div>
            <MDBContainer>
  <MDBRow>
  {projecjsList.map(project => ( <MDBCol sm="12" md="4" xs="12" lg="4" xl="4" className="mb-2"> 
  
     <MDBCard key={project.id} >  
        <img className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves />
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText> <b>Languages used in this project are </b>: {project.languagesUsed} {project.description}</MDBCardText>
          <MDBBtn href={project.BtnURL}>Click</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      
      </MDBCol>
   
   ))}
  </MDBRow>
 <br />
 
 
</MDBContainer>
        </div>
    )
}

export default Projects
