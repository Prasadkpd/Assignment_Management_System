import React, {useEffect, useState} from 'react';
import jwt_decode from 'jwt-decode';

const Profile = () => {

    const initialState = {
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    }

    useEffect(()=>{
       const token = localStorage.usertoken
        const decoded = jwt_decode(token);
       setProfileState({
           first_name: decoded.first_name,
           last_name: decoded.last_name,
           email: decoded.email
       })
    },[]);

    const [profileState, setProfileState] = useState(initialState);
    return (
        <div className='container'>
            <div className='jumbotron mt-5'>
                <div className='col-sm8 mx-auto'>
                    <h1 className="text-center">Profile</h1>
                </div>
                <table className="table col-md-6 mx-auto">
                    <h2>
                       <tbody>
                       <tr>
                           <td>First Name</td>
                           <td>{profileState.first_name}</td>
                       </tr>
                       <tr>
                           <td>Last Name</td>
                           <td>{profileState.last_name}</td>
                       </tr>
                       <tr>
                           <td>Email</td>
                           <td>{profileState.email}</td>
                       </tr>
                       </tbody>
                    </h2>
                </table>
            </div>
        </div>
    );
};

export default Profile;