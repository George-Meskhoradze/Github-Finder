import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

function GithubFinder() {

    const [username, setUserName] = useState<string>("")
    const [profileimg, setProfileImg] = useState<string>("");
    const [name, setName] = useState<string>("");


    const ClickHandler = (e: any) => {
        setUserName(e.target.value)
    }

    const Submit = async (e: any) => {
        e.preventDefault();

        const Profile = await fetch(`https://api.github.com/users/${username}`)
        const ProfileJson = await Profile.json()
        console.log(ProfileJson)
        
        const ProfPic = ProfileJson.avatar_url;
        const Name = ProfileJson.name;


        setProfileImg(ProfPic)
        setName(Name)
    }


return (
<>
  <GlobalStyles />

  <Gcontainer>

    <InpContainer>

        <Inp type="text" placeholder="Enter Profile" value={username} onChange={ClickHandler}/>

        <InpBtn typeof="submit" onClick={Submit}>
            <Btext>
                Search
            </Btext>
        </InpBtn>

    </InpContainer>

    <ProfilePic src={profileimg} alt="" />

    <Name>
        {name}
    </Name>
  </Gcontainer>
</>
)
}


export default GithubFinder;





const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@200;300;400;600;700;900&display=swap');

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Serif Pro', serif;
  }
  
  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background-image: linear-gradient(100deg, #42275a, #734b6d);
  }
`

const Gcontainer = styled.div`
    
    width: 500px;
    height: 700px;
    background: #1b1b1b;
    border-radius: 5px;
    transform: translateY(100px);
    margin: auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 10px 0px;
`

const InpContainer = styled.div`
    
    width: 400px;
    height: 35px;
    border-radius: 2px;
    display: flex;
    align-items: center;
`

const Inp = styled.input`
    
    width: 320px;
    height: 35px;
    border-radius: 2px 0px 0px 2px;
    background: white;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    font-size: 18px;
    padding: 0px 10px;
`

const Btext = styled.div`
    
    font-size: 16px;
    color: white;
`

const InpBtn = styled.div`
    
    width: 80px;
    height: 35px;
    border-radius: 0px 2px 2px 0px;
    background: #1d1dff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        background: #0000a7;
    }
`

const ProfilePic = styled.img`
    
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

const Name = styled.h1`
    
    width: 220px;
    font-size: 22px;
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
`