import '@servicenow/now-input';
import '@servicenow/now-button';

export default (state, {dispatch, updateState}) => {

    const {msg, artifactTitle, artifactType} = state;

    return (
        <div>
            <p>
                <now-input 
                    type="text" 
                    value={artifactTitle} 
                    label="Artifact title" 
                    helperContent="Title of your artifact">
                </now-input>
            </p>
            <p>
                <now-dropdown 
                    items={[{"id":"blog_post","label":"Blog post"},{"id":"video","label":"Video"},{"id":"podcast","label":"Podcast"},{"id":"live_stream","label":"Live Stream"}]} 
                    selectedItems={[artifactType]}
                    select="single" 
                    variant="secondary" 
                    size="md" >
                </now-dropdown>
            </p>
			<p>
                <now-button 
                    label="Create artifact" 
                    variant="primary" 
                    size="md">
                </now-button>
            </p>
		</div>
    )

}