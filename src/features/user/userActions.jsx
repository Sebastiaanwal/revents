import moment from 'moment'
import {toastr} from 'react-redux-toastr'

export const updateProfile = (user) =>
    async (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        const {isLoaded, isEmpty, ...updatedUser} = user
        if (user.dateOfBirth !== getState().firebase.profile.dateOfBirth){
            user.dateOfBirth = moment(updatedUser.dateOfBirth).toDate();
        }

        try {
            await firebase.updateProfile(updatedUser);
            toastr.success('Succes', 'Profile updated')
        } catch (error) {
            console.log(error)
        }
    }