function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div id="main-container" className="container">
            <div className="row">
                <div className="col" id="" >
                    <div id="user-profile" className="card">
                        <img src='/static/img/default_img.jpg.png' className="rounded-circle" />
                        <h1>{userInfo.user_name}</h1>
                        <h6>{userInfo.email}</h6>
                        <br/>
                    </div>
                </div>
                <div className="col">
                    <MelonJournal userInfo={userInfo}/>
                </div>
                <div className="col">
                    <MelonMemory userInfo={userInfo}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ShowJournal userInfo={userInfo}/>
                    <ShowMemory userInfo={userInfo}/>
                </div>
            </div>
                 
        
        </div>
    )
}