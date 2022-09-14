import React from 'react'
import { Container, Main, LeftSide, RightSide, Repos, CalendarHeding } from './styles'
import  ProfileData  from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard'
import RandomCalendar from '../../components/RandomCalendar'


const Profile = () => {
    // const n = Number;
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
                    <Repos>
                        <h2>Random repos</h2>
                        <div>
                            {[1,2,3,4,5,6].map(n =>(
                                <RepoCard
                                key={n}
                                username={'Patriciabadez'}
                                reponame={'blaalaalaal'}
                                description={'bbllvdclfdflddlddld'}
                                language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                                stars= {8}
                                forks={4}                                
                                />
                            ))}
                        </div>
                    </Repos>
                    <CalendarHeding>
                    440 contributions in the last year
                    </CalendarHeding>
                    <RandomCalendar/>

                </RightSide>
            </Main>
        </Container>
    )
}
export default Profile