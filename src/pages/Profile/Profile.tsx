import "../Profile/Profile.css"

type Props = {}

const Profile = (props: Props) => {
  return (
    <div>
        <div className="container-xl px-4 mt-4">
    {/* <hr className="mt-0 mb-4"/> */}
    <div className="row">
      <div className="col-xl-4">

        <div className="card mb-4 mb-xl-0">
          <div className="card-header">Profile Picture</div>
          <div className="card-body text-center">

            <img className="img-account-profile rounded-circle mb-2" id="profile-image" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"/>

            <div className="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>

            {/* <form id="image-upload-form">
              <input type="file" id="image-upload"/>
              <label className="btn btn-dark">Upload new image</label>
            </form> */}
          </div>
        </div>
      </div>
      <div className="col-xl-8">
        <div className="card mb-4">
          <div className="card-header">Account Details</div>
          <div className="card-body">
            <form action="your_action_url_here" method="POST">
              <div className="mb-3">
                <label className="small mb-1">Username</label>
                <input className="form-control" id="inputUsername" name="username" type="text" placeholder=""/>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1">First name</label>
                  <input className="form-control" id="inputFirstName" name="first_name" type="text" placeholder="Enter your first name"/>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Last name</label>
                  <input className="form-control" id="inputLastName" name="last_name" type="text" placeholder="Enter your last name"/>
                </div>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1">Organization name</label>
                  <input className="form-control" id="inputOrgName" name="organization_name" type="text" placeholder="Enter your organization name"/>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Location</label>
                  <input className="form-control" id="inputLocation" name="location" type="text" placeholder="Enter your location"/>
                </div>
              </div>
              <div className="mb-3">
                <label className="small mb-1">Email address</label>
                <input className="form-control" id="inputEmailAddress" name="email" type="email"/>
              </div>
              <div className="row gx-3 mb-3">
                <div className="col-md-6">
                  <label className="small mb-1">Phone number</label>
                  <input className="form-control" id="inputPhone" name="phone" type="tel" placeholder="Enter your phone number"/>
                </div>
                <div className="col-md-6">
                  <label className="small mb-1">Birthday</label>
                  <input className="form-control" id="inputBirthday" name="birthday" type="text" placeholder="Enter your birthday"/>
                </div>
              </div>
              <button className="btn btn-dark" type="submit">Save changes</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Profile;