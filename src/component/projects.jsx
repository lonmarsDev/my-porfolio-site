import React from "react";
import Vmarine from "../img/Vmarine.png";
import aguaDeLuz from "../img/aguaDeLuz.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Memger ERP</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>TurboBPO</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Distributed Ledger eXchange</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}
				<div id="gallery-card">
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={Vmarine} alt="" />
						</div>
						<div className="modal-info">
							<h2>Memger ERP</h2>
							<div className="modal-description">
								<ul>
									<li>
										ERP Web application in the Philippines - I Lead and architech the golang and frontend.
									</li>
									<li>
										Features: Loans management, TimeKeeping, Payroll, Accounting, Sales and Inventory etc.
									</li>
									<li>
										Designed with Golang, JQuery, Bootstrap, Ubuntu Server, MS Sql Server
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://member.cwcc.ph/"
									target="_blank">
									<h3>View live site</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={aguaDeLuz} alt="" />
						</div>
						<div className="modal-info">
							<h2>TurboBPO</h2>
							<div className="modal-description">
								<ul>
									<li>
										A web Application, for Real Estate broker located in Miami.
									</li>
									<li>
										Features: Client orders, Contractor interface, GeoLocation finder, Auto Compare Property, admin dashboard and more...
									</li>
									<li>
										Developed with Golang, GraphQL, ReactJS, ApolloClient, MongoDB, Ubuntu server, Git, Jira, HTML5, Google API and Paypments Integration.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="http://turbo-live.hozzbydigitalsolutions.com/"
									target="_blank">
									<h3>View live site</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt="" />
						</div>
						<div className="modal-info">
							<h2>DLX - Distributed Ledger eXchange</h2>
							<div className="modal-description">
								<ul>
									<li>
										Integration with  KYC as an identity management system for identifying and screening shareholders both individuals and corporate entities.
									</li>
									<li>
										Immutable and irreversible records of all transactions which are timestamped and auditable.
									</li>
									<li>
										Shareholders can view and manage their portfolio of securities in near real-time.
									</li>
									{/* <li>
										Support for OTC trades between shareholders requiring private key signatures from both participants and admin.
									</li>
									<li>
										Support for share issuance, share cancellation and share splits requiring private key signature from issuer.
									</li>
									<li>
										Allow issuers to distribute shares and currencies for IPO and dividends.
									</li>
									<li>
										Allow complete viewing of shareholding movements which will provide regulators with near real-time visibility of substantial movements.
									</li>
									<li>
										Ready for integration to support withdrawals and deposits by shareholders.
									</li>
									<li>
										Support for multiple currencies represented as transferable asset on the blockchain.
									</li> */}
									<li>
										Support for asset transfers from one shareholder to another.
									</li>
									<li>
										Key STO functionalities.
									</li>
									<li>
										Developed with VueJS, Golang, REST API,
										JIRA, NEM Blockchain, MongoDB, Redis, and Agile.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="./todoList/index.html" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
