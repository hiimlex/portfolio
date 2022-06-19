import { formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import useKeyPress from "../../utils/useKeyPress";
import {
	Article,
	ArticleContent,
	ArticleTitle,
	Body,
	Content,
	Header,
	HeaderSubtitle,
	HeaderTitle,
	Main,
	PersonalInfo,
	Post,
	PostPeriod,
	PostTitle,
	ProfissionalInfo,
} from "./styles";

const CV = () => {
	const [display, setDisplay] = useState("block");

	const ctrl: boolean = useKeyPress("Control");
	const p: boolean = useKeyPress("p");
	const birthday: Date = new Date("08-03-1999");

	useEffect(() => {
		if (ctrl) {
			if (p) {
				handlePrint();
			}
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ctrl, p]);

	const handlePrint = () => {
		setDisplay("none");

		setTimeout(() => {
			window.scrollTo(0, 0);

			window.print();
		}, 200);
	};

	return (
		<Content>
			<Body>
				<div
					style={{
						textAlign: "center",
						marginBottom: 8,
						fontSize: "0.8rem",
						display: display,
					}}
				>
					<span>
						To take a good print of it, go to the top and press{" "}
						<code
							style={{
								background: "#afafaf",
								padding: "4px 8px",
							}}
						>
							ctrl + p
						</code>{" "}
						or just click here:{" "}
					</span>
					<button onClick={handlePrint}>Download</button>
				</div>
				<hr style={{ marginBottom: "8px", display: display }} />
				<Header>
					<HeaderTitle>Adaumi Alex Rodrigues Alves</HeaderTitle>
					<HeaderSubtitle>alex.adaumi@gmail.com</HeaderSubtitle>
				</Header>
				<Main>
					<ProfissionalInfo>
						<Article>
							<ArticleTitle>WHO AM I?</ArticleTitle>

							<ArticleContent>
								Enthusiast interested in web development. I love
								music and coffee, ant that's it. High stack:
								JavaScript, NodeJs, TypeScript, Angular6+,
								React, Svelte, Vue, SASS.
							</ArticleContent>
						</Article>

						<Article>
							<ArticleTitle>EXPERIENCE AND JOBS</ArticleTitle>
							<Post>
								<PostTitle>
									<b>TRIBUNAL REGIONAL ELEITORAL DO CEARÁ</b>,
									Farias Brito, CE, BR. — <i>Trainee</i>
								</PostTitle>
								<PostPeriod>
									DECEMBER 2015 - MAY 2016
								</PostPeriod>
								<ArticleContent>
									"According to the evaluation of the
									coordinating server, which I fully
									corroborate, the above employee Maintains an
									irreparable professional conduct, standing
									out in the ability to learn and the great
									ease of working in a team, very assiduous
									and committed to fulfilling the duties to
									which he is assigned, being great value your
									collaboration with this Specialized Justice
									and the local community. ”
								</ArticleContent>
							</Post>

							<Post>
								<PostTitle>
									<b>Laboratory of Information System</b>,
									Crato, CE, BR. —{" "}
									<i>Researcher and Volunteer</i>
								</PostTitle>
								<PostPeriod>JANUARY 2018 — 2022</PostPeriod>
								<ArticleContent>
									Student of the scientific research
									environment and front end developer and UX /
									UI Designer. In addition to developing and
									writing projects with teachers, I deploy
									solutions based on the demand for ICTs,
									within the technological environment of the
									region.
								</ArticleContent>
							</Post>

							<Post>
								<PostTitle>
									<b>Agro+ (project)</b>, Crato, CE, BR. —
									<i>Co-Founder, FrontEnd e UX/UI Designer</i>
								</PostTitle>
								<PostPeriod>SEPTEMBER 2018 — 2020</PostPeriod>
								<ArticleContent>
									This project aims to develop a web
									advertising system to facilitate the
									negotiation of family farming products,
									assisting the producer and generating
									visibility for this niche. As CTO of the
									startup I was involved from requirements
									analysis with customers, to the development
									and prototyping of the platform
								</ArticleContent>
							</Post>

							<Post>
								<PostTitle>
									<b>Brisanet Telecomunicações</b>, Juazeiro
									do Norte, Ceará, BR. —{" "}
									<i>Frontend Developer and UI Designer </i>
								</PostTitle>
								<PostPeriod>
									NOVEMBER 2020 — JANUARY 2022
								</PostPeriod>
								<ArticleContent>
									As an internal developer, the team I'm
									assigned to is focused on internal software.
									To improve and help other sectors of the
									company.
								</ArticleContent>
							</Post>

							<Post>
								<PostTitle>
									<b>Venturus</b>, Campinas, São Paulo, BR. —
									<i>Frontend Developer</i>
								</PostTitle>
								<PostPeriod>
									FEBRUARY 2022 — UNTIL NOW
								</PostPeriod>
								<ArticleContent>
									Frontend developer focused on architecture,
									UI, and UX;
								</ArticleContent>
							</Post>
						</Article>
						<Article>
							<ArticleTitle>ACADEMIC'S</ArticleTitle>

							<Post>
								<PostTitle>
									<b>
										INSTITUTO FEDERAL DE EDUC.CIÊNCIA E
										TECNOLOGIA
									</b>
									, Campus Crato. — <i>College</i>
								</PostTitle>
								<PostPeriod>MARCH 2016 - UNTIL NOW</PostPeriod>
								<ArticleContent>
									Bachelor in Information Systems, attending
									the ninth semester.
								</ArticleContent>
							</Post>

							<Post>
								<PostTitle>
									<b>GABRIEL BEZERRA DE MORAIS</b>
									,Farias Brito. — <i>Secondary School</i>
								</PostTitle>
								<PostPeriod>2013 - 2015</PostPeriod>
							</Post>
						</Article>
					</ProfissionalInfo>
					<PersonalInfo>
						<Article>
							<ArticleTitle>Personal</ArticleTitle>
							<ArticleContent>
								<b>Age:</b>{" "}
								{formatDistance(new Date(), birthday)}
								(03/08/1999)
							</ArticleContent>
							<ArticleContent>
								<b>Address:</b> Rua Senador Pompeu, 309. Apt.:
								2. Crato - CE - BR.
							</ArticleContent>
						</Article>

						<Article>
							<ArticleTitle>Languages</ArticleTitle>
							<ArticleContent style={{ textAlign: "left" }}>
								<b>Portuguese</b> (native), <b>English</b>{" "}
								(working proficiency)
							</ArticleContent>
						</Article>

						<Article>
							<Article>
								<ArticleTitle>SEE ME/MY</ArticleTitle>
								<ArticleContent>
									<b>PORTFOLIO: </b>
									<a href="https://hiimlex.github.io/portfolio">
										Creative Portfolio
									</a>
								</ArticleContent>
								<ArticleContent>
									<b>Github: </b>
									<a href="https://github.com/hiimlex">
										Code Portfolio
									</a>
								</ArticleContent>
								<ArticleContent>
									<b>Social's: </b>
									<a href="https://linktr.ee/yuninho/">
										Code Portfolio
									</a>
								</ArticleContent>
							</Article>

							<Article>
								<ArticleTitle>Events</ArticleTitle>

								<Post>
									<PostTitle>
										Teacher in SEMATEC(2019) “How to really
										focus on developing web mobile first?”
									</PostTitle>
								</Post>

								<Post>
									<PostTitle>
										Participation in HACKATHON NASA SPACE
										APPS - FORTALEZA, CE (2019).
									</PostTitle>
								</Post>

								<Post>
									<PostTitle>
										Participation in CAMPUS MOBILE - SÃO
										PAULO, SP(2020)
									</PostTitle>
								</Post>
							</Article>
						</Article>
					</PersonalInfo>
				</Main>
			</Body>
		</Content>
	);
};

export default CV;
