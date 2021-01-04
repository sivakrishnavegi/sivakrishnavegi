import { MDBContainer } from 'mdbreact'
import React from 'react'
import './timeline.css'
const Timeline = () => {
  const TimelinePoints = [
    { id: '01',
    imgURL:'https://scontent.fhyd14-1.fna.fbcdn.net/v/t1.0-9/33530546_2320903164803105_6951552457184903168_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=0ktGlJ4hOmcAX_g-t0p&_nc_ht=scontent.fhyd14-1.fna&oh=84a833ed5fc87e1ebc120c2581bf82c1&oe=6015CC44',
    title:'Born on',
    timelineDate:'26 March 1998',
    descripition:'Siva Krishna vegi was born on 26th march 1998' ,
    completeDesc:'https://vskdev.netlify.app'},
  
    { id: '02',
    imgURL:'https://mdbootstrap.com/img/Photos/Horizontal/Work/12-col/img%20(6).jpg',
    title:'Started carrer as blogger',
    timelineDate:'2015',
    descripition:'blogger' ,
    completeDesc:'while everyone was busy scoring on subjects i started desinging my blog during my graduation thanks to my teachers who tought me many things that developed a passion to become a web designer.atleast i know i can write.'},
    
    { id: '03',
    imgURL:'https://www.lpu.in/images/home-slider/modi.jpg',
    title:'completed Graduation in 2018 from Lovely Professional University',
    timelineDate:'2018',
    descripition:'Convocation' ,
    completeDesc:'Offically certifed as BCA gruadate from LPU 18th Sep 2018.i belive in knowleadge rather than peice of certifacte.started a professional carrer as Business Analyst in Bonaz captial Company.'
  },

  { id: '04',
  imgURL:'https://i.pinimg.com/originals/a0/75/0c/a0750c5df700b85f0d6498d84bbabc69.png',
  title:'Started Post Graduation in 2018 yes again from Lovely Professional University',
  timelineDate:'2018',
  descripition:'' ,
  completeDesc:'A love being a part of this big LPUfamily. i belive there many things to learn more... from Lovely university LPU,Punjab.'
},

{ id: '05',
imgURL:'https://i.pinimg.com/originals/a0/75/0c/a0750c5df700b85f0d6498d84bbabc69.png',
title:'Completed Post Graduation in 2020 from Lovely Professional University',
timelineDate:'2020',
descripition:'MCA ' ,
completeDesc:'learnt alot'
},

{ id: '06',
imgURL:'https://click-labs.com/wp-content/uploads/2016/06/logo_fixed.png',
title:'Started Internship',
timelineDate:'2020',
descripition:'Being intern provided me a lot of oppurtunites' ,
completeDesc:'Got Trained from exprerts'
},
  
  
    
  ];
    return (
        <div>
            <MDBContainer className="z-depth-1 my-5 py-5 px-4 px-lg-0 ">
                
<section>
  
  
  
  <h3 className="font-weight-bold text-center dark-grey-text pb-2">My Journey</h3>
  <hr className="w-header my-4" />
  <p className="lead text-center text-muted pt-2 mb-5">..</p>
  
  <div className="row">
    <div className="col-lg-8 mx-auto">

      <ol className="timeline">
     
     
       {TimelinePoints.map(Timeline=> {
        return (
          <li class="timeline-element" key={Timeline.key}>
             <h5 class="font-weight-bold dark-grey-text mb-3">{Timeline.title}</h5>
          <p class="grey-text font-small"><time datetime="1998-03-26">{Timeline.timelineDate}</time></p>
          <p class="text-muted">{Timeline.descripition}</p>
          <p><img class="img-fluid z-depth-1-half rounded" src={Timeline.imgURL} alt="siva krishna vegi" /></p>
          <p class="text-muted">{Timeline.completeDesc}</p>
          </li>
          
        );
      })}
  
       
       
      </ol>

    </div>
  </div>
  
</section>


            </MDBContainer>
  
         </div>
  )
}

export default Timeline
