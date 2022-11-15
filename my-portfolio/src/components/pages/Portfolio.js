import Project from '../Project.data';
import data from '../Project.data';
import { Grid } from '@mui/material';

const styles = {
    title: {
        textAlign: "center"
    }
};

export default function Portfolio() {
    return (
        <div>
            <h2 style={styles.title}>My Projects</h2>
            <Grid container spacing ={0} justifyContent="center">
                {data.map(({ id, title, description, image, repo}) => {
                    <Project
                    id={id}
                    title={title}
                    desription={description}
                    image={image}
                    repo={repo}
                />
                })}
            </Grid>
        </div>       
    );
}