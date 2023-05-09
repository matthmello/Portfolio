import { CssIcon, HtmlIcon, JavaScriptIcon, NodeJsIcon, ReactIcon, TypeScriptIcon } from "../../assets/svgs";

export default function SkillsIcons(){
    return(
        <>
            <div>
                <HtmlIcon/>
                <h3>HTML</h3>
            </div>
            <div>
                <CssIcon/>
                <h3>CSS</h3>
            </div>
            <div>
                <JavaScriptIcon/>
                <h3>JavaScript</h3>
            </div>
            <div>
                <TypeScriptIcon/>
                <h3>TypeScript</h3>
            </div>
            <div>
                <ReactIcon/>
                <h3>React</h3>
            </div>
            <div>
                <NodeJsIcon/>
                <h3>Node JS</h3>
            </div>
        </>
    )
}