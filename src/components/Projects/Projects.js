import React from 'react'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage,MDBAnimation, MDBCardTitle, MDBCardText} from 'mdbreact';

const Projects = () => {
 
    const projecjsList = [
      { id: '00',imgURL:'https://i.ibb.co/pzgRH98/Untitled-design-1.png',title:'FilmFx Studio',description:'React website its live project based on FilmFxStudio located in viskhapatanam',languagesUsed:'ReactJS,NodeJS,Express,MongoDB' ,BtnURL:'https://filmfxtest.netlify.app'},
        { id: '01',imgURL:'https://pbs.twimg.com/media/Eq3wavxUwAAQ1HR?format=png&name=small',title:'Dairy Website',description:'React website its live project based on viskha Dairy located in viskhapatanam',languagesUsed:'ReactJS,NodeJS' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '02',imgURL:'https://pbs.twimg.com/media/Eq32BciVoAEDqkr?format=png&name=small',title:'Dashboard',description:'Professional Dashboard example for School Magement System',languagesUsed:'ReactJs,Nodejs' ,BtnURL:'https://vskdevsms.netlify.app/'},
        { id: '03',imgURL:'https://i.ibb.co/JH1Xz1K/Untitled-design.png',title:'Build Burger',description:'Build burger',languagesUsed:'React,Redux,Firebase' ,BtnURL:'https://vskdev.netlify.app'},
        { id: '04',imgURL:'https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg',title:'News Api',description:'underdevlopment',languagesUsed:'****' ,BtnURL:'https://github.com/sivakrishnavegi/NewsReactApp'},
       
      ];
    return (
        <div>
            <MDBContainer>
            <h3 className="font-weight-bold text-center dark-grey-text pb-2">View Projects</h3>
  <MDBRow>
  {projecjsList.map(project => ( <MDBCol sm="12" md="4" xs="12" lg="4" xl="4" className="mb-2"> 
  <MDBAnimation reveal type="slideInUp">
     <MDBCard key={project.id} >  
        <img className="img-fluid" src={project.imgURL}
          waves />
        <MDBCardBody>
          <MDBCardTitle>{project.title}</MDBCardTitle>
          <MDBCardText> <b>Languages used in this project are </b>: {project.languagesUsed} {project.description}</MDBCardText>
          <MDBBtn href={project.BtnURL}>View Project</MDBBtn>
        </MDBCardBody>
      </MDBCard>
      </MDBAnimation>
      </MDBCol>
   
   ))}
  </MDBRow>
 <br />
 
 
</MDBContainer>
        </div>
    )
}

export default Projects
