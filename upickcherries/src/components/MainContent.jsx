export default function MainContent() {
    return (
        <main className="home-main-container">
            <div>
                <img src="src/assets/react.svg" className="home-main-img" alt="sd" />
            </div>
            
            <div className="main-body">
                <div className="main-sidebar">
                    <h2>📅 Hours of Operation</h2>
                    <p>Monday - Friday: 8am - 3pm <br />
                    Saturday - Sunday: 7am - 2pm</p>

                    <h2>📞 Cherry Hotline for Updates</h2>
                    <p><b>Call (661) 270-1356</b></p>
                    <p>Gary updates the hotline daily at sundown with next-day cherry picking conditions during 
                        cherry picking season.</p>

                    <h2>⚠️ Important Notices</h2>
                    <ul>
                        <li><b>No Dogs or Buses:</b> For safety and insurance reasons, dogs (no exceptions) and 
                        buses are not allowed. Please do not bring pets or arrive by bus - both will be turned away.</li>
                    </ul>

                    <h2>📍 Location & Directions</h2>
                    <p>Villa del Sol is located at the crossroads of <b>Elizabeth Lake Road and Godde Hill Road</b> 
                        in Leona Valley, California. </p>

                    <p>We sit on 25 acres with over 3,000 cherry trees featuring several varieties including <b>Bing, 
                        Rainier, Brooks, and Tulare</b> - so you're sure to find your favorite!</p>

                    <p>For directions, click here (Note: GPS often routes people over Bouquet Canyon Road, which is 
                        very curvy.)
                    </p>

                </div>

                <div className="main-content">
                    <h1>Welcome to Villa del Sol! U-Pick Cherries in Leona Valley</h1>
                    <img src="src/assets/react.svg" className="home-main-img" alt="sd" />
                    <img src="src/assets/react.svg" className="home-main-img" alt="sd" />
                    <img src="src/assets/react.svg" className="home-main-img" alt="sd" />

                    <p><b>It will be a short season for cherry picking this year so come now! We have lots 
                        of cherries now. Weekdays are a great time to pick.</b></p>
                    <p><b>Remember please:</b></p>
                    <ul>
                        <li>No entrance/parking fee = no eating while picking.</li>
                        <li>Pick, <b>pay</b>, then eat.</li>
                        <li>Pay per pound of what you pick.</li>
                        <li>Buckets and bags provided.</li>
                        <li>Credit/debit cards accepted.</li>
                    </ul>

                    <figure>
                        <img src="src/assets/picksheet.jpg" className="home-main-img" alt="sd" />
                        <figcaption><a href=""><small>Fact Sheet (Click to Open)</small></a></figcaption>
                    </figure>

                    <p>Villa del Sol is family owned. Gary works the farm every day to sell his 
                        cherries once a year when they are ripe for picking. Despite the inflationary 
                        cost increases Villa del Sol has had to absorb these last couple of years 
                        (much higher costs for water, materials, equipment, fertilizer, etc.), Gary and 
                        Maxi have again decided <b>NOT</b> to increase the price of our cherries this year.</p>
                    
                    <p>But remember, we are in the business of selling cherries. We have UPICK only. We do 
                        not sell commercially at all. We do <b>NOT</b> allow eating the cherries while picking in 
                        the orchard. We also have a <b>$10.00 per person minimum purchase requirement</b>. Whatever 
                        you pick you purchase. We sell our cherries for a couple of weeks to about a month 
                        per year, so Pick, Pay then Eat!</p>

                    <p>Thank you for all of your support.</p> 

                    <p><b>- Gary and Maxi Villa del Sol Sweet Cherry Farms</b></p>

                    <h2>✉️ Email Alerts</h2>
                    
                    <p><b>Cherry Alerts:</b> Sign up for seasonal updates! Check your inbox and confirm the opt-in 
                        email from Benchmark to start receiving alerts. <br />
                        <small className="alert-notice">* You <b>HAVE TO</b> respond to the email to be subscribed</small>
                    </p>
                    
                    <form className="subscribe-newsletter">
                        <input type="text" name="subscribe-email" placeholder="Email Address *"/>
                        <button className="subscribe-button">SUBSCRIBE</button>
                    </form>

                    <p><small>If you have not been getting your cherry updates in your email inbox, please check your spam folder!</small></p>
                </div>
            </div>
        </main>
    );
}