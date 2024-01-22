import React from "react";
import { CgWorkAlt } from "react-icons/cg";

// Company Logos and brief description
export const EXP_COMPANY = [
    {position:'Automation Engineer', logo:'/ASML.png',company:'ASML', tech:['Ansible', 'Python', 'FastApi', 'Bash', 'HTML', 'Javascript']},
    {position:'Migration Engineer', logo:'/KPN.png',company:'KPN', tech:['Bash, Linux']},
    {position:'Data Engineer', logo:'/Eneco.png',company:'Eneco', tech:['Cassandra', 'Linux']},
    {position:'Django Developer', logo:'/Telemos.png',company:'Telemos BV', tech:['Django', 'Javascript']},
    {position:'Instructor', logo:'/Olympia.png',company:'Olympia', tech:['Microsoft Teams']},
    {position:'Data Engineer', logo:'/Eneco.png',company:'Eneco', tech:['Cassandra', 'Linux']},
    {position:'IT support', logo:'/RIVM.png',company:'RIVM', tech:['IT support']},
    {position:'Software Engineer', logo:'/Bydehand.png',company:'Bydehand', tech:['Cassandra', 'Linux']},
    {position:'IT support', logo:'/Hostnet.png',company:'Hostnet', tech:['HTML', 'Javascript', 'IT support']},
    {position:'IT support', logo:'/Roche.png',company:'Roche Diagnostics', tech:['Cisco', 'IT support']},
  ];

// Working experience
export const WORKING_EXPERIENCE = [
    {
      position:'Automation Engineer', 
      logo:'/ASML.png',
      company:'ASML',  
      tech:['Ansible', 'Python', 'FastApi', 'Bash', 'HTML', 'Javascript'], 
      starting_date:'March 2022',
      ending_date:'March 2024',
      employment:'Full time job',
      summary:
        [
          'As a DevOps Engineer at ASML, I play a pivotal role in enhancing and maintaining the efficiency of our software development \
          and deployment processes. My primary focus is on implementing and managing automation solutions using Ansible, Python, FastAPI, Bash, \
          HTML, and JavaScript.',

          'I collaborate closely with cross-functional teams to streamline workflows, enhance system reliability, and optimize \
          infrastructure.Two of my greatest contributions were automating manual processes when deploying our infrastructure platform at the customer FAB.\
          This also included creating new features to support new tenants for the platform and fixing bugs with the use of Ansible and Python.',

          'Python here was primarily used for automation purposes and creating custom ansible modules. Our team also industrialized a new application\
          which was responsible for calculating the amount of resources a customer might need when deploying our main application platform.',

          ' This has saved customers amounts in the millions and has given a clearer insight in how resources are utilized by our platform. This application \
          was written in Python (FastApi) with standard javascript, HTML and CSS.'
        ],      
      icon: React.createElement(CgWorkAlt),
    },
    {
      position:'Migration Engineer', 
      logo:'/Police.png',
      company:'National Police',  
      tech:['Soap','Posgresql'], 
      starting_date:'May 2021',
      ending_date:'March 2022',
      employment:'Secondment through Sogeti Nederland BV',
      summary:
        [
          'During my tenure at the police, I was integrated into an existing team that focused on immigration matters.\
          My primary responsibility was maintaining the database containing crucial information.\
          The overarching project involved migrating to a new database system, specifically PostgreSQL.',
          
          'This endeavor required seamless collaboration not only with other departments within the organization\
          but also with international partners, as the information had to remain accessible across borders.\
          In navigating this multifaceted project, I played a pivotal role in ensuring the successful\
          transition to the new database system while facilitating effective cooperation among diverse teams\
          and international counterparts.'
        ],      
      icon: React.createElement(CgWorkAlt),
    },
    {
      position:'Platform Engineer', 
      logo:'/ASML.png',
      company:'ASML',  
      tech:['Ansible', 'Python'], 
      starting_date:'April 2020',
      ending_date:'March 2021',
      employment:'Secondment through Sogeti Nederland BV',
      summary:
        [
          'During my secondment at ASML through Sogeti, I was a valuable member of a six-person team entrusted with\
          the task of designing, testing, and implementing a new platform to host applications from various teams.',
          
          'Being involved in the project from its inception, I played a key role in creating and implementing designs,\
          tests, and features from scratch. The technologies employed for setting up the platform included DCOS,\
          Python, and Ansible. As one of the developers on the team, I contributed significantly to the successful\
          development and deployment of the new hosting platform.'
        ],      
      icon: React.createElement(CgWorkAlt),
    },
    {
      position:'Migration Engineer', 
      logo:'/KPN.png',
      company:'KPN', 
      tech:['Bash'],
      starting_date:'January 2020', 
      ending_date:'March 2020', 
      employment:'Secondment through Sogeti Nederland BV',
      summary:
        [     
          'As a Migration Engineer at KPN, I held a critical role in the seamless transition of phone numbers for supermarket clients to our \
          advanced VoIP system. In this remote position, I demonstrated expertise in telecommunications and meticulous attention to detail.',

          'My responsibilities included logging into Fritsboxes, executing the porting process, and ensuring the successful migration of phone numbers. \
          Through effective coordination and communication, I played a key role in updating and optimizing telecommunications infrastructure for our \
          supermarket clients, contributing to the overall success of KPN\'s migration projects.'
        ], 
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'Data Engineer', 
      logo:'/Eneco.png',
      company:'Eneco', 
      tech:['Cassandra', 'Linux'],
      starting_date:'September 2019', 
      ending_date:'December 2019', 
      employment:'Secondment through Sogeti Nederland BV',
      summary:
        [      
          'In my role as a Data Engineer at Eneco, I played a pivotal role in the successful setup and implementation of a Cassandra database, \
          adhering to Eneco\'s stringent security specifications. This project marked a significant collaboration between Eneco, Cloud Center of Excellence\
          (CCoE), and Sogeti. As the key person responsible for communication and implementation, I demonstrated a high level of technical expertise \
          and effective coordination.',
          
          'My responsibilities included not only the technical aspects of setting up the Cassandra database but also thorough \
          documentation to align with Eneco\'s security standards. Additionally, I spearheaded the handover process to the team in India, ensuring a\
          smooth transition of knowledge and operations. Throughout the project, I actively engaged with Eneco\'s Cloud Center of Excellence and \
          Sogeti, fostering collaboration and aligning project goals with organizational objectives.',
          
          'My role was instrumental in bridging communication gaps and ensuring that the implementation met Eneco\'s standards for security and efficiency.\
          Following the successful completion of the project, \
          I obtained certification as a Cassandra developer, underscoring my commitment to staying abreast of industry best practices and technologies.\
          Joining Eneco provided me with the opportunity to contribute to a joint venture that not only enriched my technical skills but also highlighted \
          my proficiency in effective communication and project implementation within a collaborative environment.'
        ],
      icon: React.createElement(CgWorkAlt)},
    {
      position:'Instructor', 
      logo:'/Olympia.png', 
      company:'Olympia', 
      tech:['Microsoft Teams','Windows 10'],
      starting_date:'April 2019', 
      ending_date:'May 2019', 
      employment:'Secondment through Sogeti Nederland BV',
      summary: 
        [
          'In my role as a Microsoft Teams Instructor/Presenter and System Migrator at Olympia Uitzendbureau, I spearheaded a comprehensive initiative \
          alongside a team from Sogeti to bring about a transformative change in the way employees utilized technology. Our primary objectives included updating \
          and training Olympia\'s workforce across multiple branches in the Netherlands on the effective use of Microsoft Teams.',
          
          ' A key aspect of our responsibility involved conducting engaging and informative training sessions, ensuring that employees were well-versed in the features and functionalities of Microsoft \
          Teams. These sessions were not only designed to enhance technical proficiency but also to foster a smooth transition to a new system, with Microsoft Teams \
          positioned at the core.The migration of the existing system to the new one was a pivotal part of the project, and I played a crucial role in orchestrating \
          this shift seamlessly. This dual role required a profound understanding of Microsoft Teams, coupled with strong presentation skills to effectively convey the \
          benefits and usage nuances of the platform to diverse audiences. ',
          
          'The demanding nature of the job also underscored the importance of punctuality, as we traversed \
          various branches of Olympia Uitzendbureau across the country. This experience significantly bolstered my soft skills, particularly in communication, \
          adaptability, and stakeholder engagement. Interacting with employees from different backgrounds and skill levels allowed me to refine my ability to convey complex \
          technical information in a manner that was accessible and engaging. In the end, the successful execution of this project not only elevated the technological \
          proficiency of Olympia\'s workforce but also positioned Microsoft Teams as a central and indispensable tool in their daily operations.',
          
          ' This role was a transformative experience, not only in terms of technical expertise but also in the enhancement of my soft skills, marking a significant milestone in my \
          professional development.'
        ], 
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'IT support', 
      logo:'/RIVM.png',
      company:'RIVM', 
      tech:['Microsoft','IT support'],
      starting_date:'June 2019', 
      ending_date:'December 2019', 
      employment:'Secondment through Sogeti Nederland BV',
      summary:
        [
          'As a Migration Engineer at RIVM, I played a pivotal role in a large-scale transformational project alongside a team from Sogeti. Our primary objective \
          was to orchestrate the migration of the entire company, consisting of nearly 2000 employees, to a new system. This comprehensive task encompassed installation, \
          distribution, and education on the intricacies of the new system. ',
          
          'In my role as a Migration Engineer at RIVM, I led a transformative project alongside a Sogeti \
          team, overseeing the migration of nearly 2000 employees to a new system. This encompassed orchestrating seamless system installations, coordinating the distribution \
          of resources, and conducting comprehensive education sessions to ensure a smooth transition. ',
          
          'Engaging closely with stakeholders, I addressed departmental needs, \
          provided user support, and meticulously documented processes. Through effective project management, the successful execution of this migration not only upgraded \
          RIVM\'s technological infrastructure but also significantly enhanced workforce productivity and efficiency.'
        ],  
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'Django Developer', 
      logo:'/Telemos.png', 
      company:'Telemos BV', 
      tech:['Django', 'Javascript'],
      starting_date:'January 2018', 
      ending_date:'February 2019', 
      employment:'Full time job',
      summary:
        [
          'As the sole experienced Python Developer at Telemos, my role was instrumental in maintaining and enhancing critical applications central \
          to the company\'s operations. I was responsible for overseeing and improving the Django application dedicated to the ordering process of custom-sized \
          roller blinds for prominent clients such as Gamma and Praxis. ',

          'One of the major challenges I embraced was maintaining and updating the company \
          administration program, which utilized Django for the backend and featured a JavaScript frontend. Being the lone Python Developer, I navigated the \
          complexities of this responsibility with determination and proficiency. ',
          
          'My daily tasks encompassed not only addressing immediate maintenance needs\
          but also implementing updates and improvements to both applications. Despite the unique challenges presented by being the sole Python Developer, \
          I successfully managed to sustain and enhance the functionality of the applications while simultaneously focusing on refining documentation to ensure \
          streamlined future maintenance.',
          
          ' The nature of my role allowed me to directly contribute to the seamless functioning of crucial business processes, \
          impacting the overall efficiency and customer satisfaction for clients like Gamma and Praxis. Through my efforts, I not only maintained the integrity \
          of the applications but also implemented enhancements that positively influenced user experience and operational workflows.'
        ], 
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'Software Engineer', 
      logo:'/Bydehand.png',
      company:'Bydehand', 
      tech:['Microsoft Bot Framework', 'Python'],
      starting_date:'September 2017', 
      ending_date:'February 2018', 
      employment:'Internship',
      summary:
        [
          'In my role at BydeHand, a dynamic startup, I served as the key developer responsible for creating a versatile chatbot designed to address basic customer \
          service inquiries. Leveraging Python, I crafted an algorithm that enabled the bot to intelligently decipher keywords within user queries and map them to predefined \
          answers, enhancing the bot\'s conversational capabilities.',
          
          'Notably, the chatbot went beyond typical customer service functionalities; it dynamically assessed and \
          recommended the most suitable health insurance for users based on a series of questions. This personalized approach factored in variables such as income, dental, \
          physio, and mental wellness considerations to provide users with tailored insurance recommendations.',
          
          ' My contribution to this project showcased both technical \
          proficiency in Python programming and a strategic understanding of user-centric functionalities, contributing to BydeHand\'s commitment to innovation in customer \
          service solutions. Sadly the startup no longer exist as of writing.'
        ],
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'IT support', 
      logo:'/Hostnet.png',
      company:'Hostnet', 
      tech:['HTML', 'Javascript', 'webhosting support'],
      starting_date:'June 2014', 
      ending_date:'July 2016', 
      employment:'Part time Job',
      summary:
        [
          'In my role as IT Support at Hostnet, I served as the first line of support, playing a crucial role in assisting customers with a wide range of hosting products. \
          This encompassed guiding customers through the setup of websites, domains, emails, and various hosting products, including virtual private servers. Leveraging my expertise, \
          I provided support through both phone and chat channels, ensuring prompt and effective resolution of customer queries.',
          
          ' Beyond technical assistance, I actively engaged in \
          administrative tasks, including helping customers with invoices. This multifaceted role showcased my proficiency in customer service, technical troubleshooting, and the \
          ability to handle diverse tasks within the hosting environment. My dedication to delivering exceptional support contributed to Hostnet\'s commitment to providing a \
          seamless and customer-centric hosting experience.'
        ], 
      icon: React.createElement(CgWorkAlt)
    },
    {
      position:'IT support', 
      logo:'/Roche.png',
      company:'Roche Diagnostics', 
      tech:['Cisco', 'IT support'], 
      starting_date:'January 2014', 
      ending_date:'June 2014', 
      employment:'Internship',
      summary:
        [
           'In my role as an IT Support Specialist at Roche Diagnostics, I played a pivotal role in providing comprehensive IT assistance to employees, addressing a myriad of \
            general IT inquiries and ensuring smooth day-to-day operations. Additionally, I spearheaded a significant migration project that involved transitioning the company to iPhones. \
            My responsibilities extended to preparing the devices with MobileIron profiles to align with company standards, showcasing my attention to detail and commitment to \
            maintaining high-quality IT infrastructure. ',
            
            ' Beyond my support role, I took charge of implementing wireless connectivity for the Finance department. This intricate task \
            involved configuring Cisco endpoints, strategically placing access points, and meticulously patching them in the server room to optimize network performance. My technical \
            expertise and project management skills were further demonstrated as I presented the iPhone migration project to the company, effectively communicating the benefits and \
            processes involved. An exciting aspect of my time at Roche Diagnostics was the opportunity to represent the company in Spain during the annual football tournament, where \
            our team achieved first place. ',
            
            'This not only highlighted my teamwork and sportsmanship but also showcased the positive and inclusive company culture at Roche Diagnostics. \
            Overall, my multifaceted role underscored my ability to navigate diverse IT challenges, contribute to strategic initiatives, and actively participate in the vibrant company \
            culture.'
        ], 
      icon: React.createElement(CgWorkAlt)
    },
  ];

import goku from "@/public/goku.jpg"
import fgc from "@/public/fgc.png"
import moves from "@/public/moves.png"

// Projects on github and links to demos
export const GITHUB_PROJECTS = [
    {img: goku, href:'https://github.com/edwinoko/crawler', key: 'crawler', label: 'Manga crawler', tech:['Python'], summary: 'The crawler was a quick script where manga pages are downloaded and placed in a PDF. This project was basically to get more aware with different python libraries.'},
    {img: fgc, href:'https://github.com/edwinoko/Universal-Fighting-Game-Platform', key: 'UFGP', label: 'Universal Fighting Game Platform', tech:['Next.js','tailwindcss'], summary:'This is a small passion project where i want to create a platform for fighting game communities. This includes articles, framedata, some ranking system for matches and more'},
    {img: moves, href:'https://github.com/edwinoko/Game-Domain-API', key: 'FGD',  label: 'Fighting Game Domain', tech: ['fastApi'], summary: 'This is the framedata part of the UFGP where i want to be able to create an API where all kinds of information regarding fighting games can be queried'},
];


export const skillSet = [
  "HTML",
  "Ansible",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
