import Level1 from '../../assets/Images/1g.jpg';
import Level2 from '../../assets/Images/2g.jpg';
import Level3 from '../../assets/Images/3g.jpg';
import Level4 from '../../assets/Images/4g.jpg';
import Level5 from '../../assets/Images/5g.jpg';
import Level6 from '../../assets/Images/6g.jpg';
import Level7 from '../../assets/Images/7g.jpg';
import Level8 from '../../assets/Images/8g.jpg';

function HangMan({ step }) {
    const images = [Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8];
    return (
        <div className='w-[500px] h-[500px]'>
            <img src={step >= images.length ? images[images.length-1] : images[step]} />
        </div>
    )
}

export default HangMan;