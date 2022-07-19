import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Validate User Name - Muat start with lower or uppercase letter.followed 3-23 characters that can be upper/lower case letters digits hyphens or _
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

//Validate User Password - 1 lower 1 upper 1 digit & 1 special character 8-24 characters 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser ] = useState('');
    const [validName, setValidName ] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);


    useEffect(()=>{
        userRef.current.focus();
    }, [])

    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result)
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    useEffect(()=>{
        setErrMsg('');
    }, [user,pwd,matchPwd])

    return(
        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Register</h1>
            <form>
                <label htmlFnpor="username">
                    UserName: 
                </label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e)=> setUser(e.target.value)}
                    required
                    aria-invalid={ validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={()=> setUserFocus(true)}
                    onBlur={()=> setUserFocus(false)}
                />
            </form>
        </section>
    )
}
export default Register;