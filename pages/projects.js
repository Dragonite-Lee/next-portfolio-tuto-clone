import Layout from "../components/layout";
import {TOKEN} from '../config';
import Head from 'next/head';
import {DATABASE_ID} from '../config';
import ProjectItem from "../components/projects/project-item";

export default function Projects({projects}) {
    
  console.log(projects);
  var 결과 = projects.results


  return (
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 mb-10">
          <Head> {/*여기가 index.js가 홈이고 pages폴더안에 만들면 root기능을 함 /about-me하면 이동하게되는거임 */}
                <title>망망이 포트폴리오</title>
                <meta name="description" content="오늘도 빡코딩!!" />
                <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1 className="text-4xl font-bold sm:text-6xl">총 프로젝트 : <span className="pl-4 text-blue-500">{결과.length}</span>개</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 xs:w-full">
            {결과.map((aProject) => (
              <ProjectItem key={aProject.id} data={aProject}>

              </ProjectItem>
            ))}
          </div>
        </div>
          

      </Layout>
  );

}

//빋드타임에 호출되며, 미리 데이터를 가져온 뒤 렌더링
export async function getStaticProps() {

    const options = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Notion-Version': '2022-02-22',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
          sorts: [
            {
              "property": "이름",
              "direction": "ascending"
            }
          ],
          page_size: 100
        })
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options) 
        
      const projects = await res.json()
      const results = projects.results
      const projectNames =[]
      const names = results.map((a)=>{
        projectNames.push(a.properties.이름.title[0].plain_text);
      })
      console.log(`names : ${projectNames}`)
      
      
      

    return {
      props: {projects}, // will be passed to the page component as props
    }
  }