import {
    LOG_IN_USER,
    REGISTER_USER,
    RESET_PASS,
    IS_LOADING
} from "../../ActionTypes/Client/userActionTypes";

export default registerUser = (userData, history) => dispatch => {
    try {
        dispatch({
            type: IS_LOADING
        })
        const { data } = await Axios.post(`${state.base}/Register/user`, userData)
        if(data){
            dispatch({
                type : REGISTER_USER,
                
            })
        }
    } catch (error) {

    }
}


// async function login() {
//     try {
//         setLoading(true)
//         const { data } = await Axios.post(`${state.base}/Login/user`, { email: state.imail, password: state.ipass })
//         setLoading(false)
//         console.log(data)
//     } catch (err) {
//         setLoading(false)
//         console.log(err.message)
//     }
// }

// async function resetPass() {
//     try {
//         setLoading(true)
//         const { data } = await Axios.post(`${state.base}/Register/resetpass/i?type=email&email=${state.imail}`)
//         setLoading(false)
//         console.log(data)
//     } catch (err) {
//         setLoading(false)
//         console.log(err.message)
//     }

// }

// async function register() {
//     try {
//         setLoading(true)
//         const { data } = await Axios.post(`${state.base}/Register/user`, {
//             email: state.imail,
//             firstname: state.iname.split(' ')[0],
//             lastname: state.iname.split(' ')[1] !== undefined ? state.iname.split(' ')[1] : null,
//             password: state.ipass
//         })
//         setLoading(false)
//         console.log(data)
//     } catch (err) {
//         setLoading(false)
//         console.log(err.message)
//     }
// }