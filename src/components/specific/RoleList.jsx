import React, { useState } from 'react'
import RoleItem from './RoleItem'

const RoleList = ({ roles,onDelte }) => {
    
    return (
        <div>
            <div className='my-5 font-semibold'>
                Roles
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6 bg-white '>
                {
                    roles?.map((item,index) => (
                       
                        <RoleItem
                            key={index}
                            id={index}
                            name={item.name}
                            permissions={item.permissions}
                            onDelte={onDelte}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default RoleList