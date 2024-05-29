import profileImg from "../assets/images/happy.jpg"


const Profile = () => {
	return (
		<section className="profile--section">
			<img className="profile--img" src={profileImg} />
			<h1>Happy Banda</h1>
			<p>- Software Engineer -</p>
			<small>Mzuzu, Malawi.</small>
			<div className="social--links">
				<a id="email--link" className="social--link" href="mailto:happybanda@dyuni.ac.mw">
					<i className="fa fa-envelope" aria-hidden="true"></i> Email
				</a>
				<a id="linkedin--link" className="social--link" href="https://www.linkedin.com/in/happy-banda-219315283/" target="_blank">
					<i className="fa fa-linkedin"></i>	LinkedIn
				</a>
			</div>
		</section>
	)
}

export default Profile
