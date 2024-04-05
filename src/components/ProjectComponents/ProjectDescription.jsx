const ProjectTitleApp = [
    'LearnPGApp',
]

const ProjectDescriptionApp = [
    'loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum'
]

export const ProjecTitle = () => {
    return ProjectTitleApp.map((projecttitles, index) => (
        <div key={index}>
            {projecttitles}
        </div>
    ))
}


export const ProjectDescription = () => {
    return ProjectDescriptionApp.map((projectdescriptions, index) => (
        <div key={index}>
            {projectdescriptions}
        </div>
    ))
}


