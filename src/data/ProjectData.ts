export default class ProjectData {
    id: string;
    name: string;
    htmlDescription: string;
    iconUrl: string; // used as thumnail
    isWide: boolean; // thumbnail will take 2 cols in the grid view
    isHigh: boolean; // thumbnail will take 2 rows in the grid view
    accentColor: string; // color of title bar 

    /**
     * constructor for the project data
     * @param id unique ID for the project.
     * @param name Display name for the project
     * @param iconUrl URL for project thumbnail
     * @param html HTML for the content of the project data. 
     * @param accentColor colour of title bar
     * @param isHigh if true, thumbnail will take 2 cols
     * @param isWide if true, thumbnail will take 2 rows
     */
    constructor(id: string, name: string, iconUrl: string, html: string, accentColor = "#000000", isHigh = false, isWide = false){
        this.id = id;
        this.name = name;
        this.htmlDescription = html;
        this.iconUrl = iconUrl;
        this.isHigh = isHigh;
        this.isWide = isWide;
        this.accentColor = accentColor;
    }
}
