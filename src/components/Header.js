function Logo(){
    return (        
        <h1>
            <strong>DECODELAB 배포연습</strong><br />
            <span>UI/UX DESIGN&DEVELOPMENT</span>
        </h1> 
    )
}

const Menu =()=>{
    return (
        <a href="#" className="menu">
            <i className="fas fa-bars"></i>
        </a> 
    )    
}

export {Logo, Menu};