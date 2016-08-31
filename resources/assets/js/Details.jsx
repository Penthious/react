import React from 'react';
import Header from './Header';

class Details extends React.Component {
    render() {
        const params = this.props.params || {};
        const { title, description, year, poster, trailer } = params;
        return (
            <div style={{ textAlign: 'left' }} className="container">
                <Header />
                <div className="video-info">
                    <h1 className="video-title">{title}</h1>
                    <h2 className="video-year">({year})</h2>
                    <img src={`./img/posters/${poster}`} alt="" className="video-poster"/>
                    <p className="video-description">{description}</p>
                </div>
                <div className="video-container">
                    <iframe src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0;showinfo=0`}
                            frameborder="0" allowFullScreen>
                    </iframe>
                </div>
            </div>
        );
    }
}

// const Details = ({props}) => (
//     <div style={{ textAlign: 'left' }} className="container">
//         <header className="header">
//             <h1 className="branding">svideo</h1>
//             <div className="video-info">
//                 <h1 className="video-title">{title}</h1>
//             </div>
//         </header>
//     </div>
// );

Details.propTypes = {
    params: React.PropTypes.object.isRequired,
};

export default Details;
