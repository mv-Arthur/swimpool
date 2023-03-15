import React,{useState} from 'react';

const Slider = ({children}) => {
    const sliderPageCount = children.length
    const [sliderPage,setSliderPage] = useState([0,1,2])
    const [currentButton,setCurrentButton] = useState(null)
    
   
    const getNumbers = () => {
        const nums = []
        for(let i = 0; i < sliderPageCount; i++) {
            nums.push(i)
        }
        return nums;
        
    }

    const onDotClick = (e) => {
        
        const currentIndex = Number(e.target.id)
        if(currentButton) {
            currentButton.classList.remove('active')
        }
        if(currentIndex === 0) {
            setSliderPage([sliderPageCount - 1, currentIndex, currentIndex + 1])
            e.target.classList.add('active')
            setCurrentButton(e.target)
            return
        }
        if (currentIndex === sliderPageCount - 1) {
            setSliderPage([currentIndex - 1, currentIndex, 0])
            e.target.classList.add('active')
            setCurrentButton(e.target)
            return
        }
        setSliderPage([currentIndex - 1,currentIndex,currentIndex+1])
        e.target.classList.add('active')
        setCurrentButton(e.target)
        
        
        return
    }
    
    return (
        <div className='slider'>
            <div className='slider__inner'>
                {sliderPage.map((e,index) => {
                    return <div key={index} className='slider__slide'>{children[e]}</div>
                })}
            </div>
            {getNumbers().map((num) => {
                return <button  key={num} onClick ={onDotClick} id = {num} className={'slider__button'}></button>
            })}
        </div>
    );
};

export default Slider;