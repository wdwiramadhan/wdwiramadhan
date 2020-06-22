import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTwitter, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Socmed = () => {
  const socmeds = [
    {name: 'github', url: 'https://github.com/wdwiramadhan', icon: faGithub},
    {name: 'linkedin', url: 'https://www.linkedin.com/in/wdwiramadhan/', icon: faLinkedin},
    {name: 'twitter', url: 'https://twitter.com/wdwiramadhan', icon: faTwitter},
    {name: 'instagram', url: 'https://www.instagram.com/wahyu2ramadhan/', icon: faInstagram}
  ]
  return(
    <>
    <div className="flex flex-row mt-10 justify-center">
      {socmeds.map(socmed => <a href={socmed.url} className="sm:w-1/12 w-1/6 p-2 text-gray-700 hover:text-blue-500"  target="_blank" key={socmed.name}><FontAwesomeIcon icon={socmed.icon} /></a>)}
    </div>
    </>
  )
}

export default Socmed