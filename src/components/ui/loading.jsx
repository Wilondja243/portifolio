
export default function Loading(){
    return (
        <div className="loader-overlay">
            <div className="loader-container">
                <div className="outer-border"></div>
                
                <div className="moon"></div>
                
                <div className="pulse"></div>
                <div className="pulse delay"></div>
            </div>
        </div>
    )
}