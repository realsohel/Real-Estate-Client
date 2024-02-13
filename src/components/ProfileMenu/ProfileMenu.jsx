import React from 'react'
import { Avatar , Menu} from '@mantine/core';

const ProfileMenu = ({user,logout}) => {
    // console.log("hello")
    return (
        <Menu>
            <Menu.Target>
                <Avatar src={user?.picture} alt='user img'  radius="xl" size="md"/>
                    {/* <img src={user?.picture} alt='user img' style={{height:"2.5rem",borderRadius:'50%'}} />
                </Avatar> */}
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Item>
                    Favourites
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ProfileMenu
