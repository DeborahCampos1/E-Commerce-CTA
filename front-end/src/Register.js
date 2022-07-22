import { useRef, useState, useEffect } from 'react';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Validate User Name - Must start with lower or uppercase letter.followed 3-23 characters that can be upper/lower case letters digits hyphens or _
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

//Validate User Password - 1 lower 1 upper 1 digit & 1 special character 8-24 characters 
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
    //User imput focus & error reference - allows focus for screen reader - accesibility 
    const userRef = useRef();
    const errRef = useRef();

    // Tied to user input
    const [user, setUser ] = useState('');

    //Validation
    const [validName, setValidName ] = useState(false);

    //Focus on input field
    const [userFocus, setUserFocus] = useState(false);
    //
    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [sucess, setSucess] = useState(false);

    // Sets focus when component loads 
    useEffect(()=>{
        userRef.current.focus();
    }, [])

    //Validation of user name
    useEffect(()=>{
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result)
    }, [user])

    //Pasword validation comparing pwd to matchPwd state
    useEffect(()=>{
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result)
        const match = pwd === matchPwd;
        setValidMatch(match)
    }, [pwd, matchPwd])

    //Clears error message once state is changed in dependency array
    useEffect(()=>{
        setErrMsg('');
    }, [user,pwd,matchPwd])

    return(
        <section id="registration">
            <div className="registration-container">
            <h1>Register</h1>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <form>
                <label htmlFor="username" className="register-label">
                    <strong>UserName: </strong>
                    {validName ? <span className="register-icons"><FontAwesomeIcon icon={faCheck} /></span> : ""}
                    {!validName && userFocus ? <span className="register-icons"><FontAwesomeIcon icon={faTimes} />
                    </span>  : ""}
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
                {/* Offscreen vs display none for screen reader */}
                <div id="uidnote" >
                    <div>{userFocus && !validName ? <p><span className="register-icons"><FontAwesomeIcon icon={faInfoCircle} /></span>
                        4 to 24 characters. <br />
                        Must begin with a letter. <br />
                        Letters, numbers, underscores, and hyphens allowed.</p> : ""}
                    </div>
                </div>

                <label htmlFor="password" className="register-label">
                    Password: 
                    {validPwd ? <span className="register-icons"><FontAwesomeIcon icon={faCheck} /></span> : ""}
                    {!validPwd && pwdFocus ? <span className="register-icons"><FontAwesomeIcon icon={faTimes} />
                    </span>  : ""}
                </label>
                <input
                    type="password"
                    id="password"
                    onChange={(e)=> setPwd(e.target.value)}
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={()=> setPwdFocus(true)}
                    onBlur={()=> setPwdFocus(false)}
                />
                <div id="pwdnote">
                   <div> {pwdFocus && !validPwd ? <p><span className="register-icons"><FontAwesomeIcon icon={faInfoCircle} /> </span>
                        8 to 24 characters. <br />
                        Must include uppercase and lowercase letters, a number and a special character. <br />
                        Allowed special characters: <span aria-label="at symbol"> @ </span> <span aria-label="exclamation-mark">! </span><span aria-label="dollar-sign">$ </span><span aria-label="hashtag">#</span> <span aria-label="percent">%</span></p> : ""} 
                   </div>
                </div>

                <label htmlFor="confirm_pwd" className="register-label">
                    Confirm Password: 
                    {validPwd && validMatch ? <span className="register-icons"><FontAwesomeIcon icon={faCheck} /></span> : ""}
                    {matchFocus && !validMatch ? <span className="register-icons"><FontAwesomeIcon icon={faTimes} />
                    </span>  : ""}
                </label>
                <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e)=> setMatchPwd(e.target.value)}
                    required
                    aria-invalid={validMatch ? "false" : "true"}
                    aria-describedby="confirmnote"
                    onFocus={()=> setMatchFocus(true)}
                    onBlur={()=> setMatchFocus(false)}
                />
                <div id="confirmnote">
                   <div> {matchFocus && !validMatch ? <p><span className="register-icons"><FontAwesomeIcon icon={faInfoCircle} /> </span>
                        Must match the first password input field</p> : ""} 
                   </div>
                </div>
                <div className="button-container" >
                    <button className="registration-button" disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                </div>
            </form>
            </div>
        </section>
    )
}
export default Register;