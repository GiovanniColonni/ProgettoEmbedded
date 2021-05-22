import React from 'react';
import Image from 'react-bootstrap/Image';
import DoctorAvatar from '../icons/Doctor_01.png';
import { Row, Item, Column } from '@mui-treasury/components/flex';
import Button from '@material-ui/core/Button';
import { FaPen } from 'react-icons/fa';

var profilestyle = {
    container: {
        width: '80%',
        marginLeft: 'auto',
        marginRight: 'auto'
    }, center: {
        marginLeft: 'auto',
        marginRight: 'auto',
    }, avatar: {
        maxHeight: "150px",
        maxWidth: "150px"
    }, name: {
        fontFamily: "Lato",
        fontWeight: 600,
        fontSize: '1rem',
        color: '#122740',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
    }, caption: {
        fontFamily: "Lato",
        fontSize: '0.875rem',
        color: '#758392',
        marginTop: -4,
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textAlign: 'left',
    }, editbutton: {
        backgroundColor: "#8BC24A"
    }, commentblock: {
        marginLeft: "auto"
    }
}

export default function PersonalProfile(props) {
    return (
        <div style={profilestyle.container}>
            <Row gap={5} p={2.5}>
                <Column>
                    <Image src={DoctorAvatar} roundedCircle style={profilestyle.avatar} />
                </Column>
                <Column>
                    <Item>
                        <div style={profilestyle.name}>
                            Name Surname
                        </div>
                        <div style={profilestyle.caption}>
                            Some info
                            Some other info...
                        </div>
                    </Item>
                </Column>
                <Column style={profilestyle.commentblock}>
                    <Item>
                        <Button
                            variant="contained"
                            color="secondary"
                            style={profilestyle.editbutton}
                            startIcon={<FaPen />}
                        >
                            Edit Profile
                        </Button>
                    </Item>
                </Column>
            </Row>
        </div>
    )
}