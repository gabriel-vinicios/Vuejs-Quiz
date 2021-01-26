import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/widgets/index'
import Footer from '../src/components/Footer/index'
import GitHubCorner from '../src/components/GitHubCorner/index'
import QuizBackground from '../src/components/QuizBackground/index'

//const BackgroundImage = styled.div`
//background-image: url("${db.bg}");
//flex: 1;
//background-size: cover;
//background-position: center;
//`
export const QuizContainer = styled.div`

width: 100%;
max-width: 350px;
padding-top: 45px;
margin: auto 10%;
@media screen and (max-width: 500px){
  margin: auto;
  padding: 15px;
}
`



export default function Home() {
  return (
  <QuizBackground backgroundImage={db.bg}>
   <QuizContainer>
     <Widget>
       <Widget.Header>
           <h1>Vue.js</h1>
         </Widget.Header>
       <Widget.Content>
      <p>lorem ipsum dolor sit amet...</p>
       </Widget.Content>
      
     </Widget>
     <Widget>
       <Widget.Content>
      <h1>Quizes da Galera</h1>

      <p>lorem ipsum dolor sit amet...</p> 
      </Widget.Content>
     </Widget>
     <Footer />
   </QuizContainer>
   <GitHubCorner projectUrl="https://github.com/CrisisHD23" />
  </QuizBackground>
  )
}
