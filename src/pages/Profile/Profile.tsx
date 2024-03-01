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
    );
}

export default Profile;