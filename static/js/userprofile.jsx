function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div>
        <div class="card">
        <div class="row">
        <div className="col-4"  >
            <img src='/static/img/default_img.jpg.png' class="rounded-circle" />
        </div>
        <div class="col-6">
            <h1>{userInfo.user_name}</h1>
            <h6>{userInfo.email}</h6>
        </div>
        </div>
        </div>
            <MelonJournal userInfo={userInfo}/>
            <ShowJournal userInfo={userInfo}/>
            <MelonMemory userInfo={userInfo}/>
            <ShowMemory userInfo={userInfo}/>
        
        </div>
    )
}