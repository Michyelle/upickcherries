export default function NotificationBar() {
    return (
        <>
        <div className="notification-bar">
            <img src="src/assets/react.svg" className="img-announcement" alt="sd" />

            <div className="left-announcement">
                <p>Villa Del Sol</p>
                <p>Sweet Cherry Farms</p>
                <p>2025</p>
            </div>

            <div className="right-announcement">
                <p>Open for Cherry Picking Now!</p>
                <p>Monday - Friday: 8am to 3pm</p>
                <p>Saturday & Sunday: 7am to 2pm</p>
            </div>
            
            <img src="src/assets/react.svg" className="img-announcement" alt="sd" />
        </div>
        </>
    )
}