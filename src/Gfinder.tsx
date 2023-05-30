import styled, { createGlobalStyle } from "styled-components";
import { useState, useRef } from "react";

function GithubFinder() {

    const [username, setUserName] = useState<string>("")
    const [profileimg, setProfileImg] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [pLink, setPLink] = useState<string>("");
    const [rep, setRep] = useState<string>("");
    const [Follow, setFollower] = useState<string>("");
    const [Followings, setFollowing] = useState<string>("");
    const [turn, setTurn] = useState<boolean>(false);
    const InpRef = useRef<HTMLInputElement>(null)
    
    const ClickHandler = (e: any) => {
        setUserName(e.target.value)
    }
    
    const Submit = async (e: any) => {
        e.preventDefault();

        const InputRef = InpRef.current!;

        const Profile = await fetch(`https://api.github.com/users/${username}`)
        const ProfileJson = await Profile.json()
        
        const ProfPic = ProfileJson.avatar_url;
        const Name = ProfileJson.name;
        const ProfLink = ProfileJson.html_url;
        const Rep = ProfileJson.public_repos;
        const Foler = ProfileJson.followers;
        const Foling = ProfileJson.following;


        setProfileImg(ProfPic)
        setName(Name)
        setPLink(ProfLink)
        setRep(Rep)
        setFollower(Foler)
        setFollowing(Foling)

        if (Profile.ok) {

            setTurn(true)
        } else {
            setTurn(false);
            InputRef.value = '';
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

        <Inp  className="Input" ref={InpRef}  type="text" placeholder="Enter Profile" value={username} onChange={ClickHandler}/>

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
    padding: 20px 0px;
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
    color: #f7f2f2;
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
    text-align: center;
`

const Detail = styled.div`
    
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`

const Link = styled.h1`
    
    font-size: 18px;
    letter-spacing: 2px;
    color: white;
    user-select: none;
    transition: all 0.2s ease-in;
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
`

const FollList = styled.div`

    width: 80%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
`

const ChapOne = styled.div`
    
    width: 150px;
    height: 60px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ChapTwo = styled.div`
    
    width: 150px;
    height: 60px;
    border: 1px solid white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Follower = styled.h1`
    width: 150px;
    height: 40px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;
`

const Following = styled.h1`
    width: 150px;
    height: 40px;
    color: white;
    letter-spacing: 1px;
    text-align: center;
    font-size: 20px;
`

const NumFollower = styled.h1`
    width: 100px;
    color: white;
    letter-spacing: 1px;
    font-size: 28px;
    text-align: center;
`

const NumFollowing = styled.h1`
    width: 100px;
    color: white;
    letter-spacing: 1px;
    font-size: 28px;
    text-align: center;
`

const ContainerOne = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const ContainerSec = styled.div`
    width: 200px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`