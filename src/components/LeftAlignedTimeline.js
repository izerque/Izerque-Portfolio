import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { timelineOppositeContentClasses } from '@mui/lab/TimelineOppositeContent';

 function LeftAlignedTimeline() {
  return (
    <Timeline className='timeline-container'
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.4,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent color="gray">
         2023 - present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Witsmind AI
        <p className='experience-job'>Frontend Web Developer</p>
        <ul className='experience-list-container'>
          <li className='expireince-list'>
          Developed and shipped highly interactive Mobile applications for Witsmind AI Clients using react.
          </li>
          <li className='expireince-list'>
          Worked closely with designers and management team to develop, document, and manage the company's marketing website using, Sass, and React.
          </li>
          <li className='expireince-list'>
          Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Client's platforms.
          </li>
        </ul>
        </TimelineContent>
       
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="gray">
         2021 - 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Afro finance And Leasing (Geepas Uganda),
        <p className='experience-job'>Creative and Digital Marketing Manager</p>
        <ul className='experience-list-container'>
          <li className='expireince-list'>
          Managed Social Media Accounts: Oversaw and optimize social media presence across multiple platforms, increasing engagement and follower growth.
          </li>
          <li className='expireince-list'>
          Designed Web and Social Media Content: Created visually appealing and effective content for web and social media channels, enhancing brand visibility and user interaction.
          </li>
          <li className='expireince-list'>
          Developed and Managed Website: Led the design, development, and maintenance of the company website, ensuring a seamless user experience and up-to-date content.
          </li>
          <li className='expireince-list'>
          Developed and Managed Website: Led the design, development, and maintenance of the company website, ensuring a seamless user experience and up-to-date content.
          </li>
          <li className='expireince-list'>
          Analyzed Performance Metrics: Monitored and analyzed digital marketing performance metrics to refine strategies and improve ROI.
          </li>
          
          <li className='expireince-list'>
          Managed and Diispatched Jumia online Shop orders.
          </li>
        </ul>
        </TimelineContent>
       
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="gray">
         2020 - 2021
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Volcanic Marketing Agency
        <p className='experience-job'>Graphics Designer</p>
        <ul className='experience-list-container'>
          <li className='expireince-list'>
          Creating Digital and Print Designs: Develop visually appealing designs for various media, including websites, social media, advertisements, brochures, and magazines.
          </li>
          <li className='expireince-list'>
          Collaborating with the Marketing Team: Work closely with marketing professionals to create cohesive branding strategies and ensure that all visual content aligns with the brand’s identity.
          </li>
          <li className='expireince-list'>
          Conceptualizing and Planning Visuals: Generate ideas and plan visual content based on client requirements and project constraints.
          </li>
          <li className='expireince-list'>
          Updating Designs Based on Feedback: Revise and refine designs in response to feedback from clients and team members to ensure the final product meets expectations.
          </li>
          <li className='expireince-list'>
          Staying Updated with Design Trends: Keep abreast of the latest design techniques, tools, and trends to produce contemporary and effective visual content.
          </li>
        </ul>
        </TimelineContent>
       
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="gray">
         2019 - 2020
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>ScreenSmith Media
        <p className='experience-job'>Technical Assistant.</p>
        <ul className='experience-list-container'>
          <li className='expireince-list'>
          Set Up Stage Screens and 3D Displays: Installed and configured stage screens and 3D displays for various events, ensuring high-quality visual presentations.
          </li>
          <li className='expireince-list'>
          Managed Event Operations: Oversaw the logistics and operations for event setups, including equipment transportation, installation, and dismantling.
          </li>
          <li className='expireince-list'>
          Configured Technical Equipment: Configured and tested audio-visual equipment to ensure optimal performance during events.
          </li>
          <li className='expireince-list'>
          Coordinated Wedding Video Coverage: Organized and managed video coverage for weddings, ensuring seamless recording and high-quality footage.
          </li>
          <li className='expireince-list'>
          Coordinated Wedding Video Coverage: Organized and managed video coverage for weddings, ensuring seamless recording and high-quality footage.
          </li>
          <li className='expireince-list'>
          Ensured Smooth Logistics: Coordinated logistics for events, including scheduling, resource allocation, and troubleshooting technical issues on-site.
          </li>
        </ul>
        </TimelineContent>
       
      </TimelineItem>
    </Timeline>
  );
}


export default LeftAlignedTimeline;
