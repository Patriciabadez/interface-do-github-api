import React from 'react'
import { Container, Main, LeftSide, RightSide } from './styles'
import  ProfileData  from '../../components/ProfileData';


const Profile = () => {
    return(
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData
                    username={'Patriciabadez'}
                    name={'Patricia Baldez'}
                    avatarURL={'https://avatars.githubusercontent.com/u/88301906?v=4'}
                    followers={887}
                    following={7}
                    company={'BaldezBaldez'}
                    location={'Rio Grande do Sul, Brasil'}
                    email={"patriciabaldez1985@gmail.com"}
                    blog={'linkeding'}
                    />
                </LeftSide>
                <RightSide>

                </RightSide>
            </Main>
        </Container>
    )
}
export default Profile