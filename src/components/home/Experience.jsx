import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import './style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";

const Experience = () => {
 return (
	 <Jumbotron fluid id="experience" className="bg-light m-0">
		<Container className="p-7">
			<h2 className="display-4 pb-5 text-center">Education</h2>
			 <VerticalTimeline>
			 <VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="2019 - 2023"
						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">B. Tech (2019-2023)</h3>
						<h4 className="vertical-timeline-element-subtitle">Dr. B. C. Roy Engineering College (Durgapur, WB.)</h4>

						<p>
							Computer Science & Engineering<br></br>
							GPA: 9.40 (upto 5th sem)
						</p>
					</VerticalTimelineElement>


					<VerticalTimelineElement
						className="vertical-timeline-element--work"
						contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
						date="2016 - 2018"

						iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">High School (2016-2019)</h3>
						<h4 className="vertical-timeline-element-subtitle">St. Xavier's College (Ranchi, Jh.)</h4>
						<p>
							SUBJECTS:	Physics, Chemistry, Maths, Computer Science & English
						</p>
						<p>
							Percentage: 80.00 %
						</p>
					</VerticalTimelineElement>

					<VerticalTimelineElement
						className="vertical-timeline-element--education"
						contentStyle={{ background: 'rgb(0,0,128)', color: '#fff' }}
						contentArrowStyle={{ borderRight: '7px solid  rgb(0,0,128)' }}
						date="2016"
						iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
						icon={<SchoolIcon />}
					>
						<h3 className="vertical-timeline-element-title">Matriculation (2016)</h3>
						<h4 className="vertical-timeline-element-subtitle">GuruNanak Hr. Sec. School (Ranchi, Jh.)</h4>
						<p>
							CGPA: 10
						</p>
					</VerticalTimelineElement>

				  
				  
				  <VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					icon={<StarIcon />}
				  />
			</VerticalTimeline>
		</Container>
	</Jumbotron>

)
};

export default Experience;
