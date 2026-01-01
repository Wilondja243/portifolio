
export default function Loading({active}){
    return (
        <div className={`loader-overlay ${!active ? 'fade-out' : ''}`}>
            <div className="loader-container">
                <div className="outer-border"></div>
                
                <div className="moon"></div>
                
                <div className="pulse"></div>
                <div className="pulse delay"></div>
            </div>
        </div>
    )
}