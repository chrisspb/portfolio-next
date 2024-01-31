// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>	
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="About Me"
					subTitle="Well-rounded profile of a developer with a strong educational background, diverse skill set, and good experience in both development and teaching."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<Image src="/img/profile-transformed.png" alt="Christian Pagh-Birk introduction" layout='fill'/>
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock 
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon={[ 'fat', 'ear-listen' ]}
							copy="In addition to my extensive expertise in web and hybrid mobile application development, I have honed strong leadership, time management, and multitasking skills, especially through my roles as a developer and educator. I am confident in my ability to infuse passion and bring significant value to every project I undertake."
						/>
						<BadgesBlock 
							title="Continuous Learning and Project Development in Coworking Spaces" 
							containerClass={about.container}
							fullContainer="fullContainer"
							block="methods" 
							icon="fingerprint"
							copy="One of my favorite aspects of creation is architecting a project, a skill I'm further refining at a coworking space where I'm learning new techniques and working on a proof of concept. I'm deeply engaged in exploring Design Systems and Brand Strategy, enjoying the dynamic interaction with various touchpoints of user experience. This environment offers a unique opportunity to blend learning and practical application, enhancing my approach to creating user-centered designs."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>	
			</Container>
		</Section>
	)
}