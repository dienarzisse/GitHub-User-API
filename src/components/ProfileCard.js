import locationImg from '../imgs/icon-location.svg'
import websiteImg from '../imgs/icon-website.svg'
import twitterImg from '../imgs/icon-twitter.svg'
import companyImg from '../imgs/icon-company.svg'
import "./css/ProfileCard.css"

function ProfileCard({ userData }){
    // profile variables
    const profileImage = userData.avatar_url;
    const defaultProfileImage = "https://cdn-icons-png.flaticon.com/512/25/25231.png";
    const username = userData.login;
    const name = userData.name;
    const joining = new Date(userData.created_at).toLocaleDateString('en-UK', {year: 'numeric', month: 'short', day: 'numeric'});
    const bio = userData.bio;
    const repos = userData.public_repos;
    const followers = userData.followers;
    const following = userData.following;
    const location = userData.location;
    const website = userData.blog;
    const twitter = userData.twitter_username;
    const company = userData.company;


    return (
        <div className="profile-card"> <img className="profile-img" src={profileImage ? profileImage : defaultProfileImage } alt="github profile"></img>
            <div className="profile-wrapper">
            <div className="profile">
                <div className="profile-info">
                    <h1 className={ name ? "username":"username not-available"}>{ name ? name : "Not Available" }</h1>
                    <a className="github-user" href={`https://github.com/${username}`} target={"_blank"} rel={"noreferrer"}>@{ username }</a>
                    <span className="joining-date">Joined { joining ? joining : "Not Available" }</span>
                </div>
            </div>
            </div>
            
            
            <section className={ bio ? "bio":"bio not-available"}>
               { bio ? bio : "This profile has no bio" }
            </section>

            <div className="stats">
                <div className="data repos">
                    <h4>Repos</h4>
                    <span>{ repos }</span>
                </div>
                <div className="data followers">
                    <h4>Followers</h4>
                    <span>{ followers }</span>
                </div>
                <div className="data following">
                    <h4>Following</h4>
                    <span>{ following }</span>
                </div>
            </div>

            <div className="contact-data">
                <div className={location ? "contact location":"contact location not-available"}>
                    <img src={locationImg} alt="location"></img>
                    <div className="location">{ location ? location : "Not Available" }</div>
                </div>
                <div className={website ? "contact website":"contact website not-available"}>
                    <img src={websiteImg} alt="website"></img>
                    <div className="website">{ website ? website : "Not Available" }</div>
                </div>
                <div className={twitter ? "contact twitter":"contact twitter not-available"}>
                    <img src={twitterImg} alt="twitter"></img>
                    <div className="twitter">{ twitter ? twitter : "Not Available" }</div>
                </div>
                <div className={company ? "contact copmany":"contact copmany not-available"}>
                    <img src={companyImg} alt="copmany"></img>
                    <div className="copmany">{ company ? company : "Not Available" }</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileCard;