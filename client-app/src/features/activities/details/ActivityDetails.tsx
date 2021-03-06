import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import { useStore } from '../../../app/api/stores/store';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import './culture.jpg';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

export default observer(function ActivityDetails(){

    const {activityStore} = useStore();
    const {selectedActivity: activity, loadActivity, loadingInitial} = activityStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if(id) loadActivity(id);
    }, [id, loadActivity]);

    if (loadingInitial || !activity) return <LoadingComponent/>;
    return (
        <Card fluid>
            <Image src={'/assets/categoryImages/culture.jpg'}/>
            <Card.Content>
                <Card.Header>{activity.title}</Card.Header>
                <Card.Meta>
                    <span>{activity.date}</span>
                </Card.Meta>
            <Card.Description>
                {activity.description}
            </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button  basic color='blue' content='Edit'/>
                    <Button  basic color='grey' content='Cancel'/>
                </Button.Group>
            </Card.Content>
        </Card>
    )
})