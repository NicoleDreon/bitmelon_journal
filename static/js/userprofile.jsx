function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div>
        <div className="col-3" >
            user info should show: 

            <img src='/static/img/default_img.jpg.png' class="rounded-circle" />
            <h1>{userInfo.user_name}</h1>
            <h6>{userInfo.user_id}</h6>
        </div>
            <MelonJournal userInfo={userInfo}/>
            <ShowJournal userInfo={userInfo}/>
            <MelonMemory userInfo={userInfo}/>
            <ShowMemory userInfo={userInfo}/>
        
        </div>
    )
}