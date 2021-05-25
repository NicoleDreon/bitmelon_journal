function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div className="col-3" >
            user info should show: 
            <h1 id="userprofile_header">{userInfo.user_name}</h1>
            <h6>{userInfo.user_id}</h6>
            <MelonJournal userInfo={userInfo}/>
            <ShowJournal userInfo={userInfo}/>
            <MelonMemory userInfo={userInfo}/>
            <ShowMemory userInfo={userInfo}/>
        </div>
    )
}