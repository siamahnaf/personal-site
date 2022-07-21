import { Container, Grid } from '@mui/material';

//Componets
import BlogTitle from 'Components/Blog/BlogTitle';
import BlogCard from 'Components/Blog/BlogCard';

const Blog = () => {
    return (
        <Container sx={{ py: '100px' }} component='client' id='blog' disableGutters maxWidth={false}>
            <Grid container spacing={2} sx={{ alignItems: 'end' }}>
                <Grid item md={4} xxs={12}>
                    <BlogTitle />
                </Grid>
                <Grid item md={8} xxs={12}>
                    <BlogCard />
                </Grid>
            </Grid>
        </Container>
    );
};
export default Blog;