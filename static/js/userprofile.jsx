function UserProfile(props) {

    const {userInfo} = props
    
    return (
        <div className="col-3" >
            user info should show: 
            <h1>{userInfo.user_name}</h1>
            <h6>{userInfo.user_id}</h6>
        </div>
    )
}