function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div>
        <div className="col-3" >
            <img src='/static/img/default_img.jpg.png' class="rounded-circle" />
            <h1>{userInfo.user_name}</h1>
            <h6>{userInfo.email}</h6>
        </div>
            <MelonJournal userInfo={userInfo}/>
            <ShowJournal userInfo={userInfo}/>
            <MelonMemory userInfo={userInfo}/>
            <ShowMemory userInfo={userInfo}/>
        
        </div>
    )
}