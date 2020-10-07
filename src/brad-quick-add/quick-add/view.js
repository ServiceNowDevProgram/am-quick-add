import '@servicenow/now-input';
import '@servicenow/now-button';

export default (state, {dispatch, updateState}) => {

    const {msg, artifactTitle} = state;

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
                <now-button 
                    label="Create artifact" 
                    variant="primary" 
                    size="md">
                </now-button>
            </p>
		</div>
    )

}