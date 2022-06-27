import Image from "next/image";

export default function ProjectItem({data}) {

    const title = data.properties.이름.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const github = data.properties.GitHub.url;
    const start = data.properties.WorkPeriod.date.start;
    const end = data.properties.WorkPeriod.date.end;
    const tags = data.properties.태그.multi_select;
    const imgSrc = data.cover.external.url;

    return (
        <div className="project-card">
            <Image src={imgSrc} className="rounded-t-xl"
                alt="cover image"
                width="100%"
                height="60%"
                layout="responsive"
                objectFit="cover"
                quality={100}
                ></Image>
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{description}</h3>
                <a href={github}>깃허브 바로가기</a>
                <h3 className="my-1">프로젝트 기간 : {start} ~ {end}</h3>
                <div className="flex items-start mt-2">
                    {tags.map((aTag)=>(
                        <h1 className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30" key={aTag.id}>{aTag.name}</h1>
                    ))}
                </div>
            </div>
            
        </div>
    );
}