import { React, useState } from 'react'
import './list.scss'
export const List = ({ title, items }) => {


  const [isClicked, setIsClicked] = useState(false)

	const rotateStyle = {
		transform: isClicked ? "rotate(-180deg)" : "",
		transition: "transform 0.4s ease"
	}
	const showContent = () => {
		setIsClicked(prevState => !prevState)
		console.log(isClicked)
	}

    return (
        <div className='listBody'>
            <div className='title'><h4>{title}</h4><button onClick={showContent} style={rotateStyle}><img className='arrow' src='/img/arrow.png' alt='arrow' /></button></div>
          
          {isClicked ?  <div className='list'>{
                items.map(element =>
                    <div key={element.id}><img src={element.url} alt={element.title} />
                        <p>{element.title}</p>
                    </div>
                )
            }</div> : <></> }
        </div>
    )
}
