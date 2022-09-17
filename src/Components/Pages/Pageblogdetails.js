import Header from '../Header';
import Blogdetailsheader from '..//Blogdetails/Blogdetailsheader';
import Sectionblogdetailinfo from '../Blogdetails/Sectionblogdetailinfo'
import Sectiontag from '../Section_tag';
import Commentaire from '../Commentaire';

const blogdetails = () => {
    return (
        <div className='blogdetails'>
        <Header />
            <Blogdetailsheader />
            <Sectionblogdetailinfo />
            <Sectiontag/>
            <Commentaire />
        </div>
    )
}
export default blogdetails;