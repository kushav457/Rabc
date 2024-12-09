import { UserRoundCog } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='flex gap-3 justify-between px-6 py-4 shadow my-2 items-center'>
      <h3>Dashboard</h3>
      <div>
        <UserRoundCog/>
      </div>
    </div>
  )
}

export default Header
