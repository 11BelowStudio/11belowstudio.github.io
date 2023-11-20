import ProjectData from '@/data/ProjectData'

/** const for the 'All' string */
const ALL: string = "All";

export default class ProjectDataCollection {
    /** list of all the projects */
    projects: ProjectData[];
    /** set of all of the tags associated with the projects */
    tags: Set<string>;

    /**
     * constructor for the ProjectDataCollection (give it a list of projects)
     * @param _projects list of projects for this ProjectDataCollection
     */
    constructor(_projects: ProjectData[] = []){
        this.projects = _projects;
        this.tags = new Set<string>([ALL]);
        _projects.forEach(proj => {
            // adding project tags to tags set
            proj.tags.forEach(this.tags.add, this.tags);
        });
    }

    /**
     * Returns all projects that are tagged with a given tag. if no tag is given, return all projects.
     * @param tag the desired tag
     * @returns array of IDs of all projects that are tagged with the given tag.
     */
    getTaggedProjects(tag:string=""): ProjectData[] {
        if (tag === undefined || tag == "" || tag == ALL){
            return this.projects.slice(0);
        }
        if (!this.tags.has(tag)){
            return [];
        }
        return this.projects.filter(proj => proj.tags.has(tag));
    }

    /**
     * Given a list of project IDs, returns all of the projects matching that ID
     * @param ids List of the desired IDs. If empty/undefined, assume we want all the projects.
     * @returns data for every project with an ID within the ids list
     */
    getProjectsByIDs(ids:string[] = []): ProjectData[]{
        if (ids === undefined || ids.length == 0){
            return this.projects.slice(0);
        }
        return this.projects.filter(proj => ids.includes(proj.id));
    }

    /**
     * Returns IDs of all projects that are tagged with a given tag. if no tag is given, return IDs of all projects.
     * @param tag the desired tag
     * @returns array of IDs of all projects that are tagged with the given tag.
     */
    getTaggedProjectIDs(tag:string = ""): string[] {
        if (tag === undefined || tag == "" || tag == ALL){
            return this.projects.map(proj => proj.id);
        }
        if (!this.tags.has(tag)){
            return[];
        }
        return this.projects.filter(proj => proj.tags.has(tag)).map(proj2 => proj2.id);
    }
}