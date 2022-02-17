import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';

import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';

const Home = () => {

    const [currentId, setCurrentId] = useState(null);
    // REDUX
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

    }, [dispatch]);
    
    const classes = useStyles();
    return (
        <Grow in>
            <Container>
                <Grid container className={classes.mainContainer} justify="spage-between" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={5}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home; 