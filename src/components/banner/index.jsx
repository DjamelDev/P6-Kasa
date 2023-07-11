import bannerHome from '../../assets/images/slide-home.png';
import bannerAbout from '../../assets/images/slide-about.png';
import './style.scss';

function Banner(props) {
    if (props.page === 'home') {
        return (
            <section className='banner'>
                <div className='banner-frame-header'>
                    <img src={bannerHome} className='banner-img-header' alt='Côtes mer' title='Chez vous, partout et ailleurs' />
                </div>
                <div className='banner-frame-header'>
                    <p className='banner-title'>Chez vous, partout et ailleurs</p>
                </div>
            </section>
        )
    } else if (props.page === 'about') {
        return (
            <section className='banner-about'>
                <div className='banner-frame-about'>
                    <img src={bannerAbout} className='banner-img-about' alt='Bannière page about' title='Montagnes' />
                </div>
            </section>
        ) 
    };
};

export default Banner