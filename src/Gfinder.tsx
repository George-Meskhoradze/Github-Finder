import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";

function GithubFinder() {

    const [username, setUserName] = useState<string>("")
    const [profileimg, setProfileImg] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pLink, setPLink] = useState<string>("");
    const [rep, setRep] = useState<string>("");
    const [Follow, setFollower] = useState<string>("");
    const [Followings, setFollowing] = useState<string>("");
    const [turn, setTurn] = useState<boolean>(false);
    const [appear, setAppear] = useState<boolean>(false)

    const ClickHandler = (e: any) => {
        setUserName(e.target.value)
    }
    

    const Submit = async (e: any) => {
        e.preventDefault();

        const Profile = await fetch(`https://api.github.com/users/${username}`)
        const ProfileJson = await Profile.json()
        
        const ProfPic = ProfileJson.avatar_url;
        const Name = ProfileJson.name;
        const ProfLink = ProfileJson.html_url;
        const Rep = ProfileJson.public_repos;
        const Foler = ProfileJson.followers;
        const Foling = ProfileJson.following;

        console.log(Profile)

        setProfileImg(ProfPic)
        setName(Name)
        setPLink(ProfLink)
        setRep(Rep)
        setFollower(Foler)
        setFollowing(Foling)

        if (Profile.ok) {

            setTurn(true)
            setAppear(false)
        } else {
            setTurn(false);
            setAppear(true)
        } 
        
    }

    const LInkOpener = () => {
    
        window.open(pLink, "_blank")
    }



return (
<>
  <GlobalStyles />

  <Gcontainer>

    <InpContainer>
        
        <Inp  className="Input"   type="text" placeholder="Enter Profile" value={username} onChange={ClickHandler}/>

        <InpBtn typeof="submit" onClick={Submit}>
            <Btext>
                Search
            </Btext>
        </InpBtn>

    </InpContainer>

    {turn 

    ? 

    <Detail>

        <ProfilePic src={profileimg}  />

        <Name>
            {name}
        </Name>

        <Cont onClick={LInkOpener}>
            <Link>User Github</Link>
        </Cont>

        <RepName>
            Public Responsitories
        </RepName>

        <Repo>
            {rep}
        </Repo>

        <FollList>

            <ContainerOne>

                <Follower>
                    Followers
                </Follower>

                <ChapOne>
                    <NumFollower>{Follow}</NumFollower>
                </ChapOne>

            </ContainerOne>

            <ContainerSec>

                <Following>
                    Following
                </Following>

                <ChapTwo>
                    <NumFollowing>{Followings}</NumFollowing>
                </ChapTwo>

            </ContainerSec>
            
        </FollList>

    </Detail>

    :

    null
    
    }


    {appear
    
    ?
    
    <Error>Profile Not Found</Error>

    :

    null
    }


  </Gcontainer>
</>
)
}


export default GithubFinder;





const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap');

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
    font-family: 'Roboto Mono', monospace;
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
    padding: 20px 0px;

    @media (max-width:1000px) {

        width: 400px;
        height: 600px;
        gap: 25px;
    }

    @media (max-width:490px) {

    width: 320px;
    height: 500px;
    gap: 20px;
    }
`

const InpContainer = styled.div`
    
    width: 400px;
    height: 35px;
    border-radius: 2px;
    display: flex;
    align-items: center;

    @media (max-width:1000px) {

    width: 300px;
    }

    @media (max-width:490px) {

    width: 260px;
    }
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


    @media (max-width:1000px) {

    width: 250px;
    font-size: 15px;
    }

    @media (max-width:490px) {

    width: 220px;
    font-size: 11px;
    }
`

const Btext = styled.div`
    
    font-size: 16px;
    color: white;

    @media (max-width:1000px) {

    font-size: 13px;
    }

    @media (max-width:490px) {

    font-size: 9px;
    letter-spacing: 0.5px;
    }
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

    @media (max-width:1000px) {

    width: 50px;
    }

    @media (max-width:490px) {
    
    width: 40px;
    }
`

const ProfilePic = styled.img`
    
    width: 120px;
    height: 120px;
    border-radius: 50%;

    @media (max-width:1000px) {

    width: 100px;
    height: 100px;
    }

    @media (max-width:490px) {

    width: 80px;
    height: 80px;
    }
`

const Name = styled.h1`
    
    width: 250px;
    font-size: 22px;
    font-weight: 500;
    color: white;
    letter-spacing: 1px;
    text-align: center;

    @media (max-width:1000px) {

    width: 220px;
    font-size: 18px;
    } 

    @media (max-width:490px) {
    
    width: 200px;
    font-size: 15px;
    }
`

const Error = styled.h1`
    
    font-size: 38px;
    letter-spacing: 1px;
    font-weight: 600;
    margin-top: 20px;
    color: red;

    @media (max-width:1000px) {

    font-size: 32px;
    }

    @media (max-width:490px) {

    font-size: 28px;
    }
`

const Detail = styled.div`
    
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    @media (max-width:1000px) {

    height: 500px;
    gap: 10px;
    }

    @media (max-width:490px) {
    
    height: 500px;
    }
`

const Link = styled.h1`
    
    font-size: 18px;
    letter-spacing: 2px;
    color: white;
    user-select: none;
    transition: all 0.2s ease-in;

    @media (max-width:1000px) {

    font-size: 16px;
    }

    @media (max-width:490px) {
    
    font-size: 14px;
    }
`

const Cont = styled.div`
    
    width: 60%;
    height: 35px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
        background: white;

        ${Link} {
            color: black;
        }
    }

`

const RepName = styled.h1`
    
    font-size: 20px;
    color: white;
    letter-spacing: 1px;
    margin-top: 30px;

    @media (max-width:1000px) {

    font-size: 18px;
    }

    @media (max-width:490px) {

    font-size: 16px;
    }
`

const Repo = styled.div`
    
    width: 40%;
    height: 50px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    letter-spacing: 2px;
    color: white;

    @media (max-width:1000px) {

    height: 40px;
    font-size: 24px;
    }

    @media (max-width:490px) {

    height: 35px;
    font-size: 20px;
    }
`

const FollList = styled.div`

    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;

    @media (max-width:1000px) {

    height: 80px;
    margin-top: 40px;
    }

    @media (max-width:490px) {

    height: 60px;
    margin-top: 30px;
    }
`

const ChapOne = styled.div`
    
    width: 150px;
    height: 60px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:1000px) {

    width: 120px;
    height: 50px;
    }

    @media (max-width:490px) {

    width: 100px;
    height: 40px;
    }
`

const ChapTwo = styled.div`
    
    width: 150px;
    height: 60px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width:1000px) {

    width: 120px;
    height: 50px;
    }

    @media (max-width:490px) {

    width: 100px;
    height: 40px;
    }
`

const Follower = styled.h1`

    width: 150px;
    height: 40px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;

    @media (max-width:1000px) {

    width: 120px;
    height: 30px;
    font-size: 18px;
    }

    @media (max-width:490px) {

    width: 100px;
    height: 30px;
    font-size: 16px;
    }
`

const Following = styled.h1`
    width: 150px;
    height: 40px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;
    @media (max-width:1000px) {

    width: 120px;
    height: 30px;
    font-size: 18px;
    }

    @media (max-width:490px) {

    width: 100px;
    height: 30px;
    font-size: 16px;
    }
`

const NumFollower = styled.h1`
    width: 100px;
    color: white;
    letter-spacing: 1px;
    font-size: 28px;
    text-align: center;

    @media (max-width:1000px) {

    width: 80px;
    font-size: 24px;
    }

    @media (max-width:490px) {

    width: 60px;
    font-size: 20px;
    }
`

const NumFollowing = styled.h1`
    width: 100px;
    color: white;
    letter-spacing: 1px;
    font-size: 28px;
    text-align: center;

    @media (max-width:1000px) {

    width: 80px;
    font-size: 24px;
    }

    @media (max-width:490px) {

    width: 60px;
    font-size: 20px;
    }
`

const ContainerOne = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width:1000px) {

    width: 160px;
    height: 70px;
    }

`

const ContainerSec = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    @media (max-width:1000px) {

    width: 160px;
    height: 70px;
    }

`